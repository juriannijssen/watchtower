/* Commitment data — generated from commitments/commitment-societe-generale-txn-unconventional-oil.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-txn-unconventional-oil",
    "bank": "Société Générale",
    "commitment_number": 4,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Transaction Ban on Unconventional Oil",
    "short_title": "Transaction Ban on Unconventional Oil",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. Where Commitment 1 decides which companies the bank will take on, this one decides which transactions it will execute: none whose underlying activity is the exploration, production or trading of Arctic oil, Ecuadorian Amazonian oil, oil sands or other extra heavy oil. There is no threshold and no percentage attached to it.",
    "naive_reading": "it will not finance unconventional oil, including tar sands and Arctic oil",
    "plain_language_note": "Nothing is hidden in this sentence. Its reach is set by two things it does not say — which part of the money it covers, and where the Arctic starts.",
    "sources_intro": "One policy document states this exclusion. Two passages are quoted here: the ban itself, and the glossary entry that draws the boundary of the Arctic.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=4",
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
        "intro": "The exclusion itself, the first item in the list of transactions the bank will not execute. Unlike the client-level tests, it carries no threshold.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… exploration, production or trading of: Arctic oil, Ecuadorian Amazonian oil, Oil from oil sands, or other extra heavy oil.",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are exploration, production or trading of Arctic oil, Ecuadorian Amazonian oil, oil from oil sands, or other extra heavy oil.",
        "phrases": [
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
            "means": "This explains what financing this commitment covers: project financing only. A dedicated transaction is financing raised for a named activity, where it is clear what the financing is used for.",
            "lets_through": [
              "The word “dedicated” lets through general corporate financing. A revolving credit facility, a term loan or a bond issued at group level is not dedicated to anything, so this commitment never applies, however much of the borrower's business is Arctic oil.",
              "It also lets through every company-level relationship that passes the threshold in Commitment 1. The two restrictions are the only checks, and a producer under 30% can bank here freely provided it does not ask for financing attached to a named barrel."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          },
          {
            "id": "trading",
            "label": "trading",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              166,
              173
            ],
            "plain_range": [
              174,
              181
            ],
            "means": "This explains the furthest downstream activity named. Together with exploration and production it sets how far this commitment reaches.",
            "lets_through": [
              "This wording lets through transport, storage, refining and processing of the same oil. Those are named separately in the passage below this one, and only where the infrastructure is exclusively dedicated to it."
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
        "intro": "Where the Arctic starts, for the purposes of this policy. It is printed in the glossary at the end of the document and reached from the term used above.",
        "location": {
          "distance": "end_of_document",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Arctic region: For the sake of this policy, the Arctic region is defined as the following: Offshore areas: \"Arctic waters\" as defined in the Convention on the Safety of Life at Sea (regulation XIV/1.3) and the International Maritime Organization (IMO) Polar Code. Onshore areas: North of the Arctic Circle (north of 66°33′47.2″ N)",
        "plain_rendering": "The Arctic region means, offshore, \"Arctic waters\" as defined in the Convention on the Safety of Life at Sea and the IMO Polar Code; and onshore, North of the Arctic Circle (north of 66°33′47.2″ N)",
        "phrases": [
          {
            "id": "north-of",
            "label": "North of the Arctic Circle (north of 66°33′47.2″ N)",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              279,
              330
            ],
            "plain_range": [
              146,
              197
            ],
            "means": "This explains the onshore boundary, drawn as a line of latitude. It is precise, checkable and narrower than most definitions of the Arctic in use elsewhere.",
            "lets_through": [
              "This wording lets through everything south of the line. Large producing regions that are Arctic in climate, ecology and infrastructure — and are described as Arctic by the companies operating in them — sit below 66°33′ and are outside this policy entirely."
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
      "dedicated-transaction",
      "extra-heavy-oil"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 4,
      "commitment_id": "e4d31428-23ac-577c-b0a9-87697a07035b",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=4",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        20882,
        21162
      ],
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for the exploration, production, or trading of Arctic oil, Ecuadorian Amazonian oil, oil sands, or other extra heavy oil.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "arctic",
            "oil_sands"
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
          "recommended_because": "The exclusion is absolute within its scope, so everything depends on the scope, and the word 'dedicated' is the whole of it.",
          "text": "Read on its own, this is the strongest sentence in the policy. No threshold, no percentage, no exception: the bank will not finance the exploration, production or trading of Arctic oil, Amazonian oil, oil sands or extra heavy oil.\n\nThen read the first three words of the section it sits in. It applies to dedicated transactions — money raised for a named activity, where the use of proceeds is identified.\n\nMost oil and gas financing is not dedicated. It is a revolving credit facility, a term loan, a bond issued at group level, and it goes to the balance sheet. None of that is attached to a barrel, so none of it engages this exclusion however much of the borrower's business is oil sands.\n\nWhat is left at company level is the 30% threshold in Commitment 1, measured on consolidated revenue. Between the two, a producer that stays under 30% and borrows at group level is outside both, and nothing in either sentence has asked how much oil it takes out of the ground."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "This exclusion catches a project, not a company.\n\nIf someone brings Société Générale a financing attached to a named Arctic field, an Amazonian block or an oil sands development, the answer is no, with no argument about percentages. That is worth having, and it is the shape of exclusion most banks reserve for coal.\n\nBut project finance is a shrinking share of how oil gets funded, and the largest producers use it least. A major with a balance sheet does not need money attached to a barrel. An independent developing a single Arctic prospect does, which is exactly the borrower this sentence stops.\n\nSo the transaction ban binds the smallest and least creditworthy operators in the sector, and the company-level test that binds everyone else has a 30% floor under it. The two exclusions are shaped so that the harder they bite, the smaller the company they bite."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "The Arctic boundary in this policy is drawn more tightly than most.\n\nOnshore, the Arctic begins north of 66°33′47.2″ N. That is the astronomical Arctic Circle and it is precise, which is more than many bank policies manage — several simply say Arctic and leave it. Offshore, the definition borrows the IMO Polar Code, which is a recognised standard.\n\nThe cost of that precision is that a line of latitude is not where oil is. Producing regions with Arctic climate, Arctic ecology and Arctic infrastructure sit south of 66°33′ and fall outside a policy named after them. Definitions that use ecological or infrastructural boundaries, as some peers do, reach further.\n\nA precise definition is not automatically a strong one. This is a good example of the difference."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Cover the financing, not just the dedicated transaction",
          "content": "Most oil and gas money moves as general corporate lending. An exclusion that reaches only dedicated transactions leaves the main route open."
        },
        {
          "title": "Extend the definition of the Arctic beyond a latitude",
          "content": "66°33′ is astronomically exact and ecologically arbitrary. Producing regions with Arctic conditions sit south of it."
        },
        {
          "title": "Name the whole chain",
          "content": "Exploration, production and trading are covered. Transport, storage and processing are covered only where the infrastructure is exclusively dedicated to these resources."
        }
      ],
      "what_needs_to_change_closing": "Within its scope this exclusion is absolute, which makes the scope the whole argument.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance transactions for the exploration, production or trading of Arctic oil, Ecuadorian Amazonian oil, oil sands or extra heavy oil. We have not yet reviewed what it financed against this commitment.",
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
