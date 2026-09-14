/* Commitment data — generated from commitments/commitment-societe-generale-thermal-dedicated.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-thermal-dedicated",
    "bank": "Société Générale",
    "commitment_number": 9,
    "category": "thermal_coal",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Ban on Financing Thermal Coal Activities",
    "short_title": "Ban on Financing Thermal Coal Activities",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Thermal Coal Sector Policy, published in April 2026. It covers the whole coal chain — mining it, moving it, trading it, transforming it, burning it, and the grid infrastructure attached to the power stations. What it covers is one type of financing.",
    "naive_reading": "it will not finance thermal coal activities",
    "plain_language_note": "The widest list of activities in the document, behind the narrowest description of what is being refused.",
    "sources_intro": "One policy document states this exclusion, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "tcp2026",
        "document_title": "Société Générale Thermal Coal Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/thermal-coal-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=9",
        "watchtower_document_id": 28051,
        "watchtower_institution": "societe_generale",
        "synthesis_run": 306,
        "version_label": "April 2026",
        "published": "2026-04-01",
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "published_source": null,
        "published_confidence": null
      }
    ],
    "clauses": [
      {
        "index": 1,
        "role": "rule",
        "source_id": "tcp2026",
        "title": "The rule",
        "intro": "The exclusion itself, the whole of the section the policy gives to dedicated transactions. The list of activities is the most complete in the document and Watchtower records the financing type as project.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide dedicated financial transactions, products and services when the underlying activities are… Thermal coal mining, transport, trading or transformation; or Coal-fueled power production units and associated infrastructures.",
        "plain_rendering": "Société Générale will not provide dedicated financial transactions, products and services when the underlying activities are thermal coal mining, transport, trading or transformation, or Coal-fueled power production units and associated infrastructures.",
        "phrases": [
          {
            "id": "dedicated9",
            "label": "dedicated financial transactions, products and services",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              27,
              82
            ],
            "plain_range": [
              34,
              89
            ],
            "means": "This explains what financing this commitment covers: project financing only. That is financing raised for a named activity, where it is clear what the financing is used for. Watchtower records the financing type on this commitment as project, and it is the only commitment in this document recorded that way.",
            "lets_through": [
              "The word “dedicated” lets through general corporate financing. A utility borrowing at group level, drawing on a revolving credit facility or issuing a bond is not asking for a dedicated transaction, so this commitment never applies, however much coal it burns.",
              "It also lets through everything the client rules let through. Those are commitments 3 to 7, and between them an existing client under 50% with a communicated transition plan is outside all of them."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "thermal-coal",
      "dedicated-transaction",
      "project-finance",
      "corporate-finance",
      "midstream"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 306,
      "document_id": 28051,
      "institution": "societe_generale",
      "commitment_index": 9,
      "commitment_id": "8c52bec4-00ee-51ea-ab9e-ff39a8a91f47",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=9",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        13071,
        13322
      ],
      "summary_text": "Societe Generale excludes all dedicated financing and financial products for thermal coal mining, transport, trading, transformation, and coal-fueled power production units and associated infrastructure.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": null,
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": null,
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
          "condition": "Deviations may be granted on an exceptional basis by the Societe Generale group oversight committee chaired by senior management",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": true,
          "where": "Section 5.2, Implementation process"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 9 fields corrected]\nCHANGES:\n- All commitments: Added missing `certainty` object with `certainty_rating: \"5\"` to all exceptions to comply with schema requirements.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Deviations may be granted on an exceptional basis by the Societe Generale group oversight committee chaired by senior management",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "watchtower",
        "governance_process": true,
        "standing": true,
        "where": "Section 5.2, Implementation process"
      }
    ],
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded — as on every commitment in this document.",
        "bank_green": "Watchtower states no weakness anywhere in the Thermal Coal synthesis, on any of the nine commitments. The phrases highlighted on this page are Bank.Green's reading and are labelled as such.",
        "action": "Populate the weaknesses field for this document. Our highlighted phrases are the proposal."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "inconsistency",
        "watchtower": "The section 7 exception for pre-existing business commitments and opportunities at an advanced stage of negotiation is attached to two of the nine commitments in this run — commitments 1 and 2. It is absent from commitments 3 to 9.",
        "bank_green": "Section 7 applies that exception to the sector policy as a whole, so it should sit on all nine commitments. We read the seven omissions as an extraction inconsistency rather than a feature of the policy.",
        "action": "Attach the section 7 exception to commitments 3 to 9. Note the consequence for the derived rating: spec v3.2 defines a standing carve-out as one appearing on EVERY commitment in a document, so as the record stands the section 7 exception counts as commitment-specific on commitments 1 and 2 and adds a point to each. Correcting the record would make it standing and move both from `hollowed` to `holds`. No other rating in this document would change."
      }
    ],
    "assessment": {
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.2 §4.1 — derived from Watchtower fields only",
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
          "recommended_because": "The activity list is the most complete in the document and it is attached to the least-used kind of financing.",
          "text": "The list of activities is the widest in the policy: thermal coal mining, transport, trading, transformation, coal-fueled power production units and the grid infrastructure attached to them. There is no threshold, no percentage and no qualifier anywhere in it.\n\nWhat limits it is the description of what is being refused. This applies to “dedicated financial transactions, products and services” — money raised for a named activity, where everyone knows what it buys. Watchtower records the financing type as project, and this is the only commitment in the document recorded that way.\n\nCoal-fired generation is overwhelmingly funded at company level. A utility drawing on a revolving credit facility, refinancing at group level or issuing a bond is not asking for a dedicated transaction, so this exclusion never engages however much coal it burns.\n\nThe activities are excluded and the companies carrying them out are not — except where commitments 3 to 7 reach them, and those stop at new business for everything but mining."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Within its scope, this is drafted as well as anything in the document.\n\nThere is no revenue test, no majority test and no undefined adverb. The bank does not ask how much of a project is thermal coal, or whether coal is its primary purpose, or what share of the sponsor's business it represents. If that is what the money is for, the answer is no.\n\nThe activity list is also unusually complete. Most coal policies name mining and generation; this one adds transport, trading and transformation, and extends to the electricity transport and distribution infrastructure directly linked to the power units. Compare it with the bank's mining policy, which reaches infrastructure only where it is “primarily linked to” the excluded activity — a qualifier this sentence does not use.\n\nThe criticism here is about what financing this commitment reaches, not about how it is written."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "This is the third time the same shape has appeared in three Société Générale policies published in the same month.\n\nOil and gas: eleven of fourteen commitments reach dedicated transactions only. Mining: an unqualified ban on metallurgical coal extraction, confined to dedicated transactions. Thermal coal: the most complete activity list in the set, confined to dedicated transactions.\n\nOnce is drafting. Three times in one month, across three documents, is a structure. The bank writes its activity bans without qualification and then attaches them to the financing route that is least used for the activities concerned.\n\nIt is the single most transferable finding we have from this bank, and it is the reason these pages should be read as a set rather than one at a time."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Cover the financing, not just the dedicated transaction",
          "content": "Coal-fired generation is overwhelmingly funded at company level. An exclusion reaching only named-purpose financing leaves the main route open."
        },
        {
          "title": "Pair it with a client test that binds existing clients",
          "content": "The client rules stop at new business, except for mining. Between them and this, an existing utility under 50% is outside everything."
        }
      ],
      "what_needs_to_change_closing": "Until then, the most complete list of coal activities in the policy is attached to the least-used kind of financing.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not provide dedicated financing for thermal coal mining, transport, trading, transformation or coal-fired power. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-10",
    "spec": "Commitment Analysis Spec v3.11",
    "source": "Watchtower synthesis run 306, document 28051",
    "reading": "drafted"
  }
};
