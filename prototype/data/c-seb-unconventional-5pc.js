/* Commitment data — generated from commitments/commitment-seb-unconventional-5pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "seb-unconventional-5pc",
    "bank": "SEB Group",
    "commitment_number": 12,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's 5% Threshold on Unconventional Oil",
    "short_title": "5% Threshold on Unconventional Oil",
    "subject": "Unconventional Oil",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. Unconventional oil — oil sands, shale, coalbed methane — above 5% of revenue is a relationship SEB avoids, with one region carved out and the next commitment closing that carve-out in 2030.",
    "naive_reading": "it does not do business with companies producing unconventional oil",
    "plain_language_note": "An exception that names its reason, its region, and the year it ends.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=12",
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
        "intro": "The restriction itself. The exception is written into the same sentence rather than left to a schedule, and Watchtower records it as expiring in 2030.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB Group avoids Business Relationships with Companies with more than 5% of revenues derived from Unconventional Oil, with exception of the Baltic states where, due to energy security, SEB Group works with Companies to transition to low carbon and renewable alternatives.",
        "plain_rendering": "SEB Group avoids Business Relationships with Companies with more than 5% of revenues derived from Unconventional Oil, with exception of the Baltic states where, due to energy security, SEB Group works with Companies to transition to low carbon and renewable alternatives.",
        "phrases": [
          {
            "id": "baltic",
            "label": "with exception of the Baltic states",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              118,
              153
            ],
            "plain_range": [
              118,
              153
            ],
            "means": "This explains the carve-out, named in the sentence that creates the restriction: Estonia, Latvia and Lithuania — where oil shale is a domestic energy source.",
            "lets_through": [
              "This wording lets through companies above 5% unconventional oil revenue operating in the Baltic states, until 2030. Watchtower records the exception as temporary and dated.",
              "What it does not do is hide. The reason is stated (energy security), the region is named, the intention is stated (transition to low carbon and renewable alternatives), and the next commitment ends it. That is a materially better carve-out than anything in the Société Générale set, where the deviation clause names no reason, no region and no end date."
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
      "unconventional",
      "oil-sands",
      "shale",
      "revenue-threshold",
      "client-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 12,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=12",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        13937,
        14208
      ],
      "summary_text": "SEB Group restricts business relationships with companies deriving more than 5% of revenue from unconventional oil, with a temporary exception for Baltic states until 2030.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "oil_sands",
            "shale",
            "coalbed methane"
          ],
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
          "condition": "Temporary exception for Baltic states due to energy security, working with companies to transition to alternatives until 2030",
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
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "The comparison with an open-ended discretionary clause is the most useful thing this page can give a reader.",
          "text": "This is what a carve-out should look like, and it is the clearest example in the project.\n\nThe exception names its region — the Baltic states. It names its reason — energy security. It names its intention — working with companies to transition to low carbon and renewable alternatives. And the next sentence ends it, in 2030.\n\nSet that against Société Générale, where a single clause lets a senior management committee grant any deviation from any commitment, on an exceptional basis, with no reason, no region, no reporting and no expiry. That clause sits over all twenty-eight of its commitments.\n\nOne of these is a bank explaining itself. The other is a bank keeping its options open."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "The exception is well made and still unaccountable while it runs.\n\nNothing requires SEB to say which companies rely on it, how much exposure it covers, or what transition progress has been made — even though helping companies transition is the stated purpose. A carve-out justified by a purpose should report against that purpose.\n\nOil shale is also the specific fuel at issue in the Baltics, and it is among the most carbon-intensive liquid fuels there is. Five years of continued relationships is a real quantity of emissions to leave unreported."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Energy security carve-outs appear twice in this document and nowhere else in the project.\n\nGermany gets one for coal-fired power, at a raised threshold until 2030. The Baltic states get one for unconventional oil, until 2030. Both are dated, both are regional, both name the reason.\n\nThat is a bank with a consistent approach to a genuine problem: European energy security after 2022. Whether five years is the right length is a fair question. That the exceptions are legible at all is not in doubt."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Report on the Baltic exception while it runs",
          "content": "The stated purpose is helping companies transition. Publishing which companies and what progress would make the exception accountable rather than merely dated."
        },
        {
          "title": "Say what happens on 1 January 2030",
          "content": "Commitment 13 phases out the relationships. Whether that means exit or simply no new business is not stated."
        }
      ],
      "what_needs_to_change_closing": "Until then, this is what a carve-out looks like when a bank is willing to sign its name to it.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "SEB avoids business relationships with companies above 5% unconventional oil revenue, with a temporary exception for the Baltic states. We have not yet reviewed what it financed against this commitment.",
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
