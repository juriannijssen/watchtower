/* Commitment data — generated from commitments/commitment-santander-greenfield-oil.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "santander-greenfield-oil",
    "bank": "Santander",
    "commitment_number": 6,
    "category": "oil_gas_expansion",
    "effective_date": "2023-02-23",
    "title": "Santander's Commitment on Greenfield Oil Projects",
    "short_title": "Commitment on Greenfield Oil Projects",
    "article_published": null,
    "intro": "Santander added this restriction in February 2023, in revision 2SA678-4 of its Environmental and Social Risk Management Policy. It commits the bank not to finance the development of new oil fields.",
    "naive_reading": "it will not put financing into opening up new oil fields",
    "plain_language_note": "The rule is a short list item; the date that gives it meaning is in a footnote beneath it. The plain versions keep both word for word where it matters.",
    "sources_intro": "One policy document states this commitment, and two passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=6",
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
        "intro": "The item in the oil and gas list of the policy's restrictions, under the lead-in that governs all of them.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to the following activities in any client segment: … Project-related financing to Oil upstream greenfield projects.",
        "plain_rendering": "Santander will not directly invest in or provide, in any client segment: Project-related financing to Oil upstream greenfield projects.",
        "phrases": [
          {
            "id": "project-related",
            "label": "Project-related",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              147,
              162
            ],
            "plain_range": [
              73,
              88
            ],
            "means": "This explains what financing this commitment covers: financing for a project. The policy does not define “project-related”, and Watchtower records it as project financing.",
            "lets_through": [
              "This wording lets through general corporate financing, bonds and other company-level financing to the producers that develop new oil fields. That financing is not project-related."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "oil-upstream-greenfield",
            "label": "Oil upstream greenfield",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              176,
              199
            ],
            "plain_range": [
              102,
              125
            ],
            "means": "The words “Oil upstream greenfield” name new oil fields. Gas is not mentioned, and greenfield is defined in a footnote, quoted below.",
            "lets_through": [
              "This wording lets through new gas fields, which the sentence does not name.",
              "It also lets through expansion of fields already approved — new wells, new phases — which are not greenfield."
            ],
            "defined_in_clause": 2,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "esg",
        "title": "The definition",
        "intro": "Footnote 14, attached to the word “greenfield” in the rule, says which fields count.",
        "location": {
          "distance": "nearby",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Defining Greenfield as those fields whose approval for development is after May 2021.",
        "plain_rendering": "Greenfield means fields whose approval for development is after May 2021.",
        "phrases": [
          {
            "id": "after-may-2021",
            "label": "after May 2021",
            "type": "narrowing_qualifier",
            "source": "watchtower_exception",
            "watchtower_ref": "approval for development is after May 2021",
            "not_in_synthesis": false,
            "verbatim_range": [
              70,
              84
            ],
            "plain_range": [
              58,
              72
            ],
            "means": "This explains which fields count as greenfield: those approved for development after May 2021.",
            "lets_through": [
              "The date lets through every field approved for development in or before May 2021, for its whole life, including the drilling and expansion still ahead of it."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "greenfield",
      "upstream",
      "project-finance",
      "corporate-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 6,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=6",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        7548,
        7617
      ],
      "summary_text": "Santander restricts project-related financing for upstream oil greenfield projects approved for development after May 2021.",
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
          "condition": "Greenfield is defined as fields whose approval for development is after May 2021.",
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
        "severity": "classification",
        "watchtower": "The greenfield definition is recorded as an exception.",
        "bank_green": "It is a definition: it says which fields the restriction covers. As an exception it adds a commitment-specific carve-out point; as scope it would not — 1 point instead of 2, still hollowed.",
        "action": "Move the definition to the trigger or scope fields."
      },
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
          "recommended_because": "One instrument, one fuel and one date do all the narrowing, and the gap is best stated flatly.",
          "text": "The commitment takes a position on new fields, and then narrows it three ways.\n\nIt covers project-related financing only. A producer developing a new field can raise general corporate financing or bonds from Santander and use them for the field; only financing tied to the project is restricted.\n\nIt covers oil. The sentence says “Oil upstream greenfield projects”, and new gas fields are not named anywhere in it.\n\nAnd it covers fields approved for development after May 2021. Every field approved earlier — with its future wells, phases and expansions — is outside it for good.\n\nThe standing exception applies too: the policy's governance bodies can approve exceptions aligned with its principles. What remains is a project loan for a new oil field approved after May 2021 that no committee has waived."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who has to change anything because of this commitment.\n\nA developer that needs project financing from Santander for an oil field approved for development after May 2021 is caught. That is the whole group.\n\nA producer that finances the same field through its balance sheet is not caught. Neither is one developing a new gas field, nor one expanding a field approved before June 2021.\n\nLarge producers fund most of their development from company-level financing, which this commitment never reaches. Smaller developers and single-asset companies, which rely on project financing, are the ones it binds."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the commitment takes a position on new oil fields at all, and gives a date that makes it checkable.\n\nThe International Energy Agency's net-zero pathway has no new oil and gas fields approved for development. A bank that restricts financing for new fields is aligning with that; one that publishes a cut-off date lets anyone check a field against it.\n\nThe limits are the instrument and the fuel. The restriction covers project-related financing, so producers financing new fields at company level are untouched, and it names oil, so new gas fields are outside it.\n\nThe position is right. The reach is one kind of loan for one fuel."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Cover the company, not only the project",
          "content": "Extend the restriction to general corporate financing and bonds for producers developing new fields."
        },
        {
          "title": "Name gas as well as oil",
          "content": "New gas fields are as much a part of new supply as new oil fields."
        }
      ],
      "what_needs_to_change_closing": "Until then, a producer opening a new oil field can finance it through its balance sheet, and one opening a new gas field is not covered at all.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Santander commits not to finance the development of new oil fields. We have not yet reviewed what it financed against this commitment.",
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
