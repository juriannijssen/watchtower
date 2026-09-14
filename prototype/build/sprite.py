# -*- coding: utf-8 -*-
"""Turn assets/*.svg into one inline <symbol> sprite so icons paint with the
first paint of the document instead of arriving later as separate requests."""
import os, re, glob

ASSETS = "/Users/jurian/Desktop/AI design/Watchtower/prototype/assets"

def build_sprite():
    parts = []
    for path in sorted(glob.glob(os.path.join(ASSETS, "*.svg"))):
        name = os.path.splitext(os.path.basename(path))[0]
        src = open(path, encoding="utf-8").read()
        m = re.search(r'<svg\b([^>]*)>(.*)</svg>', src, re.S)
        attrs, inner = m.group(1), m.group(2)
        vb = re.search(r'viewBox="([^"]+)"', attrs)
        vb = vb.group(1) if vb else "0 0 20 20"
        # Ids are dropped so the sprite has no duplicate identifiers across
        # symbols — but an id that something in the same file points at with
        # url(#id) or href="#id" has to survive, or the reference dangles. Those
        # are kept and namespaced with the icon name instead, which is unique.
        # (diff-backspace lost its clipPath this way and had been shipping with
        # a clip-path pointing at nothing.)
        referenced = set(re.findall(r'url\(#([^)]+)\)', inner))
        referenced |= set(re.findall(r'href="#([^"]+)"', inner))

        def keep_or_drop(m):
            ident = m.group(1)
            if ident in referenced:
                return ' id="%s-%s"' % (name, ident)
            return ''

        inner = re.sub(r'\s+id="([^"]*)"', keep_or_drop, inner)
        for ident in referenced:
            inner = inner.replace('url(#%s)' % ident, 'url(#%s-%s)' % (name, ident))
            inner = inner.replace('href="#%s"' % ident, 'href="#%s-%s"' % (name, ident))
        inner = inner.strip()
        inner = re.sub(r'\s*\n\s*', '', inner)
        parts.append('<symbol id="i-%s" viewBox="%s">%s</symbol>' % (name, vb, inner))
    return ('<svg class="sprite" aria-hidden="true" focusable="false" '
            'xmlns="http://www.w3.org/2000/svg">' + "".join(parts) + '</svg>')

if __name__ == "__main__":
    s = build_sprite()
    print(len(s), "bytes,", s.count("<symbol"), "symbols")
