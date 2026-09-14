/* Commitment data — generated from commitments/commitment-santander-new-coal-power-clients.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "santander-new-coal-power-clients",
    "bank": "Santander",
    "commitment_number": 10,
    "category": "coal",
    "effective_date": "2023-12-19",
    "title": "Santander's 25% Threshold for New Coal Power Clients",
    "short_title": "25% Threshold for New Coal Power Clients",
    "subject": "New Coal Power Clients",
    "article_published": null,
    "intro": "Santander added this restriction in December 2023, in revision 2SA678-5 of its Environmental and Social Risk Management Policy. It commits the bank not to finance companies that generate a large share of their revenue from coal power.",
    "naive_reading": "it will not finance companies that generate power from coal",
    "plain_language_note": "The exception is written into the rule and has its own condition, and a footnote qualifies the exception again. The plain version keeps all three layers.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=10",
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
        "source_id": "esg",
        "title": "The rule",
        "intro": "The item in the power generation list of the policy's restrictions, under the lead-in that governs all of them. It carries its own exception and a condition on that exception.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to the following activities in any client segment: … New clients with more than 25% of revenues, on a consolidated basis, directly derived from coal fired power generation, except for non-recourse and/or ECA transactions if sustainable and/or finance the transition. In these exceptions, the client must not be developing new coal power plants and/or expanding existing ones.",
        "plain_rendering": "Santander will not directly invest in or provide financial products or services to New clients with more than 25% of revenues, on a consolidated basis, directly derived from coal fired power generation, except for non-recourse and/or ECA transactions if sustainable and/or finance the transition — and then only if the client is not developing new coal power plants or expanding existing ones.",
        "phrases": [
          {
            "id": "new-clients",
            "label": "New clients",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              147,
              158
            ],
            "plain_range": [
              83,
              94
            ],
            "means": "The words “New clients” limit this commitment to companies Santander does not yet serve. Existing clients are covered only by the 2030 phase-out.",
            "lets_through": [
              "This wording lets through every existing client with more than 25% of revenue from coal power until 2030."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "threshold",
            "label": "more than 25% of revenues",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              164,
              189
            ],
            "plain_range": [
              100,
              125
            ],
            "means": "This explains the threshold: revenue directly derived from coal-fired power generation, as a share of the new client's consolidated revenue.",
            "lets_through": [
              "This wording lets through new clients at or below 25%, however large their coal fleet. A share test lets through large generators whose coal is a small part of a large business."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "non-recourse-eca",
            "label": "except for non-recourse and/or ECA transactions",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "transactions are permitted if they are sustainable and/or finance the transition",
            "not_in_synthesis": false,
            "verbatim_range": [
              267,
              314
            ],
            "plain_range": [
              203,
              250
            ],
            "means": "This explains the carve-out: a new client above the threshold can still be financed through a non-recourse or export-credit transaction that is sustainable or finances the transition — provided the client is not building or expanding coal plants.",
            "lets_through": [
              "This wording lets through non-recourse and export-credit transactions to coal-heavy new clients whenever Santander judges them sustainable or transition finance. Neither term is defined."
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
        "source_id": "esg",
        "title": "The guarantee",
        "intro": "Footnote 15, attached to the words “non-recourse” in the rule, adds a further allowance.",
        "location": {
          "distance": "nearby",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Guarantee operations linked to non-recourse financing may be carried out where strictly necessary.",
        "plain_rendering": "Guarantees linked to non-recourse financing may be given where strictly necessary.",
        "phrases": [
          {
            "id": "strictly-necessary",
            "label": "where strictly necessary",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              73,
              97
            ],
            "plain_range": [
              57,
              81
            ],
            "means": "The words “where strictly necessary” set the condition for guarantees, and the policy does not say necessary for what, or who decides.",
            "lets_through": [
              "This wording lets through guarantees that support a non-recourse transaction to a coal-heavy new client, whenever the bank considers them strictly necessary."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 3,
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
            "means": "This explains where the 25% test is measured for a group that spans several industries: at the subsidiary, not the group.",
            "lets_through": [
              "This wording lets through the parent and other subsidiaries of a conglomerate that owns a coal-power business, if the financing is “unrelated to the restricted entity”."
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
      "existing-client",
      "export-finance",
      "subsidiary"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 10,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=10",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        8277,
        10280
      ],
      "summary_text": "Santander restricts corporate financial services for new clients with over 25% of consolidated revenues from coal-fired power generation, except for transition-aligned non-recourse or ECA transactions where the client is not expanding coal capacity.",
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
          "relationship_status": "new",
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
          "value": 25,
          "definition": "revenues directly derived from coal fired power generation, on a consolidated basis"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Non-recourse and/or Export Credit Agency (ECA) transactions are permitted if they are sustainable and/or finance the transition, provided the client is not developing new or expanding existing coal power plants.",
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
        "new_business_only": true,
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "New clients only, a share-based threshold and a transaction-level exception stack up; stating them flatly is clearest.",
          "text": "The commitment keeps coal-heavy companies out as new clients, and lets them in as transactions.\n\nIt covers new clients only. Existing clients above 25% keep their financing until the 2030 phase-out.\n\nIt measures a share of consolidated revenue directly derived from coal-fired generation, so a large generator whose coal is a small part of a larger business passes.\n\nAbove the line, a non-recourse or export-credit transaction remains possible if it is sustainable or finances the transition — terms the policy does not define — and a footnote allows guarantees linked to it where strictly necessary. The one real safeguard is that the client must not be building or expanding coal plants.\n\nFor conglomerates the test is applied subsidiary by subsidiary, so the parent remains open."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who is turned away under this commitment.\n\nA company Santander does not already serve, earning more than a quarter of its consolidated revenue from coal-fired generation, not part of a diversified conglomerate, and seeking financing other than a non-recourse or export-credit transaction for the transition. That company is caught.\n\nAn existing client with the same profile is not. A new client seeking a transition transaction is not, as long as it is not building coal plants. A diversified group's parent is not.\n\nThe commitment binds coal-heavy companies arriving for ordinary financing, and releases the ones already inside."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the exception has a condition that bites. A new coal-heavy client can reach Santander through a transition transaction only if it is not developing new coal plants or expanding existing ones. Many carve-outs for transition finance ask nothing of the client's coal plans; this one does.\n\nThe threshold is published, and it is applied to consolidated revenue, which anyone can check against a company's accounts.\n\nWhere it stops is scope. The rule reaches new clients only, a share test releases the largest generators, and what counts as sustainable or transition finance is left undefined.\n\nThe safeguard on the exception is well drawn. The rule around it covers only the clients Santander has not met."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Apply the threshold to existing clients",
          "content": "A limit on new clients leaves existing coal-power clients above 25% untouched until the 2030 phase-out."
        },
        {
          "title": "Define what finances the transition",
          "content": "Say what makes a non-recourse or export-credit transaction sustainable or transition finance, and publish how many are approved."
        },
        {
          "title": "Define “strictly necessary”",
          "content": "Say when a guarantee linked to non-recourse financing is strictly necessary, and who decides."
        }
      ],
      "what_needs_to_change_closing": "Until then, a new client above 25% can still be financed through a transaction the bank judges to finance the transition.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Santander commits not to take on companies with more than a quarter of their revenue from coal power. We have not yet reviewed what it financed against this commitment.",
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
