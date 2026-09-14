/* Commitment data — generated from commitments/commitment-societe-generale-30pc-unconventional.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-30pc-unconventional",
    "bank": "Société Générale",
    "commitment_number": 1,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's 30% Threshold on Unconventional Oil & Gas",
    "short_title": "30% Threshold on Unconventional Oil & Gas",
    "subject": "Unconventional Oil & Gas",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. The bank names four resources it treats as unconventional — Arctic oil and gas, Ecuadorian Amazonian oil, oil sands and shale — and refuses to finance companies for which those four together make up more than 30% of revenues. It is one of the few thresholds in European banking that carries a published number.",
    "naive_reading": "it will not finance companies whose business is unconventional oil and gas",
    "plain_language_note": "The sentence is unusually clean, and the plain rendering barely changes it. What the analysis turns on is a word that looks structural — revenues — and a pair of activities that look complete but are not.",
    "sources_intro": "One policy document states this exclusion. Two passages from it are quoted here: the threshold itself, and the glossary entry that decides which entity it is measured against.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=1",
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
        "intro": "The exclusion itself, the first item in the list of clients the bank will not finance. It names four resources and one number.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide any financial products or services to… any Company for which exploration and production of the following resources represent more than 30% of its revenues: Arctic oil and gas, Ecuadorian Amazonian oil, Oil sands or other extra heavy oil, Shale oil or gas.",
        "plain_rendering": "Société Générale will not provide any financial products or services to any Company for which exploration and production of the following resources represent more than 30% of its revenues: Arctic oil and gas, Ecuadorian Amazonian oil, oil sands or other extra heavy oil, shale oil or gas.",
        "phrases": [
          {
            "id": "threshold",
            "label": "more than 30% of its revenues",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              152,
              181
            ],
            "plain_range": [
              158,
              187
            ],
            "means": "This explains the published threshold, the part of this policy anyone outside the bank can check. It measures the four named resources against the company's total revenue.",
            "lets_through": [
              "This wording lets through every diversified producer. Thirty per cent of revenue is a ratio, and the denominator is everything else the company does. A group can be among the largest oil sands operators in the world and stay far below the line because it also refines, trades and generates power.",
              "It also lets through any producer sitting just under the line, permanently. A threshold with no trajectory attached does not fall over time, so a company at 29% is compliant in 2026 and compliant in 2036."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          },
          {
            "id": "eandp",
            "label": "exploration and production",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              88,
              114
            ],
            "plain_range": [
              94,
              120
            ],
            "means": "This explains which activities count towards the 30%. It is the upstream end of the chain only.",
            "lets_through": [
              "The words “exploration and production” let through revenue from moving, storing, refining or trading the same four resources. A company can build its business on Arctic oil without exploring for or producing any of it, and none of that revenue counts towards the threshold."
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
        "intro": "What the policy means by Company, reached from a footnote on the passage above. It decides which entity the 30% is measured against, and it is printed in the glossary at the end of the document.",
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
            "means": "This explains where the threshold is measured. The ratio is calculated across the whole consolidated group rather than at the entity doing the extraction.",
            "lets_through": [
              "This wording lets through any unconventional business owned by a diversified parent. A subsidiary that is entirely oil sands stops being 30% of anything once it is consolidated into a group that also does everything else."
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
      "unconventional",
      "upstream",
      "consolidated-accounts"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 1,
      "commitment_id": "c59a30f1-ea4d-584e-b198-a315f947f1eb",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=1",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        16607,
        16921
      ],
      "summary_text": "The Group will not provide financial products or services to any company deriving more than 30% of its revenues from the exploration and production of Arctic oil/gas, Ecuadorian Amazonian oil, oil sands, extra heavy oil, or shale oil/gas.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "arctic",
            "oil_sands",
            "shale"
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
          "metric": "revenue_share",
          "inequality": ">",
          "value": 30,
          "definition": "exploration and production of Arctic oil and gas, Ecuadorian Amazonian oil, Oil sands or other extra heavy oil, and Shale oil or gas"
        }
      ],
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
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded.",
        "bank_green": "The 30% is a share of revenue measured on consolidated accounts — Watchtower captures the `Company` glossary definition as its counterparty quote, but does not record that the denominator is the whole group. A diversified producer is under the line by construction.",
        "action": "Add a weakness on the denominator."
      }
    ],
    "assessment": {
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.2 §4.1 — derived from Watchtower fields only",
        "inputs_source": "Watchtower record",
        "result": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 1,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1,
        "previous_editorial_rating": "hollowed",
        "changed": true
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The threshold is real and checkable, so the useful thing to say is precisely what it does and does not reach, rather than anything cleverer.",
          "text": "This is a genuine threshold, and it is worth saying so before saying anything else. Four resources are named, they are counted together, and a number is published. Most banks restrict one activity at a time and never say what counts as too much.\n\nWhat the number measures is the problem. Thirty per cent of revenue is a ratio, and the denominator is the whole company. A producer can run one of the largest oil sands operations on earth and sit far below the line, because it also refines, trades and sells power. The test scales with the size of the business rather than with the size of the extraction.\n\nOnly exploration and production count towards it. Revenue from transporting, storing, processing or trading the same four resources does not, so a company can build itself around Arctic oil without ever crossing the threshold.\n\nAnd the ratio is measured on consolidated accounts, so an entirely unconventional subsidiary is diluted by whatever else its parent owns."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "A company caught by this exclusion has to be small, focused, upstream and unowned.\n\nSmall and focused, because the 30% is measured against everything else it does. Upstream, because only exploration and production count. Unowned, because the ratio is calculated on consolidated accounts, so a subsidiary is measured as part of its parent.\n\nStrip those away and what is left is an independent producer whose business is mostly Arctic, Amazonian, oil sands or shale extraction and very little else. Those companies exist. They are not the ones financing most unconventional expansion.\n\nThe majors pass on diversification. The traders pass on activity type. The subsidiaries pass on consolidation. The policy binds the part of the sector with the least capital and releases the part with the most."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Two things here are better than the sector norm and should not be lost in the criticism.\n\nThe first is the number. Thirty per cent is published, applied to a named set of resources, and checkable by anyone with a set of accounts. A great many bank policies use significant, material or primarily and leave it there. A campaigner can test a producer against this one.\n\nThe second is that the four resources are counted together. Arctic, Ecuadorian Amazonian, oil sands and shale are cumulated rather than assessed one by one, which closes the gap a producer could otherwise walk through by spreading its unconventional business across categories. The policy says so explicitly in a footnote.\n\nWhat neither of those fixes is the denominator. A published, cumulative threshold measured against total group revenue is a precise instrument pointed at the wrong quantity."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Measure the resource, not the ratio",
          "content": "A share of group revenue shrinks as a company grows. Absolute production, reserves or capital deployed in these four resources would measure the thing the exclusion is named after."
        },
        {
          "title": "Count the whole chain",
          "content": "Only exploration and production revenue counts today. Transport, storage, processing and trading of the same four resources should count too, or a company can be built around them and never approach the threshold."
        },
        {
          "title": "Measure at the entity that extracts",
          "content": "Calculating the ratio on consolidated accounts means an entirely unconventional subsidiary is diluted by its parent's other businesses."
        }
      ],
      "what_needs_to_change_closing": "The threshold is one of the more legible numbers a European bank has published. It is measured against the wrong denominator, over too little of the value chain, at the wrong level of the group.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating. The rating moved from hollowed to holds."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance companies that make more than 30% of their revenues from Arctic oil and gas, Ecuadorian Amazonian oil, oil sands or shale. We have not yet reviewed what it financed against this commitment, so there is no figure on this page yet.",
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
