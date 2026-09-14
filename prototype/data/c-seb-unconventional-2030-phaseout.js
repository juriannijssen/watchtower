/* Commitment data — generated from commitments/commitment-seb-unconventional-2030-phaseout.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "seb-unconventional-2030-phaseout",
    "bank": "SEB Group",
    "commitment_number": 13,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's 2030 Unconventional Oil and Gas Phase-Out",
    "short_title": "2030 Unconventional Oil and Gas Phase-Out",
    "subject": "Unconventional Oil and Gas Phase-out",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this commitment in its Sector Policy on Fossil Fuels, published in April 2026. By 2030 the Baltic exception ends and SEB will phase out every business relationship with a company above 5% unconventional oil and gas revenue.",
    "naive_reading": "it will be out of unconventional oil and gas by 2030",
    "plain_language_note": "A dated exit, at the lowest threshold in the document, with nothing carved out of it.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=13",
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
        "intro": "The commitment itself, the sentence that closes the Baltic exception. Watchtower records it as a phase-out with an effective date of 2030 and no exceptions of any kind.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "This exception will cease by 2030, when SEB Group will phase out all Business Relationships with Companies where more than 5% of revenues is derived from Unconventional Oil and Gas.",
        "plain_rendering": "This exception will cease by 2030, when SEB Group will phase out all Business Relationships with Companies where more than 5% of revenues is derived from Unconventional Oil and Gas.",
        "phrases": [
          {
            "id": "by2030",
            "label": "will cease by 2030",
            "type": "undefined_term",
            "verbatim_range": [
              15,
              33
            ],
            "plain_range": [
              15,
              33
            ],
            "means": "This explains the deadline. What happens between now and then is not described — there is no baseline, no interim milestone and no reporting commitment.",
            "lets_through": [
              "This wording lets through any path SEB chooses to 2030. This is the same shape as every phase-out we have reviewed: a date, an end state, and nothing in between.",
              "What it does not leave open is scope. The sentence covers all business relationships, at 5%, for unconventional oil and gas together — wider than the restriction it replaces, which covers unconventional oil only."
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
      "phase-out",
      "revenue-threshold",
      "client-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 13,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=13",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        14209,
        14390
      ],
      "summary_text": "By 2030, SEB Group will phase out all business relationships with companies deriving more than 5% of revenue from unconventional oil and gas.",
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
      "commitment_type": "phase_out",
      "effective_date": "2030",
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
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "Nothing else in the project combines a date, a low threshold, whole-book scope and an empty exception list.",
          "text": "This is the strongest commitment we have found at any bank in this project.\n\nA phase-out of all business relationships, at 5% of revenue, covering unconventional oil and gas together, by 2030. Watchtower records no exception of any kind — not a deviation clause, not a transition-plan route, not a geographic carve-out. The Baltic exception it replaces is explicitly closed by this sentence.\n\nCompare the shape with Société Générale's coal dates: 2030 for the OECD, 2040 for everywhere else, sitting over commitments that otherwise stop at new business, with a discretionary deviation clause above all of them.\n\nThis one is five years away, applies to a whole book, and has nothing hanging off it."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "The standard phase-out criticism applies, and it is the only one available.\n\nThere is no baseline, no interim milestone and no reporting commitment. Nobody outside the bank can tell in 2027 whether SEB is on track, and the sentence is satisfied equally by steady reduction and by doing nothing until 2029.\n\nThe word is also “phase out” in this sentence and “avoid” everywhere else in the policy. Whether phasing out means terminating relationships or declining to renew them is not defined, and those have different dates."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Widening on the way out is unusual and worth noticing.\n\nCommitment 12 restricts relationships above 5% revenue from Unconventional Oil. This one phases out relationships above 5% from Unconventional Oil and Gas. The successor covers more than the rule it replaces.\n\nMost policies narrow as they approach a deadline, adding conditions and carve-outs to make the date reachable. This one adds a fuel."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Publish a baseline and interim points",
          "content": "A 2030 exit with no starting figure cannot be checked until 2030."
        },
        {
          "title": "Say what phase out means operationally",
          "content": "Ending a relationship, declining renewals and letting facilities run off are different acts with different dates."
        }
      ],
      "what_needs_to_change_closing": "Until then, the strongest commitment in the document is the one nobody can check yet.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "SEB has committed to phase out all business relationships with companies above 5% unconventional oil and gas revenue by 2030. We have not yet reviewed what it financed against this commitment.",
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
