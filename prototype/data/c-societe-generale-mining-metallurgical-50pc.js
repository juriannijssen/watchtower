/* Commitment data — generated from commitments/commitment-societe-generale-mining-metallurgical-50pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-mining-metallurgical-50pc",
    "bank": "Société Générale",
    "commitment_number": 2,
    "category": "mining",
    "effective_date": "2026-04-01",
    "title": "Société Générale's 50% Threshold on Metallurgical Coal",
    "short_title": "50% Threshold on Metallurgical Coal",
    "subject": "Metallurgical Coal Mining",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this rule in its Mining Sector Policy, published in April 2026. Metallurgical coal is the coal used to make steel rather than electricity. The bank will not enter into a new relationship with a company that earns more than half its revenue from digging it up.",
    "naive_reading": "it will not take on companies that mine coal for steelmaking as clients",
    "plain_language_note": "A published number, which is worth something. What surrounds it decides how much.",
    "sources_intro": "One policy document states this rule, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "mining2026",
        "document_title": "Société Générale Mining Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/mining-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=2",
        "watchtower_document_id": 28052,
        "watchtower_institution": "societe_generale",
        "synthesis_run": 196,
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
        "source_id": "mining2026",
        "title": "The rule",
        "intro": "The exclusion itself, in the short list of companies the bank will not take on as clients. It carries the only published percentage in the document.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not enter into a new relationship with… any company with more than 50% of their revenue linked to metallurgical coal extraction.",
        "plain_rendering": "Société Générale will not enter into a new relationship with any company with more than 50% of their revenue linked to metallurgical coal extraction.",
        "phrases": [
          {
            "id": "new-relationship",
            "label": "enter into a new relationship",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              19,
              48
            ],
            "plain_range": [
              26,
              55
            ],
            "means": "This explains who this commitment applies to: companies that are not already clients. Watchtower records the relationship status on this commitment as new.",
            "lets_through": [
              "Adding the word “new” means every company already banked keeps its financing. A producer earning 90% of its revenue from metallurgical coal that is already a client is outside this commitment entirely, and can keep drawing on existing arrangements.",
              "This commitment is about the bank's client list rather than about coal. Nothing in it asks an existing client to change anything."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "fifty",
            "label": "more than 50% of their revenue",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              72,
              102
            ],
            "plain_range": [
              78,
              108
            ],
            "means": "This explains the threshold. More than half the company's income has to come from digging up metallurgical coal before this commitment applies.",
            "lets_through": [
              "This wording lets through any diversified miner. A company can be one of the world's largest metallurgical coal producers and sit far below half its revenue, because it also mines iron ore, copper and everything else.",
              "The comparison is with the same bank's oil and gas policy, which sets its client threshold at more than 30%. Coal for steel is allowed a bar nearly twice as high as Arctic oil."
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
      "metallurgical-coal",
      "revenue-threshold",
      "client-level",
      "capital-markets",
      "consolidated-accounts"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 196,
      "document_id": 28052,
      "institution": "societe_generale",
      "commitment_index": 2,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=2",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        14492,
        14580
      ],
      "summary_text": "Societe Generale will not enter into new relationships with companies deriving more than 50% of their revenue from metallurgical coal extraction, subject to standard policy exceptions.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "metallurgical",
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "new",
          "certainty": "5"
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
          "value": 50,
          "definition": "revenue linked to metallurgical coal extraction"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Pre-existing business commitments or opportunities at an advanced stage of negotiation",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": false,
          "standing": true,
          "where": "Section 7, Application date and updates"
        },
        {
          "condition": "Contradictory to provisions of any applicable local law, rule, regulation or regulatory guidance or directive",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": false,
          "standing": true,
          "where": "Section 7, Application date and updates"
        },
        {
          "condition": "Exceptional deviations approved by a senior management-chaired group oversight committee",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": true,
          "standing": true,
          "where": "Section 5, Implementation process"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 0 fields corrected]\nCHANGES:\n- No changes required. The extractions accurately reflect the policy text and adhere to the schema rules.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Pre-existing business commitments or opportunities at an advanced stage of negotiation",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "where": "Section 7, Application date and updates"
      },
      {
        "condition": "Contradictory to provisions of any applicable local law, rule, regulation or regulatory guidance or directive",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "where": "Section 7, Application date and updates"
      },
      {
        "condition": "Exceptional deviations approved by a senior management-chaired group oversight committee",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "where": "Section 5, Implementation process"
      }
    ],
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded — as on every commitment in this document.",
        "bank_green": "Watchtower states no weakness anywhere in the Mining synthesis, on any of the five commitments. The phrases highlighted on this page are Bank.Green's reading and are labelled as such.",
        "action": "Populate the weaknesses field for this document. Our highlighted phrases are the proposal."
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
        "project_finance_only": false,
        "new_business_only": true,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "Two narrowings sit on top of each other — a bar most miners clear from below, and a rule that only applies to strangers.",
          "text": "This is the only published number in the mining policy, and two things are done to it before it reaches anything.\n\nFirst, the bar. More than 50% of revenue must come from metallurgical coal extraction. A company can be one of the world's largest producers of coking coal and sit nowhere near half its revenue, because it also mines iron ore, copper, bauxite and everything else. The miners that dig the most metallurgical coal are precisely the ones most likely to be under the line.\n\nSecond, the reach. The rule governs whether Société Générale will “enter into a new relationship”. Watchtower records the relationship status as new. A producer earning 90% of its revenue from metallurgical coal that is already a client is outside this commitment entirely and can keep drawing on what it has.\n\nPut together, the only threshold in the document applies to a list the bank is adding to, not to the business it already does."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Société Générale published two sector policies in April 2026 and put a client revenue threshold in each.\n\nThe oil and gas policy excludes companies earning more than 30% of their revenue from Arctic oil and gas, Amazonian oil, oil sands or shale. The mining policy sets the metallurgical coal line at more than 50%.\n\nSame bank, same month, both public. Coal for steel is allowed a bar nearly twice as high as Arctic oil, and neither document explains why.\n\nThere may be a defensible answer — steel has no ready substitute at scale, and the bank may have decided that warrants a softer line. If that is the reasoning it belongs in the policy. As published, the two numbers simply sit there, and a reader comparing them cannot tell whether they reflect a judgement about steel or an accident of drafting."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask which companies are above 50% and the answer is a short list of pure-play metallurgical coal producers — companies whose entire business is coking coal, mostly in Australia and the United States.\n\nThose are real companies and excluding them is not nothing. But they are not where most metallurgical coal comes from. The tonnage sits with diversified miners for whom coking coal is one product among many, and a revenue share falls as a company diversifies even if the coal output rises.\n\nA threshold measured on revenue rewards the structure of the business rather than the mining. Volume mined would measure the thing the rule is named after, and it would not move when the copper price does."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so unlike the oil and gas pages there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Apply it to existing clients",
          "content": "The rule governs who the bank takes on, not who it already has. A producer above the line that is already a client is unaffected."
        },
        {
          "title": "Explain the 50%",
          "content": "The oil and gas policy sets its client threshold at 30%. Publishing why metallurgical coal gets a higher bar would settle whether it is a judgement about steel or an accident of drafting."
        },
        {
          "title": "Measure the extraction, not the ratio",
          "content": "A share of revenue falls as a company diversifies. Volume mined would measure the thing the rule is named after."
        }
      ],
      "what_needs_to_change_closing": "Until then, the only number in this policy governs a list the bank is adding to rather than the business it already does.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not take on new clients earning more than 50% of revenue from metallurgical coal extraction. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Watchtower synthesis run 196, document 28052",
    "reading": "drafted"
  }
};
