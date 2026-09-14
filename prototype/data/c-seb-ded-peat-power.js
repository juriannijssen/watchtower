/* Commitment data — generated from commitments/commitment-seb-ded-peat-power.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "seb-ded-peat-power",
    "bank": "SEB Group",
    "commitment_number": 23,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's Ban on Financing New Peat-Fired Power",
    "short_title": "Ban on Financing New Peat-Fired Power",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in section 9 of its Sector Policy on Fossil Fuels, published in April 2026. No dedicated financing for new peat-fired power plants — and unlike the gas equivalent, no condition attached.",
    "naive_reading": "it will not finance new peat-fired power stations",
    "plain_language_note": "A flat no, where new gas power gets a list of conditions.",
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
        "intro": "The restriction itself, the second sentence in the peat power sub-section. Compare it with the gas-fired power section, which permits new plant on conditions.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB Group avoids providing Dedicated Finance to New peat fired power generation Projects.",
        "plain_rendering": "SEB Group avoids providing Dedicated Finance to New peat fired power generation Projects.",
        "phrases": [
          {
            "id": "ded23",
            "label": "Dedicated Finance",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              27,
              44
            ],
            "plain_range": [
              27,
              44
            ],
            "means": "This explains what financing this commitment covers: project financing only, meaning financing raised for the plant by name.",
            "lets_through": [
              "This wording lets through general corporate financing to peat-fired generators — though commitments 22 and 24 close most of that at the client level, which is more than can be said for oil-fired power.",
              "What it does not do is leave a condition open. New gas power is financeable on a transition plan and a BAT standard; new peat power is not financeable at all."
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
      "downstream",
      "power-generation",
      "dedicated-transaction"
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
          "activity_scope": "new"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": null
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
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.2 §4.1",
        "inputs_source": "Bank.Green's reading of the policy text — no synthesis record exists for this commitment",
        "result": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "how_it_compares",
          "recommended": true,
          "recommended_because": "The internal contrast is the useful argument, and it makes the recommendation on the gas page concrete.",
          "text": "Same bank, same document, forty lines apart: one fuel restricted outright, another permitted on conditions.\n\nNew peat-fired power projects: no dedicated finance. No threshold, no condition, no exception.\nNew gas-fired power projects: financeable with a transition plan, BAT alignment, and carve-outs for combined heat and power and for peaking plant.\n\nPeat is the more carbon-intensive fuel per unit of energy, so a stricter line is defensible. But it is also the fuel with a fraction of the capital demand, and the easier restriction to write.\n\nThis page exists mainly to show what section 8 could have looked like."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "An unconditional project restriction, with client-level rules on either side of it.\n\nCommitments 22 and 24 cover the companies; this covers the projects. Between them the peat power sub-section addresses new clients, existing clients from 2030, and project financing — which is more complete than the treatment of oil-fired power, where no client rule exists at all.\n\nThree sentences, and they cover the ground."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "The dedicated-finance point applies here as everywhere.\n\nA utility funding a new peat-fired unit from a general corporate facility is not asking for dedicated finance. What closes that gap is commitments 22 and 24 rather than anything in this sentence.\n\nWhich is the argument this project keeps making: a project-finance restriction is worth what the client rules beside it are worth."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options. This commitment has no synthesis record at all — scope, thresholds and rating inputs are all Bank.Green's reading of the policy text.",
      "what_needs_to_change": [
        {
          "title": "Nothing, on the wording",
          "content": "A flat restriction with no condition is what the gas section should look like."
        },
        {
          "title": "Get section 9 into the synthesis",
          "content": "As with every page in this section."
        }
      ],
      "what_needs_to_change_closing": "Until then, peat gets the treatment gas does not.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "SEB avoids dedicated finance for new peat-fired power generation projects. We have not yet reviewed what it financed against this commitment.",
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
