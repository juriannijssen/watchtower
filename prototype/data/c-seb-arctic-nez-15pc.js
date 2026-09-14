/* Commitment data — generated from commitments/commitment-seb-arctic-nez-15pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "seb-arctic-nez-15pc",
    "bank": "SEB Group",
    "commitment_number": 11,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's 15% Threshold in Norwegian Arctic Waters",
    "short_title": "15% Threshold in Norwegian Arctic Waters",
    "subject": "Arctic Oil and Gas in Norwegian Waters",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. Inside the Norwegian Economic Zone, the Arctic threshold is 15% of global revenue — three times the number that applies everywhere else in the Arctic, and three times the number that applies to coal.",
    "naive_reading": "it will not do business with companies drilling in Norway's Arctic waters",
    "plain_language_note": "The same ocean, a different number, and the difference is a maritime boundary.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=11",
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
        "intro": "The restriction itself, the second of two Arctic sentences. Watchtower records the threshold at 15% and the geographic scope as not global.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "In the Arctic Area of the Norwegian Economic Zone, SEB Group avoids Business Relationships with Companies with a material share of global revenue (>15%) derived from exploration and production of Arctic Area Oil & Gas including on the Norwegian Continental Shelf (NCS).",
        "plain_rendering": "In the Arctic Area of the Norwegian Economic Zone, SEB Group avoids Business Relationships with Companies with a material share of global revenue (>15%) derived from exploration and production of Arctic Area Oil & Gas including on the Norwegian Continental Shelf (NCS).",
        "phrases": [
          {
            "id": "15pc",
            "label": "a material share of global revenue (>15%)",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              111,
              152
            ],
            "plain_range": [
              111,
              152
            ],
            "means": "This explains the threshold inside Norwegian waters, and the only place in the document where SEB calls a number material.",
            "lets_through": [
              "This wording lets through every large Norwegian and international producer on the Norwegian Continental Shelf below 15% of global revenue. For a company with worldwide operations that is a high bar to cross.",
              "The comparison is with the previous sentence: 5% everywhere else in the Arctic. And with the rest of the policy, where 5% is the number for coal mining, coal power, upstream oil and gas, offshore services, unconventional oil and peat. Fifteen per cent appears twice — here, and in the German coal carve-out that expires in 2030. This one has no expiry."
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
      "commitment_index": 11,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=11",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        13628,
        13897
      ],
      "summary_text": "In the Arctic Area of the Norwegian Economic Zone, SEB Group restricts business relationships with companies deriving more than 15% of global revenue from Arctic oil and gas exploration and production.",
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
          "value": 15,
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
          "recommended_because": "One number is out of line with fifteen others in the same document, and the exception covers the bank's home waters.",
          "text": "Fifteen per cent, in a policy where every other number is five.\n\nCoal mining: 5%. Coal-fired power: 5%. Upstream oil and gas: 5%. Offshore services: 5%. Unconventional oil: 5%. Peat extraction: 5%. Peat-fired power: 5%. Arctic outside Norwegian waters: 5%.\n\nArctic inside Norwegian waters: 15% of global revenue.\n\nThe only other 15% in the document is the German coal carve-out, and that one steps down to 5% in 2030. This one has no end date. The denominator is different too — global revenue rather than revenue from the activity — which makes the test harder to fail than any other in the policy."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "A company would have to earn more than 15% of its worldwide revenue from Arctic exploration and production before this rule engages.\n\nFor an international major with refining, chemicals, trading and renewables alongside upstream, that is close to unreachable however much Arctic production it runs. For a Norwegian producer with a large Continental Shelf position it is possible, but the denominator is doing a lot of work.\n\nThe phrase “a material share of global revenue (>15%)” is also the only place in the policy where SEB tells the reader what it considers material. Everywhere else, 5%."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Two things are worth conceding.\n\nThe policy draws the distinction openly. It would have been easy to write one Arctic rule at 15% and say nothing; instead the document has two sentences, and the split is visible to anyone who reads them. Watchtower's record carries it too, as a geographic scope marked not global on both.\n\nAnd the rule exists at all. Many banks address the Arctic with a project-finance restriction only. This is a client-level test covering new and existing relationships, including capital markets — a stronger instrument than most, set at a weaker number."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Bring 15% down to 5%",
          "content": "Every other threshold in this policy is 5%. This one is the exception, and it covers the waters closest to the bank."
        },
        {
          "title": "Put a date on it, as Germany got",
          "content": "The German coal carve-out steps down to 5% in 2030. This one has no end date."
        },
        {
          "title": "Measure on Arctic revenue, not global revenue",
          "content": "The denominator here is the company's worldwide revenue, which makes the test harder to fail than the one next door."
        }
      ],
      "what_needs_to_change_closing": "Until then, the softest number in the policy governs the waters the bank knows best.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "SEB avoids business relationships with companies above 15% of global revenue from Arctic oil and gas in Norwegian waters. We have not yet reviewed what it financed against this commitment.",
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
