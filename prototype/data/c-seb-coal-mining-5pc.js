/* Commitment data — generated from commitments/commitment-seb-coal-mining-5pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "seb-coal-mining-5pc",
    "bank": "SEB Group",
    "commitment_number": 1,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's 5% Threshold on Coal Mining",
    "short_title": "5% Threshold on Coal Mining",
    "subject": "Coal Mining",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. A company earning more than a twentieth of its revenue from digging coal is one SEB avoids doing business with at all — not just new business, and not just project finance.",
    "naive_reading": "it does not do business with coal mining companies",
    "plain_language_note": "The lowest client threshold in anything we have reviewed, and it reaches the whole relationship.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=1",
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
        "intro": "The restriction itself, the first line of the coal section. Watchtower records it as reaching new and existing relationships, corporate finance and capital markets alike.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB Group avoids Business Relationships with Companies where more than 5% of revenue is derived from coal mining.",
        "plain_rendering": "SEB Group avoids Business Relationships with Companies where more than 5% of revenue is derived from coal mining.",
        "phrases": [
          {
            "id": "avoids",
            "label": "avoids",
            "type": "escape_hatch",
            "verbatim_range": [
              10,
              16
            ],
            "plain_range": [
              10,
              16
            ],
            "means": "The word “avoids” is the verb the whole policy is built on. Not “will not provide”, not “excludes” — avoids.",
            "lets_through": [
              "This wording lets through whatever avoiding turns out to mean in practice. The policy never defines it, and on its face it is weaker than a prohibition.",
              "The appendix confirms the softness: deviations from restrictions “shall be handled according to established SEB Group internal processes”, and no process, committee or threshold is named."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "5pc",
            "label": "more than 5% of revenue",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              61,
              84
            ],
            "plain_range": [
              61,
              84
            ],
            "means": "This explains the threshold. More than a twentieth of the company's revenue must come from coal mining before this commitment applies.",
            "lets_through": [
              "This wording lets through diversified miners below the line. Five per cent is low by any standard we have measured against — Société Générale's comparable client tests sit at 25%, 30% and 50% — but a large diversified group can still mine a great deal of coal and stay under it.",
              "It also lets through everything under the policy-wide floor. Section 4.2 applies the document only to companies above 5% of revenue from the fossil fuel sector as a whole, so the same number governs whether the policy applies at all."
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
      "thermal-coal",
      "metallurgical-coal",
      "revenue-threshold",
      "client-level",
      "capital-markets"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 1,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=1",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        10970,
        11083
      ],
      "summary_text": "SEB Group restricts corporate business relationships with companies deriving more than 5% of revenue from coal mining, excluding supply chain finance for metallurgical coal to steel manufacturing.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
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
      "exceptions": [
        {
          "condition": "Excludes supply chain finance for metallurgical coal to steel manufacturing",
          "carve_out_kind": null,
          "carve_out_kind_source": null,
          "governance_process": null,
          "standing": false,
          "where": "recorded on this commitment only"
        },
        {
          "condition": "Does not apply to Retail counterparties with credit exposure below EUR 1 million",
          "carve_out_kind": null,
          "carve_out_kind_source": null,
          "governance_process": null,
          "standing": false,
          "where": "recorded on this commitment only"
        },
        {
          "condition": "Excludes SEB Asset Management Holding AB and its subsidiaries and Gamla Livförsäkrings AB SEB Trygg Liv",
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
        "commitment_specific_carve_outs": 3,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The gap between how strong the threshold is and how soft the framing is, is the whole of this document in one sentence.",
          "text": "SEB wrote the lowest client threshold we have measured and attached it to the softest verb in the set.\n\nFive per cent of revenue from coal mining. Société Générale's comparable client tests sit at 25%, 30% and 50%; SEB's is a fifth of the lowest of them, and it reaches existing relationships rather than only new ones. On the number and the reach, this is the strongest client rule in the project.\n\nThen the sentence says the bank “avoids” such relationships. Not will not provide, not excludes, not will terminate. Every restriction in this policy uses that verb, and the policy never defines it. Appendix B completes the picture: deviations “shall be handled according to established SEB Group internal processes”, with no committee named, no threshold, no reporting.\n\nA number that strong deserves a verb that binds."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Read this against anything else in the project and it is a different order of seriousness.\n\nFive per cent is low enough to catch diversified miners, not just pure-play coal companies. It applies to business relationships rather than to transactions, so it reaches the client rather than the deal. It covers existing relationships, which almost nothing in the Société Générale set does. And capital markets are in scope, so arranging a bond counts.\n\nThe exceptions are narrow and specific: supply chain finance for metallurgical coal into steel, retail exposures under EUR 1 million, and two named asset-management entities. None of them is a discretionary escape hatch.\n\nThis is what a client restriction looks like when a bank means it."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "One number, four banks, and the spread is enormous.\n\nSEB excludes coal mining clients above 5% of revenue. Société Générale's mining policy sets metallurgical coal at more than 50%, and its thermal coal policy runs 25% for prospects and 50% for existing clients. Same activity, same year, an order of magnitude apart.\n\nThe reach differs too. SEB's rule covers existing relationships in the sentence itself; Société Générale's client rules stop at new business and leave existing exposure to a date in 2030 or 2040.\n\nWhere Société Générale is stronger is enforceability of language — “will not provide” is a harder promise than “avoids”. That is the trade, and it is worth putting both halves in front of a reader."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Say what avoiding means",
          "content": "Every restriction in this policy uses the word “avoids”. A policy that says what it will not do is checkable; one that says what it avoids is not."
        },
        {
          "title": "Close the supply chain finance carve-out",
          "content": "Metallurgical coal moving to steel manufacturers is exempt, with no cap and no end date."
        },
        {
          "title": "Name the internal process",
          "content": "Appendix B sends deviations to “established SEB Group internal processes”. Naming the body and publishing how often it says yes would cost nothing."
        }
      ],
      "what_needs_to_change_closing": "Until then, the strongest client threshold we have measured is attached to the softest verb.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "SEB avoids business relationships with companies earning more than 5% of revenue from coal mining. We have not yet reviewed what it financed against this commitment.",
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
