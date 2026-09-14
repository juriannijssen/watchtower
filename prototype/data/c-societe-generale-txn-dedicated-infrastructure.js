/* Commitment data — generated from commitments/commitment-societe-generale-txn-dedicated-infrastructure.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-txn-dedicated-infrastructure",
    "bank": "Société Générale",
    "commitment_number": 6,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Ban on Infrastructure for Unconventional Oil",
    "short_title": "Ban on Infrastructure for Unconventional Oil",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. It extends the transaction ban from the wellhead to the pipelines, terminals and processing plants that move unconventional oil — but only where those assets serve nothing else.",
    "naive_reading": "it will not finance the infrastructure built for unconventional oil",
    "plain_language_note": "One sentence, and everything turns on a single adverb the bank chose over the obvious alternatives.",
    "sources_intro": "One policy document states this exclusion, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=6",
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
        "intro": "The exclusion itself, extending the transaction ban downstream from extraction to the assets that carry it.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… infrastructures or other assets exclusively dedicated to the transport, storage and processing of Arctic oil, Ecuadorian Amazonian oil or oil from oil sands or other extra heavy oil.",
        "plain_rendering": "Société Générale will not execute dedicated transactions when the underlying activities are infrastructures or other assets exclusively dedicated to the transport, storage and processing of Arctic oil, Ecuadorian Amazonian oil or oil from oil sands or other extra heavy oil.",
        "phrases": [
          {
            "id": "scope-dedicated",
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
            "means": "This explains what financing this commitment covers: project financing only. Société Générale says no to a request for financing raised for a named activity, where it is clear what the financing is used for. It does not say no to the company. The same borrower can come back for a general loan, a credit line or a bond issue, and this commitment has nothing to say about it.",
            "lets_through": [
              "The word “dedicated” lets through general corporate financing. A revolving credit facility, a term loan or a bond issued at group level is not raised for a named activity, so this commitment never applies, however much of the borrower's business is the thing it names.",
              "It also lets through everything the client-level tests let through. Only Commitments 1, 2 and 3 decide whether the bank will do business with a company at all, and none of them asks whether it carries out this activity."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "exclusively",
            "label": "exclusively dedicated",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              171,
              192
            ],
            "plain_range": [
              124,
              145
            ],
            "means": "Adding the word “exclusively” means an asset has to serve unconventional oil and nothing else before this commitment applies. Serving it, or mostly serving it, is not enough.",
            "lets_through": [
              "This wording lets through every shared pipeline, terminal and processing plant. Infrastructure is built to be shared — that is what makes it economic — so an asset carrying oil sands crude alongside conventional crude is outside this commitment, however much of the first it moves.",
              "It also lets through any asset that can point to a second use. The test is binary, so a marginal conventional volume is enough to take an otherwise dedicated asset outside the policy."
            ],
            "defined_in_clause": null,
            "source": "watchtower_weakness",
            "watchtower_ref": "The restriction only applies to infrastructures 'exclusively dedicated' to these unconventional resources, meaning mixed-use infrastructure may still be financed.",
            "not_in_synthesis": false,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "midstream"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 6,
      "commitment_id": "c3f10430-9a65-5b1e-a4e3-24fa6d2347b1",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=6",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        20882,
        21398
      ],
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for infrastructures or assets exclusively dedicated to the transport, storage, and processing of Arctic oil, Ecuadorian Amazonian oil, oil sands, or extra heavy oil.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "arctic",
            "oil_sands"
          ],
          "value_chain": "midstream",
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
      "weaknesses": "The restriction only applies to infrastructures 'exclusively dedicated' to these unconventional resources, meaning mixed-use infrastructure may still be financed.",
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
    "disagreements": [
      {
        "field": "strength",
        "severity": "classification",
        "watchtower": "Weakness recorded, no commitment-specific carve-out, so the §4.1 rule gives `hollowed`.",
        "bank_green": "Watchtower's own weakness text — mixed-use infrastructure may still be financed — describes a test that essentially no shared asset fails. That is a more complete failure than Commitment 8's, which the rule rates `crushed`. The rule ranks these the wrong way round.",
        "action": "Either record 'infrastructure not exclusively dedicated' as a commitment-specific carve-out, or add a severity field to `weaknesses` so the rule can tell a fatal weakness from a definitional one."
      }
    ],
    "assessment": {
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.2 §4.1 — derived from Watchtower fields only",
        "inputs_source": "Watchtower record",
        "result": "hollowed",
        "weakness": true,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2,
        "previous_editorial_rating": "crushed",
        "changed": true
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "A single word makes this exclusion practically inapplicable, and saying that plainly is the whole of the case.",
          "text": "Infrastructure is shared. That is the entire economic logic of building it: a pipeline serves many fields, a terminal serves many producers, a processing plant runs many grades. Assets that serve one source only are rare, and they are rare because they are uneconomic.\n\nThis exclusion applies to infrastructure exclusively dedicated to unconventional oil. Not mainly. Not substantially. Exclusively.\n\nThe policy shows elsewhere that it knows how to write this differently. Two items below, midstream infrastructure is caught where its viability depends in majority on Greenfield fields — a proportional test, with a threshold. Here the bank chose an absolute one, in the direction that excludes almost everything.\n\nWe cannot construct a realistic financing this sentence would stop that the sentence above it does not already stop. A pipeline built solely for oil sands is a project financing for oil sands production, which is excluded already."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask what asset this sentence stops, and the answer has to be an item of infrastructure that carries unconventional oil and nothing else, ever.\n\nA dedicated oil sands pipeline with no other shipper. A terminal handling one grade from one source. Those exist, but they are the exception, and a bank asked to finance one is usually being asked to finance the production behind it — which the previous item already excludes.\n\nEverything shared is outside. A pipeline that moves oil sands crude and conventional crude is not exclusively dedicated. Nor is a terminal with a second customer, or a processing plant with a second feedstock.\n\nSo the exclusion binds a class of asset that barely exists, and releases the infrastructure that actually carries unconventional oil to market."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "The comparison that matters is with the same policy, four bullets down.\n\nThere, midstream infrastructure associated with Greenfield fields is caught where its viability and existence depend in majority on those fields. That is a proportional test with a threshold in it, and it is drafted to catch shared assets whose economics rest mostly on one source.\n\nHere, the same drafters wrote exclusively dedicated.\n\nSo within one section, Société Générale has used both a majority test and an exclusivity test for the same kind of asset. One reaches real infrastructure; the other reaches almost none. Against peers the picture is similar — banks restricting oil sands infrastructure increasingly use proportional language, because exclusivity tests were found not to bite."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Replace \"exclusively\" with a majority test",
          "content": "The same policy uses \"depend in majority on\" for Greenfield midstream infrastructure four bullets later. The same language here would reach shared assets whose economics rest on unconventional oil."
        },
        {
          "title": "Say what happens to expansions",
          "content": "An existing shared pipeline expanded to carry oil sands is not exclusively dedicated to anything, and nothing in this sentence addresses it."
        }
      ],
      "what_needs_to_change_closing": "One word turns an exclusion on unconventional oil infrastructure into an exclusion on almost nothing.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating. The rating moved from crushed to hollowed."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance infrastructure exclusively dedicated to moving, storing or processing Arctic, Amazonian or heavy oil. We have not yet reviewed what it financed against this commitment.",
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
