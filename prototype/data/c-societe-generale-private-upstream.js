/* Commitment data — generated from commitments/commitment-societe-generale-private-upstream.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-private-upstream",
    "bank": "Société Générale",
    "commitment_number": 3,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Exclusion of Private Upstream Companies",
    "short_title": "Exclusion of Private Upstream Companies",
    "article_published": "2026-09-02",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. Among the clients it will not finance, the bank names private companies whose business is upstream oil and gas — exploration, development and production — and almost nothing else. It is a client-level exclusion, so it applies to the company rather than to a single transaction, and it commits the bank to running down what it already has.",
    "naive_reading": "it will not finance privately held oil and gas producers",
    "plain_language_note": "The sentence is short, and everything the analysis turns on sits either inside a bracket or in a footnote pointing somewhere else. The plain rendering keeps all of it.",
    "sources_intro": "One policy document states this exclusion. Two passages from it are quoted here: the exclusion itself, and the glossary entry that decides which entity the test is measured against.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=3",
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
        "intro": "The exclusion itself, one item in the list of clients the bank will not finance. It carries two conditions that must both be true, and a sentence about what happens to business the bank already has.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide any financial products or services to… any private Company (ie. not majority-owned by a state), which generates almost all of its revenues from upstream Oil and Gas activities (i.e. exploration, development and production). Existing exposure will be phased out until extinction, in compliance with existing contracts.",
        "plain_rendering": "Société Générale will not provide any financial products or services to any private Company, meaning one not majority-owned by a state, which generates almost all of its revenues from upstream oil and gas activities. Existing exposure will be phased out until extinction, in compliance with existing contracts.",
        "phrases": [
          {
            "id": "private-company",
            "label": "private Company",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              70,
              85
            ],
            "plain_range": [
              76,
              91
            ],
            "means": "This explains a test of who owns the borrower, not of what it does. The bank's own bracket defines it: not majority-owned by a state. A footnote sends the reader to the glossary for what Company means, and the glossary answers that the test is measured across the whole consolidated group.",
            "lets_through": [
              "This wording lets through every state-majority producer. National oil companies are among the largest oil and gas producers in the world, and this wording is drafted so that none of them can be reached by it.",
              "It also lets through a private producer that sells a majority stake to a state. Ownership is the test, so a company can leave the reach of this commitment through a transaction that changes nothing about the drilling."
            ],
            "defined_in_clause": 2,
            "source": "watchtower_exception",
            "watchtower_ref": "Company is majority-owned by a state (State-Owned Enterprise).",
            "not_in_synthesis": false,
            "bank_definition": null
          },
          {
            "id": "almost-all",
            "label": "almost all of its revenues",
            "type": "undefined_term",
            "verbatim_range": [
              139,
              165
            ],
            "plain_range": [
              152,
              178
            ],
            "means": "The words “almost all” set the test of how concentrated the company's business is. No figure is attached, and the phrase is not defined anywhere in the policy.",
            "lets_through": [
              "This wording lets through any producer with a second business of meaningful size. Where the line falls is decided inside the bank and never has to be explained.",
              "The comparison is with the bank's own drafting. The commitment directly above this one is set at more than 30% of revenues, a published figure. A number was available here and was not used."
            ],
            "defined_in_clause": null,
            "source": "watchtower_weakness",
            "watchtower_ref": "The term 'almost all of their revenues' is not quantitatively defined, leaving room for subjective interpretation.",
            "not_in_synthesis": false,
            "bank_definition": null
          },
          {
            "id": "existing-contracts",
            "label": "in compliance with existing contracts",
            "type": "escape_hatch",
            "verbatim_range": [
              306,
              343
            ],
            "plain_range": [
              272,
              309
            ],
            "means": "This explains the condition on the phase-out. Financing already committed continues to flow for as long as the agreements behind it run.",
            "lets_through": [
              "This wording lets through every facility already signed, for its full term. No end date is given, so the phase-out finishes whenever the longest existing contract does."
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
        "intro": "What the policy means by Company, reached from a footnote on the passage above. It decides which entity the concentration test is measured against, and it is printed in the glossary at the end of the document.",
        "location": {
          "distance": "end_of_document",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Company: refers to the legal entity and companies in its scope of consolidation. Consequently, for the calculation of the indicators in this policy for a Company, reference must be made to its consolidated financial statements.",
        "plain_rendering": "A Company means the legal entity together with every company it consolidates. The tests in this policy are calculated from its consolidated financial statements.",
        "phrases": [
          {
            "id": "consolidated",
            "label": "its consolidated financial statements",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              189,
              226
            ],
            "plain_range": [
              123,
              160
            ],
            "means": "This explains where the test is measured. Concentration is calculated across the whole consolidated group rather than at the entity actually doing the drilling.",
            "lets_through": [
              "This wording lets through any upstream business owned by a diversified parent. A pure-play subsidiary stops being almost all upstream the moment it is consolidated into a group that also refines, trades or generates power."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          }
        ],
        "watchtower_origin": "Watchtower attaches this passage to this commitment's counterparty scope (`counterparty_scope.quotations`), so the quotation is sourced from the record. The phrase highlighted inside it is Bank.Green's reading."
      }
    ],
    "glossary_refs": [
      "upstream",
      "national-oil-company",
      "client-level",
      "consolidated-accounts"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 3,
      "commitment_id": "a117fafb-0797-55c2-80e3-4ee1f47104dc",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=3",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        16607,
        17442
      ],
      "summary_text": "The Group will phase out existing exposure and refuse new financial products or services to private (non-state-owned) companies generating almost all of their revenues from upstream oil and gas activities.",
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
          "level": "group",
          "relationship_status": "new_and_existing",
          "certainty": null
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
          "definition": "generates almost all of its revenues from upstream Oil and Gas activities (i.e. exploration, development and production)"
        }
      ],
      "commitment_type": "phase_out",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Company is majority-owned by a state (State-Owned Enterprise).",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 6.1, Client criteria — Exclusion criteria, page 8"
        },
        {
          "condition": "Exceptions for pre-existing business commitments or opportunities at an advanced stage of negotiation.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": true,
          "where": "Section 7, Application date and updates, page 11"
        },
        {
          "condition": "Account holding and cash management services provided to subsidiaries of integrated oil and gas companies (IOCs).",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 2.2, Scope of the Group's activities, page 4"
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
      "weaknesses": "The term 'almost all of their revenues' is not quantitatively defined, leaving room for subjective interpretation.",
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
        "weakness": true,
        "commitment_specific_carve_outs": 2,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 2,
        "previous_editorial_rating": "hollowed",
        "changed": false
      },
      "verdict_options": [
        {
          "angle": "who_it_catches",
          "recommended": true,
          "recommended_because": "Three separate tests — ownership, concentration and consolidation — all narrow the same way, and together they shape the exclusion around a set of companies small enough that excluding them changes very little.",
          "text": "Ask who this exclusion can reach, and the wording answers three times before you get to the oil.\n\nIt reaches private companies. A producer majority-owned by a state is outside it by definition, whatever it drills. National oil companies are among the largest producers on earth and this sentence is written so that none of them can be caught.\n\nOf the private companies left, it reaches only those earning almost all of their revenue from upstream. A refining arm, a trading desk or a renewables division makes a company a different shape for this test without changing a barrel.\n\nAnd concentration is measured on consolidated accounts. A pure-play upstream business owned by a diversified parent stops being almost all upstream the moment it is consolidated.\n\nSo the exclusion binds private, undiversified, unconsolidated upstream producers — and releases the state-owned, the diversified and the subsidiary. Those groups are not equally responsible for oil and gas expansion, and the one this policy can reach is the smallest."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "Two conditions must both be true before this exclusion applies, and each removes a large part of the sector.\n\nThe first is ownership. A company majority-owned by a state is not a private company, so it is outside the exclusion however much oil it produces. Nothing in that test measures production.\n\nThe second is concentration, and it has no number. Almost all of its revenues must come from upstream. The exclusion printed directly above this one uses more than 30% of revenues — a published figure, applied to named resources. The bank plainly knows how to write a threshold. Here it did not.\n\nThen there is what happens to business already on the books. Existing exposure is phased out until extinction, in compliance with existing contracts. No date is attached, so the phase-out ends when the longest agreement does, and the bank does not say when that is.\n\nA producer escapes by being state-owned, by having a second line of business, by being consolidated into a larger group, or by already being a client. None of those routes requires it to drill less."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Set against the rest of this same policy, the drafting here is conspicuously loose.\n\nThe exclusion immediately above covers companies for which Arctic, Ecuadorian Amazonian, oil sands and shale resources represent more than 30% of revenues. That is a published number applied to a named set of activities, and anyone can check a producer against it. The policy then goes further and says that for companies that are almost entirely upstream, the 30% is measured on production rather than revenue — a deliberate tightening.\n\nSo within two paragraphs Société Générale sets a numeric threshold, refines how it is measured, and then writes almost all with no number at all.\n\nThat contrast removes the usual defence. A bank that never publishes thresholds can argue the sector resists them. A bank that publishes one, tunes it, and then declines to publish the next has made a choice about this particular test."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Delete the ownership test",
          "content": "Whether a producer is majority-owned by a state has no bearing on what its drilling does. An exclusion that cannot reach national oil companies cannot reach most of the world's production."
        },
        {
          "title": "Put a number on \"almost all\"",
          "content": "The exclusion directly above publishes 30% and even specifies how to measure it. Whatever figure is intended here, publishing it would make the test checkable from outside the bank."
        },
        {
          "title": "Date the phase-out",
          "content": "\"Until extinction, in compliance with existing contracts\" has no end. A published date would turn a direction of travel into a commitment."
        }
      ],
      "what_needs_to_change_closing": "As written, this exclusion is shaped around a set of companies small enough that excluding them changes very little about how much oil and gas gets financed.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance private companies whose business is almost entirely upstream oil and gas. We have not yet reviewed what it financed against this commitment, so there is no figure on this page yet.",
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
