/* Commitment data — generated from commitments/commitment-barclays-oil-sands-companies.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-oil-sands-companies",
    "bank": "Barclays",
    "commitment_number": 13,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "Barclays' Commitment on Oil Sands Companies",
    "short_title": "Commitment on Oil Sands Companies",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Unconventional Oil & Gas section of its Climate Change Statement of December 2025. It commits the bank not to finance oil sands exploration and production companies.",
    "naive_reading": "it will not finance companies that produce oil from oil sands",
    "plain_language_note": "The rule is six words long. The definition that decides who it covers comes from the table at the end of the statement.",
    "sources_intro": "One policy document states this commitment, and two passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=13",
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
        "intro": "The entity-level restriction on oil sands in the Unconventional Oil & Gas section.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide financing to Oil Sands exploration and production companies.",
        "plain_rendering": "Barclays will not provide financing to Oil Sands exploration and production companies.",
        "phrases": [
          {
            "id": "oil-sands-companies",
            "label": "Oil Sands exploration and production companies",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              33,
              79
            ],
            "plain_range": [
              39,
              85
            ],
            "means": "The words “Oil Sands exploration and production companies” are a defined term. The definition, quoted below, decides who is covered.",
            "lets_through": [
              "This wording lets through whatever the definition leaves out — minority owners and groups with a small share of revenue from oil sands."
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
        "intro": "From the table of definitions at the end of the statement, which groups count.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "The term is set in italics in the rule, and nothing else points to its definition."
        },
        "verbatim": "Refers to Groups that majority own (>50%) or operate oil sands exploration, production & Oil Sands processing assets, excluding those that generate less than 10% of revenue from these activities.",
        "plain_rendering": "Oil Sands exploration and production companies are groups that majority own (>50%) or operate oil sands exploration, production or processing assets, excluding those that generate less than 10% of revenue from these activities.",
        "phrases": [
          {
            "id": "majority-own",
            "label": "majority own (>50%) or operate",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              22,
              52
            ],
            "plain_range": [
              63,
              93
            ],
            "means": "This explains the ownership test: a group must own more than half of an oil sands asset, or operate it.",
            "lets_through": [
              "This wording lets through minority partners in oil sands projects that do not operate them, however large their stake."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "less-than-10pc",
            "label": "less than 10% of revenue",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              148,
              172
            ],
            "plain_range": [
              180,
              204
            ],
            "means": "This explains the revenue floor: groups earning less than a tenth of their revenue from oil sands are excluded.",
            "lets_through": [
              "This wording lets through large integrated companies that own and operate oil sands assets but earn less than 10% of their revenue from them."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "oil-sands",
      "revenue-threshold",
      "group-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 13,
      "commitment_id": "f3ea1eb5-f1ab-5f01-83fe-369f78ecba0c",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=13",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        9056,
        9140
      ],
      "summary_text": "Barclays will not finance oil sands exploration and production companies (majority owners or operators deriving ≥10% revenue from oil sands).",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "oil_sands"
          ],
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
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
          "metric": "revenue_share",
          "inequality": ">=",
          "value": 10,
          "definition": "revenue from oil sands exploration, production & processing assets (for groups that majority own >50% or operate them)"
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
          "recommended_because": "An entity-level restriction on all financing is genuinely strong; conceding it first makes the definition's carve-outs land.",
          "text": "Credit first: this is an entity-level restriction on all financing to oil sands producers — loans, bonds, underwriting — not only on projects.\n\nThe definition decides who that is. A group must majority own or operate oil sands assets, and earn at least 10% of its revenue from them. A minority partner is outside it. So is a large integrated company whose oil sands operations are less than a tenth of its revenue.\n\nWatchtower rates this `holds`; its record carries no exception. The narrowing is in the definition."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "The rule is short and absolute; the definition is where it narrows.\n\nMinority partners in oil sands projects are not oil sands companies under the definition. Neither are majority owners that earn less than 10% of their revenue from oil sands, which includes large integrated producers with substantial oil sands operations.\n\nWhat remains is financing to groups that own or operate oil sands assets and depend on them for a tenth or more of revenue."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who this restriction reaches.\n\nThe specialist oil sands producers, which own and operate their assets and earn most of their revenue from them. Those are caught.\n\nA diversified major with oil sands operations below a tenth of its revenue is not. A minority partner is not.\n\nThe commitment binds the specialists and releases the largest companies with the largest balance sheets."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Drop the revenue floor",
          "content": "Cover every group that owns or operates oil sands assets, whatever share of revenue they represent."
        },
        {
          "title": "Include minority partners",
          "content": "Count significant minority stakes in oil sands projects, not only majority ownership or operation."
        }
      ],
      "what_needs_to_change_closing": "Until then, the restriction covers the oil sands specialists and not the majors with oil sands in their portfolio.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays commits not to finance oil sands exploration and production companies. We have not yet reviewed what it financed against this commitment.",
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
