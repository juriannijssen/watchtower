/* Commitment data — generated from commitments/commitment-barclays-fracking-companies.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-fracking-companies",
    "bank": "Barclays",
    "commitment_number": 12,
    "category": "fracking",
    "effective_date": null,
    "title": "Barclays' Commitment on UK and European Fracking Companies",
    "short_title": "Commitment on UK and European Fracking Companies",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Unconventional Oil & Gas section of its Climate Change Statement of December 2025. It commits the bank not to finance companies engaged in fracking in the UK and Europe.",
    "naive_reading": "it will not finance fracking companies",
    "plain_language_note": "Barclays defines its key term, and the plain version keeps it. The definition comes from the table at the end of the statement.",
    "sources_intro": "One policy document states this commitment, and two passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=12",
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
        "intro": "The entity-level restriction on fracking in the Unconventional Oil & Gas section.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide financing to Clients materially engaged in Fracking activities in the UK and Europe.",
        "plain_rendering": "Barclays will not provide financing to Clients materially engaged in Fracking activities in the UK and Europe.",
        "phrases": [
          {
            "id": "materially-engaged",
            "label": "materially engaged in",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              41,
              62
            ],
            "plain_range": [
              47,
              68
            ],
            "means": "The words “materially engaged in” set a test of how much of a group's revenue comes from fracking in the UK and Europe. The definition is quoted below.",
            "lets_through": [
              "This wording lets through any group whose UK and European fracking is a small share of its revenue."
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
              83,
              103
            ],
            "plain_range": [
              89,
              109
            ],
            "means": "The words “in the UK and Europe” limit both the activity and the test to one region.",
            "lets_through": [
              "This wording lets through fracking companies elsewhere — in North America or Argentina — however concentrated their business, because fracking there does not count."
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
        "intro": "From the table of definitions at the end of the statement, what materially engaged means for fracking.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "The defined term is set in italics in the rule. Nothing else marks it, and the definition sits in a table at the end of the statement."
        },
        "verbatim": "For Hydraulic Fracturing, Groups are defined as “materially engaged in” if they have over 20% revenue from Fracking activities in the UK and Europe.",
        "plain_rendering": "A group is materially engaged in fracking if it has over 20% revenue from fracking activities in the UK and Europe.",
        "phrases": [
          {
            "id": "over-20pc",
            "label": "over 20% revenue",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              85,
              101
            ],
            "plain_range": [
              52,
              68
            ],
            "means": "This explains the threshold: UK and European fracking revenue as a share of the group's total revenue.",
            "lets_through": [
              "This wording lets through groups at or below 20%, however much fracking they do elsewhere."
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
      "revenue-threshold",
      "group-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 12,
      "commitment_id": "004d1619-7050-5a6b-9f9b-b015809874ea",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=12",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        8921,
        9033
      ],
      "summary_text": "Barclays will not finance clients materially engaged in fracking in the UK and Europe (>20% revenue).",
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
          "metric": "revenue_share",
          "inequality": ">",
          "value": 20,
          "definition": "revenue from fracking activities in the UK and Europe"
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
        "field": "quotation",
        "severity": "contradiction",
        "watchtower": "Watchtower's quotation reads “Clients materially engaged in - Fracking activities in the UK and Europe.”",
        "bank_green": "The statement reads “Clients materially engaged in Fracking activities in the UK and Europe.” The words “- Fracking” are the label of the definitions-table row, carried from Watchtower's parsed copy into the sentence. Checked against the PDF Watchtower stores.",
        "action": "Correct the quotation."
      },
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
          "recommended_because": "The region and the share together leave almost no one inside; stated flatly that is the point.",
          "text": "The test is fracking in the UK and Europe, as a share of revenue, above 20%.\n\nFew companies earn a fifth of their revenue from fracking in a region where it is largely banned or on hold. And fracking anywhere else does not count: a company earning most of its revenue from shale in North America or Argentina is not materially engaged under this definition.\n\nWatchtower rates this `holds`, because its record carries no exception, weakness or narrow instrument. The limit is in the definition, which the rating does not read."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who this restriction reaches.\n\nA group earning more than a fifth of its revenue from fracking in the UK and Europe. There may be no such group of any size.\n\nEvery fracking company outside the region is released, however concentrated. The commitment binds a category that barely exists."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: this is an entity-level restriction covering all financing, with a defined threshold, and the definition is published.\n\nWhere it stops is the region. Measured only in the UK and Europe, the test cannot reach the companies that frack at scale."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Count fracking everywhere",
          "content": "Measure a group's fracking revenue wherever it fracks, not only in the UK and Europe."
        },
        {
          "title": "Lower the threshold",
          "content": "A fifth of revenue is a high bar for an activity the statement treats as unconventional."
        }
      ],
      "what_needs_to_change_closing": "Until then, the restriction reaches fracking companies in the one region with almost none.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays commits not to finance companies materially engaged in fracking in the UK and Europe. We have not yet reviewed what it financed against this commitment.",
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
