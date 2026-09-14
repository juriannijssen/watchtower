/* Commitment data — generated from commitments/commitment-santander-coal-power-2030.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "santander-coal-power-2030",
    "bank": "Santander",
    "commitment_number": 9,
    "category": "coal",
    "effective_date": null,
    "title": "Santander's 2030 Phase-out of Coal Power Clients",
    "short_title": "2030 Phase-out of Coal Power Clients",
    "subject": "Coal Power Clients",
    "article_published": null,
    "intro": "Santander sets out this phase-out in the power generation section of its Environmental and Social Risk Management Policy, which carries the bank's 2030 coal strategy, added in revision 2SA678-2 in February 2021. It commits the bank to stop financing clients that make power from coal.",
    "naive_reading": "it is ending its financing of companies that make power from coal",
    "plain_language_note": "The item is a sentence fragment completed by the lead-in. The plain version joins the two and keeps the carve-out word for word.",
    "sources_intro": "One policy document states this commitment, and two passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=9",
        "watchtower_document_id": 25536,
        "watchtower_institution": "santander",
        "synthesis_run": 149,
        "version_label": "June 2025",
        "published": "2025-07-28",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "verbatim_check": {
          "document": "25536-santander-unconventional-oil-gas.md",
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
        "source_id": "esg",
        "title": "The rule",
        "intro": "The item in the power generation list of the policy's restrictions, under the lead-in that governs all of them.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to the following activities in any client segment: … By 2030, any client with more than 10% of revenues, on a consolidated basis, directly derived from coal fired power generation, except for sustainable finance and products to finance the transition.",
        "plain_rendering": "By 2030, Santander will not directly invest in or provide financial products or services to any client with more than 10% of revenues, on a consolidated basis, directly derived from coal fired power generation, except for sustainable finance and products to finance the transition.",
        "phrases": [
          {
            "id": "directly",
            "label": "directly",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              25,
              33
            ],
            "plain_range": [
              28,
              36
            ],
            "means": "The word “directly” limits this commitment to Santander's own investment and its own financial products and services. The policy defines a client as the last parent company and says funds are not included.",
            "lets_through": [
              "This wording lets through indirect exposure — investment held through funds, which the policy's definition of a client leaves out."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "by-2030",
            "label": "By 2030",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              147,
              154
            ],
            "plain_range": [
              0,
              7
            ],
            "means": "This explains when this commitment takes effect: in 2030. Until then, the only coal-power limit in the policy is the 25% threshold for new clients.",
            "lets_through": [
              "This wording lets through existing clients with any share of revenue from coal power until 2030. The sentence does not say whether the limit applies from the start of 2030 or by its end."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "threshold",
            "label": "more than 10% of revenues",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              172,
              197
            ],
            "plain_range": [
              108,
              133
            ],
            "means": "This explains the threshold: revenue directly derived from coal-fired power generation, as a share of the client's consolidated revenue.",
            "lets_through": [
              "This wording lets through clients at or below 10%, however large their coal fleet. The test is a share, so a utility with a big coal fleet and bigger other businesses passes.",
              "It also counts only revenue directly derived from generating power from coal. Coal mining, coal trading and coal-related services are not in the measure."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "transition-finance",
            "label": "except for sustainable finance and products to finance the transition",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "finance and products to finance the transition",
            "not_in_synthesis": false,
            "verbatim_range": [
              275,
              344
            ],
            "plain_range": [
              211,
              280
            ],
            "means": "This explains the carve-out: sustainable finance and products that finance the transition stay available to clients above the threshold. The policy does not define either term or say who decides what qualifies.",
            "lets_through": [
              "This wording lets through any financing Santander classes as sustainable or transition finance, for a client of any coal share. The classification is the bank's, and the policy publishes no framework for it."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "scope",
        "source_id": "esg",
        "title": "Who it applies to",
        "intro": "In a footnote to the policy's definition of scope, at the start of the document, Santander says who counts as the client when a group works across several industries.",
        "location": {
          "distance": "later_in_document",
          "signposting": "none",
          "signposting_note": "The rule reads as complete. The footnote that changes who counts as the client is attached to the policy's scope section at the start of the document, and nothing in the rule points back to it."
        },
        "verbatim": "In the case of multi-industry conglomerates with independent business entities across different industries, the Policy will apply at subsidiary level. Should a subsidiary be prohibited, Santander might still provide products and services to the parent company (if they are unrelated to the restricted entity) and/or to other subsidiaries within the conglomerate.",
        "plain_rendering": "For multi-industry conglomerates with independent businesses in different industries, the Policy will apply at subsidiary level. If a subsidiary is prohibited, Santander might still provide products and services to the parent company (if unrelated to the restricted entity) or to other subsidiaries.",
        "phrases": [
          {
            "id": "subsidiary-level",
            "label": "will apply at subsidiary level",
            "type": "narrowing_qualifier",
            "source": "watchtower_exception",
            "watchtower_ref": "the policy applies at the subsidiary level",
            "not_in_synthesis": false,
            "verbatim_range": [
              119,
              149
            ],
            "plain_range": [
              97,
              127
            ],
            "means": "This explains where the 10% test is measured for a group that spans several industries: at the subsidiary, not the group.",
            "lets_through": [
              "This wording lets through the parent and every other subsidiary of a conglomerate that owns a coal-power business, if the financing is “unrelated to the restricted entity” — a condition the policy does not say how it checks."
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
      "revenue-threshold",
      "phase-out",
      "subsidiary",
      "parent-company"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 9,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=9",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        8076,
        8274
      ],
      "summary_text": "By 2030, Santander will phase out corporate financing for clients with over 10% of consolidated revenues from coal-fired power generation, except for sustainable or transition finance.",
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
          "value": 10,
          "definition": "revenues directly derived from coal fired power generation, on a consolidated basis"
        }
      ],
      "commitment_type": "phase_out",
      "effective_date": "2030",
      "exceptions": [
        {
          "condition": "Sustainable finance and products to finance the transition are permitted.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": false,
          "standing": false,
          "where": null
        },
        {
          "condition": "For multi-industry conglomerates, the policy applies at the subsidiary level, allowing financing to the parent or other unrelated subsidiaries.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": false,
          "standing": false,
          "where": null
        },
        {
          "condition": "Exceptions may be approved by corporate governance bodies (Risk Proposal Forum, Executive Risk Committee, or Executive Committee) if they are aligned with environmental and social risk principles and undergo enhanced due diligence.",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": true,
          "standing": true,
          "where": null
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 0 fields corrected]\nCHANGES:\nNone. The junior analyst's extraction is highly accurate and fully compliant with the schema and splitting rules.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Exceptions may be approved by corporate governance bodies (Risk Proposal Forum, Executive Risk Committee, or Executive Committee) if they are aligned with environmental and social risk principles and undergo enhanced due diligence.",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": true,
        "where": null
      },
      {
        "condition": "APPLICABLE LAW CAN REPLACE A RESTRICTION WITH DUE DILIGENCE · FOOTNOTE 7 — “To the extent required by applicable law, customers and transactions involving activities enumerated in this section will be subject to an enhanced due diligence process to determine the unique risks presented prior to decisioning.” The change log ties this to Florida's HB3 Act. Where a law requires it, a client or transaction in a restricted activity is reviewed before a decision instead of being refused outright.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "FOOTNOTE 7"
      },
      {
        "condition": "SOME BUSINESSES MAY SKIP THE INDIVIDUAL REVIEW · FOOTNOTE 6 — Businesses of the Group managed mostly using investable universes or automatic methods “may have operational limitations to carry out an individualized review”; periodic reviews of internal or supplier data are used instead.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "FOOTNOTE 6"
      }
    ],
    "disagreements": [
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "The record does not carry footnote 7's applicable-law provision or footnote 6's operational limitation on any commitment.",
        "bank_green": "Footnote 7 subjects restricted clients and transactions to enhanced due diligence before a decision wherever applicable law requires it; the change log names Florida's HB3 Act. Footnote 6 lets businesses run on investable universes or automatic methods rely on periodic data reviews instead of individual review. Both reach every restriction in section 2.1.",
        "action": "Record both as standing exceptions on every commitment in section 2.1."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "inconsistency",
        "watchtower": "The conglomerate rule is recorded as an exception on commitments 5, 9, 10, 13 and 14 only.",
        "bank_green": "It is footnote 1 to the policy's definition of a client, in section 1.2, so it applies to every commitment in the document.",
        "action": "Record it as a standing exception on every commitment."
      },
      {
        "field": "document",
        "severity": "unreliable",
        "watchtower": "Watchtower titles this document Environmental and Social Risk Management Policy 2021.",
        "bank_green": "The PDF Watchtower stores is the June 2025 revision. Its change-control table runs to 25 June 2025 (2LO678-7), and the fracking exception (December 2023) and the conglomerate rule (February 2025) were both added after 2021.",
        "action": "Correct the document's year to 2025."
      }
    ],
    "assessment": {
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.2 §4.1",
        "inputs_source": "Watchtower record",
        "result": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 2,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The date, the share-based test and an undefined transition carve-out each leave a clear gap, best stated flatly.",
          "text": "The commitment sets a date and a threshold, and each leaves room.\n\nThe date is 2030, and until then no coal-power limit applies to existing clients at all; the policy's other coal-power rule covers new clients above 25%.\n\nThe threshold is 10% of consolidated revenue directly derived from coal-fired generation. A share test releases the largest companies: a utility with a big coal fleet and bigger other businesses passes. And only generation revenue counts, not coal mining or trading.\n\nAbove the line, sustainable finance and products to finance the transition stay available, and the policy defines neither nor says who decides. For conglomerates the test runs subsidiary by subsidiary, so the parent of a coal-power business can still be financed.\n\nWhat remains is company-level financing, from 2030, to a client above 10% that no one has classed as transition finance."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask which clients this commitment will actually lose Santander in 2030.\n\nA company that earns more than a tenth of its consolidated revenue from coal-fired generation, that is not a subsidiary of a diversified conglomerate, and that asks for financing the bank does not class as sustainable or transition finance. That company is caught.\n\nA large utility whose coal plants are a small share of a large business is not. A conglomerate's parent is not, if the financing is unrelated to its coal-power subsidiary. A coal-heavy client seeking transition finance is not.\n\nThe commitment binds the mid-sized, coal-dependent generator, and releases the largest owners of coal capacity."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: this is a dated phase-out that reaches company-level financing, with a published threshold of 10% of consolidated revenue. Anyone can take a client's accounts and check it.\n\nThat is stronger than a restriction on new plants, which leaves an existing coal fleet free to borrow. Here, from 2030, a coal-dependent generator loses access to Santander's financial products and services, not only its project loans.\n\nWhere it stops is the carve-out and the measure. Sustainable finance and transition products stay open to any client, however much coal it burns, and the policy defines neither. And a share of revenue lets the largest coal owners through.\n\nA phase-out with a date and a number is the right shape. The carve-out decides how much of it is left."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Define the transition carve-out",
          "content": "Publish what qualifies as sustainable or transition finance for a coal-power client, and disclose how much is provided under it."
        },
        {
          "title": "Count coal capacity, not only revenue share",
          "content": "Add an absolute test — coal capacity or generation — so the largest coal owners cannot pass on share alone."
        },
        {
          "title": "Test the group, not the subsidiary",
          "content": "Apply the threshold to the whole conglomerate, so financing to a parent cannot reach a coal-power subsidiary."
        }
      ],
      "what_needs_to_change_closing": "Until then, the 2030 date retires the clients that are mostly coal and keeps the ones that have other things to report.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Santander commits to stop financing clients that generate power from coal by 2030. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Watchtower synthesis run 149, document 25536",
    "reading": "drafted"
  }
};
