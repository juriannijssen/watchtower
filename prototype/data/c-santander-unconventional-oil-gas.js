/* Commitment data — generated from commitments/commitment-santander-unconventional-oil-gas.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "santander-unconventional-oil-gas",
    "bank": "Santander",
    "commitment_number": 5,
    "category": "fracking",
    "effective_date": null,
    "title": "Santander's Commitment on Unconventional Oil & Gas",
    "short_title": "Commitment on Unconventional Oil & Gas",
    "article_published": "2026-08-28",
    "intro": "Santander sets out this restriction in its Environmental and Social Risk Management Policy; the version on file is the revision approved in June 2025. The policy commits the bank not to invest in, or provide financial products and services to, oil and gas producers built around fracking, tar sands, coalbed methane and Arctic oil and gas.",
    "naive_reading": "it will not finance companies whose business is fracking, tar sands or Arctic oil",
    "plain_language_note": "The rule and the passages that qualify it sit in different parts of the policy — one in a footnote to the rule, one at the start of the document. Reading the rule alone gives the wrong impression, which is why all three are shown here.",
    "sources_intro": "One policy document states this commitment. Three separate passages in it are needed to see what it actually covers.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=5",
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
        "intro": "The sentence that creates the obligation. It sets a two-part test for clients in exploration and production, and both parts are measured against the client's own business.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to… Clients involved in exploration and production for whom the activities derived from the combination of fracking, tar sands, coalbed methane and Arctic oil & gas represent a significant part of their reserves, or account for more than 30% of their activity.",
        "plain_rendering": "Santander will not directly invest in, or provide financial products or services to, clients in exploration and production where fracking, tar sands, coalbed methane and Arctic oil & gas combined are a significant part of their reserves, or account for more than 30% of their activity.",
        "phrases": [
          {
            "id": "significant",
            "label": "significant part",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              271,
              287
            ],
            "plain_range": [
              202,
              218
            ],
            "means": "The word “significant” sets the other of two parallel tests in the same sentence, measured against the client's reserves. It has no number attached, and the policy does not define it.",
            "lets_through": [
              "This wording lets through whatever the bank decides. Where the published figure would be inconvenient, the softer test is available instead, and nobody outside the bank can tell which of the two was applied to a given client."
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
              322,
              335
            ],
            "plain_range": [
              253,
              266
            ],
            "means": "This explains the one number in this commitment. It covers fracking, tar sands, coalbed methane and Arctic oil and gas combined, measured as a share of the client's activity.",
            "lets_through": [
              "This wording lets through producers below the line. Above it, a producer is restricted — read by itself, this part works.",
              "It also leaves “activity” undefined. Revenue, production and capital spending give different answers, and the policy does not say which it uses."
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
        "intro": "In a footnote to the policy's definition of scope, well before the rule, Santander says who counts as the client when a group works across several industries.",
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
            "means": "This explains where the test is measured for a group that spans several industries: at the subsidiary, not the group. The policy otherwise treats the client as the last parent company; for conglomerates this footnote overrides that.",
            "lets_through": [
              "This wording lets through the parent company and every other subsidiary of a conglomerate, even when one subsidiary fails the test. Financing to the parent is allowed if it is “unrelated to the restricted entity”, and the policy does not say how that is shown."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 3,
        "role": "exception",
        "source_id": "esg",
        "title": "The exception",
        "intro": "In footnote 13, attached to the word “fracking” in the rule above, Santander sets out when the rule need not apply to fracking.",
        "location": {
          "distance": "nearby",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Due to the necessity to support the energy transition, energy security and affordability, and in situations where there can be exceptional social and economic implications, that could ultimately enable the transition and may play a crucial role in the economic and social local development (developing countries/emerging economies), exceptions in relation to fracking may be considered in jurisdictions where these activities are permissible under local regulation, subject to enhanced due diligence and appropriate approval.",
        "plain_rendering": "To support the energy transition, energy security and affordability, and where there can be exceptional social and economic implications that could enable the transition and local development (developing countries/emerging economies), exceptions for fracking may be considered where these activities are permissible under local regulation — subject to enhanced due diligence and appropriate approval.",
        "phrases": [
          {
            "id": "exceptional",
            "label": "exceptional social and economic implications",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              127,
              171
            ],
            "plain_range": [
              92,
              136
            ],
            "means": "The words “exceptional social and economic implications” set the occasion for the exception. Nothing in the policy says what counts as exceptional, or who judges it.",
            "lets_through": [
              "This wording lets through any case the bank can describe as important to energy security, affordability or local development. The brackets name developing countries and emerging economies as the setting, but the sentence does not say the exception is limited to them."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "may-be-considered",
            "label": "may be considered",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "Exceptions for fracking may be considered",
            "not_in_synthesis": false,
            "verbatim_range": [
              368,
              385
            ],
            "plain_range": [
              259,
              276
            ],
            "means": "This explains that the carve-out is a discretion, not a rule, and that it applies to fracking only. It does not raise the threshold. It removes it for the case in hand.",
            "lets_through": [
              "The words “may be considered” let through any fracking client the bank decides to take on. Nothing is published about how often the discretion is used, on what grounds, or by whom."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "permissible",
            "label": "permissible under local regulation",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "where permissible under local regulation",
            "not_in_synthesis": false,
            "verbatim_range": [
              430,
              464
            ],
            "plain_range": [
              304,
              338
            ],
            "means": "This explains the one hard condition attached to the carve-out: the activity has to be legal where it happens. The reasons in front of it are reasons, not tests.",
            "lets_through": [
              "This wording lets through fracking in the places it actually happens at scale. Fracking occurs where it is permitted, so this condition is met wherever the exception would be needed. The threshold holds without question only where fracking is already banned or restricted."
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
      "oil-sands",
      "arctic",
      "unconventional",
      "reserves",
      "subsidiary",
      "parent-company",
      "discretionary-carve-out"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 5,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=5",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        7282,
        7551
      ],
      "summary_text": "Santander restricts corporate financial services to upstream oil and gas clients for whom fracking, tar sands, coalbed methane, and Arctic activities represent a significant part of reserves or over 30% of activity, with exceptions for fracking and conglomerates.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "shale",
            "oil_sands",
            "coalbed methane",
            "arctic"
          ],
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "group",
          "relationship_status": "new_and_existing",
          "certainty": "4"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [
        {
          "metric": "other",
          "inequality": null,
          "value": null,
          "definition": "Activities derived from the combination of fracking, tar sands, coalbed methane and Arctic oil & gas represent a significant part of their reserves"
        },
        {
          "metric": "other",
          "inequality": ">",
          "value": 30,
          "definition": "percentage of activity derived from the combination of fracking, tar sands, coalbed methane and Arctic oil & gas"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Exceptions for fracking may be considered in jurisdictions where permissible under local regulation, subject to enhanced due diligence and appropriate approval.",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": true,
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
          "recommended_because": "There is nothing to credit that survives the exception, and the flat statement of the gap is the strongest thing available.",
          "text": "A threshold that can be set aside wherever the activity is legal is not a threshold. It is a description of the status quo.\n\nThe 30% figure is the part of this policy that gets quoted, and for fracking it is the part that never has to bite. Where fracking is banned, the limit is redundant, because there is nothing to finance. Where fracking is legal and happening at scale, the exception may be considered.\n\nThe conditions in front of the exception — energy security, affordability, exceptional social and economic implications — are reasons, not tests. None is defined, and the bank judges all of them. The only hard condition is that the activity is permissible under local regulation.\n\nThe second test compounds it. “Significant part” sits in the same sentence as the number, with no definition, so even the checkable limit has an unchecked alternative beside it. And for a conglomerate the test runs subsidiary by subsidiary, so the parent can still be financed."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask where this policy binds, and for fracking the answer is: where it is not needed.\n\nThe threshold holds in jurisdictions that prohibit or restrict fracking. In those places a producer is unlikely to be above 30% from fracking in the first place, because the activity is constrained by law rather than by the bank.\n\nWherever fracking is permitted — which is where the industry operates — the exception is open. A producer well above the published limit remains financeable, subject to enhanced due diligence and an internal approval nobody outside sees.\n\nTar sands, coalbed methane and Arctic oil and gas have no such exception, so the threshold does bind producers of those. For fracking, the policy restrains clients in the countries that already restrain them, and releases them in the countries that do not. The rule mirrors local law instead of adding to it."
        },
        {
          "angle": "how_it_changed",
          "recommended": false,
          "recommended_because": null,
          "text": "The rule and its exception were written at different times, and the change log says so.\n\nThe 30% test for fracking, tar sands, coalbed methane and Arctic oil and gas predates the current policy. The fracking exception did not. Revision 2SA678-5, approved in December 2023, lists as its first change: include potential exceptions over fracking under certain circumstances. The conglomerate rule followed in February 2025, in revision 2SA678-6.\n\nSo a restriction that read as a flat limit was given a discretion for the one activity where it bit hardest, and then a subsidiary-level scope for groups that span several industries. Neither change touched the 30% figure, which is why the policy still reads as strict.\n\nThe number stayed the same. What it applies to got smaller."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Delete the fracking exception",
          "content": "An exception available wherever the activity is legal is available wherever the activity happens. It removes the threshold rather than qualifying it."
        },
        {
          "title": "Define \"significant part\", or drop it",
          "content": "An undefined test sitting in the same sentence as a published number makes the number optional."
        },
        {
          "title": "Measure conglomerates at group level",
          "content": "Financing to a parent reaches every subsidiary it can move funds to. Applying the test subsidiary by subsidiary lets the group borrow for the business the policy restricts."
        },
        {
          "title": "Publish how often the exception is used",
          "content": "A discretion nobody outside the bank can count is indistinguishable from no restriction at all."
        }
      ],
      "what_needs_to_change_closing": "Until the exception goes, the 30% limit describes where fracking is already restricted rather than restricting it anywhere new.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That's what Santander lent to a producer of exactly the kind its policy names, despite a commitment that was supposed to stop it. And it is only what we have been able to find so far.\n\nHow did that happen? A breach, or a loophole? That is what this page works out.",
    "what_it_funded": "a producer of exactly the kind of oil and gas its policy names",
    "headline_figure": {
      "display": "$395M",
      "combines": "$395M YPF SA",
      "complete": false
    },
    "deals": [
      {
        "id": "santander-ypf-2025",
        "company": "YPF SA",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 395000000,
        "amount_display": "$395M",
        "instruments": [
          "general corporate finance",
          "bond underwriting"
        ],
        "contradiction": "The borrower's fracking share of production is close to 60%, against a published limit of 30%. Fracking is legal where it operates, so the exception is available and the limit does not bind.",
        "phrase_refs": [
          "permissible"
        ],
        "source_url": null
      }
    ]
  },
  "provenance": {
    "built": "2026-09-10",
    "spec": "Commitment Analysis Spec v3.11",
    "source": "Watchtower synthesis run 149, document 25536",
    "reading": "drafted"
  }
};
