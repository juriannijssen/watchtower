/* Commitment data — generated from commitments/commitment-barclays-new-clients-expanding.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-new-clients-expanding",
    "bank": "Barclays",
    "commitment_number": 4,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "Barclays' Commitment on New Clients Expanding Oil & Gas",
    "short_title": "Commitment on New Clients Expanding Oil & Gas",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Upstream Oil & Gas section of its Climate Change Statement of December 2025. It commits the bank not to take on energy groups that put more than a tenth of their planned oil and gas spending into expansion.",
    "naive_reading": "it will not finance oil and gas companies that are expanding production",
    "plain_language_note": "The rule is plain. The definitions it depends on come from the table at the end of the statement.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=4",
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
        "intro": "The first of the statement's entity-level restrictions on upstream oil and gas.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide financing to new clients that are Energy Groups where more than 10% of their total planned oil & gas capital expenditure is in expansion.",
        "plain_rendering": "Barclays will not provide financing to new clients that are Energy Groups where more than 10% of their total planned oil & gas capital expenditure is in expansion.",
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
            "means": "The words “new clients” limit this commitment to groups Barclays does not already serve. The statement defines the term, quoted below.",
            "lets_through": [
              "This wording lets through every existing client, however much of its spending goes into expansion. Existing clients are reviewed, not restricted."
            ],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "more-than-10pc",
            "label": "more than 10%",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              74,
              87
            ],
            "plain_range": [
              80,
              93
            ],
            "means": "This explains the threshold: expansion as a share of the group's total planned oil and gas capital expenditure.",
            "lets_through": [
              "This wording lets through new clients at or below 10%, however large their expansion budget. A share test lets through the largest spenders."
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
        "intro": "From the table of definitions at the end of the statement, who counts as a new client.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Clients” is set in italics in the rule, and nothing else points to the definitions table."
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
            "means": "This explains that newness is judged across the whole group: an entity is new only if no company in its group already banks with Barclays.",
            "lets_through": [
              "This wording lets through a new entity of any group Barclays already serves. One existing relationship anywhere in the group makes every part of it an existing client."
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
        "intro": "Under “Applicability of financing restrictions”, later in the statement, Barclays sets out when a restricted upstream group can still be financed.",
        "location": {
          "distance": "later_in_document",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "In certain cases, we may enter into Sustainable Finance or Transition Finance transactions with an entity in a Group that would otherwise be restricted as a result of the application of the Upstream Oil & Gas section of this statement where Barclays is satisfied that any Sustainable Finance or Transition Finance transactions provided to it will not be used directly to support oil & gas activity.",
        "plain_rendering": "In certain cases, Barclays may provide Sustainable Finance or Transition Finance to an entity in a Group that would otherwise be restricted under the Upstream Oil & Gas section, where Barclays is satisfied the financing will not be used directly to support oil & gas activity.",
        "phrases": [
          {
            "id": "barclays-satisfied",
            "label": "where Barclays is satisfied",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "if satisfied funds will not directly support oil & gas activity",
            "not_in_synthesis": false,
            "verbatim_range": [
              235,
              262
            ],
            "plain_range": [
              178,
              205
            ],
            "means": "This explains the condition on the carve-out: Barclays' own satisfaction that the financing will not be used directly for oil and gas.",
            "lets_through": [
              "This wording lets through sustainable or transition finance to a restricted group whenever Barclays is satisfied about its use. The word “directly” leaves indirect support — freeing the group's own funds for oil and gas — outside the test."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "existing-client",
      "capital-investment",
      "upstream",
      "transition-plan"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 4,
      "commitment_id": "294db9c4-b5bf-5e33-aaae-970e3cb49e01",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=4",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        6484,
        6649
      ],
      "summary_text": "Barclays will not provide financing to new clients that are Energy Groups where more than 10% of total planned oil & gas capex is allocated to expansion.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "group",
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
          "metric": "other",
          "inequality": ">",
          "value": 10,
          "definition": "share of total planned oil & gas capital expenditure in expansion (projects with FID after 31 Dec 2021)"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Barclays may enter into Sustainable Finance or Transition Finance transactions if satisfied funds will not directly support oil & gas activity",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": null,
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
        "commitment_specific_carve_outs": 1,
        "project_finance_only": false,
        "new_business_only": true,
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "New clients only, a share threshold and a transition carve-out each leave a clear gap.",
          "text": "The commitment reaches energy groups Barclays does not yet serve, and only those.\n\nAn existing client with the same expansion plans is reviewed, not restricted. And newness is judged across the group: if any company in the group already banks with Barclays, none of it is new.\n\nThe threshold is a share of planned capital expenditure, so a large producer whose expansion is a tenth or less of a large budget passes, however much it spends.\n\nA restricted group can still receive sustainable or transition finance where Barclays is satisfied it will not be used directly for oil and gas. What remains is ordinary financing to an unconnected new group with a high share of expansion spending."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who is turned away under this commitment.\n\nAn energy group that no part of has ever banked with Barclays, putting more than a tenth of its planned oil and gas capital expenditure into expansion, and seeking ordinary financing. That group is caught.\n\nAny group already inside is not. A group that expands less, in share, is not. A group seeking transition finance may not be.\n\nThe commitment binds the stranger, and releases the incumbents who account for most of Barclays' existing oil and gas lending."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: this is an entity-level restriction with a published threshold. It reaches all financing to a new energy group, not just project loans, and the test is a number anyone can check against a group's capital plans.\n\nWhere it stops is who it applies to. New clients only, with newness judged across the whole group, and a transition-finance carve-out that turns on Barclays' own satisfaction.\n\nThe tool is the right one. It is pointed at the groups the bank has not met."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Apply it to existing clients",
          "content": "Restrict financing to existing clients above the threshold too, rather than reviewing them."
        },
        {
          "title": "Close the transition route",
          "content": "Require transition finance to a restricted group to be ringfenced and verified, and disclose how much is provided."
        }
      ],
      "what_needs_to_change_closing": "Until then, the restriction keeps new expanding groups out and leaves the existing ones where they are.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays commits not to take on energy groups that put more than a tenth of their planned spending into oil and gas expansion. We have not yet reviewed what it financed against this commitment.",
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
