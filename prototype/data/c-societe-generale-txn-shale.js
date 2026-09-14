/* Commitment data — generated from commitments/commitment-societe-generale-txn-shale.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-txn-shale",
    "bank": "Société Générale",
    "commitment_number": 5,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Transaction Ban on Shale",
    "short_title": "Transaction Ban on Shale",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026, as its own item in the list of transactions the bank will not execute. Shale is separated from the other unconventional resources and given a shorter sentence.",
    "naive_reading": "it will not finance shale oil and gas",
    "plain_language_note": "The shortest exclusion in the policy. What it leaves out is visible only by comparing it with the item printed directly above it.",
    "sources_intro": "One policy document states this exclusion. Two passages are quoted here: the ban, and the glossary entry describing what shale extraction involves.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=5",
        "watchtower_document_id": 23944,
        "watchtower_institution": "societe_generale",
        "synthesis_run": 197,
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
        "source_id": "ogp2026",
        "title": "The rule",
        "intro": "The exclusion itself, printed immediately after the ban on Arctic, Amazonian and heavy oil, and deliberately shorter than it.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… exploration and production of shale oil or gas.",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are exploration and production of shale oil or gas.",
        "phrases": [
          {
            "id": "eandp",
            "label": "exploration and production",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              139,
              165
            ],
            "plain_range": [
              147,
              173
            ],
            "means": "This explains how far this commitment reaches. The item printed directly above it covers exploration, production or trading. This one stops at production.",
            "lets_through": [
              "This wording lets through trading of shale oil and gas. The bank excluded trading for Arctic, Amazonian and heavy oil in the sentence above and did not repeat it here, so shale trading is outside this commitment.",
              "It also lets through everything downstream of the wellhead — gathering, processing, transport and export of shale production, none of which is named."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          },
          {
            "id": "dedicated",
            "label": "dedicated transactions",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              27,
              49
            ],
            "plain_range": [
              34,
              56
            ],
            "means": "This explains what financing this commitment covers: project financing only. That is financing raised for a named activity, where it is clear what the financing is used for.",
            "lets_through": [
              "The word “dedicated” blocks project financing, but it allows general corporate financing. A shale producer borrowing at group level is not asking for a dedicated transaction, so this commitment does not apply."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "ogp2026",
        "title": "The definition",
        "intro": "What the policy means by shale, printed in the glossary at the end of the document. It is the only definition in the policy that describes how a resource is extracted rather than where it is.",
        "location": {
          "distance": "end_of_document",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Shale oil and shale gas are oil and gas resources trapped within shale formations. Their extraction frequently entails intensive large-scale developments including specific hydraulic fracturing techniques.",
        "plain_rendering": "Shale oil and shale gas are oil and gas resources trapped within shale formations. Their extraction frequently entails intensive large-scale developments including specific hydraulic fracturing techniques.",
        "phrases": [
          {
            "id": "frequently",
            "label": "frequently entails",
            "type": "undefined_term",
            "verbatim_range": [
              100,
              118
            ],
            "plain_range": [
              100,
              118
            ],
            "means": "The words “frequently entails” are how the definition connects shale to hydraulic fracturing. It is a description of what usually happens, not a condition on what counts.",
            "lets_through": [
              "This wording lets through nothing on its own — this is a glossary note rather than an operative test. It matters because it is the only place fracking is mentioned in the restrictions at all, and it appears as a characteristic of shale rather than as an activity the bank refuses to finance."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "shale"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 5,
      "commitment_id": "fc83f3b7-78fd-5aa6-b6fc-38d75026e2df",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=5",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        20882,
        21213
      ],
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for the exploration and production of shale oil or gas.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "shale"
          ],
          "value_chain": "upstream",
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
          "condition": "Exceptions for pre-existing business commitments or opportunities at an advanced stage of negotiation.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": true,
          "where": "Section 7, Application date and updates, page 11"
        },
        {
          "condition": "Any deviation from this policy may be granted, on an exceptional basis, by a Societe Generale group oversight committee chaired by senior management.",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": true,
          "where": "Section 5.2, Client engagement, page 7"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 2 removed, 0 split, 1 fields corrected]\nCHANGES:\n- Removed commitment 1 (upstream O&G exposure reduction): Quantitative portfolio reduction targets without a defined endpoint are out of scope.\n- Removed commitment 2 (GHG financed emissions reduction): Quantitative portfolio reduction targets without a defined endpoint are out of scope.\n- Commitment 5 (phase out private companies generating almost all revenues from upstream O&G): Removed exception 'Existing exposure will be phased out until extinction...' as this describes the phase-out mechanism itself, not an exception to the rule.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Exceptions for pre-existing business commitments or opportunities at an advanced stage of negotiation.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "watchtower",
        "governance_process": false,
        "standing": true,
        "where": "Section 7, Application date and updates, page 11"
      },
      {
        "condition": "Any deviation from this policy may be granted, on an exceptional basis, by a Societe Generale group oversight committee chaired by senior management.",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "watchtower",
        "governance_process": true,
        "standing": true,
        "where": "Section 5.2, Client engagement, page 7"
      }
    ],
    "disagreements": [],
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
        "total": 1,
        "previous_editorial_rating": "hollowed",
        "changed": false
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The gap here is visible only by comparison with the sentence directly above it, which is the clearest way to show that the omission was a choice.",
          "text": "Compare this exclusion with the one printed immediately above it.\n\nThat one covers exploration, production or trading of Arctic oil, Amazonian oil, oil sands and extra heavy oil. This one covers exploration and production of shale oil or gas. Trading is dropped, in consecutive items of the same bulleted list, written at the same time by the same drafters.\n\nShale is the most traded of the unconventional resources. It moves through gathering systems, processing plants, pipelines and export terminals, and a bank can finance all of that without financing a well.\n\nAnd like every item in this section, it reaches dedicated transactions only. A shale producer borrowing at group level is outside it, and at company level the only gate is the 30% threshold measured on consolidated revenue.\n\nSo the exclusion covers the drilling, by the narrowest route to the money, for the resource with the longest chain behind it."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "This exclusion catches a shale well being drilled with money raised for that well.\n\nThat is a real thing and the bank should be held to it. But shale is financed overwhelmingly at corporate level. It is a business of many small wells, drilled continuously, funded from revolving facilities and bond issues rather than project by project. A dedicated transaction is unusual in shale precisely because the unit of investment is small and repetitive.\n\nSo the shape of this exclusion is poorly matched to the shape of the industry it names. It is written as though shale were financed like a North Sea platform.\n\nAt company level the gate is the 30% threshold, which a diversified producer clears comfortably. Between the two, a large shale operator with a mixed business can bank here and finance its drilling from facilities this policy never touches."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Against its peers, this is a narrower shale exclusion than it first appears, and the comparison that matters is with banks that name the activity rather than the rock.\n\nSeveral European banks now restrict hydraulic fracturing directly — the technique, wherever it is used. Société Générale restricts shale oil and gas, and mentions fracking only in a glossary note saying shale extraction frequently entails it.\n\nThat difference has consequences. Fracking is used outside shale formations, and a policy aimed at the rock does not follow the technique. It also means the policy has no position on fracking as such, only on one class of resource where fracking is common.\n\nThe useful comparison is with a bank that excludes the method and covers trading. Against that, this sentence covers less on both axes."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Add trading",
          "content": "The exclusion directly above covers trading of Arctic, Amazonian and heavy oil. Shale is the most traded of the four and is the only one where trading was left out."
        },
        {
          "title": "Name fracking, not just shale",
          "content": "Fracking appears once in this policy, in a glossary note describing what shale extraction usually involves. A restriction on the technique would follow it wherever it is used."
        },
        {
          "title": "Cover the financing, not just the dedicated transaction",
          "content": "Shale is funded from corporate facilities, well by well. An exclusion reaching only dedicated transactions is aimed at a way of financing shale that is rare."
        }
      ],
      "what_needs_to_change_closing": "Shale is the resource in this policy whose financing looks least like the exclusion written for it.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance transactions for the exploration and production of shale oil or gas. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": "No financing has been linked to this commitment yet",
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-10",
    "spec": "Commitment Analysis Spec v3.11",
    "source": "Watchtower synthesis run 197, document 23944",
    "reading": "drafted"
  }
};
