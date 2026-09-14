/* Commitment data — generated from commitments/commitment-barclays-coal-mining-2035.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-coal-mining-2035",
    "bank": "Barclays",
    "commitment_number": 25,
    "category": "coal",
    "effective_date": "2035-01-01",
    "title": "Barclays' 2035 Global Phase-out of Coal Mining Clients",
    "short_title": "2035 Global Phase-out of Coal Mining Clients",
    "subject": "Coal Mining Clients Worldwide",
    "article_published": null,
    "intro": "Barclays sets out this phase-out in the Thermal Coal Mining section of its Climate Change Statement of December 2025. It commits the bank to end its financing of thermal coal mining companies worldwide by the start of 2035.",
    "naive_reading": "it is ending its financing of coal mining companies everywhere",
    "plain_language_note": "The rule is plain; the definition and the exception come from elsewhere in the statement.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=25",
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
          "passages": 3,
          "found": 3,
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
        "intro": "The statement's final phase-out date for thermal coal mining.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "By 1 January 2035, we will phase out financing for all clients engaged in thermal coal mining.",
        "plain_rendering": "By 1 January 2035, Barclays will phase out financing for all clients engaged in thermal coal mining.",
        "phrases": [
          {
            "id": "by-2035",
            "label": "By 1 January 2035",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              0,
              17
            ],
            "plain_range": [
              0,
              17
            ],
            "means": "This explains when the global phase-out is complete: the start of 2035.",
            "lets_through": [
              "This wording lets through clients outside the EU and OECD earning between 5% and 10% of revenue from thermal coal mining until then."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "ccs2025",
        "title": "The definition",
        "intro": "From the table of definitions at the end of the statement, what engaged in means for thermal coal.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Engaged in” is set in italics in the rule, and nothing else points to the definitions table."
        },
        "verbatim": "In relation to Thermal Coal Mining and Thermal Coal Power, a client is defined as “engaged in” if it generates more than 5% of its revenues from thermal coal-fired power generation and/or thermal-coal mining.",
        "plain_rendering": "For thermal coal, a client is engaged in it if it generates more than 5% of its revenues from thermal coal-fired power generation or thermal coal mining.",
        "phrases": [
          {
            "id": "more-than-5pc",
            "label": "more than 5% of its revenues",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              111,
              139
            ],
            "plain_range": [
              60,
              88
            ],
            "means": "This explains who is phased out: clients above 5% of revenue from thermal coal, measured on the entity financed.",
            "lets_through": [
              "This wording lets through clients at or below 5% after 2035, and low-coal entities of coal-heavy groups."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 3,
        "role": "exception",
        "source_id": "ccs2025",
        "title": "The exception",
        "intro": "At the end of the Thermal Coal Mining section, Barclays says when it will consider exceptions.",
        "location": {
          "distance": "nearby",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will consider exceptions to our thermal coal mining policy on a case-by-case basis for any transition finance provided by Barclays to clients reducing their thermal coal portfolio including retrofitting of existing facilities.",
        "plain_rendering": "Barclays will consider exceptions to its thermal coal mining policy on a case-by-case basis for transition finance to clients reducing their thermal coal portfolio, including retrofitting existing facilities.",
        "phrases": [
          {
            "id": "case-by-case",
            "label": "on a case-by-case basis",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "evaluated case-by-case",
            "not_in_synthesis": false,
            "verbatim_range": [
              62,
              85
            ],
            "plain_range": [
              68,
              91
            ],
            "means": "This explains that exceptions are considered one at a time, for transition finance to clients reducing their coal portfolio.",
            "lets_through": [
              "This wording lets through transition finance after 2035 to any coal client Barclays judges to be reducing its coal portfolio."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "thermal-coal",
      "phase-out",
      "transition-plan"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 25,
      "commitment_id": "170cb128-52e0-5e6b-83f5-42cfb39c76b3",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=25",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        11268,
        11369
      ],
      "summary_text": "By 1 January 2035, Barclays will phase out financing globally for all clients engaged in thermal coal mining (>5% revenue).",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "existing"
        }
      },
      "triggers": [
        {
          "metric": "revenue_share",
          "inequality": ">",
          "value": 5,
          "definition": "revenue generated from thermal coal mining"
        }
      ],
      "commitment_type": "phase_out",
      "effective_date": "2035-01-01",
      "exceptions": [
        {
          "condition": "Transition finance provided by Barclays to clients reducing their thermal coal portfolio, evaluated case-by-case",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": false,
          "where": null
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 1 fields corrected]\nCHANGES:\n- Barclays will not finance oil sands exploration and production companies (majority owners or operators deriving ≥10% revenue from oil sands).: Removed exception for <10% revenue as it is already captured in the threshold field.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
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
      },
      {
        "condition": "COAL THRESHOLDS APPLY TO THE ENTITY FINANCED · KEY DEFINITIONS — Any restriction relating to the % revenue a client generates from thermal coal “applies to the consolidated revenues of the entity being financed, whether transacting with a Group parent, subsidiary or joint venture.” A subsidiary with little coal revenue passes, whatever its group earns from coal.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "KEY DEFINITIONS"
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
          "recommended_because": "A global phase-out date at 5% covering all financing is genuinely strong.",
          "text": "Credit first: by 2035, every client worldwide earning more than 5% of its revenue from thermal coal mining loses all Barclays financing. A global date and a low threshold, together, are a real exit.\n\nThe limits: the 5% is measured on the entity financed, not its group, and transition finance to a client reducing its coal portfolio can still be excepted case by case."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "The phase-out is global and complete in 2035, with two soft edges.\n\nThe 5% applies to the entity financed, so a group can borrow through a low-coal entity. And transition finance to coal clients reducing their portfolios can be excepted case by case, without disclosure."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who loses financing in 2035.\n\nEvery client above 5% of revenue from thermal coal mining, unless excepted for transition finance. Low-coal entities of coal groups do not."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Test the group",
          "content": "Apply the 5% threshold to the group's consolidated revenue."
        },
        {
          "title": "Limit the exception",
          "content": "Tie transition-finance exceptions to published criteria and disclose each one."
        }
      ],
      "what_needs_to_change_closing": "Until then, the 2035 exit is real for the entity, and negotiable for its group.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays commits to phase out financing to thermal coal mining clients worldwide by 2035. We have not yet reviewed what it financed against this commitment.",
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
