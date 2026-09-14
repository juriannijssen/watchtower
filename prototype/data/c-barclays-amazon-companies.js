/* Commitment data — generated from commitments/commitment-barclays-amazon-companies.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-amazon-companies",
    "bank": "Barclays",
    "commitment_number": 15,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "Barclays' Commitment on Amazon Oil & Gas Companies",
    "short_title": "Commitment on Amazon Oil & Gas Companies",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Unconventional Oil & Gas section of its Climate Change Statement of December 2025. It commits the bank not to finance companies engaged in oil and gas in the Amazon.",
    "naive_reading": "it will not finance companies that drill for oil and gas in the Amazon",
    "plain_language_note": "The rule is plain; its key term is defined in the table at the end of the statement.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=15",
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
        "intro": "The entity-level restriction on the Amazon in the Unconventional Oil & Gas section.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide financing to Clients engaged in exploration, appraisal, development, and production of oil & gas in the Amazon Biome.",
        "plain_rendering": "Barclays will not provide financing to Clients engaged in exploration, appraisal, development and production of oil & gas in the Amazon Biome.",
        "phrases": [
          {
            "id": "engaged-in",
            "label": "engaged in",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              41,
              51
            ],
            "plain_range": [
              47,
              57
            ],
            "means": "The words “engaged in” are defined: more than 5% of a client's expenditure on Amazon oil and gas projects. The definition is quoted below.",
            "lets_through": [
              "This wording lets through clients whose Amazon oil and gas spending is 5% or less of their capital and operating expenditure."
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
        "intro": "From the table of definitions at the end of the statement, what engaged in means for Amazon oil and gas.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Engaged in” is set in italics elsewhere in the statement, but not in this rule; nothing points to the definition."
        },
        "verbatim": "In relation to Amazon Oil & Gas, a client is defined as “engaged in” if more than 5% of its expenditure (CAPEX and OPEX) are on oil & gas projects in the Amazon Biome.",
        "plain_rendering": "For Amazon oil & gas, a client is engaged in it if more than 5% of its expenditure (CAPEX and OPEX) is on oil & gas projects in the Amazon Biome.",
        "phrases": [
          {
            "id": "more-than-5pc",
            "label": "more than 5% of its expenditure",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              72,
              103
            ],
            "plain_range": [
              51,
              82
            ],
            "means": "This explains the threshold: Amazon oil and gas spending as a share of the client's total capital and operating expenditure.",
            "lets_through": [
              "This wording lets through large companies with sizeable Amazon operations that are a small share of a larger budget."
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
        "title": "Who it applies to",
        "intro": "From the same table, who counts as the client.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Clients” is set in italics in the rule, and nothing else points to its definition."
        },
        "verbatim": "Means in relation to any proposed transaction the client entity (or entities) entering into the transaction.",
        "plain_rendering": "The client means the client entity (or entities) entering into the transaction.",
        "phrases": [
          {
            "id": "entering-transaction",
            "label": "the client entity (or entities) entering into the transaction",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              46,
              107
            ],
            "plain_range": [
              17,
              78
            ],
            "means": "This explains that the 5% test is applied to the entity that borrows, not to its group.",
            "lets_through": [
              "This wording lets through financing to a parent or sister company of an Amazon operator, if that entity's own spending is not more than 5% in the Amazon."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "exploration",
      "capital-investment",
      "group-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 15,
      "commitment_id": "22649be6-0204-5e9a-9333-d08c6be6fc71",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=15",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        9416,
        9559
      ],
      "summary_text": "Barclays will not finance clients engaged in oil & gas exploration, appraisal, development, and production in the Amazon Biome (>5% capex and opex).",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
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
          "metric": "other",
          "inequality": ">",
          "value": 5,
          "definition": "share of expenditure (CAPEX and OPEX) on oil & gas projects in the Amazon Biome"
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
        "condition": "EXISTING OIL AND GAS FINANCING STAYS IN PLACE · APPLICABILITY OF FINANCING RESTRICTIONS — “Any existing commitments or financing entered into prior to any of the restrictions coming into effect under the Upstream Oil & Gas and Unconventional Oil & Gas sections of this statement may remain in place”; only refinancings are subject to the restrictions.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": "commitment 6 only",
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
          "recommended_because": "A 5% threshold on all financing is genuinely strict; conceding it first makes the entity-level test land.",
          "text": "Credit first: the threshold is low and the reach is wide. More than 5% of spending in Amazon oil and gas is enough to be caught, and the restriction covers all financing, not only projects. The Amazon Biome is defined by a published boundary.\n\nWhere it stops is who is measured. The client is the entity entering the transaction, so the test runs on the borrower, not its group. A parent or financing subsidiary whose own spending is not concentrated in the Amazon can borrow for a group that operates there.\n\nWatchtower rates this `holds`. The narrowing is in the definition of client."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "The threshold is strict; the unit it is measured on is not.\n\nThe 5% test applies to the client entity entering the transaction. A group can route financing through an entity whose own spending is not concentrated in the Amazon — a parent, a treasury company, a sister subsidiary — and the test is not met.\n\nAnd a large company with sizeable Amazon operations that are a small share of a larger budget passes."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who this restriction reaches.\n\nAn entity that borrows from Barclays and spends more than a twentieth of its budget on Amazon oil and gas. Specialist Amazon operators are caught.\n\nA diversified group borrowing through an entity with little Amazon exposure is not. The commitment binds the entity, and the group chooses which entity borrows."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Test the group",
          "content": "Apply the 5% test to the borrower's whole group, so financing cannot be routed around the Amazon operator."
        },
        {
          "title": "Add an absolute measure",
          "content": "Count Amazon production or acreage, not only a share of spending, so large operators cannot pass on share alone."
        }
      ],
      "what_needs_to_change_closing": "Until then, the restriction reaches the entity that operates in the Amazon, and not necessarily the one that borrows for it.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays commits not to finance companies engaged in oil and gas in the Amazon. We have not yet reviewed what it financed against this commitment.",
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
