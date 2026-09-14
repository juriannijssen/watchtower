/* Commitment data — generated from commitments/commitment-societe-generale-mining-infrastructure.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-mining-infrastructure",
    "bank": "Société Générale",
    "commitment_number": 5,
    "category": "mining",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Ban on Coal and Asbestos Mining Infrastructure",
    "short_title": "Ban on Coal and Asbestos Mining Infrastructure",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Mining Sector Policy, published in April 2026. It extends the ban from the mine to the rail lines, conveyors and terminals that carry what comes out of it — where those are primarily linked to metallurgical coal or asbestos.",
    "naive_reading": "it will not finance the infrastructure coal and asbestos mines depend on",
    "plain_language_note": "One line, and everything turns on an adverb the policy never defines.",
    "sources_intro": "One policy document states this exclusion, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "mining2026",
        "document_title": "Société Générale Mining Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/mining-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=5",
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
        "intro": "The exclusion itself, extending the ban downstream from the mine to the assets that move what it produces. Watchtower records the qualifier as a trigger on this commitment, but attaches no number to it.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide dedicated financial transactions, products and services when the underlying activities are… infrastructures primarily linked to metallurgical coal extraction or asbestos mining.",
        "plain_rendering": "Société Générale will not provide dedicated financial transactions, products and services when the underlying activities are infrastructures primarily linked to metallurgical coal extraction or asbestos mining.",
        "phrases": [
          {
            "id": "primarily",
            "label": "primarily linked to",
            "type": "undefined_term",
            "verbatim_range": [
              135,
              154
            ],
            "plain_range": [
              141,
              160
            ],
            "means": "The word “primarily” means the bank only has to decide that most of an asset serves metallurgical coal or asbestos, and the policy never says how much counts as most, measured against what, or by whom.",
            "lets_through": [
              "This wording lets through every shared rail line, conveyor and port terminal. Mining infrastructure is built to be shared, because that is what makes it economic, so an asset carrying coal alongside iron ore is arguable in a way a dedicated one is not.",
              "It also lets through any asset whose sponsor can present the calculation on a basis that keeps it under the line, because no basis is specified.",
              "The comparison is with the bank's own oil and gas policy, which uses “exclusively dedicated” for the same class of asset and, four bullets later, a “depend in majority on” test with a threshold in it. Three different standards for shared infrastructure, in two policies published the same month."
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
      "midstream",
      "dedicated-transaction",
      "asbestos"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 196,
      "document_id": 28052,
      "institution": "societe_generale",
      "commitment_index": 5,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=5",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        17474,
        17559
      ],
      "summary_text": "Societe Generale will not provide dedicated financial transactions, products, and services for infrastructures primarily linked to metallurgical coal extraction.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "metallurgical",
          "oil_gas_types": null,
          "value_chain": "midstream",
          "activity_scope": "new_and_existing"
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
      "triggers": [
        {
          "metric": "other",
          "inequality": null,
          "value": null,
          "definition": "Infrastructures primarily linked to metallurgical coal extraction"
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
        "project_finance_only": true,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "One undefined adverb decides the whole exclusion, and the assets it is aimed at are the ones built to be shared.",
          "text": "Everything in this exclusion turns on “primarily linked to”, and the policy never says what that means.\n\nHow much of an asset's purpose has to be metallurgical coal or asbestos? Measured against what — tonnage, revenue, capacity, contracted volume? Over what period? Assessed by whom? None of it is stated, and the difference between those measures decides whether a rail line is inside the policy or outside it.\n\nThe assets in question are built to be shared. A dedicated line to one mine is rarely economic; a line that carries coking coal alongside iron ore is. So the infrastructure that actually moves metallurgical coal to market is precisely the infrastructure hardest to test against this sentence, and any sponsor can pick the basis of calculation that keeps it under whatever line is imagined.\n\nWatchtower saw this. It recorded “primarily linked to” as a threshold — metric `other`, no value attached. The model registered that a qualifier was doing work and had nowhere to put the number, because there is no number."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Société Générale has three different standards for the same problem, across two policies published in the same month.\n\nIn the oil and gas policy, infrastructure is caught when it is “exclusively dedicated to” unconventional oil — an absolute test that almost nothing fails. Four bullets later, midstream infrastructure is caught where its viability “depend[s] in majority on” new fields — a proportional test with a threshold in it. Here, in the mining policy, it is “primarily linked to”.\n\nThree tests, one class of asset, one month. At most one of them is right.\n\nIt is also worth noting which of the three Watchtower flagged. “Exclusively dedicated” is recorded as a stated weakness on the oil and gas synthesis. “Primarily linked to” is not flagged anywhere — the mining synthesis records no weakness at all. Same bank, same class of asset, softer word, no flag."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "For this exclusion to bite, an asset has to be primarily linked to metallurgical coal extraction or asbestos mining on some basis nobody has specified.\n\nIn practice that means a conveyor from a single coking coal mine, or a terminal handling one product from one source — assets whose financing usually rides on the mine behind it, which the previous exclusion already covers. Add a second shipper, a second commodity or a second customer and the question becomes arguable, and an arguable test in a counterparty's favour is a test that does not get applied.\n\nTwo further gaps sit outside the sentence entirely. Expansions: an existing shared rail line uprated to carry more coal is not new infrastructure, and nothing here addresses it. And corporate financing: like every other item in section 6.3, this reaches dedicated transactions only."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so unlike the oil and gas pages there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Put a number on \"primarily\"",
          "content": "Watchtower records this qualifier as a trigger with no value attached. Whatever share is intended, publishing it would make the test checkable."
        },
        {
          "title": "Use one standard for shared infrastructure",
          "content": "The bank uses \"exclusively dedicated\", \"depend in majority on\" and \"primarily linked to\" for the same problem across two policies. At most one of them is right."
        },
        {
          "title": "Say what happens to expansions",
          "content": "An existing shared rail line uprated to carry more coal is not new infrastructure, and nothing here addresses it."
        }
      ],
      "what_needs_to_change_closing": "Until then, the assets that actually move metallurgical coal to market are the ones hardest to test against this rule.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance infrastructure primarily linked to metallurgical coal or asbestos mining. We have not yet reviewed what it financed against this commitment.",
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
