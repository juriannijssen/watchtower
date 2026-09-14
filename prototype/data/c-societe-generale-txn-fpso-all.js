/* Commitment data — generated from commitments/commitment-societe-generale-txn-fpso-all.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-txn-fpso-all",
    "bank": "Société Générale",
    "commitment_number": 10,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Ban on All Floating Production Vessels",
    "short_title": "Ban on All Floating Production Vessels",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. In the second half of a single line about floating production vessels, the bank drops every condition: from 2026 it will not finance any of them through a dedicated transaction. It is the only exclusion in this policy with no threshold, no defined term and no carve-out inside it.",
    "naive_reading": "it will not finance floating production vessels for offshore oil and gas",
    "plain_language_note": "Six words at the end of a longer sentence. Nothing in them is conditional, so the only thing left to examine is what financing this commitment applies to.",
    "sources_intro": "One policy document states this exclusion, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=10",
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
        "intro": "The second half of the line on floating production vessels. The first half sets a condition; this half removes it and applies a date instead.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… FPSOs associated with Greenfield upstream oil and gas fields and, after 2025, any FPSOs.",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are FPSOs associated with Greenfield upstream oil and gas fields and, after 2025, any FPSOs.",
        "phrases": [
          {
            "id": "dedicated-fpso",
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
            "means": "This explains what financing this commitment covers: project financing only, meaning financing raised for a named asset or activity, where it is clear what the financing is used for. Every commitment in this section has this limit, and it is the only limit on this one.",
            "lets_through": [
              "The word “dedicated” lets through general corporate financing to the companies that own and lease floating production vessels. Those companies are contractors rather than producers, so none of the client-level tests in Section 6.1 reaches them either.",
              "It also lets through general corporate facilities and bond issues raised by an operator that happens to be commissioning a vessel."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          },
          {
            "id": "any-fpsos",
            "label": "after 2025, any FPSOs",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              205,
              226
            ],
            "plain_range": [
              213,
              234
            ],
            "means": "This explains the restriction itself. A date and the word any, with nothing else attached: no size threshold, no reference to the age of the field, no exception for conversions or redeployments, and no defined term that has to be met first.",
            "lets_through": [
              "This wording lets through nothing, on its own terms. Within the financing this section covers, we have not been able to construct a floating production vessel that falls outside these six words."
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
      "fpso",
      "dedicated-transaction",
      "asset-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 10,
      "commitment_id": "f2e2816c-6681-569a-8080-bc0b438b1680",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=10",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": false,
      "quotation_matched_note": "Watchtower records this quotation as unmatched. Its stored quote splices the lead-in and the bullet with an ellipsis, and that spliced string does not occur verbatim in the parsed document. The wording quoted on this page was taken from the policy text itself and is unaffected.",
      "quotation_char_range": null,
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for any Floating Production Storage and Offloading (FPSO) units after 2025.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
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
      "effective_date": "2026-01-01",
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
        "previous_editorial_rating": "holds",
        "changed": true
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "This is the only exclusion in the document with no loophole inside the sentence, and a page that says so plainly is what makes every other page in the set credible.",
          "text": "This is the only commitment in this policy where the sentence does what its heading says.\n\nThere is no threshold. There is no defined term that has to be satisfied first. There is no exception for conversions, for redeployed hulls, for small vessels or for projects already in negotiation. The rule is a date and the word any.\n\nIt is also worth noting what it replaced. The first half of the same sentence excludes vessels associated with new fields — a conditional rule resting on an undefined word. The bank wrote that, and then in the same breath wrote a wider rule that makes the condition irrelevant from 2026.\n\nOne limit is real and should be stated rather than buried. Like every exclusion in this section, it applies to dedicated transactions. Floating production vessels are usually financed exactly that way, against the asset or its charter, so the scope matches how the activity is actually funded — more closely than for any other line in the section. But the contractors that own these vessels are service companies, and no client-level test in this policy reaches them. The vessel can be declined and its owner banked."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "Everything this line fails to reach sits outside the sentence rather than inside it.\n\nThe first is instrument scope. The exclusion covers dedicated transactions, which is financing raised for a named asset. It does not cover a revolving credit facility or a bond issued by an FPSO contractor, and Section 6.1's client tests do not reach those companies: a vessel owner does not derive more than 30% of revenue from Arctic, Amazonian, heavy or shale resources, and it is not a company whose revenues come almost entirely from upstream production. It leases equipment.\n\nThe second is the deviation clause. Section 5.2 says any deviation from this policy may be granted, on an exceptional basis, by a Group oversight committee chaired by senior management. That sits above this line as it does above every other.\n\nThe third is the transition. Section 7 applies the policy from publication \"with exceptions for pre-existing business commitments or opportunities at an advanced stage of negotiation\", and neither term is defined.\n\nNone of these is a loophole in this sentence. All three are reasons the sentence is not the whole answer."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Very few banks exclude a class of production asset outright. The common shape is a restriction tied to geography, to resource type or to the age of the field — all of which require a judgement about the field before anyone can say whether the rule applies.\n\nThis one requires no judgement. If it is a floating production vessel and the year is 2026, the answer is no.\n\nThat is unusual enough to be worth putting next to the rest of the sector rather than only next to the rest of this policy. Where peers address floating production at all, it is usually inside a project-finance screen that asks where the field is and when it was sanctioned; several address it not at all, treating the vessel as shipping rather than as upstream.\n\nThe distance between this line and the ten before it in the same document is also part of the comparison. The policy can write an unconditional exclusion. On every other activity it chose not to."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Say what happens to the vessel owners",
          "content": "FPSO contractors are service companies and no client-level test in this policy reaches them, so the asset can be declined while the company that owns it is financed at group level."
        },
        {
          "title": "Confirm how the Shipping policy interacts",
          "content": "Section 2.3 says FPSO financings also fall within the Shipping sector policy where relevant. \"Also\" reads as additive, but the two documents should be read together and neither says so."
        },
        {
          "title": "Bound the transition exception",
          "content": "Section 7 disapplies the policy for pre-existing commitments and opportunities at an advanced stage of negotiation, and defines neither."
        }
      ],
      "what_needs_to_change_closing": "Until then, the strongest sentence in the policy still depends on the two general carve-outs printed above it.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating. The rating moved from holds to hollowed."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance any floating production vessel from 2026. We have not yet reviewed what it financed against this commitment.",
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
