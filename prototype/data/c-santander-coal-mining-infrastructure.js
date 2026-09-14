/* Commitment data — generated from commitments/commitment-santander-coal-mining-infrastructure.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "santander-coal-mining-infrastructure",
    "bank": "Santander",
    "commitment_number": 16,
    "category": "coal",
    "effective_date": null,
    "title": "Santander's Commitment on Coal Mining Infrastructure",
    "short_title": "Commitment on Coal Mining Infrastructure",
    "article_published": null,
    "intro": "Santander sets out this restriction in the mining section of its Environmental and Social Risk Management Policy; the version on file is the revision approved in June 2025. It commits the bank not to finance infrastructure built to serve thermal coal mining.",
    "naive_reading": "it will not finance infrastructure built to serve coal mines",
    "plain_language_note": "The item is already plain. The plain version only joins it to the lead-in.",
    "sources_intro": "One policy document states this commitment, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=16",
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
        "intro": "The item in the mining list of the policy's restrictions, under the lead-in that governs all of them.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to the following activities in any client segment: … Project-related financing for the construction or development of infrastructure projects whose expected revenues from thermal coal mining-related activities will be more than 30% of the project’s revenues in the first five years.",
        "plain_rendering": "Santander will not directly invest in or provide, in any client segment: Project-related financing for building infrastructure projects whose expected revenues from thermal coal mining-related activities will be more than 30% of the project’s revenues in the first five years.",
        "phrases": [
          {
            "id": "project-related",
            "label": "Project-related financing",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              147,
              172
            ],
            "plain_range": [
              73,
              98
            ],
            "means": "This explains what financing this commitment covers: financing tied to an infrastructure project. Watchtower records it as project financing.",
            "lets_through": [
              "This wording lets through general corporate financing to the owners and builders of the infrastructure."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "expected-revenues",
            "label": "expected revenues",
            "type": "unverifiable_metric",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              242,
              259
            ],
            "plain_range": [
              142,
              159
            ],
            "means": "The words “expected revenues” make the test a forecast. The policy does not say whose forecast, on what assumptions, or whether it is checked once the project runs.",
            "lets_through": [
              "This wording lets through any project whose forecast puts coal mining below the line, whatever it earns once built."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "threshold",
            "label": "more than 30%",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              312,
              325
            ],
            "plain_range": [
              212,
              225
            ],
            "means": "This explains the threshold: coal mining-related revenue as a share of the project's revenue.",
            "lets_through": [
              "This wording lets through infrastructure that earns up to 30% of its revenue from coal mining — a rail line or port that carries coal alongside other cargo."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "first-five-years",
            "label": "in the first five years",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              352,
              375
            ],
            "plain_range": [
              252,
              275
            ],
            "means": "This explains the period the forecast covers: the project's first five years.",
            "lets_through": [
              "This wording lets through infrastructure whose coal share rises after year five. A line or terminal built for mixed cargo and later dominated by coal passes the test at the start."
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
      "project-finance",
      "revenue-threshold"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 16,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=16",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        13548,
        13777
      ],
      "summary_text": "Santander restricts project-related financing for the construction or development of infrastructure projects where expected revenues from thermal coal mining exceed 30% in the first five years.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "midstream",
          "activity_scope": "new"
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
      "triggers": [
        {
          "metric": "revenue_share",
          "inequality": ">",
          "value": 30,
          "definition": "expected revenues from thermal coal mining-related activities of the project's revenues in the first five years",
          "measurement_timeframe": "first five years"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
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
        "commitment_specific_carve_outs": 0,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "A forecast, a share and a five-year window each narrow the rule; stated together they show how little it reaches.",
          "text": "The test is passed at the forecast stage, and never taken again.\n\nA project is caught if its expected revenues from thermal coal mining-related activities will be more than 30% of its revenues in its first five years. “Expected” makes it a forecast, and the policy does not say whose. “More than 30%” lets through a rail line or port that carries coal alongside other cargo. “The first five years” lets through a project whose coal share rises later.\n\nAnd the restriction reaches project-related financing only, so the infrastructure's owner can still borrow at company level.\n\nWhat remains is a project loan for infrastructure forecast, at the outset, to depend mostly on coal mining."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who has to change anything because of this commitment.\n\nA developer seeking project financing from Santander for a rail link, port or conveyor whose own forecast shows more than 30% of its first five years' revenue coming from coal mining. That developer is caught.\n\nA developer whose forecast shows less is not, whatever the line carries later. An owner financing the same infrastructure at company level is not.\n\nThe commitment binds the dedicated coal project that says so in its own numbers, and releases everything that can be described as mixed use."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the restriction reaches past the mine to the infrastructure that serves it, and publishes the test — a share, a threshold and a period — rather than leaving “primarily” or “dedicated” undefined.\n\nWhere it stops is the kind of number it uses. A forecast, not an outcome; a share, not an amount; the first five years, not the asset's life.\n\nA published test for coal infrastructure is worth having. This one measures the plan, not the asset."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Measure over the asset's life",
          "content": "Test coal revenue over the infrastructure's expected life, not its first five years, and check it after construction."
        },
        {
          "title": "Cover the owner",
          "content": "Extend the restriction to general corporate financing for the infrastructure's owner."
        }
      ],
      "what_needs_to_change_closing": "Until then, the test is passed at the forecast stage and never taken again.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Santander commits not to finance infrastructure projects that would depend on coal mining for more than 30% of their revenue. We have not yet reviewed what it financed against this commitment.",
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
