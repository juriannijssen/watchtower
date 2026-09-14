/* Commitment data — generated from commitments/commitment-barclays-amazon-deepwater-heavy-oil-projects.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-amazon-deepwater-heavy-oil-projects",
    "bank": "Barclays",
    "commitment_number": 6,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "Barclays' Commitment on Amazon, Deepwater and Heavy Oil",
    "short_title": "Commitment on Amazon, Deepwater and Heavy Oil",
    "article_published": null,
    "intro": "Barclays sets out this restriction in the Unconventional Oil & Gas section of its Climate Change Statement of December 2025. It commits the bank not to finance oil and gas projects in the Amazon, in ultra-deep water or for extra heavy oil, or the infrastructure built for them.",
    "naive_reading": "it will not finance oil and gas in the Amazon, in ultra-deep water or from extra heavy oil",
    "plain_language_note": "The rule is one long sentence covering three kinds of project; the plain version keeps all three. The rule that lets existing financing stay comes from later in the statement.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=6",
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
          "passages": 4,
          "found": 4,
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
        "intro": "The project-level restriction in the Unconventional Oil & Gas section, covering three kinds of project in one sentence.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide direct financing to Energy Groups for any oil & gas projects in the Amazon Biome, or any oil & gas projects involving Ultra-Deep Water and/or Extra Heavy Oil, or infrastructure projects primarily to be used for such oil & gas projects.",
        "plain_rendering": "Barclays will not provide direct financing to Energy Groups for oil & gas projects in the Amazon Biome, or involving Ultra-Deep Water or Extra Heavy Oil, or for infrastructure projects primarily to be used for them.",
        "phrases": [
          {
            "id": "direct-financing",
            "label": "direct financing",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              20,
              36
            ],
            "plain_range": [
              26,
              42
            ],
            "means": "The words “direct financing” reach financing whose use is known to be for a particular project. The statement defines the term, quoted below.",
            "lets_through": [
              "This wording lets through general-purpose financing to the same groups, whatever they spend it on."
            ],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "energy-groups",
            "label": "to Energy Groups",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              37,
              53
            ],
            "plain_range": [
              43,
              59
            ],
            "means": "The words “to Energy Groups” limit this commitment to groups with over 20% of revenue from upstream oil and gas, and the majors.",
            "lets_through": [
              "This wording lets through direct financing for the same projects to any other developer — a diversified group or a company below the energy-group threshold."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "primarily",
            "label": "primarily",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              206,
              215
            ],
            "plain_range": [
              185,
              194
            ],
            "means": "The word “primarily” means infrastructure is caught only when most of its use serves these projects, and the statement never says how much counts as most.",
            "lets_through": [
              "This wording lets through pipelines and terminals that also serve other fields."
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
        "intro": "From the table of definitions at the end of the statement, what direct financing means.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Direct financing” is set in italics in the rule, and nothing else points to the definitions table."
        },
        "verbatim": "Refers to financing where the use of proceeds is known to be for a particular project.",
        "plain_rendering": "Direct financing means financing where the use of proceeds is known to be for a particular project.",
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
              43,
              67
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
      },
      {
        "index": 3,
        "role": "exception",
        "source_id": "ccs2025",
        "title": "The exception",
        "intro": "Under “Applicability of financing restrictions”, later in the statement, Barclays says what happens to financing already in place.",
        "location": {
          "distance": "later_in_document",
          "signposting": "none",
          "signposting_note": "The rule reads as complete, and nothing in it points to the later section that keeps existing financing in place."
        },
        "verbatim": "Any existing commitments or financing entered into prior to any of the restrictions coming into effect under the Upstream Oil & Gas and Unconventional Oil & Gas sections of this statement may remain in place (but refinancings of any such commitments or financing shall be subject to the restrictions described above).",
        "plain_rendering": "Existing commitments or financing entered into before a restriction in the Upstream or Unconventional Oil & Gas sections came into effect may remain in place, but refinancings are subject to the restrictions.",
        "phrases": [
          {
            "id": "may-remain",
            "label": "may remain in place",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "Existing commitments or financing entered into prior to restrictions may remain in place",
            "not_in_synthesis": false,
            "verbatim_range": [
              188,
              207
            ],
            "plain_range": [
              138,
              157
            ],
            "means": "This explains that the restriction applies to new financing only. Everything agreed before it came into effect runs on until it is refinanced.",
            "lets_through": [
              "This wording lets through every existing loan, facility and commitment to these projects until it matures or is refinanced."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 4,
        "role": "definition",
        "source_id": "ccs2025",
        "title": "Where it applies",
        "intro": "From the table of definitions, where the Amazon Biome is.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Amazon Biome” is set in italics in the rule, and nothing else points to its definition."
        },
        "verbatim": "The boundary of the Amazon Biome is defined by the Amazon Network of Georeferenced Socio-Environmental Information (RAISG) …",
        "plain_rendering": "The boundary of the Amazon Biome is defined by the Amazon Network of Georeferenced Socio-Environmental Information (RAISG).",
        "phrases": [],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "ultra-deepwater",
      "extra-heavy-oil",
      "use-of-proceeds-loan",
      "grandfathering"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 6,
      "commitment_id": "8e0c44cd-86b5-5519-81de-203014b6c31e",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=6",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        7642,
        7907
      ],
      "summary_text": "Barclays will not provide direct project financing to Energy Groups for oil & gas projects in the Amazon Biome, Ultra-Deep Water, Extra Heavy Oil, or dedicated infrastructure.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "ultra_deepwater"
          ],
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": false
        },
        "counterparty": {
          "level": "group",
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
          "condition": "Existing commitments or financing entered into prior to restrictions may remain in place (excluding refinancing)",
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
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "Three narrowings — instrument, borrower and time — each leave a clear gap.",
          "text": "The places are well chosen and the reach is narrow in three ways.\n\nIt covers direct financing: financing whose use is known to be for the project. General-purpose financing to the same group is untouched.\n\nIt covers energy groups: over 20% of revenue from upstream oil and gas, or a major. Another developer can receive direct financing for the same Amazon, ultra-deep or extra heavy oil project.\n\nAnd it covers new financing. Existing commitments stay in place until refinanced, which Watchtower records as this commitment's exception.\n\nWhat remains is new, earmarked financing to an energy group for one of these projects."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who has to change anything because of this commitment.\n\nAn energy group that asks Barclays for new financing and says it is for an Amazon, ultra-deep water or extra heavy oil project. That group is caught.\n\nThe same group borrowing for general purposes is not. A developer below the energy-group threshold is not. Financing already in place is not.\n\nThe commitment binds new, labelled financing to large producers, and releases everything else."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the commitment names three of the most damaging kinds of oil and gas development and defines each — the Amazon Biome by the RAISG boundary, ultra-deep water at 1,500 metres or more, extra heavy oil by API gravity. Anyone can check a project against those definitions.\n\nWhere it stops is the instrument and the borrower: direct financing, to energy groups, from now on.\n\nThe map is precise. The restriction reaches it through labelled financing only."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Cover every developer",
          "content": "Apply the restriction to any company developing these projects, not only energy groups."
        },
        {
          "title": "Cover general-purpose financing",
          "content": "Restrict financing to groups developing these projects whatever its stated use."
        }
      ],
      "what_needs_to_change_closing": "Until then, the Amazon, ultra-deep water and extra heavy oil are protected from financing that says what it is for.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays commits not to finance oil and gas projects in the Amazon, in ultra-deep water or for extra heavy oil. We have not yet reviewed what it financed against this commitment.",
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
