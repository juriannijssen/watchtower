/* Commitment data — generated from commitments/commitment-ing-upstream-phaseout-2040.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "ing-upstream-phaseout-2040",
    "bank": "ING",
    "commitment_number": 1,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "ING's 2040 Phase-out of Upstream Oil & Gas",
    "short_title": "2040 Phase-out of Upstream Oil & Gas",
    "subject": "Upstream Oil & Gas Phase-out",
    "article_published": null,
    "intro": "ING first announced this commitment in December 2023, after the COP28 climate summit, and restated it in its Climate Progress Update of September 2024, where chief executive Steven van Rijswijk set it out in the foreword. It commits ING to taking its financing of oil and gas exploration and production down to zero.",
    "naive_reading": "it is getting out of financing oil and gas altogether",
    "plain_language_note": "Both passages are already plain. The plain versions change “we” to ING and set off the second passage's list of what midstream and downstream mean, so the sentence reads straight through.",
    "sources_intro": "One document states this commitment, and two passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "cpu2024",
        "document_title": "ING Climate Progress Update 2024",
        "document_url": "https://ing.com/binaries/content/assets/documents/files/climate_progress_update_2024.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/ing_group/document/4517/synthesis?run=105&commitment=1",
        "watchtower_document_id": 4517,
        "watchtower_institution": "ing_group",
        "synthesis_run": 105,
        "version_label": "September 2024",
        "published": "2024-09-18",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file"
      }
    ],
    "clauses": [
      {
        "index": 1,
        "role": "rule",
        "source_id": "cpu2024",
        "title": "The rule",
        "intro": "The sentence from the chief executive's foreword that states the commitment and its end date.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "This year we committed to phasing out our financing of oil and gas exploration and production to zero by 2040, which is well in advance of the International Energy Agency's (IEA's) guidance.",
        "plain_rendering": "ING committed this year to phasing out its financing of oil and gas exploration and production to zero by 2040, well ahead of the International Energy Agency's guidance.",
        "phrases": [
          {
            "id": "phasing-out",
            "label": "phasing out",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              26,
              37
            ],
            "plain_range": [
              27,
              38
            ],
            "means": "The words “phasing out” describe a reduction over time, not a stop. This commitment fixes where ING's upstream financing ends, and nothing in this sentence says how quickly it falls on the way.",
            "lets_through": [
              "This wording lets through upstream financing at today's level, or above it, in any year before the end point. The sentence sets an end point, not a path, and any interim step would have to be found elsewhere in ING's reporting."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "by-2040",
            "label": "to zero by 2040",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              94,
              109
            ],
            "plain_range": [
              95,
              110
            ],
            "means": "This explains when this commitment is met: ING's financing of exploration and production reaches zero in 2040, sixteen years after the update was published.",
            "lets_through": [
              "This wording lets through new upstream financing until then, including to companies that are still opening new fields. Before 2040, only one group of producers is covered by ING's separate restriction on new financing, and that restriction has its own limits."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "rule",
        "source_id": "cpu2024",
        "title": "What it covers",
        "intro": "Later in the same update, ING describes how it treats the parts of the oil and gas chain that come after production.",
        "location": {
          "distance": "later_in_document",
          "signposting": "none",
          "signposting_note": "The foreword sentence reads as complete and nothing in it points to the later passage that says what happens to the rest of the value chain."
        },
        "verbatim": "For midstream and downstream, which refers to oil and gas processing, storage, transportation and retail infrastructure, we have emissions intensity targets to reach our net-zero-by-2050 targets.",
        "plain_rendering": "For midstream and downstream — processing, storage, transportation and retail infrastructure — ING has emissions intensity targets aimed at net zero by 2050.",
        "phrases": [
          {
            "id": "intensity-targets",
            "label": "emissions intensity targets",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              129,
              156
            ],
            "plain_range": [
              103,
              130
            ],
            "means": "This explains what ING commits to for the rest of the oil and gas chain: a target for emissions per unit of activity, not a phase-out. Midstream and downstream sit outside the 2040 commitment.",
            "lets_through": [
              "This wording lets through growth in midstream and downstream financing — pipelines, storage, terminals, refining and retail — as long as emissions per unit fall. An intensity target can be met while total financing and total emissions rise."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "upstream",
      "midstream",
      "downstream",
      "exploration",
      "phase-out"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 105,
      "document_id": 4517,
      "institution": "ing_group",
      "commitment_index": 1,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/ing_group/document/4517/synthesis?run=105&commitment=1",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-06-18",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        3564,
        3756
      ],
      "summary_text": "ING commits to phasing out all financing for oil and gas exploration and production to zero by 2040.",
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
          "relationship_status": "new_and_existing",
          "certainty": "4"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [],
      "commitment_type": "phase_out",
      "effective_date": "2040",
      "exceptions": [],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 1 fields corrected]\nCHANGES:\n- [ING will stop providing new financing to pure-play upstream oil and gas companies that continue to develop new fields, effective immediately.]: Removed the exception regarding non-pure-play companies because this condition is already captured under the triggers/counterparty scope, and the schema dictates that conditions captured in other dimensions should not be duplicated in exceptions.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [],
    "disagreements": [],
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
          "recommended_because": "A dated phase-out to zero that reaches corporate financing is genuinely strong, and conceding that first is what makes the two limits land.",
          "text": "Start with what ING did that many restrictions do not: it put a date on zero.\n\nA restriction on new projects leaves the rest of a bank's upstream lending to decline, or not, as the market decides. ING committed to take its financing of oil and gas exploration and production to zero by 2040, and Watchtower records the commitment as reaching general corporate financing and capital markets, not only project financing. An end date that covers the company-level financing, where most upstream lending sits, is a stronger shape of commitment than an asset-by-asset restriction.\n\nThe limits are in what surrounds the date. The sentence fixes an end point and no path to it, so the sixteen years before 2040 are left to ING's own pace. And the commitment covers exploration and production only. For pipelines, storage, terminals, refining and retail, ING sets emissions intensity targets, which can be met while financing to those parts of the chain grows.\n\nA phase-out with a date is the right shape. This one draws the line around the part of the chain that produces oil and gas, and puts the part that moves and sells it on a different kind of target."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "The commitment ends ING's financing of oil and gas exploration and production in 2040. Until then it blocks nothing.\n\nThe words “phasing out” describe a reduction over time, and the sentence gives no pace for it. Nothing in this passage stops ING from providing new upstream financing next year, or in 2035, to a company opening a new field. The only upstream companies ING has said it will stop providing new financing to before 2040 are pure-play producers that continue to develop new fields — a separate commitment, with its own limits.\n\nThe second limit is scope. The 2040 date applies to exploration and production. For midstream and downstream — processing, storage, transportation and retail infrastructure — ING has emissions intensity targets instead. An intensity target measures emissions per unit of activity. It can be met while ING's financing to pipelines, terminals and refineries grows, provided each unit becomes cleaner.\n\nSo the commitment reaches one part of the chain, at one date, sixteen years after it was published. Everything before that date, and everything after production, is outside it."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who this commitment binds, and when.\n\nIt binds ING's upstream lending in 2040: from then, no financing for oil and gas exploration and production. Every producer that is a client at that point is caught, whatever its structure and whether or not it is opening new fields. That is a genuinely broad net, and it reaches general corporate financing and capital markets, not only project financing.\n\nBefore 2040 it binds nobody. A producer that wants financing in the coming years can get it under this commitment unless it falls under ING's separate restriction on pure-play producers.\n\nIt also never binds the rest of the chain. Companies that process, store, transport or sell oil and gas face an emissions intensity target rather than a phase-out, so a pipeline operator or a terminal developer can keep borrowing from ING after 2040 as long as the emissions per unit of what it does keep falling.\n\nThe commitment catches producers late, and the midstream and downstream companies that serve them not at all."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Set the path, not only the end point",
          "content": "Publish interim reductions in upstream financing on the way to 2040, so progress toward zero can be checked year by year."
        },
        {
          "title": "Extend the end date down the chain",
          "content": "Pipelines, storage and export terminals exist to move what upstream produces. An intensity target lets that financing grow; a dated phase-out would not."
        }
      ],
      "what_needs_to_change_closing": "Until then, ING's upstream financing can continue at any level until 2040, and its midstream and downstream financing with no end date at all.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "ING commits to taking its financing of oil and gas exploration and production to zero by 2040. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": null,
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-10",
    "spec": "Commitment Analysis Spec v3.11",
    "source": "Watchtower synthesis run 105, document 4517",
    "reading": "drafted"
  }
};
