/* Commitment data — generated from commitments/commitment-seb-refiners.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "seb-refiners",
    "bank": "SEB Group",
    "commitment_number": 17,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's Exclusion of Oil Refiners",
    "short_title": "Exclusion of Oil Refiners",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. Refiners and makers of refined petroleum products for transport and combustion are companies SEB will not take on as new clients — with no revenue threshold at all.",
    "naive_reading": "it does not take on oil refiners as clients",
    "plain_language_note": "The only client rule in the document with no percentage in it.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=17",
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
        "intro": "The restriction itself. It is the only client-level restriction in the document Watchtower records with no threshold, and the qualifier at the end is doing the work a percentage does elsewhere.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB Group avoids new Business Relationships with Companies in the business of Refining of oil, and/or manufacturing of refined petroleum products, used for transportation and combustion.",
        "plain_rendering": "SEB Group avoids new Business Relationships with Companies in the business of Refining of oil, and/or manufacturing of refined petroleum products, used for transportation and combustion.",
        "phrases": [
          {
            "id": "new-br17",
            "label": "new Business Relationships",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              17,
              43
            ],
            "plain_range": [
              17,
              43
            ],
            "means": "This explains who this commitment applies to: companies that are not clients yet. Watchtower records the relationship status as new.",
            "lets_through": [
              "This wording lets through every refiner already banked. Nothing here asks an existing client to change.",
              "It also lets through the rest of the refining chain through existing relationships, since no other commitment in the document covers refiners at all."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "used-for",
            "label": "used for transportation and combustion",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              147,
              185
            ],
            "plain_range": [
              147,
              185
            ],
            "means": "This explains what the products have to be for. Not all refined petroleum products — only those burned in engines and boilers.",
            "lets_through": [
              "This wording lets through petrochemical feedstock, lubricants, bitumen, waxes and solvents. A refinery producing naphtha for plastics is arguably outside this commitment.",
              "It also lets through integrated refiners with a large chemicals arm, which is most of them. The qualifier invites a conversation about product mix that a revenue threshold would have settled."
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
      "downstream",
      "refining",
      "client-level",
      "petrochemicals"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 17,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=17",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        15432,
        15618
      ],
      "summary_text": "SEB Group restricts new business relationships with companies engaged in oil refining or manufacturing refined petroleum products used for transportation and combustion.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "downstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "new",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [],
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
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.2 §4.1",
        "inputs_source": "Watchtower record",
        "result": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": true,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "Removing the threshold looks stronger and is not, because the qualifier that replaces it is less checkable.",
          "text": "The only client restriction in the policy with no percentage in it, and an end-use qualifier doing the narrowing instead.\n\nThe sentence covers refining and manufacture of refined petroleum products “used for transportation and combustion”. Not all refined products — those burned in engines and boilers. Naphtha for plastics, lubricants, bitumen, waxes and solvents are arguably outside it, and most large refineries produce a mix.\n\nA revenue threshold would have settled how much fuel output makes a company a refiner. An end-use test invites a conversation about product slate instead, and that conversation happens inside the bank.\n\nIt also binds new relationships only, in a document that binds existing ones for coal-fired power."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "No threshold at all is, on its face, the strictest formulation in the document.\n\nEvery other client rule lets a company be partly in the restricted business — 5% of revenue, or 15%. This one names an activity and stops. A company in the business of refining oil for transport fuel is excluded as a new client whatever share of its revenue that represents.\n\nFor a pure-play refiner that is a harder rule than 5% would be. The criticism is about mixed-output companies, which is most of them, not about the drafting instinct."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Refining is barely addressed anywhere else in this project.\n\nSociété Générale's three sector policies contain no client-level restriction on refiners at all — its downstream provisions concern coal-fired and gas-fired power. Macquarie's report does not reach refining. This is the only client rule on refiners we have.\n\nSo the comparison has to be internal. Set against SEB's own coal-fired power rule, this one binds new relationships where that one binds existing ones, and uses an end-use qualifier where that one uses a number."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Say what happens to existing refiner clients",
          "content": "New relationships only, in a document that binds existing clients for coal power and commits to exiting unconventional by 2030."
        },
        {
          "title": "Handle the petrochemical question",
          "content": "Most refineries make both fuel and feedstock. The sentence turns on end use and does not say how a mixed output is assessed."
        }
      ],
      "what_needs_to_change_closing": "Until then, the rule catches refiners the bank has not met, for the products it can identify.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "SEB avoids new business relationships with oil refiners and manufacturers of refined petroleum products. We have not yet reviewed what it financed against this commitment.",
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
