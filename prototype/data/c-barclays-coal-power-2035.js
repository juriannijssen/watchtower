/* Commitment data — generated from commitments/commitment-barclays-coal-power-2035.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-coal-power-2035",
    "bank": "Barclays",
    "commitment_number": 32,
    "category": "coal",
    "effective_date": "2035-01-01",
    "title": "Barclays' 2035 Global Phase-out of Coal Power Clients",
    "short_title": "2035 Global Phase-out of Coal Power Clients",
    "subject": "Coal Power Clients Worldwide",
    "article_published": null,
    "intro": "Barclays sets out this phase-out in the Thermal Coal Power section of its Climate Change Statement of December 2025. It commits the bank to end its financing of coal-fired power companies worldwide by the start of 2035.",
    "naive_reading": "it is ending its financing of coal power companies everywhere",
    "plain_language_note": "The rule is plain; the conditions that suspend the date and the exception follow it in the same section.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=32",
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
          "passages": 6,
          "found": 6,
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
        "intro": "The statement's final phase-out date for coal-fired power.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "By 1 January 2035, we will phase out financing for all clients engaged in thermal coal-fired power generation.",
        "plain_rendering": "By 1 January 2035, Barclays will phase out financing for all clients engaged in thermal coal-fired power generation.",
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
              "This wording lets through clients outside the EU and OECD between 5% and 10% until then."
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
        "title": "The date exceptions",
        "intro": "Directly after the 2035 date, three conditions under which the phase-out dates do not apply.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Exceptions to the phase out date(s) for thermal coal-fired power generation apply if: … Remaining thermal coal-fired power plants are abated to reduce GHG emissions to near zero; OR … Remaining thermal coal-fired power plants solely utilised as backup to low carbon power supply; OR … Remaining thermal coal-fired power plants are required to remain open by operation of law, regulation or contract.",
        "plain_rendering": "The phase-out dates do not apply to remaining coal-fired plants that are abated to reduce GHG emissions to near zero, solely utilised as backup to low carbon power supply, or required to remain open by operation of law, regulation or contract.",
        "phrases": [
          {
            "id": "abated",
            "label": "abated to reduce GHG emissions to near zero",
            "type": "unverifiable_metric",
            "source": "watchtower_exception",
            "watchtower_ref": "abated to reduce GHG emissions to near zero",
            "not_in_synthesis": false,
            "verbatim_range": [
              134,
              177
            ],
            "plain_range": [
              73,
              116
            ],
            "means": "This explains the first condition: a plant fitted to cut its emissions to near zero. The statement does not say what counts as near zero, or how it is measured.",
            "lets_through": [
              "This wording lets through financing to clients whose plants claim near-zero abatement, on a definition the statement leaves open."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "backup",
            "label": "solely utilised as backup to low carbon power supply",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "backup to low carbon power supply",
            "not_in_synthesis": false,
            "verbatim_range": [
              226,
              278
            ],
            "plain_range": [
              118,
              170
            ],
            "means": "This explains the second condition: plants kept only as backup for low-carbon supply.",
            "lets_through": [
              "This wording lets through clients with coal plants held in reserve, however often the reserve is called on."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "required-open",
            "label": "required to remain open by operation of law, regulation or contract",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "required to remain open by operation of law, regulation or contract",
            "not_in_synthesis": false,
            "verbatim_range": [
              331,
              398
            ],
            "plain_range": [
              175,
              242
            ],
            "means": "This explains the third condition: plants that law, regulation or a contract keeps open.",
            "lets_through": [
              "This wording lets through clients whose coal plants are held open by a contract — including one the client itself signed."
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
        "intro": "At the end of the Thermal Coal Power section, Barclays says when it will consider exceptions to the policy as a whole.",
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
            "means": "This explains that exceptions are considered one at a time, for transition finance or decommissioning.",
            "lets_through": [
              "This wording lets through transition finance after 2035 to coal power clients Barclays judges to be reducing their coal portfolio."
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
      "phase-out",
      "transition-plan"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 32,
      "commitment_id": "65d08b03-dbe5-503d-81d6-3689dc648407",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=32",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        12946,
        13069
      ],
      "summary_text": "By 1 January 2035, Barclays will phase out financing globally for all clients engaged in thermal coal-fired power generation (>5% revenue), with exceptions for near-zero abatement, backup, or legal mandate.",
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
          "definition": "revenue generated from thermal coal-fired power generation"
        }
      ],
      "commitment_type": "phase_out",
      "effective_date": "2035-01-01",
      "exceptions": [
        {
          "condition": "Remaining thermal coal-fired power plants are abated to reduce GHG emissions to near zero",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": null,
          "standing": false,
          "where": null
        },
        {
          "condition": "Remaining thermal coal-fired power plants are solely utilised as backup to low carbon power supply",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": null,
          "standing": false,
          "where": null
        },
        {
          "condition": "Remaining thermal coal-fired power plants are required to remain open by operation of law, regulation or contract",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": null,
          "standing": false,
          "where": null
        },
        {
          "condition": "Transition finance to clients reducing their coal portfolio (including retrofitting) or decommissioning plants, evaluated case-by-case",
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
        "commitment_specific_carve_outs": 4,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "Three conditions suspend the final date; stated flatly that is the gap.",
          "text": "The global date is 2035, and three conditions suspend it.\n\nPlants abated to near zero, plants kept as backup to low-carbon supply, and plants held open by law, regulation or contract all fall outside the phase-out. The contract can be the client's own. Transition finance can be excepted case by case on top, and the 5% is measured on the entity financed."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who loses financing in 2035.\n\nEvery client above 5% of revenue from coal power whose plants are not abated, not backup, and not held open by law or contract, and which is not receiving transition finance."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: a global phase-out date at 5%, covering all financing.\n\nWhere it stops is the three conditions that suspend it, which the statement lists without defining."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Define the suspensions",
          "content": "Say what “near zero” means, how backup use is measured, and exclude contracts the client itself entered."
        },
        {
          "title": "Test the group",
          "content": "Apply the 5% threshold to the group's consolidated revenue."
        }
      ],
      "what_needs_to_change_closing": "Until then, the 2035 exit applies to plants that are not abated, backup or contracted.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays commits to phase out financing to coal-fired power clients worldwide by 2035. We have not yet reviewed what it financed against this commitment.",
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
