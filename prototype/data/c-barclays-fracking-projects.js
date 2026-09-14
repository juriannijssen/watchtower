/* Commitment data — generated from commitments/commitment-barclays-fracking-projects.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-fracking-projects",
    "bank": "Barclays",
    "commitment_number": 8,
    "category": "fracking",
    "effective_date": null,
    "title": "Barclays' Commitment on UK and European Fracking Projects",
    "short_title": "Commitment on UK and European Fracking Projects",
    "article_published": null,
    "intro": "Barclays sets out this restriction in the Unconventional Oil & Gas section of its Climate Change Statement of December 2025. It commits the bank not to finance fracking projects in the UK and Europe.",
    "naive_reading": "it will not finance fracking",
    "plain_language_note": "The rule is plain. The definition of direct financing comes from the table at the end of the statement.",
    "sources_intro": "One policy document states this commitment, and two passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=8",
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
        "intro": "The project-level restriction on fracking in the Unconventional Oil & Gas section.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not directly finance projects involving Hydraulic Fracturing (Fracking) in the UK and Europe.",
        "plain_rendering": "Barclays will not directly finance projects involving Hydraulic Fracturing (Fracking) in the UK and Europe.",
        "phrases": [
          {
            "id": "directly-finance",
            "label": "directly finance",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              12,
              28
            ],
            "plain_range": [
              18,
              34
            ],
            "means": "The words “directly finance” reach financing whose use is known to be for the project. The statement defines the term, quoted below.",
            "lets_through": [
              "This wording lets through general-purpose financing to fracking companies, whatever they spend it on."
            ],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "uk-europe",
            "label": "in the UK and Europe",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              80,
              100
            ],
            "plain_range": [
              86,
              106
            ],
            "means": "The words “in the UK and Europe” limit this commitment to the one region where fracking is least developed.",
            "lets_through": [
              "This wording lets through fracking projects everywhere else — North America, Argentina, Australia — where almost all fracking happens."
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
        "intro": "From the table of definitions at the end of the statement, what directly financing means.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Directly finance” is set in italics in the rule, and nothing else points to the definitions table."
        },
        "verbatim": "Refers to financing where the use of proceeds is known to be for a particular project.",
        "plain_rendering": "To directly finance means financing where the use of proceeds is known to be for a particular project.",
        "phrases": [
          {
            "id": "use-of-proceeds",
            "label": "use of proceeds is known",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              30,
              54
            ],
            "plain_range": [
              46,
              70
            ],
            "means": "This explains the test: whether Barclays knows the financing is for the project.",
            "lets_through": [
              "This wording lets through any financing whose use is not stated."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "shale",
      "use-of-proceeds-loan",
      "project-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 8,
      "commitment_id": "d6fefd79-48e2-5b06-aa97-6f08f537d2a7",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=8",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        8052,
        8157
      ],
      "summary_text": "Barclays will not directly finance hydraulic fracturing (fracking) projects in the UK and Europe.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "shale"
          ],
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": false
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
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.2 §4.1",
        "inputs_source": "Watchtower record",
        "result": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The geography is the gap, and it is best stated flatly.",
          "text": "The restriction applies where fracking barely happens.\n\nIt covers fracking projects in the UK and Europe. The UK has a moratorium on fracking in England, several European countries ban it, and most of the world's fracking takes place in North America and Argentina, which this commitment does not reach.\n\nWithin the UK and Europe it covers direct financing only: financing whose use is known to be for the project. General-purpose financing to the same company is untouched.\n\nWhat remains is earmarked financing for a fracking project in a region where there are few to finance."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who has to change anything because of this commitment.\n\nA developer asking Barclays for financing earmarked for a fracking project in the UK or Europe. There are few such developers and fewer such projects.\n\nA shale producer in the United States or Argentina is not caught, whatever the financing is for. Neither is a European developer borrowing for general purposes.\n\nThe commitment binds the region that has already largely decided against fracking, and releases the regions where it happens."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the statement defines fracking precisely and restricts direct financing — any financing known to be for the project — not only project finance.\n\nWhere it stops is the map. The UK and Europe account for a tiny share of fracking. The commitment is accurate about what it covers and covers very little."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Apply it everywhere",
          "content": "Restrict financing for fracking projects wherever they are, not only in the UK and Europe."
        },
        {
          "title": "Cover general-purpose financing",
          "content": "Restrict financing to companies developing fracking projects whatever its stated use."
        }
      ],
      "what_needs_to_change_closing": "Until then, the restriction covers the fracking that was not going to happen anyway.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays commits not to finance fracking projects in the UK and Europe. We have not yet reviewed what it financed against this commitment.",
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
