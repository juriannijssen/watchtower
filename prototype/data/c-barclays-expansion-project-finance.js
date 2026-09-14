/* Commitment data — generated from commitments/commitment-barclays-expansion-project-finance.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-expansion-project-finance",
    "bank": "Barclays",
    "commitment_number": 2,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "Barclays' Commitment on Oil & Gas Expansion Projects",
    "short_title": "Commitment on Oil & Gas Expansion Projects",
    "article_published": null,
    "intro": "Barclays sets out this restriction in the Upstream Oil & Gas section of its Climate Change Statement of December 2025. It commits the bank not to finance new oil and gas projects or the infrastructure built for them.",
    "naive_reading": "it will not finance new oil and gas fields or the pipelines built for them",
    "plain_language_note": "The rule is plain. Its two key terms are defined in the table at the end of the statement, quoted here beside it.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=2",
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
        "intro": "The first of the statement's project-level restrictions on upstream oil and gas.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide project finance for expansion projects or infrastructure projects primarily to be used for such expansion projects.",
        "plain_rendering": "Barclays will not provide project finance for expansion projects, or for infrastructure projects primarily to be used for them.",
        "phrases": [
          {
            "id": "project-finance",
            "label": "project finance",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              20,
              35
            ],
            "plain_range": [
              26,
              41
            ],
            "means": "The words “project finance” limit this commitment to one instrument: loans repaid from a project's own cash flow. The statement defines the term, quoted below.",
            "lets_through": [
              "This wording lets through general corporate financing, bonds and every other company-level financing to the producers developing expansion projects."
            ],
            "defined_in_clause": 3,
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
              86,
              95
            ],
            "plain_range": [
              97,
              106
            ],
            "means": "The word “primarily” means infrastructure is caught only when most of its use serves expansion projects, and the statement never says how much counts as most.",
            "lets_through": [
              "This wording lets through pipelines, terminals and processing plants that also serve older fields or other users."
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
        "title": "What it covers",
        "intro": "From the table of definitions at the end of the statement, what counts as expansion.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Expansion” is set in italics in the rule, marking it as a defined term. Nothing else points to the definitions table."
        },
        "verbatim": "Refers to any upstream oil & gas projects with a final investment decision (or equivalent) after 31 December 2021. This includes, but is not limited to, exploration, development, and production.",
        "plain_rendering": "Expansion means any upstream oil & gas project with a final investment decision after 31 December 2021, including exploration, development and production.",
        "phrases": [
          {
            "id": "fid-2021",
            "label": "after 31 December 2021",
            "type": "narrowing_qualifier",
            "source": "watchtower_exception",
            "watchtower_ref": "Projects with FID on or before 31 December 2021 are excluded from the definition of expansion",
            "not_in_synthesis": false,
            "verbatim_range": [
              91,
              113
            ],
            "plain_range": [
              80,
              102
            ],
            "means": "This explains which projects count as expansion: those sanctioned after the end of 2021.",
            "lets_through": [
              "The date lets through every project sanctioned in or before 2021, for its whole life, including its later phases if they need no new investment decision."
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
        "title": "The definition",
        "intro": "From the same table, what Barclays means by project finance.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Project finance” is set in italics in the rule, and nothing else points to its definition."
        },
        "verbatim": "Refers to transactions that are a form of loan financing originated by Barclays (either as an agent or as part of a syndicate) where the repayment depends primarily on the project’s cash flow and on the collateral value of the project’s assets. Project Finance excludes corporate level asset financing.",
        "plain_rendering": "Project finance means loans Barclays originates, alone or in a syndicate, that are repaid mainly from the project's own cash flow and secured on its assets. Project Finance excludes corporate level asset financing.",
        "phrases": [
          {
            "id": "excludes-corporate",
            "label": "excludes corporate level asset financing",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              261,
              301
            ],
            "plain_range": [
              173,
              213
            ],
            "means": "This explains that financing an asset through the company that owns it is not project finance under this statement.",
            "lets_through": [
              "This wording lets through asset financing arranged at company level for an expansion project — a reserve-based loan, for instance, secured on the producer's fields rather than on one project's cash flow."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "project-finance",
      "upstream",
      "fid",
      "pipelines",
      "corporate-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 2,
      "commitment_id": "180990bb-1e19-5ed3-8082-da369de873bc",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=2",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        6152,
        6300
      ],
      "summary_text": "Barclays will not provide project finance for upstream oil & gas expansion projects (FID after 31 December 2021) or infrastructure primarily used for them.",
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
      "exceptions": [
        {
          "condition": "Projects with FID on or before 31 December 2021 are excluded from the definition of expansion",
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
        "condition": "TRANSITION FINANCE FOR RESTRICTED UPSTREAM GROUPS · APPLICABILITY OF FINANCING RESTRICTIONS — Barclays “may enter into Sustainable Finance or Transition Finance transactions with an entity in a Group that would otherwise be restricted” by the Upstream Oil & Gas section, where it is satisfied they “will not be used directly to support oil & gas activity.”",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": "commitments 4 and 5 only",
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
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "One instrument, narrowly defined, is the whole restriction; the gap is best stated flatly.",
          "text": "The restriction reaches expansion projects through one instrument, and the statement's own definition narrows that instrument further.\n\nProject finance means loans repaid from a project's own cash flow, and it “excludes corporate level asset financing”. A producer developing a new field can raise general corporate financing, bonds or a reserve-based loan at company level and spend it on the field.\n\nInfrastructure is caught only if it is primarily for expansion projects, a word with no number. Projects sanctioned before 2022 are not expansion at all.\n\nThe statement's grandfathering rule lets existing financing stay in place, and a transition-finance allowance can reach restricted upstream groups. What remains is a new project loan for a field sanctioned after 2021."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who has to change anything because of this commitment.\n\nA developer that needs Barclays to originate a project-finance loan for an upstream project sanctioned after 2021, or for infrastructure mainly serving one. That developer is caught.\n\nA producer that funds the same project from its balance sheet, through bonds or a reserve-based loan, is not. Large producers fund most development that way; single-asset developers depend on project finance.\n\nThe commitment binds the developers least able to finance projects any other way."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the statement defines both of its key terms, with a date. Expansion means any upstream project sanctioned after 31 December 2021, which aligns with the International Energy Agency's finding that no new long-lead oil and gas projects are needed in a net-zero pathway, and the definition says so.\n\nWhere it stops is the instrument. Project finance is one kind of loan, defined here to exclude corporate-level asset financing, and producers rarely need it.\n\nThe line is drawn at the right date, around the narrowest kind of financing."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Cover the company, not only the project",
          "content": "Extend the restriction to general corporate financing, bonds and reserve-based lending for producers developing expansion projects."
        },
        {
          "title": "Put a number on “primarily”",
          "content": "Say what share of an infrastructure project's use must serve expansion projects before it is caught."
        }
      ],
      "what_needs_to_change_closing": "Until then, a new field can be financed by Barclays through its owner, just not through its own loan.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays commits not to finance new oil and gas projects or the infrastructure built for them. We have not yet reviewed what it financed against this commitment.",
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
