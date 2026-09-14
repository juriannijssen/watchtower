/* Commitment data — generated from commitments/commitment-seb-peat-power-clients.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "seb-peat-power-clients",
    "bank": "SEB Group",
    "commitment_number": 22,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's 5% Threshold on Peat-Fired Power Clients",
    "short_title": "5% Threshold on Peat-Fired Power Clients",
    "subject": "New Clients in Peat-Fired Power",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in section 9 of its Sector Policy on Fossil Fuels, published in April 2026. Companies above 5% of revenue from burning peat for power are ones SEB will not take on as new clients — with the existing ones addressed separately, in 2030.",
    "naive_reading": "it does not do business with companies burning peat for power",
    "plain_language_note": "New clients only, and a companion commitment that closes the gap five years out.",
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
        "intro": "The restriction itself, the first of three sentences in the peat power sub-section. Read it with commitment 24, which puts a date on the existing relationships this one leaves alone.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB Group avoids New Business Relationships with Companies where more than 5% of revenue is derived from peat fired power generation.",
        "plain_rendering": "SEB Group avoids New Business Relationships with Companies where more than 5% of revenue is derived from peat fired power generation.",
        "phrases": [
          {
            "id": "newbr22",
            "label": "New Business Relationships",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              17,
              43
            ],
            "plain_range": [
              17,
              43
            ],
            "means": "This explains who this commitment applies to: companies that are not clients yet.",
            "lets_through": [
              "Adding the word “New” means every peat-fired generator already banked keeps its financing — until 2030, when commitment 24 extends the same test to all business relationships.",
              "This is the same two-step structure SEB uses for unconventional oil: a restriction on new business now, a phase-out of everything by 2030. It is the most coherent pattern in the document and it appears in the section the synthesis missed."
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
          "relationship_status": "new"
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
        "project_finance_only": false,
        "new_business_only": true,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "The pairing is what makes a new-business rule acceptable, and it is stated rather than implied.",
          "text": "A new-business restriction paired with a dated exit is a defensible structure, and this section states both.\n\nCommitment 22 stops new relationships above 5% peat-fired power revenue. Commitment 24 extends the same test to every relationship from 2030. The gap is five years and the document says so in the next sentence rather than leaving it to be discovered.\n\nThis is the same shape SEB uses for unconventional oil and gas, and it is the most coherent pattern in the policy. It appears twice, and one of the two places is the section the synthesis missed."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "Until 2030 this rule governs the client list rather than the client book.\n\nA utility already banked by SEB and earning most of its revenue from peat-fired generation is outside this sentence entirely. That is five years of existing relationships, and the interim commitment says nothing about them.\n\nIt is the same criticism we make of Société Générale's client rules, with one difference that matters: there, the gap is closed by a date in 2040 and a discretionary deviation clause sits above it. Here it is closed in 2030 and nothing sits above it."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Set against commitment 6 in the same document, the peat section is better structured than the oil and gas one.\n\nUpstream oil and gas: new relationships only, with no successor commitment closing the gap for conventional production. Peat-fired power: new relationships only, with a successor commitment closing it in 2030.\n\nThe fuel with less than a hundredth of the financing volume got the more complete treatment."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options. This commitment has no synthesis record at all — scope, thresholds and rating inputs are all Bank.Green's reading of the policy text.",
      "what_needs_to_change": [
        {
          "title": "Nothing much, given commitment 24",
          "content": "A new-business rule paired with a dated exit is a defensible structure. The gap is five years, and it is stated."
        },
        {
          "title": "Get section 9 into the synthesis",
          "content": "As with every page in this section."
        }
      ],
      "what_needs_to_change_closing": "Until 2030, this rule governs the client list rather than the client book — and the policy says so.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "SEB avoids new business relationships with companies above 5% peat-fired power revenue. We have not yet reviewed what it financed against this commitment.",
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
