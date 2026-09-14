/* Commitment data — generated from commitments/commitment-barclays-coal-mining-2030-rest-of-world.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-coal-mining-2030-rest-of-world",
    "bank": "Barclays",
    "commitment_number": 24,
    "category": "coal",
    "effective_date": "2030-01-01",
    "title": "Barclays' 10% Coal Mining Threshold Outside the OECD",
    "short_title": "10% Coal Mining Threshold Outside the OECD",
    "subject": "Coal Mining Outside the EU and OECD",
    "article_published": null,
    "intro": "Barclays sets out this restriction in the Thermal Coal Mining section of its Climate Change Statement of December 2025. From the start of 2030, it commits the bank to stop financing coal mining companies outside the EU and OECD that depend heavily on thermal coal.",
    "naive_reading": "it will stop financing coal mining companies in the rest of the world",
    "plain_language_note": "The rule is plain; the exception comes from the end of the section.",
    "sources_intro": "One policy document states this commitment, and two passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=24",
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
        "intro": "The second half of the statement's 2030 coal mining step, for clients outside the EU and OECD.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "By 1 January 2030: … For the rest of the world, we will no longer provide financing to clients that generate more than 10% of revenue from thermal coal mining.",
        "plain_rendering": "By 1 January 2030, for the rest of the world, Barclays will no longer provide financing to clients that generate more than 10% of revenue from thermal coal mining.",
        "phrases": [
          {
            "id": "more-than-10pc",
            "label": "more than 10% of revenue",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              109,
              133
            ],
            "plain_range": [
              113,
              137
            ],
            "means": "This explains the 2030 threshold outside the EU and OECD: thermal coal mining revenue above 10% of the entity's revenue — twice the EU and OECD threshold.",
            "lets_through": [
              "This wording lets through clients outside the EU and OECD earning between 5% and 10% of revenue from thermal coal mining until 2035, and any client below 30% until 2030."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
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
              "This wording lets through transition finance to any coal client above the threshold that Barclays judges to be reducing its coal portfolio."
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
      "revenue-threshold",
      "oecd",
      "transition-plan"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 24,
      "commitment_id": "1a884b42-f4cc-58aa-9e9e-626cb38dbfd7",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=24",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        10997,
        11264
      ],
      "summary_text": "By 1 January 2030, Barclays will exclude financing for clients outside the EU/OECD generating more than 10% of revenue from thermal coal mining.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
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
          "metric": "revenue_share",
          "inequality": ">",
          "value": 10,
          "definition": "revenue generated from thermal coal mining"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "2030-01-01",
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
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "A doubled threshold outside the EU and OECD is the gap; stated flatly.",
          "text": "Outside the EU and OECD, 2030 brings a threshold, not a phase-out.\n\nClients earning more than 10% of revenue from thermal coal mining lose financing in 2030; those between 5% and 10% keep it until 2035. The threshold is measured on the entity financed, and transition finance can be excepted case by case.\n\nMost of the world's thermal coal is mined outside the EU and OECD."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who loses financing in 2030 outside the EU and OECD.\n\nClients above 10% of revenue from thermal coal mining. Those between 5% and 10% do not, until 2035."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the commitment sets a date and a published threshold for the rest of the world, and a global phase-out follows in 2035.\n\nWhere it stops is the threshold, twice the EU and OECD line, where most mining happens."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "One threshold everywhere",
          "content": "Apply the 5% threshold outside the EU and OECD from 2030, as inside them."
        },
        {
          "title": "Publish the exceptions",
          "content": "Disclose the transition-finance exceptions granted to coal miners, with amounts."
        }
      ],
      "what_needs_to_change_closing": "Until then, the rest of the world gets five more years and a higher line.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays commits to stop financing coal mining clients outside the EU and OECD that earn more than 10% of revenue from thermal coal by 2030. We have not yet reviewed what it financed against this commitment.",
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
