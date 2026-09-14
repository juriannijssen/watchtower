/* Commitment data — generated from commitments/commitment-societe-generale-thermal-client-50pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-thermal-client-50pc",
    "bank": "Société Générale",
    "commitment_number": 6,
    "category": "thermal_coal",
    "effective_date": "2026-04-01",
    "title": "Société Générale's 50% Threshold for Existing Clients",
    "short_title": "50% Threshold for Existing Clients",
    "subject": "Existing Clients in Thermal Coal",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this rule in its Thermal Coal Sector Policy, published in April 2026. A company already banked can earn up to half its revenue from thermal coal and keep receiving new financing. A company that is not yet a client is turned away at a quarter.",
    "naive_reading": "it will stop serving existing clients whose business is thermal coal",
    "plain_language_note": "The same policy, the same list, two different numbers depending on whether the bank already earns from you.",
    "sources_intro": "One policy document states this rule, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "tcp2026",
        "document_title": "Société Générale Thermal Coal Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/thermal-coal-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=6",
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
        "intro": "The exclusion itself, the fourth and last item in the client criteria list. It sits directly beneath the 25% test for prospects, and Watchtower records the relationship status here as existing.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide new financial products and services to any… Existing client which has more than 50% of its revenue linked to the Thermal Coal Sector.",
        "plain_rendering": "Société Générale will not provide new financial products and services to any Existing client which has more than 50% of its revenue linked to the Thermal Coal Sector.",
        "phrases": [
          {
            "id": "new-fps6",
            "label": "new financial products and services",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              27,
              62
            ],
            "plain_range": [
              34,
              69
            ],
            "means": "This explains what is withheld once a client crosses the line: new business. Watchtower records the transaction status as new.",
            "lets_through": [
              "Adding the word “new” means every facility already agreed stays in place. A client above 50% keeps what it has, and the policy's only answer to existing exposure is the 2030 and 2040 phase-out dates.",
              "It also lets through renewals framed as amendments. Nothing in the wording says whether extending an existing facility is new business."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "50pc",
            "label": "more than 50% of its revenue",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              97,
              125
            ],
            "plain_range": [
              103,
              131
            ],
            "means": "This explains the threshold for a company already on the books. More than half its revenue must be linked to thermal coal before new business stops.",
            "lets_through": [
              "This wording lets through every existing client between 25% and 50%. A coal-heavy utility the bank would refuse to take on today keeps its access because it was taken on yesterday.",
              "The comparison is inside the same list. Four lines above, a prospect is excluded at more than 25%. The bar for a company the bank already earns from is twice as high."
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
      "revenue-threshold",
      "client-level",
      "grandfathering",
      "capital-markets"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 306,
      "document_id": 28051,
      "institution": "societe_generale",
      "commitment_index": 6,
      "commitment_id": "31f363d3-b085-5693-97ef-95933e4bb935",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=6",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        11501,
        12067
      ],
      "summary_text": "Societe Generale will not provide new financial products and services to existing clients deriving more than 50% of their revenue from the thermal coal sector.",
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
          "relationship_status": "existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new"
        }
      },
      "triggers": [
        {
          "metric": "revenue_share",
          "inequality": ">",
          "value": 50,
          "definition": "revenue linked to the Thermal Coal Sector"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Financing products and services dedicated to the energy transition remain permitted",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 6.1, Client criteria — Energy transition exception"
        },
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
        "commitment_specific_carve_outs": 1,
        "project_finance_only": false,
        "new_business_only": true,
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "how_it_compares",
          "recommended": true,
          "recommended_because": "The double standard is printed in the policy, in one list, and needs no argument to make it.",
          "text": "Société Générale will not take on a new client above 25% thermal coal revenue. It will keep an existing client up to 50%.\n\nThe two rules are consecutive bullets in the same list. Nothing separates them but the words “Prospect” and “Existing client”, and Watchtower's record carries the distinction as `relationship_status`.\n\nThe effect is that the bar is twice as high for the companies the bank is already earning from. A coal-heavy utility at 40% of revenue would be refused as a newcomer and retained as a client, and nothing in the policy explains the difference or says when it ends.\n\nThe defensible version of this is a transition allowance: you stay with a client to move them, and you do not take on new coal exposure meanwhile. If that is the intention, the higher threshold needs a step-down date. As written it is permanent, and a permanent double standard is a description of the bank's tolerance for coal it already owns."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "Even at 50%, what stops is new products and services.\n\nA client that crosses the line keeps every facility already agreed, and keeps drawing on it. The policy's only answer to existing exposure is the phase-out dates in commitments 1 and 2, the later of which is 2040. So a company above the highest client threshold in the document can continue as a borrower for another fourteen years on wording already signed.\n\nThe sentence also does not say whether extending an existing facility is new business. Renewals, amendments and increases sit in the space between “new” and “existing”, and that space is where most corporate lending actually happens.\n\nCommitment 7 shows the bank knows how to write this differently: it says “does not provide financial products and services”, with no restriction to new business at all."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "More than half of revenue from thermal coal, for a company already banked by a large European bank, is a small group.\n\nBy the time a utility reaches 50% coal revenue it is generally a single-fuel generator or a coal miner, and those are the companies most European banks exited years ago. The threshold is set where the bank's existing book has least to lose.\n\nThe interesting population is the one between the two numbers — clients from 25% to 50%. They are excluded as prospects, retained as clients, and covered by nothing else in the policy except the transition plan requirement, which asks them for a document, and the 2040 date.\n\nThat band is where this policy's real position on coal sits, and no sentence in it addresses that band directly."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Bring the client threshold down to the prospect threshold",
          "content": "There is no stated reason why an existing relationship justifies twice the coal intensity."
        },
        {
          "title": "Put a date on the higher bar",
          "content": "If 50% is a transition allowance rather than a permanent position, say when it steps down."
        },
        {
          "title": "Say whether a renewal is new business",
          "content": "The rule withholds new products and services. Whether extending an existing facility counts is not addressed."
        }
      ],
      "what_needs_to_change_closing": "Until then, the policy is twice as tolerant of coal in a company it already banks.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not provide new financing to existing clients earning more than 50% of revenue from thermal coal. We have not yet reviewed what it financed against this commitment.",
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
