/* Commitment data — generated from commitments/commitment-seb-ded-gas-midstream.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "seb-ded-gas-midstream",
    "bank": "SEB Group",
    "commitment_number": 16,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's Transition Plan Condition on New Gas Infrastructure",
    "short_title": "Transition Plan Condition on New Gas Infrastructure",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. New gas pipelines and storage are financeable if somebody connected to the project has a transition plan — the company, the project, or the owner.",
    "naive_reading": "it will not finance new gas pipelines and terminals",
    "plain_language_note": "A condition with three ways to satisfy it and no test of whether the plan is any good.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=16",
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
        "intro": "The restriction itself, the second midstream sentence. Watchtower records the condition as an exception on this commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB Group avoids providing Dedicated Finance to construction of New gas transportation Infrastructure and/ or storage Projects, unless the Company, project or owner has a Transition Plan.",
        "plain_rendering": "SEB Group avoids providing Dedicated Finance to construction of New gas transportation Infrastructure and/ or storage Projects, unless the Company, project or owner has a Transition Plan.",
        "phrases": [
          {
            "id": "unless16",
            "label": "unless the Company, project or owner has a Transition Plan",
            "type": "escape_hatch",
            "verbatim_range": [
              128,
              186
            ],
            "plain_range": [
              128,
              186
            ],
            "means": "This explains the condition that switches this commitment off. Any one of three parties having a transition plan is enough.",
            "lets_through": [
              "This wording lets through almost every sponsor. Three alternative holders of the plan means the test is satisfied if any of them has one, and large infrastructure projects have several parties attached.",
              "It also lets through any plan at all. The policy does not say the plan must be public, credible, verified, aligned to a temperature pathway, or related to the asset being financed.",
              "The comparison is with the oil sentence one line above, which has no condition. Gas infrastructure built today has a forty-year life, and this is the sentence that lets it be built."
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
      "midstream",
      "pipelines",
      "transition-plan",
      "dedicated-transaction",
      "gas-lock-in"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 16,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=16",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        15219,
        15406
      ],
      "summary_text": "SEB Group restricts dedicated project finance for new gas transportation infrastructure and storage projects unless the company, project, or owner has a transition plan.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "midstream",
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
          "condition": "Allowed if the company, project, or owner has a Transition Plan",
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
          "recommended_because": "Three alternative satisfiers and no quality standard is as close to an open door as this document gets.",
          "text": "This is the weakest sentence in the SEB document, and the only phrase on any SEB page we have typed as an escape hatch.\n\nNew gas transportation infrastructure is financeable “unless the Company, project or owner has a Transition Plan”. Three alternative parties, any one of which satisfies the condition. Large infrastructure projects have a sponsor, a project company, an operator and often a state entity attached — the odds that none of them has a transition plan are small.\n\nAnd no standard attaches to the plan. It need not be public, verified, aligned to any pathway, time-bound, or related to the asset being financed. Section 10 lists having a transition plan as an expectation of companies in the fossil fuel sector generally, so many of these companies will have one already.\n\nThe asset lasts forty years. The condition is met by a document."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "The oil sentence one line above has no condition at all.\n\nThat is the comparison that matters, and it is inside the same subsection. Same asset class, same financing route, same lock-in problem. Oil gets a ban; gas gets a conditional permission.\n\nSociété Générale's thermal coal policy is instructive in the other direction: its transition plan requirement is a client-level test, not a project condition, and it is satisfied by communicating a plan rather than having one. Two banks, two uses of the same instrument, both of them satisfied by the existence of a document rather than by anything in it."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "For this restriction to bite, a new gas pipeline or storage project would need a sponsor, a project company and an owner none of which has a transition plan.\n\nIn European gas infrastructure that combination is close to hypothetical. Transmission system operators publish transition plans as a matter of course; so do the utilities and infrastructure funds that own them.\n\nWhat the sentence realistically excludes is a project with an owner outside that world — which may be the intent, but is a much smaller restriction than the wording first suggests."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Say whose plan counts",
          "content": "Company, project or owner — any of three. Naming one would make the condition mean something."
        },
        {
          "title": "Set a standard for the plan",
          "content": "Public, third-party assessed, aligned to a stated pathway. None of these is required."
        },
        {
          "title": "Address asset life",
          "content": "Gas transport infrastructure financed now will operate past 2050. A transition plan held by its owner does not change that."
        }
      ],
      "what_needs_to_change_closing": "Until then, the condition is satisfied by a document held by any one of three parties.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "SEB avoids dedicated finance for new gas transportation infrastructure unless there is a transition plan. We have not yet reviewed what it financed against this commitment.",
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
