/* Commitment data — generated from commitments/commitment-barclays-coal-power-clients-30pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-coal-power-clients-30pc",
    "bank": "Barclays",
    "commitment_number": 28,
    "category": "coal",
    "effective_date": null,
    "title": "Barclays' 30% Threshold for Coal Power Clients",
    "short_title": "30% Threshold for Coal Power Clients",
    "subject": "Coal Power Clients",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Thermal Coal Power section of its Climate Change Statement of December 2025. It commits the bank to stop financing companies that depend heavily on coal-fired power generation.",
    "naive_reading": "it will not finance companies that depend on coal power",
    "plain_language_note": "The rule is plain; the definition of the revenue it counts comes from the table at the end of the statement.",
    "sources_intro": "One policy document states this commitment, and two passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=28",
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
          "passages": 2,
          "found": 2,
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
        "intro": "The second entity-level restriction in the Thermal Coal Power section.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide financing to clients that generate more than 30% of their revenue from thermal coal-fired power generation.",
        "plain_rendering": "Barclays will not provide financing to clients that generate more than 30% of their revenue from thermal coal-fired power generation.",
        "phrases": [
          {
            "id": "more-than-30pc",
            "label": "more than 30% of their revenue",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              55,
              85
            ],
            "plain_range": [
              61,
              91
            ],
            "means": "This explains the threshold: revenue from coal-fired generation above 30% of the entity's revenue. The revenue counted is defined below.",
            "lets_through": [
              "This wording lets through clients between 5% and 30% until the 2030 and 2035 phase-out dates, and any entity with little coal revenue of its own, whatever its group earns."
            ],
            "defined_in_clause": 2,
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
        "intro": "From the table of definitions at the end of the statement, which revenue counts.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Revenue” is set in italics in the rule, and nothing else points to the definitions table."
        },
        "verbatim": "Refers to revenues attributable directly to the generation of electricity from thermal coal and excludes any other revenues including revenues attributable to the transmission and distribution of electricity.",
        "plain_rendering": "Revenue from thermal coal-fired power generation means revenue directly from generating electricity from coal, and excludes any other revenues, including transmission and distribution.",
        "phrases": [
          {
            "id": "excludes-other",
            "label": "excludes any other revenues",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              96,
              123
            ],
            "plain_range": [
              115,
              142
            ],
            "means": "This explains that only generation revenue counts towards the 30%.",
            "lets_through": [
              "This wording lets through vertically integrated utilities, whose transmission, distribution and retail revenue dilutes the coal share without reducing the coal burned."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "coal-fired-power-generation",
      "revenue-threshold"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 28,
      "commitment_id": "c4075a8b-52bb-5d32-8272-f7e918c170c3",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=28",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        12008,
        12141
      ],
      "summary_text": "Barclays will not provide financing to clients that generate more than 30% of their revenue from thermal coal-fired power generation.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "downstream",
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
          "value": 30,
          "definition": "consolidated revenues directly attributable to generation of electricity from thermal coal"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [],
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
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "A 30% share of revenue lets integrated utilities through.",
          "text": "The threshold is 30% of revenue, and the revenue counted is narrow.\n\nOnly revenue directly from coal-fired generation counts, measured against the entity's total revenue. A vertically integrated utility with large network and retail businesses can burn a great deal of coal and stay under 30%.\n\nWatchtower rates this `holds`. The narrowing is in the number and its definition."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who loses financing today.\n\nGenerators earning more than 30% of their revenue from coal. Integrated utilities with the same coal fleets, and larger other businesses, are not caught until the phase-out dates."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the restriction applies to all clients now, with a published threshold and a defined measure.\n\nWhere it stops is the height of the line."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Add an absolute test",
          "content": "Count coal-fired capacity or generation, not only revenue share."
        },
        {
          "title": "Lower the threshold before 2030",
          "content": "Publish a path from 30% down to the 5% phase-out threshold."
        }
      ],
      "what_needs_to_change_closing": "Until then, the largest coal-burning utilities pass on share.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays commits to stop financing companies that earn more than 30% of their revenue from coal-fired power. We have not yet reviewed what it financed against this commitment.",
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
