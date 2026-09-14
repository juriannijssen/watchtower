/* Commitment data — generated from commitments/commitment-seb-ded-gas-power.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "seb-ded-gas-power",
    "bank": "SEB Group",
    "commitment_number": 20,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's Conditions on New Gas-Fired Power",
    "short_title": "Conditions on New Gas-Fired Power",
    "article_published": "2026-09-09",
    "intro": "SEB sets out these conditions in its Sector Policy on Fossil Fuels, published in April 2026. New gas-fired power is financeable if the project has a plan to move to low-carbon gases and meets EU best-available-technique emission levels — with separate rules for combined heat and power and for peaking plant.",
    "naive_reading": "it will not finance new gas-fired power stations",
    "plain_language_note": "The most conditional sentence in the document, and the only one with a number in grams.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=20",
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
        "intro": "The requirement itself, the whole of the gas-fired power section. It is drafted as a set of conditions rather than a restriction, and Watchtower records two further carve-outs beneath it.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "For Dedicated Finance of New gas fired power generation Projects, SEB Group Requires projects to: have a plan to transition to low carbon or renewable gases, and be aligned with the emission levels set out in the latest best available techniques (BAT) conclusion.",
        "plain_rendering": "For Dedicated Finance of New gas fired power generation Projects, SEB Group Requires projects to: have a plan to transition to low carbon or renewable gases, and be aligned with the emission levels set out in the latest best available techniques (BAT) conclusion.",
        "phrases": [
          {
            "id": "plan20",
            "label": "have a plan to transition to low carbon or renewable gases",
            "type": "escape_hatch",
            "verbatim_range": [
              98,
              156
            ],
            "plain_range": [
              98,
              156
            ],
            "means": "This explains the first condition: a plan to switch the plant to hydrogen, biomethane or another low-carbon gas at some future point.",
            "lets_through": [
              "This wording lets through plants that never switch. The condition is satisfied by having a plan, and nothing in the policy requires the plan to have a date, a cost, a committed supply of low-carbon gas, or any consequence for not delivering.",
              "It also ignores the economics as they actually stand. Low-carbon gas at power-station scale is scarce and expensive, so a plan is cheap to write and hard to execute — which is precisely why the condition needs teeth."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "bat20",
            "label": "aligned with the emission levels set out in the latest best available techniques (BAT) conclusion",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              165,
              262
            ],
            "plain_range": [
              165,
              262
            ],
            "means": "This explains the second condition, and a real one: BAT conclusions are published EU reference documents with numeric emission levels attached.",
            "lets_through": [
              "This wording lets through little on its own terms — this is a genuine external standard rather than a self-assessment, and it is the only place in the document that points at one.",
              "But BAT levels govern air pollutants and efficiency, not carbon budgets. A gas plant can be fully BAT-compliant and still be incompatible with a 1.5°C pathway."
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
      "power-generation",
      "transition-plan",
      "bat",
      "gas-lock-in"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 20,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=20",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        16767,
        17031
      ],
      "summary_text": "SEB Group restricts dedicated project finance for new gas-fired power generation projects unless they have a transition plan to renewable gases and align with BAT emission levels, with specific rules for CHP and peak load balancing.",
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
          "condition": "For combined heat and power: lifecycle emissions below 100 gCO2e/kWh, or, until 2030, below 270 gCO2e/kWh supported by enhanced due diligence",
          "carve_out_kind": null,
          "carve_out_kind_source": null,
          "governance_process": null,
          "standing": false,
          "where": "recorded on this commitment only"
        },
        {
          "condition": "For gas fired electricity generation for peak load or balancing: intended to operate only during peak demand",
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
        "commitment_specific_carve_outs": 2,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The section pairs a genuine external standard with a condition that has nothing behind it, and the weak half is the one that decides whether the plant gets built.",
          "text": "The BAT reference is real and the transition plan condition is not.\n\nNew gas-fired power is financeable if the project has “a plan to transition to low carbon or renewable gases”. No date, no cost, no committed supply, no consequence for failing. Low-carbon gas at power-station scale is scarce and expensive, which is exactly why a plan is cheap to write and hard to execute.\n\nThe second condition is better: alignment with the emission levels in the latest BAT conclusion, a published EU reference document with numbers in it. But BAT governs air pollutants and efficiency, not carbon budgets. A plant can be fully BAT-compliant and still be incompatible with a 1.5°C pathway.\n\nThe peaking carve-out then permits plant “intended to operate only during peak demand” — an intention stated at financing, with nothing checking it afterwards."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "This is the only section in the entire project that cites an external standard and puts a number in grams.\n\nBAT conclusions are published, updated and independently set — not a self-assessment. The combined heat and power carve-out is bounded by lifecycle emissions below 100 gCO2e/kWh, or below 270 until 2030 with enhanced due diligence. Those are real thresholds that a project either meets or does not.\n\nNothing in Société Générale's three policies comes close to this. Whatever the criticism of the transition-plan condition, the drafting instinct here is better than anything else we have reviewed."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Read it against section 9 and the same bank restricts one fuel outright and permits another on conditions.\n\nNew peat-fired power: no dedicated finance, full stop. New gas-fired power: financeable on a plan, a pollutant standard and, for peaking plant, an intention.\n\nPeat is more carbon-intensive per unit of energy than coal, so the ranking is defensible on emissions. But gas-fired capacity financed now is the larger lock-in by orders of magnitude, and it is the one that got the conditional treatment."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Give the transition plan a deadline",
          "content": "A plan with no date is a document. A plan with a date is a commitment."
        },
        {
          "title": "Add a carbon test alongside BAT",
          "content": "BAT conclusions cover pollutants and efficiency. The CHP carve-out already uses gCO2e/kWh — that measure could govern the main rule too."
        },
        {
          "title": "Bound the peaking exception",
          "content": "“Intended to operate only during peak demand” is an intention at financing, with nothing checking it afterwards."
        }
      ],
      "what_needs_to_change_closing": "Until then, new gas plant is financeable on a plan, a pollutant standard and a stated intention.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "SEB requires new gas-fired power projects to have a transition plan and meet BAT emission levels. We have not yet reviewed what it financed against this commitment.",
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
