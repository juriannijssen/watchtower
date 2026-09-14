/* Commitment data — generated from commitments/commitment-santander-new-coal-mines.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "santander-new-coal-mines",
    "bank": "Santander",
    "commitment_number": 15,
    "category": "coal",
    "effective_date": null,
    "title": "Santander's Commitment on New Coal Mines",
    "short_title": "Commitment on New Coal Mines",
    "article_published": null,
    "intro": "Santander sets out this restriction in the mining section of its Environmental and Social Risk Management Policy; the version on file is the revision approved in June 2025. It commits the bank not to finance new thermal coal mines, or the expansion of existing ones.",
    "naive_reading": "it will not finance new or bigger coal mines anywhere",
    "plain_language_note": "The item is already plain. The plain version only joins it to the lead-in and completes its grammar.",
    "sources_intro": "One policy document states this commitment, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=15",
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
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to the following activities in any client segment: … Project-related financing for new, or the expansion of thermal coal mines.",
        "plain_rendering": "Santander will not directly invest in or provide, in any client segment: Project-related financing for new thermal coal mines, or the expansion of existing ones.",
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
            "means": "This explains what financing this commitment covers: financing tied to a mine project. The policy does not define “project-related”, and Watchtower records it as project financing.",
            "lets_through": [
              "This wording lets through general corporate financing, bonds and other company-level financing to the companies that open or expand thermal coal mines. That financing is not project-related."
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
      "corporate-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 15,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=15",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        13471,
        13545
      ],
      "summary_text": "Santander restricts project-related financing for new thermal coal mines or the expansion of existing ones.",
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
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "Any expansion counts, with no size threshold — genuinely strict — and conceding it first makes the instrument limit land.",
          "text": "Credit first: any expansion counts. The restriction covers new thermal coal mines and the expansion of existing ones, with no minimum — no percentage increase in output that an expansion must pass before it is caught.\n\nThat closes the route by which coal production grows without a new mine: a larger pit, a new seam, a higher extraction rate at an existing site.\n\nThe limit is the instrument. The restriction applies to project-related financing, which Watchtower records as project financing. A company opening or expanding a mine can still raise general corporate financing and bonds from Santander, unless it is a new group, which a separate commitment covers, or until the 2030 phase-out for mine owners.\n\nAnd unlike its neighbours in the policy, the item does not say “worldwide”."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "The commitment reaches coal mines through one door: project-related financing.\n\nA mining company opening a new thermal coal mine, or expanding one, can borrow from Santander at company level and spend the funds on the mine. Only financing tied to the project is restricted.\n\nThe policy's other coal-mining rules close part of that gap: new groups that own coal mining operations are turned away as clients, and from 2030 mine-owning entities lose access. Until 2030, an existing client can finance a new mine through its balance sheet.\n\nThe item also omits the word “worldwide” that its neighbours carry. Watchtower records it as global."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who has to change anything because of this commitment.\n\nA developer that needs project financing from Santander to open or expand a thermal coal mine is caught.\n\nAn existing client that funds the same mine from its balance sheet is not, until 2030. The largest miners fund most development at company level; single-mine developers depend on project financing.\n\nThe commitment binds the project-financed mine, and releases the balance-sheet one until the phase-out arrives."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Cover the miner",
          "content": "Extend the restriction to general corporate financing and bonds for companies opening or expanding thermal coal mines."
        },
        {
          "title": "Say where it applies",
          "content": "The item does not say “worldwide”, as the neighbouring coal items do. State that it applies everywhere."
        }
      ],
      "what_needs_to_change_closing": "Until then, the mine itself cannot be project-financed, and the company opening it can still borrow.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Santander commits not to finance new thermal coal mines or the expansion of existing ones. We have not yet reviewed what it financed against this commitment.",
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
