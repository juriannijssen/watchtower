/* Commitment data — generated from commitments/commitment-macquarie-thermal-advisory.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "macquarie-thermal-advisory",
    "bank": "Macquarie Group",
    "commitment_number": 4,
    "category": "coal",
    "effective_date": "immediate",
    "title": "Macquarie's Refusal to Advise on Thermal Coal Transactions",
    "short_title": "Refusal to Advise on Thermal Coal Transactions",
    "article_published": "2026-09-09",
    "intro": "The second half of the same sentence, and the half that matters most for a bank built on advisory and asset management rather than on lending. Macquarie says it has no appetite to advise on transactions whose purpose relates to thermal coal.",
    "naive_reading": "it will not advise on thermal coal deals",
    "plain_language_note": "The strongest-sounding line on the page, resting on the word “appetite” and an undefined term.",
    "sources_intro": "One sustainability report states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "mq2026",
        "document_title": "Macquarie Group Sustainability Report",
        "document_url": null,
        "synthesis_url": "https://watchtower.bank.green/institution/macquaire_bank/document/34887/synthesis?run=204&commitment=4",
        "watchtower_document_id": 34887,
        "watchtower_institution": "macquaire_bank",
        "synthesis_run": 204,
        "version_label": "Sustainability Report 2026 (Group) — see date note",
        "published": "2026-03-31",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file"
      }
    ],
    "clauses": [
      {
        "index": 1,
        "role": "rule",
        "source_id": "mq2026",
        "title": "The rule",
        "intro": "The advisory half of the sentence Watchtower split into two commitments. Its record carries no commitment-specific carve-out at all — the only exception on it is the transition-plan ability that sits over all four.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Macquarie continues to have no appetite for financing >12 months using its balance sheet or to advise on transactions where the underlying purpose relates to the purchase, operation, development or expansion of thermal coal activities",
        "plain_rendering": "Macquarie continues to have no appetite for financing >12 months using its balance sheet, or to advise on transactions where the underlying purpose relates to the purchase, operation, development or expansion of thermal coal activities.",
        "phrases": [
          {
            "id": "appetite",
            "label": "no appetite",
            "type": "escape_hatch",
            "verbatim_range": [
              28,
              39
            ],
            "plain_range": [
              28,
              39
            ],
            "means": "The words “no appetite” are the form this commitment takes. Not a prohibition, a restriction or an undertaking — a statement of what the bank currently wants to do.",
            "lets_through": [
              "This wording lets through a change of mind, disclosed afterwards. The same report records two categories brought into appetite during 2024 by exactly that route.",
              "It also lets through everything appetite does not cover. A restriction states what will not be done; an appetite describes a commercial preference, and the report attaches no governance, no approval process and no exception procedure to it."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "thermalactivities",
            "label": "thermal coal activities",
            "type": "undefined_term",
            "verbatim_range": [
              211,
              234
            ],
            "plain_range": [
              212,
              235
            ],
            "means": "This explains who and what is caught. Since the 2024 split, the whole of Macquarie's coal position turns on the line between thermal and metallurgical, and the report never draws it.",
            "lets_through": [
              "This wording lets through mines that produce both. Coal seams do not sort themselves, and a mine selling coking coal to steelmakers and the rest into power generation is a routine arrangement. Which side of the line it falls on is unstated.",
              "It also lets through whatever the counterparty says the coal is for. If the test is end use rather than product, it depends on a statement the bank does not say it checks."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "advisory",
      "capital-markets",
      "carve-out",
      "scope",
      "commitment"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 204,
      "document_id": 34887,
      "institution": "macquaire_bank",
      "commitment_index": 4,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/macquaire_bank/document/34887/synthesis?run=204&commitment=4",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-07-07",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": "Watchtower's stored quotation carries the footnote marker as `$^{29}$` after “balance sheet” — a parsing artefact. The marker is footnote 29, the definition quoted on commitment 1's page. It is removed from the text shown here.",
      "quotation_char_range": [
        43803,
        44044
      ],
      "summary_text": "Macquarie has no appetite to advise on transactions where the underlying purpose relates to the purchase, operation, development, or expansion of thermal coal activities.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": null,
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": null,
          "certainty": "5"
        },
        "product": {
          "financing_type": "project",
          "capital_markets": null,
          "transaction_status": null
        }
      },
      "triggers": [],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Ability to work with coal companies to finance projects that will significantly reduce emissions or support diversification with a credible transition plan",
          "carve_out_kind": null,
          "carve_out_kind_source": null,
          "governance_process": null,
          "standing": true,
          "where": "recorded on every commitment in this run"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 1 removed, 0 split, 1 fields corrected]\nCHANGES:\n- Removed upstream oil and gas emissions intensity target: Quantitative portfolio reduction targets without a defined endpoint are out of scope per schema rules.\n- Macquarie committed to not engaging in new balance sheet activity to fund the purchase, development, or expansion of coal mines or coal-fired power stations, though metallurgical coal was carved back into appetite in late 2024.: Changed activity_scope to 'new_and_existing' — 'purchase' and 'expansion' apply to existing assets.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Ability to work with coal companies to finance projects that will significantly reduce emissions or support diversification with a credible transition plan",
        "carve_out_kind": null,
        "carve_out_kind_source": null,
        "governance_process": null,
        "standing": true,
        "where": "recorded on every commitment in this run"
      }
    ],
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded on any of the four commitments in this run.",
        "bank_green": "Watchtower states no weakness anywhere in this synthesis. Every phrase highlighted on this page is Bank.Green's reading and is labelled as such. The strongest candidate on this document is footnote 29 — a definition that removes four categories of coal exposure from the measure a headline commitment is reported against.",
        "action": "Populate the weaknesses field for this document. Footnote 29 is the proposal."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "Every exception on this document carries carve_out_kind: null and governance_process: null. Nine exceptions across four commitments, none of them classified.",
        "bank_green": "Three of them are definitional subtractions from a measure (footnote 29), two are dated management decisions reopening a previously closed category, one is a tenor allowance, and one is a conditional permission resting on a credible transition plan. These are four different kinds of thing and the record treats them identically.",
        "action": "Classify carve_out_kind on this document. The transition-plan ability is the one that most clearly needs it — it is conditional on an assessment the bank makes, with no stated governance process."
      },
      {
        "field": "quotation",
        "severity": "duplication",
        "watchtower": "Commitments 3 and 4 carry identical quotations and identical character ranges (43803–44044). One sentence in the report was recorded as two commitments.",
        "bank_green": "We think the split is right — a maturity limit on the bank's own lending and a refusal to sell an advisory service are different commitments with different scopes. But the record gives no way to tell that the two rows come from one sentence, and a reader of either row alone would not know the other half exists.",
        "action": "Where one passage yields two commitments, carry a cross-reference so each row names the other. Neither of these pages should be published alone."
      }
    ],
    "assessment": {
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.2 §4.1 — derived from Watchtower fields only",
        "inputs_source": "Watchtower record",
        "result": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "Everything now rests on a word the report never defines, held in place by a word that means preference.",
          "text": "Two words carry this commitment and neither is load-bearing.\n\nThe first is “appetite”. Macquarie does not say it will not advise on thermal coal transactions; it says it has no appetite to. An appetite is an internal commercial setting. The same report shows what happens to one: in April 2024 and again in November 2024, categories were brought into appetite by internal decision and disclosed afterwards. There is no stated approval route, no exception procedure and no commitment to announce a change before it takes effect, because none of those things attach to a preference.\n\nThe second is “thermal coal activities”. Since the 2024 split, the entire Macquarie coal position turns on the line between thermal and metallurgical coal, and the report never draws it. Coal seams do not sort themselves: mines that sell coking coal to steelmakers and the remainder into power generation are ordinary. Whether such a mine is a thermal coal activity, and whether the test is the product, the mine or the buyer's stated use, is unanswered.\n\nWatchtower records no commitment-specific carve-out on this commitment at all — its single rating point comes from scope alone. That is the record correctly reporting that there is nothing to carve out of, because the sentence is doing very little to begin with."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "For a bank of this shape, the advisory half is the half that counts.\n\nMacquarie is not primarily a balance sheet lender. Its coal footprint, to the extent it has one, runs through advisory mandates, arranging, asset management and commodities. A commitment that reaches advisory work is therefore aimed at the business the bank actually does, and it would have been easy to write a lending-only restriction instead and let the rest go unmentioned.\n\nIt also survived the 2024 split intact. Both reopenings that year were about metallurgical coal; the thermal advisory position was restated rather than narrowed, and the report says so in the present tense — the bank continues to have no appetite for it.\n\nThe criticism is about the strength of the form and the absence of a definition, not about the bank having pointed the commitment at the wrong part of itself."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Taken at face value, this catches Macquarie advising on any transaction whose underlying purpose relates to buying, operating, developing or expanding a thermal coal activity — an acquisition of a thermal coal mine, a sale of one, a capital raise to expand one.\n\nNote what that includes, and what an advisory ban does that a lending ban does not: it also catches Macquarie advising on the sale of a thermal coal asset. A coal mine sold to an owner committed to early closure and a coal mine sold to an owner planning to expand are the same transaction under this wording, and the bank is out of both. We have raised the same point against Société Générale's ban on coal asset deals, and it belongs here too rather than being left out because it cuts the other way.\n\nWhat it does not catch is everything on the metallurgical side of an undrawn line, and everything that stops being a thermal coal activity because nobody has said what one is."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so nothing sourced sits underneath these options — they are entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Draw the thermal/metallurgical line",
          "content": "Since 2024 this is the only distinction Macquarie's coal position rests on. The report does not say whether it is drawn at the coal, the mine or the buyer, or what happens at a mine that produces both."
        },
        {
          "title": "Replace appetite with a restriction",
          "content": "Appetite was changed twice in 2024 and disclosed after the fact. A stated restriction with a named approval route for exceptions would be a different kind of commitment."
        },
        {
          "title": "Say what advisory covers",
          "content": "Advisory, arranging, underwriting and placing are different services with different records. The report uses one word for all of them."
        }
      ],
      "what_needs_to_change_closing": "Until then, the cleanest-sounding sentence on the page is the one with the least behind it.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Macquarie has no appetite to advise on transactions relating to thermal coal activities. We have not yet reviewed what it advised on against this commitment.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-10",
    "spec": "Commitment Analysis Spec v3.11",
    "source": "Watchtower synthesis run 204, document 34887",
    "reading": "drafted"
  }
};
