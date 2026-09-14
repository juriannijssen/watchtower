/* Commitment data — generated from commitments/commitment-seb-peat-power-2030.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "seb-peat-power-2030",
    "bank": "SEB Group",
    "commitment_number": 24,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's 2030 Exit from Peat-Fired Power",
    "short_title": "2030 Exit from Peat-Fired Power",
    "subject": "All Clients in Peat-Fired Power",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this commitment in section 9 of its Sector Policy on Fossil Fuels, published in April 2026. From 2030 the 5% peat-power test applies to every business relationship, not just new ones.",
    "naive_reading": "it will be out of peat-fired power by 2030",
    "plain_language_note": "The second dated exit in the document, on the fuel the synthesis forgot.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": null,
        "watchtower_document_id": 25537,
        "watchtower_institution": "seb_group",
        "synthesis_run": null,
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
        "intro": "The commitment itself, the third sentence in the peat power sub-section. It converts commitment 22 from a new-business rule into a whole-book rule on a stated date.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "From 2030 SEB Group will avoid Business Relationships with Companies where more than 5% of revenue is derived from peat fired power generation.",
        "plain_rendering": "From 2030 SEB Group will avoid Business Relationships with Companies where more than 5% of revenue is derived from peat fired power generation.",
        "phrases": [
          {
            "id": "from2030",
            "label": "From 2030",
            "type": "undefined_term",
            "verbatim_range": [
              0,
              9
            ],
            "plain_range": [
              0,
              9
            ],
            "means": "The words “From 2030” set the date the restriction widens. Between publication and then, existing peat-fired generators are outside commitment 22.",
            "lets_through": [
              "This wording lets through five years of existing relationships. As with every phase-out in this project there is no baseline, no interim milestone and no reporting commitment attached.",
              "What it does not leave open is what changes. Unlike the coal and unconventional dates, this one does not promise an exit — it says the avoidance rule starts applying to everyone. That is a smaller promise, more precisely made."
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
      "peat",
      "phase-out",
      "revenue-threshold",
      "client-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": false,
      "run": null,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": null,
      "commitment_id": null,
      "url": null,
      "agent_name": null,
      "schema": null,
      "synthesis_updated": null,
      "quotation_matched": false,
      "quotation_char_range": null,
      "summary_text": "Not recorded. Section 9 does not appear in synthesis run 181.",
      "scope": {
        "industry": {
          "themes": "peat",
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
          "relationship_status": "new_and_existing"
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
          "definition": "revenue derived from peat fired power generation"
        }
      ],
      "commitment_type": "phase_out",
      "effective_date": "2030",
      "exceptions": [],
      "weaknesses": null,
      "reviewer_notes": null,
      "not_in_synthesis_note": "Run 181 extracted 20 commitments, all of them coal or oil and gas. Section 9 of the policy sets out four further restrictions on thermal peat, including a 2030 phase-out. None appears in the record. The reviewer notes for this run read '0 added, 0 removed, 0 split, 20 fields corrected', so the omission was not caught in review either."
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
        "inputs_source": "Bank.Green's reading of the policy text — no synthesis record exists for this commitment",
        "result": "holds",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 0
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "It is a dated commitment with nothing hanging off it, and its absence from the record is the most consequential of the four omissions.",
          "text": "A second dated commitment in the same document, on the fuel the synthesis omitted.\n\nFrom 2030 the 5% peat-power test applies to every business relationship rather than only new ones. It is precise about what changes — the avoidance rule widens — rather than promising an exit it does not define, which is more honest than most phase-out language we have read.\n\nSEB now has two 2030 dates: this one and the unconventional oil and gas phase-out. Plus the German coal threshold stepping down to 5% in the same year. Three separate commitments landing on one date suggests a deliberate horizon rather than three coincidences."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "The standard phase-out criticism, and one specific to the wording.\n\nNo baseline, no interim milestone, no reporting. Nobody can tell in 2027 whether this is on track.\n\nAnd the sentence widens an avoidance rule rather than committing to an exit. From 2030 SEB will avoid these relationships — which, given that the policy never defines avoidance and Appendix B routes deviations to internal processes, is a smaller promise than the coal and unconventional language elsewhere in the document."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Three 2030 commitments in one policy, and only two of them are in the record.\n\nThe unconventional oil and gas phase-out is commitment 13, recorded. The German coal step-down is an exception on commitment 5, recorded. This one is in section 9, and synthesis run 181 does not contain section 9 at all.\n\nA reader working from the synthesis would see two thirds of what this bank has committed to by 2030. That is the reason this page exists."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options. This commitment has no synthesis record at all — scope, thresholds and rating inputs are all Bank.Green's reading of the policy text.",
      "what_needs_to_change": [
        {
          "title": "Publish a baseline",
          "content": "Same point as every dated commitment in this project."
        },
        {
          "title": "Get section 9 into the synthesis",
          "content": "A 2030 commitment absent from the record is the most consequential of the four omissions."
        }
      ],
      "what_needs_to_change_closing": "Until then, a dated commitment on a high-carbon fuel sits outside the record entirely.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "From 2030 SEB will avoid all business relationships with companies above 5% peat-fired power revenue. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Policy text, document 25537 section 9 — NOT in synthesis run 181",
    "reading": "drafted"
  }
};
