/* Commitment data — generated from commitments/commitment-barclays-oil-sands-corporate-financing.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-oil-sands-corporate-financing",
    "bank": "Barclays",
    "commitment_number": 14,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "Barclays' Commitment on Corporate Financing for Oil Sands",
    "short_title": "Commitment on Corporate Financing for Oil Sands",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Unconventional Oil & Gas section of its Climate Change Statement of December 2025. It commits the bank not to provide general corporate financing for building new oil sands operations or pipelines.",
    "naive_reading": "it will not lend to companies building new oil sands operations",
    "plain_language_note": "The rule is precise and the plain version changes little.",
    "sources_intro": "One policy document states this commitment, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=14",
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
          "passages": 1,
          "found": 1,
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
        "intro": "The second entity-level restriction on oil sands, extending the project rule to general corporate financing.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide general corporate purposes financing that is specified as being wholly or primarily for the construction of new: (i) Oil Sands exploration, production and/or Oil Sands processing assets; or (ii) Oil Sands pipelines.",
        "plain_rendering": "Barclays will not provide general corporate purposes financing that is specified as being wholly or primarily for building new oil sands exploration, production or processing assets, or new oil sands pipelines.",
        "phrases": [
          {
            "id": "specified-as-being",
            "label": "specified as being",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              65,
              83
            ],
            "plain_range": [
              71,
              89
            ],
            "means": "The words “specified as being” limit this commitment to general corporate financing whose use is stated as oil sands construction.",
            "lets_through": [
              "This wording lets through general corporate financing with no stated use — which is what general corporate financing usually is — whatever the company then builds."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "wholly-or-primarily",
            "label": "wholly or primarily",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              84,
              103
            ],
            "plain_range": [
              90,
              109
            ],
            "means": "The words “wholly or primarily” mean the stated use must be mostly oil sands construction, and the statement never says how much counts as mostly.",
            "lets_through": [
              "This wording lets through financing where oil sands construction is one stated use among several."
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
      "corporate-finance",
      "use-of-proceeds-loan"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 14,
      "commitment_id": "88a832ef-4618-57d3-ad67-cb4bad9c96ea",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=14",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        9147,
        9390
      ],
      "summary_text": "Barclays will not provide general corporate financing specified for the construction of new oil sands assets or pipelines.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "oil_sands"
          ],
          "value_chain": null,
          "activity_scope": "new"
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
      "triggers": [],
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
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "General corporate financing that must be specified for a use is a narrow category; stated flatly that is the gap.",
          "text": "The commitment reaches general corporate financing — but only when it is specified as being mainly for new oil sands construction.\n\nGeneral corporate financing is, by its nature, financing without a specified use. A company building a new oil sands project can borrow for general corporate purposes and spend the funds on it, and the commitment does not apply.\n\nWatchtower rates this `holds`, with no exception recorded. The narrowing is in the words “specified as being”."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who has to change anything because of this commitment.\n\nA company that asks Barclays for general corporate financing and states that most of it is for building a new oil sands asset. That company is caught.\n\nThe same company asking for general corporate financing without stating a use is not. The commitment binds the candid borrower."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the commitment tries to close the gap its project-level twin leaves open, by reaching general corporate financing.\n\nIt does so only for financing specified for oil sands construction, which is the smallest part of general corporate financing."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Drop “specified as being”",
          "content": "Restrict general corporate financing to companies building new oil sands assets, whatever the stated use."
        },
        {
          "title": "Put a number on “primarily”",
          "content": "Say what share of a facility's stated use makes it primarily for oil sands."
        }
      ],
      "what_needs_to_change_closing": "Until then, the restriction applies to general corporate financing that says what it is for, which general corporate financing rarely does.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays commits not to provide general corporate financing for building new oil sands operations or pipelines. We have not yet reviewed what it financed against this commitment.",
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
