/* Commitment data — generated from commitments/commitment-santander-indigenous-consent-coal.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "santander-indigenous-consent-coal",
    "bank": "Santander",
    "commitment_number": 4,
    "category": "coal",
    "effective_date": "2023-02-23",
    "title": "Santander's Commitment on Indigenous Consent in Coal",
    "short_title": "Commitment on Indigenous Consent in Coal",
    "article_published": null,
    "intro": "Santander added this restriction to its Environmental and Social Risk Management Policy in February 2023, in revision 2SA678-4, as a new prohibition on the human rights of Indigenous Peoples. It commits the bank not to finance projects that need Indigenous Peoples' consent and do not meet the international standard for obtaining it.",
    "naive_reading": "it will not finance coal projects that go ahead without Indigenous Peoples' consent",
    "plain_language_note": "The policy's sentence stacks three conditions. The plain version keeps all three and their order.",
    "sources_intro": "One policy document states this commitment, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=4",
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
        "source_id": "esg",
        "title": "The rule",
        "intro": "The item in the policy's list of restrictions, under the lead-in that governs all of them. It applies to projects in every sector the policy covers, coal mines and coal power among them.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to the following activities in any client segment: … Projects that, in accordance with IFC Performance Standard 7 - Indigenous Peoples, require Free, Prior and Informed Consent (FPIC) and do not meet IFC Performance Standard 7 and there is not a credible action plan to achieve compliance.",
        "plain_rendering": "Santander will not directly invest in, or provide financial products or services to, projects that, under IFC Performance Standard 7 on Indigenous Peoples, require Free, Prior and Informed Consent (FPIC), do not meet the standard, and have no credible action plan to achieve compliance.",
        "phrases": [
          {
            "id": "require-fpic",
            "label": "require Free, Prior and Informed Consent (FPIC)",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              230,
              277
            ],
            "plain_range": [
              156,
              203
            ],
            "means": "This explains which projects are in scope: only those where IFC Performance Standard 7 itself requires consent. The standard requires it in particular circumstances; for other impacts on Indigenous Peoples it asks for consultation and participation.",
            "lets_through": [
              "This wording lets through coal projects that affect Indigenous Peoples in ways the standard handles through consultation rather than consent. They are outside this commitment whether or not the communities agree."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "credible-action-plan",
            "label": "credible action plan",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "credible action plan to achieve compliance",
            "not_in_synthesis": false,
            "verbatim_range": [
              340,
              360
            ],
            "plain_range": [
              243,
              263
            ],
            "means": "The words “credible action plan” turn a failure to meet the standard into a plan to meet it later. The policy does not say who judges credibility, what the plan must contain, or by when compliance must follow.",
            "lets_through": [
              "This wording lets through a mine or plant that has not obtained consent, if it has a plan the bank finds credible. The financing goes ahead on the plan, before the consent it is meant to secure."
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
      "thermal-coal"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 4,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=4",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        6797,
        7037
      ],
      "summary_text": "Santander restricts project financing for coal projects requiring FPIC that fail to meet IFC Performance Standard 7, unless a credible compliance action plan is in place.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": null,
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "new_and_existing",
          "certainty": null
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
          "condition": "The project has a credible action plan to achieve compliance with IFC Performance Standard 7.",
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
      },
      {
        "condition": "CONGLOMERATES ARE TESTED SUBSIDIARY BY SUBSIDIARY · FOOTNOTE 1 — A client is the last parent company, not including funds; but for multi-industry conglomerates “the Policy will apply at subsidiary level”, and Santander “might still provide products and services to the parent company (if they are unrelated to the restricted entity) and/or to other subsidiaries within the conglomerate.”",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": "commitments 5, 9, 10, 13 and 14 only",
        "where": "FOOTNOTE 1"
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
        "commitment_specific_carve_outs": 1,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "Three stacked conditions and a soft last one; stating the gap flatly is the strongest thing available.",
          "text": "The commitment turns on three conditions that must all be true, and the last one is soft.\n\nA coal project is caught only if IFC Performance Standard 7 requires Free, Prior and Informed Consent for it, if it does not meet the standard, and if there is no credible action plan to achieve compliance. The standard requires consent only in particular circumstances; many projects affecting Indigenous Peoples fall under its lighter requirement of consultation, and this commitment does not reach them.\n\nFor the projects it does reach, a plan to comply later is enough. The policy does not say who judges whether the plan is credible, what it must contain, or how long it may take. A mine can be financed on the plan, before the consent it is meant to secure.\n\nAnd the policy's standing exception applies here too: its governance bodies can approve exceptions aligned with its principles."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask which coal project is refused under this commitment.\n\nOne where the standard requires consent, where consent has not been obtained, and where the developer cannot produce a plan the bank accepts as credible. That developer has, in effect, declined to try.\n\nA developer that produces a plan is not caught, whether or not consent follows. A project whose impacts the standard treats as needing consultation rather than consent is not caught. A mining or power company financed at company level, rather than through the project, is not caught either — the item is written for projects.\n\nThe commitment binds the developer that will not engage at all, and releases the one that engages on paper."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the commitment ties itself to a published, external standard. IFC Performance Standard 7 sets out when consent is required and what meeting it involves, so the test is not Santander's own and can be checked against a document anyone can read.\n\nIt also names consent rather than consultation, which is the stronger requirement.\n\nWhere it stops is the action plan. A project that does not meet the standard is still financeable if there is a credible plan to achieve compliance, and the policy does not say who decides credibility or when compliance must come.\n\nAn external standard is the right anchor. The action-plan clause lets the anchor drag."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Require consent before financing",
          "content": "Where the standard requires consent, make obtaining it a condition of financing rather than something a plan can promise later."
        },
        {
          "title": "Say what makes a plan credible",
          "content": "Publish who assesses the plan, what it must contain and the deadline for compliance, and disclose how often the clause is used."
        }
      ],
      "what_needs_to_change_closing": "Until then, a plan to seek consent does the work the consent was meant to do.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Santander commits not to finance projects that need Indigenous Peoples' consent and do not meet the standard for obtaining it. We have not yet reviewed what it financed against this commitment.",
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
