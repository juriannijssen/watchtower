/* Commitment data — generated from commitments/commitment-societe-generale-txn-unesco-ouv.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-txn-unesco-ouv",
    "bank": "Société Générale",
    "commitment_number": 14,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Ban on Harming World Heritage Sites",
    "short_title": "Ban on Harming World Heritage Sites",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. It is the last line of the exclusion list and the widest in scope: any oil and gas operation, anywhere in the chain, wherever it stands. What narrows it is the kind of harm it requires and the term UNESCO uses to describe it.",
    "naive_reading": "it will not finance oil and gas that would damage World Heritage sites",
    "plain_language_note": "One sentence. It opens wider than anything else in the policy and closes on a term of art from a different institution.",
    "sources_intro": "One policy document states this exclusion, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=14",
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
        "intro": "The last line of the exclusion list. Unlike the ones above it, it names no activity, no place and no resource — it turns entirely on the effect of the operation.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… any oil and gas operation with material adverse impacts on the Outstanding Universal Value of a UNESCO World Heritage Site.",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are any oil and gas operation with material adverse impacts on the Outstanding Universal Value of a UNESCO World Heritage Site.",
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
            "id": "ouv",
            "label": "material adverse impacts on the Outstanding Universal Value",
            "type": "undefined_term",
            "verbatim_range": [
              170,
              229
            ],
            "plain_range": [
              178,
              237
            ],
            "means": "This explains the harm this commitment requires. Outstanding Universal Value is a UNESCO term describing the specific qualities for which a site was inscribed, and it is narrower than the site itself. Whether impacts on it are material and adverse is a finding, and the policy does not say who makes it, on what evidence, or when.",
            "lets_through": [
              "This wording lets through harm to a World Heritage Site that does not touch the qualities it was listed for. A site inscribed for its geology is not obviously damaged, in this sense, by loss of habitat.",
              "It also lets through any operation where the finding has not been made. Impacts on Outstanding Universal Value are normally established by UNESCO and its advisory bodies through reactive monitoring, which happens after development rather than before financing.",
              "It also lets through anything a sponsor's own impact assessment concludes is not material, since the policy names no independent authority for the judgement."
            ],
            "defined_in_clause": null,
            "source": "watchtower_weakness",
            "watchtower_ref": "The term 'material adverse impacts' is subjective and not quantitatively defined, leaving room for interpretation.",
            "not_in_synthesis": false,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "ouv",
      "reactive-monitoring",
      "world-heritage"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 14,
      "commitment_id": "d53ed951-209a-57fb-ac8e-520ae9d3581d",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=14",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": false,
      "quotation_matched_note": "Watchtower records this quotation as unmatched. Its stored quote splices the lead-in and the bullet with an ellipsis, and that spliced string does not occur verbatim in the parsed document. The wording quoted on this page was taken from the policy text itself and is unaffected.",
      "quotation_char_range": null,
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for any oil and gas operation that has material adverse impacts on the Outstanding Universal Value of a UNESCO World Heritage Site.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": null,
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": false
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
      "weaknesses": "The term 'material adverse impacts' is subjective and not quantitatively defined, leaving room for interpretation.",
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
        "field": "industry_scope.value_chain",
        "severity": "omission",
        "watchtower": "Not set.",
        "bank_green": "The wording is 'any oil and gas operation' — the widest scope in the document, covering midstream, downstream and trading. Unset reads as missing data rather than as deliberate breadth.",
        "action": "Set the value chain explicitly, or record that it is intentionally unbounded."
      },
      {
        "field": "geographic_scope.global_scope",
        "severity": "contradiction",
        "watchtower": "`false`.",
        "bank_green": "Same as Commitment 13 — the policy is worldwide and this commitment names no territory.",
        "action": "Check whether this is a tagging error."
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
        "previous_editorial_rating": "hollowed",
        "changed": false
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The sentence is the widest in the policy and the test inside it is the hardest to satisfy, and holding those two facts together is the whole finding.",
          "text": "This line has the widest scope in the policy. Not upstream, not a project, not a named resource: any oil and gas operation. Then it attaches a condition that is hard to meet before the money moves.\n\nThe condition is material adverse impacts on Outstanding Universal Value. That phrase belongs to UNESCO, and it means something specific: harm to the particular qualities a site was inscribed for, rather than harm to the site. A site listed for a cultural landscape and a site listed for a species are damaged by different things, and an impact that would obviously degrade one may be outside the value of the other.\n\nWho decides is left open. In practice such findings come from UNESCO's reactive monitoring, its advisory bodies, and the World Heritage Committee — a process that runs on the timescale of years and is usually triggered once a threat is visible. A bank deciding a transaction has none of that. It has the sponsor's impact assessment.\n\nSo the exclusion is drawn to catch everything and conditioned on a finding that normally arrives after the operation exists."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Two features are worth crediting before the criticism lands.\n\nThe first is scope. Every other line in this section is tied to an activity, a resource or a place. This one covers any oil and gas operation, which means midstream, downstream and trading are all inside it — the only line in the document of which that is true. The bank did not have to write it that way.\n\nThe second is that it is an impact test rather than a location test. The line above it excludes operations located within protected areas, which directional drilling and boundary-adjacent development walk around. This one asks what the operation does, not where it stands, and that is the harder and better question.\n\nThe difficulty is the standard it sets. Outstanding Universal Value is a narrow concept, materiality is undefined, and the institution that normally makes such findings works on a timescale no financing decision waits for. A good question is asked and the answer is placed out of reach."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "World Heritage exclusions are close to universal in bank sector policy, and they come in two shapes.\n\nThe common shape is locational: no financing for operations inside a World Heritage Site. It is easy to apply and easy to design around, and Société Générale has that version too, in the line immediately above this one.\n\nThe less common shape is the one here: no financing for operations that damage what the site was listed for, wherever they stand. It reaches upstream of a boundary, downstream of it, and outside it altogether. Where peers use this language it is usually alongside a named source for the judgement — an IUCN World Heritage Outlook assessment, a UNESCO advisory mission, or a requirement that the sponsor obtain a State Party position.\n\nSociété Générale names no source. That is the gap against peers: not the ambition of the test, which is above the norm, but the absence of anyone appointed to apply it."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Name who makes the finding",
          "content": "Impacts on Outstanding Universal Value are normally established by UNESCO's advisory bodies over years. A policy that relies on the concept should say what evidence it accepts and from whom."
        },
        {
          "title": "Define material",
          "content": "The word carries the whole exclusion and appears nowhere else in the document with a meaning attached."
        },
        {
          "title": "Say what happens while the question is open",
          "content": "Where a World Heritage Site's status is contested, nothing here says whether the bank waits, declines or proceeds."
        }
      ],
      "what_needs_to_change_closing": "Until then, the widest exclusion in the policy is also the one least likely to be triggered before a decision is made.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance any oil and gas operation that materially harms what a World Heritage Site was listed for. We have not yet reviewed what it financed against this commitment.",
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
