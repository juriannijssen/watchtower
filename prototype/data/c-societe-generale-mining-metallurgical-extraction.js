/* Commitment data — generated from commitments/commitment-societe-generale-mining-metallurgical-extraction.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-mining-metallurgical-extraction",
    "bank": "Société Générale",
    "commitment_number": 4,
    "category": "mining",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Ban on Financing Metallurgical Coal Extraction",
    "short_title": "Ban on Financing Metallurgical Coal Extraction",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Mining Sector Policy, published in April 2026. Where the 50% rule decides which companies the bank will take on, this one decides which projects it will fund: none whose underlying activity is digging up metallurgical coal.",
    "naive_reading": "it will not finance the mining of coal for steelmaking",
    "plain_language_note": "Four words of activity, and one phrase at the front that decides what financing is covered.",
    "sources_intro": "One policy document states this exclusion, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "mining2026",
        "document_title": "Société Générale Mining Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/mining-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=4",
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
        "intro": "The exclusion itself, one line in the list of activities the bank will not fund through a dedicated transaction. It names the activity and attaches no threshold.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide dedicated financial transactions, products and services when the underlying activities are… metallurgical coal extraction activities.",
        "plain_rendering": "Société Générale will not provide dedicated financial transactions, products and services when the underlying activities are metallurgical coal extraction activities.",
        "phrases": [
          {
            "id": "dedicated",
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
            "means": "This explains what financing this commitment covers: project financing only. Société Générale says no to a request raised for a named activity, where it is clear what the financing is used for. It does not say no to the company. The same borrower can come back for a general loan or a bond issue, and this commitment has nothing to say about it.",
            "lets_through": [
              "The word “dedicated” lets through general corporate financing. A miner borrowing at group level is not asking for a dedicated transaction, so this commitment never applies.",
              "It also lets through everything the client-level rules let through. Only the 50% threshold decides whether the bank will deal with a company at all, and it applies to new clients only."
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
      "dedicated-transaction",
      "corporate-finance",
      "project-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 196,
      "document_id": 28052,
      "institution": "societe_generale",
      "commitment_index": 4,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=4",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        17400,
        17441
      ],
      "summary_text": "Societe Generale will not provide dedicated financial transactions, products, and services for metallurgical coal extraction activities.",
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
          "recommended_because": "The sentence itself is unqualified; the money it covers is not. That gap is the whole finding.",
          "text": "The activity ban is clean. The money it reaches is not.\n\n“Metallurgical coal extraction activities” carries no threshold, no percentage and no qualifier. There is nothing inside the sentence to argue about, which is more than can be said for most of this policy.\n\nWhat limits it is the four words at the front. This applies to “dedicated financial transactions, products and services” — financing raised for a named activity, where everyone knows what the money buys. Watchtower records the financing type on this commitment as project.\n\nMost mining is not funded that way. A miner borrowing at group level, drawing on a revolving credit facility or issuing a bond is not asking for a dedicated transaction, so this exclusion never engages however much metallurgical coal that borrower digs. The activity is excluded and the companies doing it are not."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Within its scope, this is the cleanest sentence in the mining policy.\n\nThere is no revenue test, no majority test and no undefined adverb. The bank does not ask how much of a project is metallurgical coal extraction, or whether the coal is the primary purpose, or what share of the sponsor's business it represents. If that is what the money is for, the answer is no.\n\nCompare that with the sentence three lines further down in the same section, which turns on whether infrastructure is “primarily linked to” metallurgical coal — a word the policy never defines. The bank was capable of drafting without a qualifier here and chose to add one there.\n\nThe criticism of this commitment is about what kind of financing it reaches, not about how it is written."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "This commitment and the 50% client test are the bank's entire position on metallurgical coal, and they should be read together.\n\nThis one covers any dedicated transaction for metallurgical coal extraction, from any client, new or existing. The client test covers any financing at all, but only for new clients, and only above 50% of revenue.\n\nNow take an existing client — a diversified miner, 20% of revenue from coking coal, borrowing at group level. The client test does not reach it: it is not new, and it is under the line. This exclusion does not reach it either: the loan is not a dedicated transaction.\n\nThat is not a hypothetical shape. It describes most of the world's metallurgical coal production and most of the way it is financed."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so unlike the oil and gas pages there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Cover the financing, not just the dedicated transaction",
          "content": "Most mining is funded at company level. An exclusion reaching only named-purpose financing leaves the main route open."
        },
        {
          "title": "Pair it with a client test that binds existing clients",
          "content": "The only client-level rule on metallurgical coal applies to new relationships at a 50% threshold. Between the two, an existing diversified miner is outside both."
        }
      ],
      "what_needs_to_change_closing": "Until then, the activity is excluded and the companies doing it are not.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance projects whose underlying activity is metallurgical coal extraction. We have not yet reviewed what it financed against this commitment.",
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
