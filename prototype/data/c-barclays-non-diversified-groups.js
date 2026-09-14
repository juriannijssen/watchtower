/* Commitment data — generated from commitments/commitment-barclays-non-diversified-groups.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-non-diversified-groups",
    "bank": "Barclays",
    "commitment_number": 5,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "Barclays' Commitment on Non-diversified Oil & Gas Groups",
    "short_title": "Commitment on Non-diversified Oil & Gas Groups",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Upstream Oil & Gas section of its Climate Change Statement of December 2025. It commits the bank to stop new financing and renewals for oil and gas producers that do little else and are investing heavily in long-lead expansion.",
    "naive_reading": "it has stopped financing pure oil and gas producers that are still investing in new fields",
    "plain_language_note": "The rule is written as a permission — Barclays will only provide financing “by exception” — which the plain version keeps. The definitions come from the table at the end of the statement.",
    "sources_intro": "One policy document states this commitment. Four passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=5",
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
          "passages": 5,
          "found": 5,
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
        "intro": "The second of the statement's entity-level restrictions on upstream oil and gas. It is written as a permission.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will only provide new financing or renewal of existing financing for Non-diversified Groups where more than 10% of their total planned oil & gas capital expenditure is in long-lead expansion, by exception.",
        "plain_rendering": "Barclays will provide new financing, or renew existing financing, for Non-diversified Groups with more than 10% of their total planned oil & gas capital expenditure in long-lead expansion only by exception.",
        "phrases": [
          {
            "id": "by-exception",
            "label": "by exception",
            "type": "escape_hatch",
            "source": "watchtower_weakness",
            "watchtower_ref": "Exceptions may be granted at bank discretion for non-diversified groups, and state-owned entities are exempted.",
            "not_in_synthesis": false,
            "verbatim_range": [
              195,
              207
            ],
            "plain_range": [
              193,
              205
            ],
            "means": "The words “by exception” turn the restriction into a discretion: new financing and renewals remain possible, one exception at a time. The statement does not say who grants them or on what grounds.",
            "lets_through": [
              "This wording lets through any new financing or renewal Barclays chooses to grant as an exception. The statement commits to disclosing how many and how much, from 2025, but not why."
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
        "title": "Who it applies to",
        "intro": "From the table of definitions at the end of the statement, which groups count as non-diversified.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Non-diversified Groups” is set in italics in the rule, and nothing else points to its definition."
        },
        "verbatim": "Refers to non-state-owned Energy Groups that generate almost all of their revenues from upstream oil & gas activities (i.e., exploration, development and production).",
        "plain_rendering": "Non-diversified Groups are non-state-owned Energy Groups that generate almost all of their revenues from upstream oil & gas activities.",
        "phrases": [
          {
            "id": "non-state-owned",
            "label": "non-state-owned",
            "type": "narrowing_qualifier",
            "source": "watchtower_exception",
            "watchtower_ref": "State-owned energy groups are excluded from the definition of Non-diversified Groups",
            "not_in_synthesis": false,
            "verbatim_range": [
              10,
              25
            ],
            "plain_range": [
              27,
              42
            ],
            "means": "The word “non-state-owned” takes national oil companies out of the definition altogether.",
            "lets_through": [
              "This wording lets through state-owned producers, however concentrated in upstream oil and gas and however much they invest in long-lead expansion."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "almost-all",
            "label": "almost all",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              54,
              64
            ],
            "plain_range": [
              71,
              81
            ],
            "means": "The words “almost all” set the test for being non-diversified, and the statement gives no number.",
            "lets_through": [
              "This wording lets through any producer with enough midstream, downstream or other revenue for Barclays to judge it diversified."
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
        "title": "What it covers",
        "intro": "From the same table, what counts as long-lead expansion.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Long-lead expansion” is set in italics in the rule, and nothing else points to its definition."
        },
        "verbatim": "Refers to long-lead time upstream oil & gas projects with a final investment decision (or equivalent) after 31 December 2021.",
        "plain_rendering": "Long-lead expansion means long-lead time upstream oil & gas projects with a final investment decision after 31 December 2021.",
        "phrases": [
          {
            "id": "long-lead-time",
            "label": "long-lead time",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              10,
              24
            ],
            "plain_range": [
              26,
              40
            ],
            "means": "The words “long-lead time” define long-lead expansion by repeating themselves. The statement does not say how long a lead time must be.",
            "lets_through": [
              "This wording lets through short-cycle projects — shale wells, in-fill drilling, tie-backs — which count towards neither the definition nor the 10%."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 4,
        "role": "condition",
        "source_id": "ccs2025",
        "title": "The disclosure",
        "intro": "In the statement's section on disclosures, Barclays commits to report the exceptions it grants under this rule.",
        "location": {
          "distance": "later_in_document",
          "signposting": "none",
          "signposting_note": "The rule does not mention that its exceptions will be disclosed; the commitment sits in a separate section."
        },
        "verbatim": "The combined number and aggregate value of exceptions granted for the relevant financial year to: … Non-diversified Groups under the “Non-diversified Groups restrictions” above (for financial years starting on or after 1 January 2025).",
        "plain_rendering": "Barclays intends to disclose each year the combined number and aggregate value of exceptions granted to Non-diversified Groups, for financial years starting on or after 1 January 2025.",
        "phrases": [
          {
            "id": "number-and-value",
            "label": "combined number and aggregate value",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              4,
              39
            ],
            "plain_range": [
              43,
              78
            ],
            "means": "This explains what will be disclosed: how many exceptions, and how much financing, in total.",
            "lets_through": [
              "This wording lets through the detail: which groups received exceptions, for what, and why. A total can be reported without any of it."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "upstream",
      "national-oil-company",
      "fid",
      "capital-investment"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 5,
      "commitment_id": "db563a15-e4bc-5470-b1ac-54ecd88f44ac",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=5",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        6652,
        6868
      ],
      "summary_text": "Barclays restricts new financing and renewals to non-diversified upstream oil & gas groups with over 10% capex in long-lead expansion, allowing financing only by exception.",
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
          "metric": "other",
          "inequality": ">",
          "value": 10,
          "definition": "share of total planned oil & gas capital expenditure in long-lead expansion (FID post-31 Dec 2021) for non-diversified groups"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Financing permitted by exception",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": false,
          "where": null
        },
        {
          "condition": "State-owned energy groups are excluded from the definition of Non-diversified Groups",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": null,
          "standing": false,
          "where": null
        },
        {
          "condition": "Sustainable Finance or Transition Finance transactions are permitted where proceeds are ringfenced from direct oil & gas activity",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": null,
          "standing": false,
          "where": null
        }
      ],
      "weaknesses": "Exceptions may be granted at bank discretion for non-diversified groups, and state-owned entities are exempted.",
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
        "weakness": true,
        "commitment_specific_carve_outs": 3,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "Disclosure of exceptions granted is genuinely unusual, and conceding it first makes the discretion land.",
          "text": "Credit first: Barclays commits to disclose the exceptions it grants under this rule — how many, and their total value — for every financial year from 2025. A discretion that is counted in public is a different thing from one that is not.\n\nThe rule itself is written as a permission. New financing and renewals for non-diversified groups heavy in long-lead expansion are available “by exception”, and Watchtower records that as a weakness.\n\nThe definitions narrow it further. State-owned producers are excluded from being non-diversified at all. “Almost all” and “long-lead time” have no numbers.\n\nThe disclosure is real. What it will count is how often the rule is set aside."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "The commitment does not stop financing. It makes it an exception.\n\nNew financing and renewals remain available to non-diversified groups with more than 10% of planned capital expenditure in long-lead expansion, by exception, and the statement does not say who grants exceptions or on what grounds.\n\nNational oil companies are outside the definition entirely. “Almost all” revenue from upstream has no number, so a producer with a modest midstream business can be treated as diversified. And “long-lead time” is undefined, so short-cycle expansion does not count.\n\nThe transition-finance allowance applies too. What remains is a presumption against financing, with the exceptions disclosed in total."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who this rule binds.\n\nA privately owned producer that earns almost all its revenue upstream and puts more than a tenth of its capital plans into long-lead projects, and that Barclays chooses not to grant an exception. That producer is caught.\n\nA national oil company with the same profile is not. A producer with enough downstream revenue to count as diversified is not. One expanding through short-cycle drilling is not.\n\nThe commitment binds independent pure-play producers, and releases state-owned and integrated ones."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower's stated weakness is carried as a phrase; the verdict prose around it is ours.",
      "what_needs_to_change": [
        {
          "title": "Include state-owned producers",
          "content": "Remove “non-state-owned” from the definition: a national oil company's long-lead expansion adds the same supply."
        },
        {
          "title": "Put numbers on the definitions",
          "content": "Say what share of revenue is “almost all” and what lead time makes a project long-lead."
        },
        {
          "title": "Disclose each exception",
          "content": "Report which groups received exceptions and why, not only the total number and value."
        }
      ],
      "what_needs_to_change_closing": "Until then, the rule presumes against financing independent pure-play producers, and counts the times it does not.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays commits to stop new financing and renewals for undiversified oil and gas producers investing heavily in long-lead expansion. We have not yet reviewed what it financed against this commitment.",
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
