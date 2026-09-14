/* Commitment data — generated from commitments/commitment-barclays-expansion-review.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-expansion-review",
    "bank": "Barclays",
    "commitment_number": 1,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "Barclays' Review of Expanding Oil & Gas Groups",
    "short_title": "Review of Expanding Oil & Gas Groups",
    "article_published": null,
    "intro": "Barclays sets out this process in the Upstream Oil & Gas section of its Climate Change Statement of December 2025. Energy groups that put more than a tenth of their planned upstream spending into expansion are reviewed every year by its Client Transition Review Forum.",
    "naive_reading": "it will stop financing oil and gas companies that keep expanding production",
    "plain_language_note": "The plain versions keep the review's wording and drop the statement's italics. The definition comes from the table at the end of the statement.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it does.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=1",
        "watchtower_document_id": 4122,
        "watchtower_institution": "barclays",
        "synthesis_run": 219,
        "version_label": "December 2025",
        "published": "2025-12-01",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "verbatim_check": {
          "document": "4122-barclays-arctic-oil-gas.md",
          "passages": 4,
          "found": 4,
          "missing": []
        }
      }
    ],
    "clauses": [
      {
        "index": 1,
        "role": "rule",
        "source_id": "ccs2025",
        "title": "The rule",
        "intro": "The passage that sets up the annual review, and the first of the groups it applies to.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Energy Groups meeting any of the following will be subject to mandatory annual review by the CTRF to determine whether continued financing support is appropriate in the context of their investment plans and overall decarbonisation or transition plans: … Energy Groups where more than 10% of their total planned upstream oil & gas capital expenditure is in expansion.",
        "plain_rendering": "Energy Groups with more than 10% of their total planned upstream oil & gas capital expenditure in expansion will be subject to mandatory annual review by the CTRF, which decides whether continued financing support is appropriate given their investment and transition plans.",
        "phrases": [
          {
            "id": "annual-review",
            "label": "mandatory annual review",
            "type": "narrowing_qualifier",
            "source": "watchtower_weakness",
            "watchtower_ref": "The Client Transition Review Forum review is an internal screening process with no mandatory exclusion outcome.",
            "not_in_synthesis": false,
            "verbatim_range": [
              62,
              85
            ],
            "plain_range": [
              127,
              150
            ],
            "means": "The words “mandatory annual review” describe a process, not a restriction. The review is mandatory; its outcome is not. It decides whether continued financing is appropriate, and the statement sets no result it must reach.",
            "lets_through": [
              "This wording lets through every expanding energy group the review finds appropriate to keep financing. Nothing is published about how many are reviewed or what the reviews decide."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "more-than-10pc",
            "label": "more than 10%",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              274,
              287
            ],
            "plain_range": [
              19,
              32
            ],
            "means": "This explains which groups are reviewed: those with more than a tenth of their planned upstream capital expenditure in expansion.",
            "lets_through": [
              "This wording lets through groups at or below 10%, however large their expansion spending in absolute terms."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "condition",
        "source_id": "ccs2025",
        "title": "The condition",
        "intro": "Two paragraphs later, the statement says what the review's outcome does not settle.",
        "location": {
          "distance": "nearby",
          "signposting": "none",
          "signposting_note": "The review reads as the deciding step. Nothing in it points to the paragraph that leaves each financing decision to other committees."
        },
        "verbatim": "Notwithstanding the outcomes of the CTRF reviews, financing decisions are transaction specific and will continue to be subject to consideration by relevant committees, if appropriate, to consider issues such as credit risk, reputational risk and capital impact.",
        "plain_rendering": "Whatever the CTRF reviews conclude, financing decisions are transaction specific and may go to other committees, which consider credit risk, reputational risk and capital impact.",
        "phrases": [
          {
            "id": "transaction-specific",
            "label": "financing decisions are transaction specific",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              50,
              94
            ],
            "plain_range": [
              36,
              80
            ],
            "means": "This explains that the review does not decide any financing. Each transaction is decided on its own, by committees weighing credit, reputational and capital questions.",
            "lets_through": [
              "This wording lets through a transaction for a group the review has questioned, if the committee that considers it finds the transaction acceptable."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 3,
        "role": "definition",
        "source_id": "ccs2025",
        "title": "The definition",
        "intro": "From the table of definitions at the end of the statement, what counts as expansion.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Expansion” is set in italics in the rule, marking it as a defined term. Nothing else points to the definitions table."
        },
        "verbatim": "Refers to any upstream oil & gas projects with a final investment decision (or equivalent) after 31 December 2021. This includes, but is not limited to, exploration, development, and production.",
        "plain_rendering": "Expansion means any upstream oil & gas project with a final investment decision after 31 December 2021, including exploration, development and production.",
        "phrases": [
          {
            "id": "fid-2021",
            "label": "after 31 December 2021",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              91,
              113
            ],
            "plain_range": [
              80,
              102
            ],
            "means": "This explains which spending counts as expansion: projects sanctioned after the end of 2021.",
            "lets_through": [
              "The date lets through every project sanctioned in or before 2021, for its whole life. Spending on those projects does not count towards the 10%."
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
      "capital-investment",
      "fid",
      "exploration"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 1,
      "commitment_id": "23d2285c-14fe-541d-bc87-a457e246ac91",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=1",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        5108,
        5482
      ],
      "summary_text": "Energy Groups with over 10% of total planned upstream capex allocated to expansion are subject to mandatory annual review by the Client Transition Review Forum.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "group",
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
          "metric": "other",
          "inequality": ">",
          "value": 10,
          "definition": "share of total planned upstream oil & gas capital expenditure in expansion (upstream projects with FID after 31 Dec 2021)"
        }
      ],
      "commitment_type": "screening",
      "effective_date": "immediate",
      "exceptions": [],
      "weaknesses": "The Client Transition Review Forum review is an internal screening process with no mandatory exclusion outcome.",
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 1 fields corrected]\nCHANGES:\n- Barclays will not finance oil sands exploration and production companies (majority owners or operators deriving ≥10% revenue from oil sands).: Removed exception for <10% revenue as it is already captured in the threshold field.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "EXISTING OIL AND GAS FINANCING STAYS IN PLACE · APPLICABILITY OF FINANCING RESTRICTIONS — “Any existing commitments or financing entered into prior to any of the restrictions coming into effect under the Upstream Oil & Gas and Unconventional Oil & Gas sections of this statement may remain in place”; only refinancings are subject to the restrictions.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": "commitment 6 only",
        "where": "APPLICABILITY OF FINANCING RESTRICTIONS"
      },
      {
        "condition": "TRANSITION FINANCE FOR RESTRICTED UPSTREAM GROUPS · APPLICABILITY OF FINANCING RESTRICTIONS — Barclays “may enter into Sustainable Finance or Transition Finance transactions with an entity in a Group that would otherwise be restricted” by the Upstream Oil & Gas section, where it is satisfied they “will not be used directly to support oil & gas activity.”",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": "commitments 4 and 5 only",
        "where": "APPLICABILITY OF FINANCING RESTRICTIONS"
      },
      {
        "condition": "SECONDARY MARKETS AND DISTRESSED COMPANIES ARE NOT “FINANCING” · KEY DEFINITIONS — Financing “excludes, without limitation, any debt or securities traded or placed through secondary market activity”, and primary financing for distressed entities, such as debt-for-equity swaps and other recapitalisations, is excluded from the definition too.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "KEY DEFINITIONS"
      },
      {
        "condition": "RESTRICTIONS DEPEND ON THIRD-PARTY DATA · THIRD PARTY DATA — “Where data is not available or is not of a reliably high quality, this may impact our ability to apply restrictions and other provisions set out in this statement.”",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "THIRD PARTY DATA"
      },
      {
        "condition": "SUBJECT TO APPLICABLE LAW · ABOUT THIS DOCUMENT — “The application of the provisions in this statement is subject to compliance with applicable laws and regulations, which may change from time to time.”",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "ABOUT THIS DOCUMENT"
      }
    ],
    "disagreements": [
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "The record carries the statement's document-wide provisions on at most two commitments: the grandfathering rule on commitment 6, and the transition-finance allowance on commitments 4 and 5.",
        "bank_green": "The definition of financing excludes secondary-market activity and distressed-company financing; the statement applies only as far as third-party data allows, and subject to applicable law; existing oil and gas financing may remain in place until refinanced; and transition finance may reach restricted upstream groups. Each reaches more commitments than the record attaches it to.",
        "action": "Record each as a standing exception on every commitment it reaches."
      }
    ],
    "assessment": {
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.2 §4.1",
        "inputs_source": "Watchtower record",
        "result": "hollowed",
        "weakness": true,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "A review read as a restriction is the first mistake a reader makes here, and the gap is best stated flatly.",
          "text": "This is a review, not a restriction, and the statement says so twice.\n\nEnergy groups spending more than a tenth of planned upstream capital on expansion are reviewed every year to decide whether continued financing is appropriate. The statement sets no outcome the review must reach, publishes no results, and two paragraphs later adds that financing decisions are transaction specific, whatever the review concludes.\n\nWatchtower records this weakness in its own words: an internal screening process with no mandatory exclusion outcome.\n\nThe definition of expansion counts only projects sanctioned after 2021, so spending on older projects does not move a group towards the 10%. What remains is an annual conversation, with the decisions made elsewhere."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who this process stops, and the answer is: nobody, necessarily.\n\nA group above 10% is reviewed. What happens next depends on the review, and then on each transaction's committee. A group that the review finds is making acceptable progress continues to be financed. A group the review questions can still be financed transaction by transaction.\n\nThe groups most affected are those Barclays already had doubts about. The groups least affected are large producers whose expansion is a small share of a large budget, and those whose expansion was sanctioned before 2022."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the review is mandatory and annual, and it is triggered by a published number — 10% of planned upstream capital expenditure in expansion. A reader can check which groups should be reviewed.\n\nWhere it stops is the outcome. The statement publishes no criteria for the review's decision and no results, and it says financing decisions remain transaction specific notwithstanding the review.\n\nA published trigger for scrutiny is worth having. The scrutiny itself happens out of sight."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower's stated weakness is carried as a phrase; the verdict prose around it is ours.",
      "what_needs_to_change": [
        {
          "title": "Say what the review decides",
          "content": "Publish the criteria the CTRF applies, and what happens to a group that fails them."
        },
        {
          "title": "Report the outcomes",
          "content": "Disclose how many groups are reviewed each year and how many lose financing as a result."
        }
      ],
      "what_needs_to_change_closing": "Until then, expanding groups are looked at every year, and decided on one transaction at a time.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays reviews every year the energy groups that put more than a tenth of their planned upstream spending into expansion. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Watchtower synthesis run 219, document 4122",
    "reading": "drafted"
  }
};
