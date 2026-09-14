/* Commitment data — generated from commitments/commitment-ing-lng-export-terminals.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "ing-lng-export-terminals",
    "bank": "ING",
    "commitment_number": 3,
    "category": "oil_gas_expansion",
    "effective_date": "2026-01-01",
    "title": "ING's 2025 Commitment on LNG Export Terminals",
    "short_title": "2025 Commitment on LNG Export Terminals",
    "subject": "LNG Export Terminals",
    "article_published": null,
    "intro": "ING announced this commitment in its Climate Progress Update of September 2024, in the same foreword in which chief executive Steven van Rijswijk set out the bank's other oil and gas steps, and repeated it later in the update. ING says it will stop providing financing for LNG export terminals, citing the International Energy Agency's 2023 World Energy Outlook.",
    "naive_reading": "it has stopped financing the terminals that ship liquefied natural gas around the world",
    "plain_language_note": "The plain version drops the connective opener and keeps every word of the operative phrase. There was little else to simplify.",
    "sources_intro": "One document states this commitment, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "cpu2024",
        "document_title": "ING Climate Progress Update 2024",
        "document_url": "https://ing.com/binaries/content/assets/documents/files/climate_progress_update_2024.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/ing_group/document/4517/synthesis?run=105&commitment=3",
        "watchtower_document_id": 4517,
        "watchtower_institution": "ing_group",
        "synthesis_run": 105,
        "version_label": "September 2024",
        "published": "2024-09-18",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file"
      }
    ],
    "clauses": [
      {
        "index": 1,
        "role": "rule",
        "source_id": "cpu2024",
        "title": "The rule",
        "intro": "The sentence from the chief executive's foreword. ING restates it later in the same update in almost the same words.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "… we've decided to stop providing new financing for new LNG export terminals after 2025, in line with observations from the IEA's 2023 World Energy Outlook.",
        "plain_rendering": "ING has decided to stop providing new financing for new LNG export terminals after 2025, in line with the IEA's 2023 World Energy Outlook.",
        "phrases": [
          {
            "id": "new-lng-export-after-2025",
            "label": "new financing for new LNG export terminals after 2025",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              34,
              87
            ],
            "plain_range": [
              34,
              87
            ],
            "means": "This explains what this commitment reaches, and almost every word narrows it: new financing, for a new terminal, built for export, agreed from 2026. The qualifiers sit too close together to take apart, so they are read here as one.",
            "lets_through": [
              "This wording lets through financing for LNG export terminals that already exist and for import and regasification terminals, which are not export terminals. The wording never says whether a new train at an existing terminal counts as a new terminal.",
              "It also lets through financing agreed before the end of 2025. A terminal financed during 2025 is outside this commitment, however long it then operates.",
              "It also lets through general corporate financing to the companies that build and run these terminals. The wording restricts financing for a terminal, not financing for its owner."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "lng",
      "liquefaction",
      "new-financing",
      "project-finance",
      "corporate-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 105,
      "document_id": 4517,
      "institution": "ing_group",
      "commitment_index": 3,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/ing_group/document/4517/synthesis?run=105&commitment=3",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-06-18",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        3917,
        4086
      ],
      "summary_text": "ING will stop providing new financing for new LNG export terminals after 2025.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "midstream",
          "activity_scope": "new"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": null,
          "certainty": "5"
        },
        "product": {
          "financing_type": "project",
          "capital_markets": null,
          "transaction_status": null
        }
      },
      "triggers": [],
      "commitment_type": "restriction",
      "effective_date": "2025",
      "exceptions": [],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 1 fields corrected]\nCHANGES:\n- [ING will stop providing new financing to pure-play upstream oil and gas companies that continue to develop new fields, effective immediately.]: Removed the exception regarding non-pure-play companies because this condition is already captured under the triggers/counterparty scope, and the schema dictates that conditions captured in other dimensions should not be duplicated in exceptions.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [],
    "disagreements": [
      {
        "field": "scope.product.transaction_status",
        "severity": "omission",
        "watchtower": "transaction_status is null on this commitment.",
        "bank_green": "The sentence restricts “new financing”, so the commitment reaches new transactions only. Recording `new` would add the new-business input to the rating: 2 points instead of 1, still `hollowed`.",
        "action": "Set transaction_status to new."
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
          "recommended_because": "A narrow instrument and a delayed start do most of the work here, and the gap is best stated flatly.",
          "text": "Read closely, this commitment restricts one kind of transaction: new financing, raised for a new terminal built to export LNG, agreed after the end of 2025.\n\nEvery other way of financing LNG export sits outside it. Terminals that already exist keep their financing, and the sentence never says whether a new train at an existing terminal counts as a new terminal. Import and regasification terminals are not export terminals. Financing agreed during 2025, more than a year after the update was published, is allowed, however long the terminal then operates.\n\nWatchtower records the commitment as reaching project financing, which matches the wording: the financing is for a terminal. The companies that develop and operate LNG export terminals can still raise general corporate financing and bonds from ING, and use them for whatever they are building.\n\nThe commitment points at the right asset. It reaches that asset through the narrowest channel available, and gave the market fifteen months' notice."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who has to change anything because of this commitment.\n\nA developer that needs project financing from ING for a new LNG export terminal, and has not agreed it by the end of 2025, is caught. That is the whole group.\n\nA developer that raises the same financing at company level is not caught: the restriction is on financing for a terminal, not for its owner. Neither is one that closed its financing in 2025, nor one expanding a terminal that already exports, nor one building the import terminals at the other end of the same trade.\n\nThe companies most able to keep building — large, diversified developers with balance sheets strong enough to fund terminals through corporate borrowing — are the ones this commitment releases. The single-asset project company that depends on project financing is the one it binds.\n\nThe asymmetry follows directly from the choice of instrument."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: ING named a specific asset, gave a date, and said why.\n\nLNG export terminals are long-lived infrastructure built to move gas to export markets, and a bank that stops financing new ones is taking a position on gas, not only on oil. ING ties the decision to the International Energy Agency's 2023 World Energy Outlook, a published reference anyone can check, rather than to an internal assessment.\n\nWhere it stops is in how the commitment reaches the asset. The restriction applies to new financing for new terminals, from 2026. It reaches the terminal through project financing — which is how Watchtower records it — and leaves the developer's general corporate financing and bonds untouched. It left more than a year in which new terminal financing could still be agreed, and it says nothing about expansions, import terminals, or financing already in place.\n\nThe asset is well chosen. The route to it is the narrowest one available."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Cover the developer, not only the terminal",
          "content": "Extend the restriction to general corporate financing and bonds for companies whose main business is developing new LNG export capacity."
        },
        {
          "title": "Say what counts as new",
          "content": "State whether new trains, expansions and debottlenecking at existing terminals count as new LNG export terminals."
        }
      ],
      "what_needs_to_change_closing": "Until then, new LNG export capacity can still be financed through ING — just not as a stand-alone project loan agreed after 2025.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "ING says it will stop providing new financing for new LNG export terminals after 2025. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Watchtower synthesis run 105, document 4517",
    "reading": "drafted"
  }
};
