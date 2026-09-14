/* Commitment data — generated from commitments/commitment-barclays-new-coal-mining-clients.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-new-coal-mining-clients",
    "bank": "Barclays",
    "commitment_number": 19,
    "category": "coal",
    "effective_date": null,
    "title": "Barclays' Commitment on New Coal Mining Clients",
    "short_title": "Commitment on New Coal Mining Clients",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Thermal Coal Mining section of its Climate Change Statement of December 2025. It commits the bank not to take on companies engaged in thermal coal mining.",
    "naive_reading": "it will not finance companies that mine thermal coal",
    "plain_language_note": "The rule is short; the two definitions that decide its reach come from the table at the end of the statement.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=19",
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
        "intro": "The first entity-level restriction in the Thermal Coal Mining section.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide financing to new clients engaged in thermal coal mining.",
        "plain_rendering": "Barclays will not provide financing to new clients engaged in thermal coal mining.",
        "phrases": [
          {
            "id": "new-clients",
            "label": "new clients",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              33,
              44
            ],
            "plain_range": [
              39,
              50
            ],
            "means": "The words “new clients” limit this commitment to companies Barclays does not already serve. The definition, quoted below, judges newness across the whole group.",
            "lets_through": [
              "This wording lets through every existing client engaged in thermal coal mining. They are covered by the 30% rule and the phase-out dates instead."
            ],
            "defined_in_clause": 3,
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
            "means": "This explains the threshold: thermal coal revenue as a share of the client's revenue. The statement applies it to the consolidated revenue of the entity being financed.",
            "lets_through": [
              "This wording lets through a new client at or below 5% — and an entity with little coal revenue of its own, whatever its group earns from coal."
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
        "intro": "From the same table, who counts as a new client.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“New clients” is set in italics in the rule, and nothing else points to its definition."
        },
        "verbatim": "Refers to an entity in relation to whom no member of the Group is an existing client of Barclays.",
        "plain_rendering": "A new client is an entity in relation to whom no member of the Group is an existing client of Barclays.",
        "phrases": [
          {
            "id": "no-member",
            "label": "no member of the Group is an existing client",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              40,
              84
            ],
            "plain_range": [
              46,
              90
            ],
            "means": "This explains that newness is judged across the whole group.",
            "lets_through": [
              "This wording lets through a new coal-mining entity of any group Barclays already serves."
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
      "existing-client",
      "revenue-threshold"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 19,
      "commitment_id": "36fdd664-14fa-5c8c-83eb-ad05f3cf0355",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=19",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        10191,
        10273
      ],
      "summary_text": "Barclays will not provide financing to new clients engaged in thermal coal mining (>5% revenue).",
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
          "relationship_status": "new",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new"
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
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.2 §4.1",
        "inputs_source": "Watchtower record",
        "result": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": true,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "New clients only, judged group-wide, is the gap.",
          "text": "The threshold is low and the scope is narrow.\n\nMore than 5% of revenue from thermal coal is enough to be engaged in it. But the rule applies to new clients only, and newness is judged across the group: if any company in a group already banks with Barclays, none of it is new.\n\nThe 5% is measured on the entity being financed, so a low-coal entity of a coal-heavy group passes.\n\nWhat remains is financing to a coal-engaged group with no existing tie to Barclays."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who is turned away under this commitment.\n\nA company earning more than 5% of its revenue from thermal coal, in a group that has never banked with Barclays. That company is caught.\n\nAny group already inside is not, until the phase-out dates. The commitment binds strangers."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the threshold is 5% of revenue, among the lowest in any bank's coal policy we have read, and the restriction covers all financing.\n\nWhere it stops is who it applies to: groups with no existing relationship."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Judge newness by entity",
          "content": "Treat a new entity as a new client even when its group already banks with Barclays."
        },
        {
          "title": "Test the group's coal revenue",
          "content": "Apply the 5% threshold to the group's consolidated revenue, not only to the entity being financed."
        }
      ],
      "what_needs_to_change_closing": "Until then, the 5% line keeps out coal miners Barclays has never met.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays commits not to take on companies engaged in thermal coal mining. We have not yet reviewed what it financed against this commitment.",
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
