/* Commitment data — generated from commitments/commitment-barclays-coal-power-projects.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-coal-power-projects",
    "bank": "Barclays",
    "commitment_number": 26,
    "category": "coal",
    "effective_date": null,
    "title": "Barclays' Commitment on Coal Power Plant Projects",
    "short_title": "Commitment on Coal Power Plant Projects",
    "article_published": null,
    "intro": "Barclays sets out this restriction in the Thermal Coal Power section of its Climate Change Statement of December 2025. It commits the bank not to finance new coal-fired power plants, or the expansion of existing ones, anywhere in the world.",
    "naive_reading": "it will not finance new or bigger coal power plants anywhere",
    "plain_language_note": "The rule is plain; the definition and the exception come from elsewhere in the statement. The definition's wording is Barclays' own, including the word “production”.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=26",
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
        "intro": "The project-level restriction in the Thermal Coal Power section.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide project finance to enable the construction or material expansion of thermal coal-fired power plants anywhere in the world, including captives.",
        "plain_rendering": "Barclays will not provide project finance to enable the construction or material expansion of thermal coal-fired power plants anywhere in the world, including captive plants.",
        "phrases": [
          {
            "id": "project-finance",
            "label": "project finance",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              20,
              35
            ],
            "plain_range": [
              26,
              41
            ],
            "means": "The words “project finance” limit this commitment to loans repaid from the plant's own cash flow. The statement's definition excludes corporate-level asset financing.",
            "lets_through": [
              "This wording lets through general corporate financing and bonds to the utilities and developers building or expanding coal plants."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "material-expansion",
            "label": "material expansion",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              66,
              84
            ],
            "plain_range": [
              72,
              90
            ],
            "means": "The words “material expansion” are defined, quoted below. For power they include extending a plant's unabated life, and capacity increases of more than 10%.",
            "lets_through": [
              "This wording lets through capacity increases of 10% or less that do not extend a plant's life."
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
        "intro": "From the table of definitions at the end of the statement, what counts as a material expansion of a coal plant.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Expansion” is set in italics in the rule, and nothing else points to the definitions table."
        },
        "verbatim": "In relation to Thermal Coal Power, production refers to an investment to (i) extend the unabated operating lifetime of existing thermal coal power plants including captives or (ii) increase net operational thermal power capacity, including captives, by more than 10% measure from a baseline of maximum capacity for preceding 3 years reported.",
        "plain_rendering": "For thermal coal power, material expansion means an investment that extends the unabated life of an existing coal plant, or increases its net capacity by more than 10% over its maximum in the preceding 3 years.",
        "phrases": [
          {
            "id": "more-than-10pc",
            "label": "by more than 10%",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              250,
              266
            ],
            "plain_range": [
              151,
              167
            ],
            "means": "This explains the capacity threshold: a rise of more than a tenth over the plant's recent peak. Life extension counts whatever the capacity.",
            "lets_through": [
              "This wording lets through capacity additions of a tenth or less, repeated against a rolling three-year baseline."
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
        "intro": "At the end of the Thermal Coal Power section, Barclays says when it will consider exceptions.",
        "location": {
          "distance": "nearby",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will consider exceptions to our thermal coal power policy on a case-by-case basis for any transition finance to clients reducing their thermal coal portfolio including retrofitting of existing facilities or where we are providing financing for decommissioning plants for those unable to transition.",
        "plain_rendering": "Barclays will consider exceptions to its thermal coal power policy on a case-by-case basis for transition finance to clients reducing their thermal coal portfolio, including retrofitting, or for decommissioning plants for those unable to transition.",
        "phrases": [
          {
            "id": "case-by-case",
            "label": "on a case-by-case basis",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "evaluated case-by-case",
            "not_in_synthesis": false,
            "verbatim_range": [
              61,
              84
            ],
            "plain_range": [
              67,
              90
            ],
            "means": "This explains that exceptions are considered one at a time, for transition finance or decommissioning. The statement does not say who decides or publish how often.",
            "lets_through": [
              "This wording lets through financing Barclays classes as transition finance for a client reducing its coal portfolio, including retrofits of existing plants."
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
      "project-finance",
      "capacity-expansion",
      "transition-plan"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 26,
      "commitment_id": "45f1c03a-a4b3-5415-8098-f861cb669a6d",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=26",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        11664,
        11832
      ],
      "summary_text": "Barclays will not provide project finance to construct or materially expand thermal coal-fired power plants anywhere globally, including captive plants.",
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
          "condition": "Transition finance to clients reducing their thermal coal portfolio (including retrofitting) or financing for plant decommissioning, evaluated case-by-case",
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
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "Counting life extension as expansion is genuinely unusual; conceding it first makes the instrument limit land.",
          "text": "Credit first: the definition of material expansion counts life extension. An investment that keeps an existing coal plant running unabated for longer is caught, not only one that adds capacity — and that is how most coal fleets grow now.\n\nWhere it stops is the instrument. Project finance, as defined, excludes corporate-level asset financing, so a utility can fund the same work from its balance sheet. And transition finance can be excepted case by case."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "The definition is broad; the instrument is narrow.\n\nOnly project finance is restricted. A utility building, expanding or extending a coal plant can raise general corporate financing and bonds from Barclays, subject to the separate client thresholds and phase-out dates. Capacity additions of a tenth or less are not expansion."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who has to change anything because of this commitment.\n\nA developer needing project finance for a new coal plant, a large capacity addition or a life extension. Utilities funding the same work at company level are not caught."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Cover the utility",
          "content": "Extend the restriction to general corporate financing for companies building, expanding or extending coal plants."
        },
        {
          "title": "Count cumulative capacity",
          "content": "Measure capacity additions against a fixed baseline, not the last three years' peak."
        }
      ],
      "what_needs_to_change_closing": "Until then, the plant cannot be project-financed, and the utility that owns it can still borrow.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays commits not to finance new coal-fired power plants or their material expansion. We have not yet reviewed what it financed against this commitment.",
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
