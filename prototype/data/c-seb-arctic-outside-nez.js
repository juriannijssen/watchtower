/* Commitment data — generated from commitments/commitment-seb-arctic-outside-nez.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "seb-arctic-outside-nez",
    "bank": "SEB Group",
    "commitment_number": 10,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's Arctic Rule Outside Norwegian Waters",
    "short_title": "Arctic Rule Outside Norwegian Waters",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. Outside the Norwegian Economic Zone, a company earning more than 5% of revenue from Arctic oil and gas is one SEB avoids doing business with. Inside those waters, a different number applies.",
    "naive_reading": "it will not finance oil and gas anywhere in the Arctic outside Norwegian waters",
    "plain_language_note": "The strict half of a rule that is split by jurisdiction.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=10",
        "watchtower_document_id": 25537,
        "watchtower_institution": "seb_group",
        "synthesis_run": 181,
        "version_label": "April 2026",
        "published": "2026-04-23",
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "published_source": null,
        "published_confidence": null
      }
    ],
    "clauses": [
      {
        "index": 1,
        "role": "rule",
        "source_id": "seb2026",
        "title": "The rule",
        "intro": "The restriction itself, the first of two Arctic sentences. Watchtower records the geographic scope as not global — the split is in the record as well as in the wording.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Outside of the Norwegian Economic Zone, SEB Group avoids Business Relationships with Companies with more than 5% of revenue derived from extraction of Oil and Gas in the Arctic Area.",
        "plain_rendering": "Outside of the Norwegian Economic Zone, SEB Group avoids Business Relationships with Companies with more than 5% of revenue derived from extraction of Oil and Gas in the Arctic Area.",
        "phrases": [
          {
            "id": "outside",
            "label": "Outside of the Norwegian Economic Zone",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              0,
              38
            ],
            "plain_range": [
              0,
              38
            ],
            "means": "This explains where this version of the restriction applies: everywhere in the Arctic except Norway's own waters, which get the next commitment and a threshold three times higher.",
            "lets_through": [
              "This wording lets through nothing within its own area — this is the strict half. The point is what sits on the other side of the line.",
              "The comparison is with commitment 11: inside the Norwegian Economic Zone the threshold is 15% of global revenue, not 5%. SEB is a Nordic bank and the softer rule covers the waters its home market drills in."
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
      "arctic",
      "upstream",
      "revenue-threshold",
      "client-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 10,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=10",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        13444,
        13626
      ],
      "summary_text": "Outside the Norwegian Economic Zone, SEB Group restricts business relationships with companies deriving more than 5% of revenue from oil and gas extraction in the Arctic Area.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "arctic"
          ],
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": false
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "new_and_existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [
        {
          "metric": "revenue_share",
          "inequality": ">",
          "value": 5,
          "definition": null
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 20 fields corrected]\nCHANGES:\n- Corrected certainty ratings across all commitments from null to certainty objects with rating '5' to ensure schema compliance and reflect high confidence in extraction.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "DEVIATIONS GO TO AN INTERNAL PROCESS · APPENDIX B — Deviations from restrictions and requirements in this policy shall be handled according to established SEB Group internal processes. No committee is named, no threshold is set, and nothing is said about how often this happens.",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "APPENDIX B"
      },
      {
        "condition": "A 5% FLOOR ON THE WHOLE POLICY · SECTION 4.2 — The policy covers companies with more than 5% of company revenues from activities in the fossil fuel sector, calculated at SEB Group global limit holder level. Below that line the document does not engage at all.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "SECTION 4.2"
      },
      {
        "condition": "SOME ACTIVITIES SIT OUTSIDE THE POLICY · SECTION 4.1 — Seized assets held in the ordinary course of business, client order facilitation, market making, anything SEB is obliged to provide by law or regulation, and products where another financial institution is the provider are all exempt. SEB Asset Management Holding AB and Gamla Livförsäkrings AB SEB Trygg Liv are outside the policy entirely.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": "commitment 1 only",
        "where": "SECTION 4.1"
      },
      {
        "condition": "IT BINDS LARGE COMPANIES HARDEST · SECTION 4.2 — Restrictions, requirements and expectations all apply to large companies. SMEs get restrictions and requirements only. Retail counterparties are outside the policy — it acts as a guide.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": "commitment 1 only",
        "where": "SECTION 4.2"
      }
    ],
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded on any of the twenty commitments in this run.",
        "bank_green": "Watchtower states no weakness anywhere in this synthesis. Every phrase highlighted on this page is Bank.Green's reading and is labelled as such.",
        "action": "Populate the weaknesses field. Our highlighted phrases are the proposal — the strongest candidate on this document is the three-party transition-plan condition on commitment 16."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "No exception is recorded on more than one commitment. Twelve of the twenty carry none at all, and the record contains no policy-wide carve-out.",
        "bank_green": "The policy does have provisions that sit above every commitment. Appendix B routes deviations from any restriction to unnamed SEB Group internal processes. Section 4.2 applies the whole document only above 5% of company revenue from the fossil fuel sector, and excludes Retail entirely. Section 4.1 exempts seized assets, client order facilitation, market making, legally required activity, and two named asset-management entities. Watchtower attaches the section 4 items to commitment 1 only, and the Appendix B deviation clause to nothing.",
        "action": "Attach the Appendix B deviation clause and the section 4 scope provisions to every commitment, as standing exceptions."
      },
      {
        "field": "commitments",
        "severity": "omission",
        "watchtower": "Run 181 extracted twenty commitments, every one of them coal or oil and gas.",
        "bank_green": "Run 181 extracted 20 commitments, all of them coal or oil and gas. Section 9 of the policy sets out four further restrictions on thermal peat, including a 2030 phase-out. None appears in the record. The reviewer notes for this run read '0 added, 0 removed, 0 split, 20 fields corrected', so the omission was not caught in review either.",
        "action": "Re-run document 25537. Section 9 contains four restrictions on thermal peat, including a 2030 commitment."
      }
    ],
    "assessment": {
      "strength": "holds",
      "strength_derivation": {
        "rule": "spec v3.2 §4.1",
        "inputs_source": "Watchtower record",
        "result": "holds",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 0
      },
      "verdict_options": [
        {
          "angle": "how_it_compares",
          "recommended": true,
          "recommended_because": "The sentence itself is clean; its meaning comes entirely from the one beside it, and the page should point there.",
          "text": "This is the strict half of a rule that changes at a maritime boundary.\n\nOutside the Norwegian Economic Zone: 5% of revenue from Arctic oil and gas extraction. Inside it: 15% of global revenue, under the next commitment. Same ocean, same activity, three times the threshold and a different denominator.\n\nSEB is a Nordic bank and the softer number covers the waters its home market drills in. That may be defensible — Norwegian regulation is strict, the infrastructure exists, and a Nordic bank withdrawing from the Norwegian Continental Shelf changes little about whether the oil is produced. None of that is in the document.\n\nThis page rates `holds` because the record carries nothing against it. The argument is next door."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Taken on its own terms this is one of the strongest commitments in the document.\n\nFive per cent, business relationships rather than transactions, new and existing alike, capital markets included, and no exception of any kind recorded. Under the derived rating that is a score of zero and a reading of `holds` — one of only three in the SEB set.\n\nThe Arctic is also one of the few places where a financing restriction plausibly affects whether production happens, because the economics are marginal and the capital is scarce."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "What the sentence does not reach is the geography that matters most to this bank.\n\nThe Norwegian Continental Shelf is the largest Arctic oil and gas province with active development, and it is precisely the area this commitment excludes from its own threshold. A Norwegian producer is measured against 15% of global revenue instead of 5% of Arctic revenue.\n\nSo the strict rule governs Arctic activity in Russia, Alaska, Canada and Greenland, where a Swedish bank was unlikely to be lending anyway."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Use one Arctic threshold",
          "content": "Five per cent outside Norwegian waters, fifteen inside them. The Arctic does not change at the boundary."
        },
        {
          "title": "Publish the reasoning for the split",
          "content": "There may be a defensible argument about Norwegian regulation and infrastructure. It is not in the document."
        }
      ],
      "what_needs_to_change_closing": "Until then, this is the strict half of a rule that is softer where the bank does most of its business.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "SEB avoids business relationships with companies above 5% Arctic oil and gas revenue outside Norwegian waters. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Watchtower synthesis run 181, document 25537",
    "reading": "drafted"
  }
};
