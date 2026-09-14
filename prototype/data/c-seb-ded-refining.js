/* Commitment data — generated from commitments/commitment-seb-ded-refining.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "seb-ded-refining",
    "bank": "SEB Group",
    "commitment_number": 18,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's Ban on Financing New Refineries",
    "short_title": "Ban on Financing New Refineries",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. No dedicated financing for new transport-fuel refining projects, unless the project is primarily aimed at biofuel.",
    "naive_reading": "it will not finance new oil refineries",
    "plain_language_note": "One adverb decides which refineries get built with this bank's money.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=18",
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
        "intro": "The restriction itself, the second refining sentence. Watchtower records the biofuel condition as an exception on this commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB Group avoids providing Dedicated Finance to New Projects dedicated to Refining of transportation fuel, unless it is primarily aimed for biofuel production.",
        "plain_rendering": "SEB Group avoids providing Dedicated Finance to New Projects dedicated to Refining of transportation fuel, unless it is primarily aimed for biofuel production.",
        "phrases": [
          {
            "id": "primarily18",
            "label": "primarily aimed for biofuel production",
            "type": "undefined_term",
            "verbatim_range": [
              120,
              158
            ],
            "plain_range": [
              120,
              158
            ],
            "means": "The word “primarily” switches this commitment off once most of the project's purpose is biofuel — and the policy never says how much counts as most, measured how.",
            "lets_through": [
              "This wording lets through co-processing retrofits. Many conventional refineries now run biogenic feedstock alongside crude, and whether such a project is primarily aimed at biofuel is exactly the question this wording leaves open.",
              "It also lets through any project whose sponsor can present the calculation on a basis that clears the line, because no basis is specified — volume, capacity, capital cost or revenue would all give different answers.",
              "The same word appears in Société Générale's mining policy, on infrastructure “primarily linked to” metallurgical coal. Two banks, two documents, one undefined adverb doing the deciding."
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
      "biofuel",
      "dedicated-transaction"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 18,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=18",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        15620,
        15779
      ],
      "summary_text": "SEB Group restricts dedicated project finance for new projects dedicated to refining transportation fuel, unless primarily aimed for biofuel production.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "downstream",
          "activity_scope": "new"
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
          "condition": "Allowed if primarily aimed for biofuel production",
          "carve_out_kind": null,
          "carve_out_kind_source": null,
          "governance_process": null,
          "standing": false,
          "where": "recorded on this commitment only"
        }
      ],
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
        "commitment_specific_carve_outs": 1,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The word is undefined, the case it governs is the common one, and the same failure appears at another bank — which makes it a pattern rather than a quibble.",
          "text": "One undefined adverb decides which refineries this bank will help build.\n\nNew transport-fuel refining projects get no dedicated finance “unless it is primarily aimed for biofuel production”. How much of a project has to be aimed at biofuel? Measured how — feedstock volume, nameplate capacity, capital cost, expected revenue? Over what period? None of it is stated, and those measures give different answers for the same project.\n\nThe case this will actually be applied to is co-processing: a conventional refinery adding biogenic feedstock alongside crude. Whether such a retrofit is primarily aimed at biofuel is exactly the question the wording leaves open.\n\nSociété Générale's mining policy turns on infrastructure “primarily linked to” metallurgical coal. Two banks, two documents, the same adverb doing the deciding."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "What is left after the exception is a new refinery built to make petrol and diesel and nothing else.\n\nThose are still being built, mostly outside Europe, and refusing to finance them is not nothing. But new refining capacity in the markets SEB lends into is overwhelmingly conversion and co-processing rather than greenfield crude capacity.\n\nSo the restriction catches the project type least likely to arrive on the bank's desk, and the exception governs the type most likely to."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "The exception points in the right direction, which is more than a discretionary clause does.\n\nA carve-out for biofuel production is a carve-out for the thing the policy wants more of. It is not an escape hatch for the sponsor's convenience — it is conditional on the purpose of the project.\n\nWhat is missing is any sustainability condition on the biofuel itself. Feedstock, land use and lifecycle emissions all decide whether a biofuel refinery is an improvement, and the sentence asks about none of them."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Put a number on primarily",
          "content": "Share of feedstock, capacity or output — any of them would make the test checkable."
        },
        {
          "title": "Address co-processing explicitly",
          "content": "A crude refinery adding biogenic feedstock is the case this sentence will actually be applied to."
        }
      ],
      "what_needs_to_change_closing": "Until then, the sentence turns on a word that has no measurement behind it.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "SEB avoids dedicated finance for new transport-fuel refining projects unless primarily aimed at biofuel. We have not yet reviewed what it financed against this commitment.",
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
