/* Commitment data — generated from commitments/commitment-santander-protected-areas-oil-gas.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "santander-protected-areas-oil-gas",
    "bank": "Santander",
    "commitment_number": 1,
    "category": "other",
    "effective_date": null,
    "title": "Santander's Commitment on Oil & Gas in Protected Areas",
    "short_title": "Commitment on Oil & Gas in Protected Areas",
    "article_published": null,
    "intro": "Santander sets out this restriction in its Environmental and Social Risk Management Policy; the version on file is the revision approved in June 2025. It commits the bank not to invest in, or provide financial products and services to, oil and gas extraction that threatens wetlands of international importance, World Heritage Sites or protected nature areas.",
    "naive_reading": "it will not finance oil and gas projects in protected nature areas",
    "plain_language_note": "The rule's lead-in and its list item are printed apart, with footnotes between them. The plain version joins them into one sentence.",
    "sources_intro": "One policy document states this commitment, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=1",
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
        "intro": "The restriction as the policy lists it: a lead-in that governs every item in section 2.1, and the item on protected areas, which covers extraction, power, mining and other major infrastructure alike.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to the following activities in any client segment: … Any projects or activities for oil & gas extraction, power generation or transmission, mining, manufacturing, plantations or other major infrastructure projects which put areas classified as … Ramsar Sites, World Heritage Sites or by the International Union for Conservation of Nature (IUCN) as categories I, II, III or IV at risk.",
        "plain_rendering": "Santander will not directly invest in, or provide financial products or services to, any projects or activities for oil & gas extraction, power, mining, manufacturing, plantations or other major infrastructure which put Ramsar Sites, World Heritage Sites or IUCN categories I, II, III or IV at risk.",
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
              19,
              27
            ],
            "means": "The word “directly” limits this commitment to Santander's own investment and its own financial products and services. The policy defines a client as the last parent company and says funds are not included.",
            "lets_through": [
              "This wording lets through indirect exposure — investment held through funds, which the policy's definition of a client leaves out, and anything that reaches the activity other than through Santander's own products."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "categories-at-risk",
            "label": "categories I, II, III or IV at risk",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              442,
              477
            ],
            "plain_range": [
              263,
              298
            ],
            "means": "This explains which areas count and when. Beside Ramsar and World Heritage Sites, only IUCN protected areas in categories I to IV are named, and the restriction applies when a project puts one “at risk” — a test the policy does not define, and does not say who applies.",
            "lets_through": [
              "This wording lets through projects in IUCN categories V and VI — protected landscapes and areas managed for sustainable use — and in protected areas that carry no IUCN category at all.",
              "It also lets through any project Santander's own assessment finds does not put the area at risk, including one beside it or upstream of it. The policy gives no distance, buffer or method."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "iucn-categories",
      "ramsar",
      "world-heritage",
      "project-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 1,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=1",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        5342,
        6794
      ],
      "summary_text": "Santander restricts project-related financing for oil and gas extraction projects that put Ramsar, World Heritage, or IUCN Category I-IV sites at risk, subject to high-level governance exceptions.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
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
        "field": "scope.product.financing_type",
        "severity": "classification",
        "watchtower": "Recorded as project financing.",
        "bank_green": "The item covers “projects or activities”, under a lead-in that restricts investment and all financial products and services. Recorded as general corporate financing, the project-finance input would fall away: 0 points, holds.",
        "action": "Record financing_type as corporate, or as both."
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
        "commitment_specific_carve_outs": 0,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The places named are the right ones; the gap is in which categories count and in an undefined test of harm, and that is best said flatly.",
          "text": "The list of places is familiar, and the protection is narrower than it looks.\n\nWetlands of international importance and World Heritage Sites are named in full. Other protected areas count only if the IUCN classifies them in categories I to IV, which leaves out categories V and VI — protected landscapes and areas managed for sustainable use — and national reserves with no IUCN category at all.\n\nThe trigger is soft. A project is caught when it puts one of these areas “at risk”, and the policy does not say how risk is judged, at what distance, or by whom. A drilling pad or a pipeline route beside a protected area can be assessed as not putting it at risk.\n\nAnd the whole section sits under the policy's standing exception: corporate governance bodies can approve exceptions aligned with its principles. The commitment names the right places, and leaves the question of harm to Santander."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask which oil and gas projects this commitment actually stops.\n\nA project inside a Ramsar wetland, a World Heritage Site or an IUCN category I–IV area, which Santander itself judges to put that area at risk, and for which no exception is approved. That project is caught.\n\nA project in a category V or VI area is not. Neither is one in a protected area with no IUCN category, nor one beside a protected area that Santander's assessment finds does not put it at risk, nor one the Risk Proposal Forum, the Executive Risk Committee or the Executive Committee approves as an exception.\n\nThe commitment binds the unambiguous case. Everything that turns on judgement — category, distance, risk — is decided inside the bank."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: on its wording, this restriction is not limited to one kind of financing. The lead-in covers investment and all financial products and services, in any client segment, and the item covers “projects or activities”, not only projects. Santander defines financial products and services broadly: credit, insurance, asset management, derivatives, equity and advisory.\n\nA protected-area rule that stopped at project finance would leave company-level financing untouched. This one, as written, does not — although Watchtower records it as project financing.\n\nThe limits are in what is protected and when. Only IUCN categories I to IV are named, so protected landscapes and sustainable-use areas fall outside, and the restriction applies when a project puts an area “at risk”, which the policy does not define.\n\nA wide instrument scope, pointed at a narrow set of places, with the threshold for harm left to the bank."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Cover all protected areas",
          "content": "Include IUCN categories V and VI and nationally protected areas with no IUCN category, not only categories I to IV."
        },
        {
          "title": "Define “at risk”",
          "content": "Say what counts — inside the boundary, within a set distance, upstream — and publish how the assessment is made."
        }
      ],
      "what_needs_to_change_closing": "Until then, the commitment protects the places everyone agrees on, as far as Santander decides a project threatens them.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Santander commits not to finance oil and gas extraction that puts protected areas at risk. We have not yet reviewed what it financed against this commitment.",
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
