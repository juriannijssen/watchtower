/* Commitment data — generated from commitments/commitment-santander-coal-mine-owners-2030.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "santander-coal-mine-owners-2030",
    "bank": "Santander",
    "commitment_number": 13,
    "category": "coal",
    "effective_date": null,
    "title": "Santander's 2030 Phase-out of Coal Mine Owners",
    "short_title": "2030 Phase-out of Coal Mine Owners",
    "subject": "Coal Mine Owners",
    "article_published": null,
    "intro": "Santander sets out this phase-out in the mining section of its Environmental and Social Risk Management Policy, as part of the 2030 coal strategy added in revision 2SA678-2 in February 2021. It commits the bank to stop financing companies that own thermal coal mines.",
    "naive_reading": "it is ending its financing of companies that own coal mines",
    "plain_language_note": "The item is a sentence fragment completed by the lead-in, followed by a second sentence that opens an exception. The plain version joins them and keeps both carve-outs word for word.",
    "sources_intro": "One policy document states this commitment, and two passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=13",
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
        "intro": "The item in the mining list of the policy's restrictions, under the lead-in that governs all of them, and the sentence that follows it.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to the following activities in any client segment: … By 2030 legal entities that own thermal coal mines worldwide, except for sustainable finance and products to finance the transition. Financing at parent level is still possible if the funds are not used to finance thermal coal assets and/or to any subsidiary that directly engages with thermal coal activities.",
        "plain_rendering": "By 2030, Santander will not directly invest in or provide financial products or services to legal entities that own thermal coal mines anywhere, except for sustainable finance and products to finance the transition. Financing at parent level is still possible if the funds are not used for thermal coal assets or for any subsidiary that directly engages with thermal coal activities.",
        "phrases": [
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
            "means": "This explains when this commitment takes effect: in 2030. Until then, owning a thermal coal mine is no bar, except for groups that are new to Santander.",
            "lets_through": [
              "This wording lets through existing clients that own thermal coal mines until 2030."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "legal-entities",
            "label": "legal entities that own thermal coal mines",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              155,
              197
            ],
            "plain_range": [
              92,
              134
            ],
            "means": "The words “legal entities that own thermal coal mines” aim the phase-out at the entity that holds the mine, not the group it belongs to. There is no revenue threshold: owning a thermal coal mine is enough.",
            "lets_through": [
              "This wording lets through the rest of the group. A parent or sister company that does not own the mine itself is outside the test, and the next sentence confirms that the parent can still be financed."
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
              209,
              278
            ],
            "plain_range": [
              145,
              214
            ],
            "means": "This explains the first carve-out: sustainable finance and products that finance the transition stay available to mine owners. The policy does not define either term or say who decides what qualifies.",
            "lets_through": [
              "This wording lets through any financing Santander classes as sustainable or transition finance, for any mine owner."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "parent-level",
            "label": "Financing at parent level is still possible",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "Financing at the parent company level is permitted",
            "not_in_synthesis": false,
            "verbatim_range": [
              280,
              323
            ],
            "plain_range": [
              216,
              259
            ],
            "means": "This explains the second carve-out: the parent of a mine-owning entity can be financed if the funds do not go to thermal coal assets or to a subsidiary engaged in thermal coal.",
            "lets_through": [
              "This wording lets through financing to the parent of a coal miner on the strength of where the funds are said to go. Funds move within a group, and the policy does not say how their use is checked."
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
            "means": "This explains that for a conglomerate the phase-out applies to the mine-owning subsidiary, not the group.",
            "lets_through": [
              "This wording lets through the parent and other subsidiaries of a conglomerate that owns coal mines, if the financing is “unrelated to the restricted entity”."
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
      "phase-out",
      "parent-company",
      "subsidiary"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 13,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=13",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        12007,
        12317
      ],
      "summary_text": "By 2030, Santander will phase out corporate financing for legal entities that own thermal coal mines worldwide, except for sustainable or transition finance, allowing parent-level financing if funds are ringfenced.",
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
          "condition": "Financing at the parent company level is permitted if funds are ringfenced from thermal coal assets and subsidiaries directly engaged in thermal coal activities.",
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
        "commitment_specific_carve_outs": 3,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "Ownership with no revenue threshold is a genuinely strict test; conceding it first makes the parent-level route land.",
          "text": "Credit first: there is no threshold. From 2030, owning a thermal coal mine is enough to lose access to Santander's financial products and services, whatever share of revenue the mine represents. Most coal phase-outs work on a share of revenue, which lets the largest miners through; this one works on ownership.\n\nThe limit is where the ownership test is applied. It is the legal entity that owns the mine, not the group, and the next sentence says so: financing at parent level is still possible if the funds are not used for thermal coal assets or for a subsidiary engaged in thermal coal. For conglomerates, the policy tests each subsidiary separately.\n\nAnd sustainable finance and transition products stay open to any mine owner, with neither term defined.\n\nThe test for the mine owner is strict. The door for its parent is open."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "The commitment ends financing to the entity that owns a coal mine, from 2030, and to nothing above it.\n\nThe parent of that entity can still be financed if the funds are not used for thermal coal assets or for a subsidiary engaged in thermal coal. Funds move within a group, and the policy does not say how their use is checked. For a conglomerate, the test is applied to the mine-owning subsidiary alone.\n\nBefore 2030, existing clients that own mines are not restricted at all by this commitment. And after it, sustainable finance and products to finance the transition remain available to mine owners, with no definition of either.\n\nWhat remains is financing, after 2030, to the mine-owning entity itself, for purposes no one classes as transition."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who loses Santander's financing in 2030.\n\nThe legal entity that owns a thermal coal mine, asking for financing that is not classed as sustainable or transition finance. That entity is caught.\n\nIts parent is not, if the parent says the funds will not reach coal. Its sister companies in a conglomerate are not. A mine owner seeking a transition product is not.\n\nThe commitment binds the mine-owning subsidiary, which rarely borrows on its own account, and releases the group that owns it."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Close the parent route",
          "content": "Apply the phase-out to the whole group, or require use-of-proceeds terms that are checked, not asserted."
        },
        {
          "title": "Define transition finance",
          "content": "Publish what qualifies for a coal mine owner, and how much is provided under it."
        }
      ],
      "what_needs_to_change_closing": "Until then, the mine owner leaves in 2030 and its parent stays.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Santander commits to stop financing companies that own thermal coal mines by 2030. We have not yet reviewed what it financed against this commitment.",
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
