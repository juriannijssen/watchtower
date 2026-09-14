/* Commitment data — generated from commitments/commitment-barclays-groups-expanding-coal-mines.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-groups-expanding-coal-mines",
    "bank": "Barclays",
    "commitment_number": 22,
    "category": "coal",
    "effective_date": null,
    "title": "Barclays' Commitment on Groups Expanding Coal Mines",
    "short_title": "Commitment on Groups Expanding Coal Mines",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Thermal Coal Mining section of its Climate Change Statement of December 2025. It commits the bank not to provide general corporate financing to groups that are opening or expanding thermal coal mines.",
    "naive_reading": "it will not finance groups that are opening or expanding coal mines",
    "plain_language_note": "The rule is one long sentence with its exception built in; the plain version keeps both.",
    "sources_intro": "One policy document states this commitment, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=22",
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
        "intro": "The fourth entity-level restriction in the Thermal Coal Mining section, with its exception in the same sentence.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide general corporate purposes financing to clients with entities engaged in opening new thermal coal mines or material expansion of existing thermal coal mines, unless an undertaking is received from the borrower or we are otherwise satisfied that the proceeds of such financing will not be made available to entities engaged in opening new thermal coal mines or material expansion of existing thermal coal mines.",
        "plain_rendering": "Barclays will not provide general corporate purposes financing to clients with entities opening new thermal coal mines or materially expanding existing ones, unless an undertaking is received from the borrower or we are otherwise satisfied that the proceeds will not reach those entities.",
        "phrases": [
          {
            "id": "undertaking",
            "label": "unless an undertaking is received from the borrower or we are otherwise satisfied",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "Borrower provides an undertaking or Barclays is satisfied",
            "not_in_synthesis": false,
            "verbatim_range": [
              178,
              259
            ],
            "plain_range": [
              158,
              239
            ],
            "means": "This explains the exception: the financing goes ahead if the borrower undertakes that the proceeds will not reach its coal-expanding entities, or if Barclays is otherwise satisfied they will not. The statement does not say how either is checked.",
            "lets_through": [
              "This wording lets through general corporate financing to any group expanding coal mines that gives an undertaking about where the funds go. Funds move within a group, and a promise about one facility does not stop the rest of the group's cash going to the mines."
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
      "corporate-finance",
      "use-of-proceeds-loan",
      "group-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 22,
      "commitment_id": "e130820f-e763-52b2-a739-28a3a2e3813e",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=22",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        10549,
        11008
      ],
      "summary_text": "Barclays restricts general corporate financing to clients with entities expanding thermal coal mining unless ringfencing undertakings are provided.",
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
      "triggers": [],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Borrower provides an undertaking or Barclays is satisfied that financing proceeds will not be made available to entities opening new thermal coal mines or expanding existing ones",
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
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "An undertaking the borrower writes itself is the whole exception; stated flatly that is the gap.",
          "text": "The restriction reaches the right target — groups with entities opening or expanding coal mines — and lets it through on a promise.\n\nIf the borrower undertakes that the proceeds will not be made available to its coal-expanding entities, or if Barclays is otherwise satisfied, the financing proceeds. The statement does not say how either is checked. Funds are fungible inside a group: financing that pays for the rest of the business frees the group's own cash for the mines."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who is turned away under this commitment.\n\nA group expanding coal mines that will not, or cannot, give an undertaking about where the financing goes. Any group willing to sign one is not."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the restriction looks at the group, not only the borrower. A group opening or expanding coal mines anywhere in its structure is in scope, whatever share of its revenue coal represents.\n\nWhere it stops is the undertaking, which the borrower writes."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Replace the undertaking",
          "content": "Require verified, ringfenced use of proceeds, or restrict financing to groups expanding coal mines outright."
        },
        {
          "title": "Report the exceptions",
          "content": "Disclose how many facilities go ahead on an undertaking and how compliance is checked."
        }
      ],
      "what_needs_to_change_closing": "Until then, a group expanding coal mines can borrow from Barclays by promising the money is for something else.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays commits not to provide general corporate financing to groups opening or expanding thermal coal mines. We have not yet reviewed what it financed against this commitment.",
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
