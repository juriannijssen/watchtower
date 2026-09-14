/* Commitment data — generated from commitments/commitment-seb-og-upstream-5pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "seb-og-upstream-5pc",
    "bank": "SEB Group",
    "commitment_number": 6,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's 5% Threshold on Oil and Gas Producers",
    "short_title": "5% Threshold on Oil and Gas Producers",
    "subject": "Oil and Gas Exploration and Production",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. A company earning more than 5% of its revenue from finding and producing oil and gas is one SEB will not take on as a new client.",
    "naive_reading": "it does not take on oil and gas producers as clients",
    "plain_language_note": "The same low number as coal, and one word that halves what it reaches.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=6",
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
        "intro": "The restriction itself, the opening line of the oil and gas section. Watchtower records the relationship status as new — the first place in this document where a client rule stops at the front door.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB avoids New Business Relationships with Companies where more than 5% of revenues are derived from exploration and production of oil and gas.",
        "plain_rendering": "SEB avoids New Business Relationships with Companies where more than 5% of revenues are derived from exploration and production of oil and gas.",
        "phrases": [
          {
            "id": "new-br",
            "label": "New Business Relationships",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              11,
              37
            ],
            "plain_range": [
              11,
              37
            ],
            "means": "This explains who this commitment applies to: companies that are not clients yet. Watchtower records the relationship status on this commitment as new.",
            "lets_through": [
              "Adding the word “New” means every oil and gas producer already banked keeps its financing. The coal rules two sections earlier reach existing relationships explicitly; this one does not, and nothing in the document explains the difference.",
              "It also lets through the bank's existing upstream book in general. Only the unconventional phase-out in commitment 13 puts a date on existing relationships, and only for unconventional."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "5pc6",
            "label": "more than 5% of revenues",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              59,
              83
            ],
            "plain_range": [
              59,
              83
            ],
            "means": "This explains the threshold, on revenue from exploration and production.",
            "lets_through": [
              "This wording lets through integrated majors below the line — though at 5% very few are. This is a genuinely low bar for upstream.",
              "It also lets through service companies and contractors, which do not produce oil and gas themselves. Commitment 9 covers offshore services separately, at the same 5%."
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
      "upstream",
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
      "commitment_index": 6,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=6",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        12887,
        13030
      ],
      "summary_text": "SEB Group restricts new business relationships with companies deriving more than 5% of revenue from oil and gas exploration and production.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
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
          "relationship_status": "new",
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
          "angle": "how_it_compares",
          "recommended": true,
          "recommended_because": "The inconsistency is internal, provable from the document, and needs no interpretation.",
          "text": "The same bank, the same number, two sections apart, and half the reach.\n\nSection 6.1.2 restricts coal-fired power relationships at 5% and says in the sentence that it covers existing and new business alike. Section 7.1.1 restricts oil and gas production relationships at 5% and covers new business only.\n\nNothing in the document explains the difference. There may be a real argument — coal has substitutes at scale and upstream oil and gas does not, and a bank may reasonably move faster on one than the other. If that is the reasoning it belongs in the policy.\n\nAs published, the strongest upstream threshold in the project applies only to companies SEB has not met yet."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Five per cent is a very low bar for upstream.\n\nAt that level almost every dedicated exploration and production company is caught, and a good many diversified energy groups with an upstream arm. Most bank policies that address upstream at all use 10%, 20% or a project-level test only.\n\nThere is also no exception of any kind recorded on this commitment — no transition-plan route, no geographic carve-out, no discretionary clause. Among the twenty commitments in this document, twelve carry no exception at all, and that is unusual enough to be worth saying."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "New relationships only means the existing upstream book is untouched by this sentence.\n\nNothing here asks a current client above 5% to do anything, and no other commitment in the document fills the gap for conventional oil and gas. The unconventional phase-out in commitment 13 puts a 2030 date on existing relationships, but only for unconventional.\n\nSo for a conventional producer already banked by SEB, this policy contains a project-finance restriction on new extraction, a seismic restriction, and no client-level consequence at all."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Reach existing relationships, as the coal rules do",
          "content": "Section 6.1.2 covers existing and new business explicitly. This one covers new only, in the same document."
        },
        {
          "title": "Explain the difference between coal and oil",
          "content": "Two sections apart, the same bank uses the same 5% number with a different reach. If that is a judgement about transition speed, publish it."
        }
      ],
      "what_needs_to_change_closing": "Until then, the number is as strong as the coal rule and reaches half as far.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "SEB avoids new business relationships with companies above 5% oil and gas production revenue. We have not yet reviewed what it financed against this commitment.",
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
