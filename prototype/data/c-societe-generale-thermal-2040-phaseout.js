/* Commitment data — generated from commitments/commitment-societe-generale-thermal-2040-phaseout.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-thermal-2040-phaseout",
    "bank": "Société Générale",
    "commitment_number": 2,
    "category": "thermal_coal",
    "effective_date": "2026-04-01",
    "title": "Société Générale's 2040 Thermal Coal Phase-Out",
    "short_title": "2040 Thermal Coal Phase-Out",
    "subject": "Thermal Coal Phase-out Outside the EU and OECD",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this commitment in the same sentence as its 2030 date. Outside the EU and the OECD, the deadline for reducing thermal coal exposure to zero is 2040 — ten years later, for the part of the world that holds most of the coal.",
    "naive_reading": "it will have no thermal coal left on its books anywhere by 2040",
    "plain_language_note": "The same promise as commitment 1, with a different date and a bigger map.",
    "sources_intro": "One policy document states this commitment, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "tcp2026",
        "document_title": "Société Générale Thermal Coal Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/thermal-coal-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=2",
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
        "intro": "The second half of the bank's long-term commitment. Watchtower records it as a separate phase-out with its own effective date, which is why it appears here as its own commitment rather than a footnote to the last one.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "For its financing, asset management and investment portfolios, the Group is committed to progressively reducing to zero its exposure to the Thermal Coal Sector at the latest in 2030 for Companies with mining or power production thermal coal assets located in the EU or OECD countries and 2040 for Companies holding such assets in the rest of the world.",
        "plain_rendering": "Société Générale is committed to progressively reducing to zero its exposure to the Thermal Coal Sector by 2040 at the latest, for companies holding thermal coal mining or power production assets in the rest of the world.",
        "phrases": [
          {
            "id": "exposure",
            "label": "its exposure",
            "type": "undefined_term",
            "verbatim_range": [
              120,
              132
            ],
            "plain_range": [
              64,
              76
            ],
            "means": "This explains what is being reduced. The policy applies the commitment to financing, asset management and investment portfolios, and then does not say how exposure across those three is counted.",
            "lets_through": [
              "This wording lets through any measure the bank prefers at the time. Drawn balances, committed limits, underwriting share and assets under management are different numbers, and a promise to reduce “exposure” to zero can be met on one of them while another is untouched.",
              "It also lets through capital markets work in particular. Watchtower records capital markets as in scope for this commitment, but arranging a bond leaves no balance behind — so a bank can reach zero exposure while still bringing coal issuers to market."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "row",
            "label": "in the rest of the world",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              327,
              351
            ],
            "plain_range": [
              196,
              220
            ],
            "means": "This explains who gets until 2040: every company whose thermal coal assets sit outside the EU and the OECD.",
            "lets_through": [
              "This wording lets through ten more years for the coal that matters most. Most operating thermal coal capacity, and almost all of the capacity still being built, is outside the EU and OECD.",
              "It also sets a date beyond most planning horizons. 2040 is two policy revisions and several management teams away, and this policy states it may evolve in time."
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
      "phase-out",
      "exposure",
      "capital-markets",
      "bond-underwriting"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 306,
      "document_id": 28051,
      "institution": "societe_generale",
      "commitment_index": 2,
      "commitment_id": "eb5d02d6-f783-5d0f-826c-f0f8cfa2341e",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=2",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        7750,
        8101
      ],
      "summary_text": "Societe Generale commits to progressively reduce to zero its financing exposure to companies with thermal coal mining or power production assets in non-EU/OECD countries by 2040 at the latest.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": null,
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": false
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "new_and_existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [],
      "commitment_type": "phase_out",
      "effective_date": "2040",
      "exceptions": [
        {
          "condition": "Deviations may be granted on an exceptional basis by the Societe Generale group oversight committee chaired by senior management",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": true,
          "where": "Section 5.2, Implementation process"
        },
        {
          "condition": "Exceptions apply for pre-existing business commitments or opportunities at an advanced stage of negotiation",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 7, Application date and updates"
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
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The later date covers the coal that matters and sits beyond any horizon the policy commits to keeping.",
          "text": "Ten extra years, for the part of the world that holds most of the thermal coal.\n\nOutside the EU and the OECD is where most operating coal capacity sits and where almost all of the capacity still under construction is being built. That is the half of the commitment running to 2040.\n\nAnd what is being reduced is never defined. The commitment covers financing, asset management and investment portfolios; drawn balances, committed limits, underwriting share and assets under management are four different numbers, and a promise to take “exposure” to zero can be satisfied on one while another is untouched. Watchtower records capital markets as in scope here — but arranging a bond leaves no exposure behind at all, so a bank can reach zero and still bring coal issuers to market.\n\nThe policy also states it may evolve in time. 2040 is far enough away that the sentence promising it need not survive."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Read the two dates as one instruction and the picture is a schedule sorted by geography rather than by emissions.\n\nA utility running coal plants in Poland is on the 2030 clock. The same utility running the same plants in Indonesia, Vietnam or India is on the 2040 clock. Nothing in the wording turns on how much coal is burned, how old the fleet is, or what alternatives exist locally — only on which side of an institutional membership line the assets sit.\n\nThere is a real argument for that, and it is not made here: energy transition in lower-income countries is harder, slower and more expensive, and a bank withdrawing on an OECD timetable can do damage. If that is Société Générale's reasoning it belongs in the policy, because as published the split reads as convenience rather than justice."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Within this document, the 2040 date is the weakest commitment the bank has made about coal, and it governs the largest share of it.\n\nCompare it with commitment 3, which excludes companies building new coal capacity with immediate effect. Or commitment 7, which excludes thermal coal miners above 20% of group revenue, immediately, on new and existing business alike. Both bite now. This one bites in fourteen years.\n\nThe gap matters because the phase-out dates are what the policy offers in place of any rule reaching existing exposure. Every client-level exclusion in the document except commitment 7 is limited to new products and services. So for a company already banked, outside the OECD, under the revenue thresholds, this date is the only commitment that applies at all — and it is the one furthest away."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Bring 2040 forward, or justify it",
          "content": "The later date covers the larger share of global thermal coal. A ten-year split needs a published reason."
        },
        {
          "title": "Define exposure once, for both dates",
          "content": "The commitment spans financing, asset management and investment portfolios without saying how any of them is measured."
        },
        {
          "title": "Say what happens to capital markets work",
          "content": "Underwriting leaves no exposure on the balance sheet. If arranging finance for a coal company still counts, the policy should say so."
        }
      ],
      "what_needs_to_change_closing": "Until then, the long date does the heavy lifting and the short one gets the headline.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale has committed to reduce its thermal coal exposure to zero by 2040 outside the EU and OECD. We have not yet reviewed what it financed against this commitment.",
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
