/* Commitment data — generated from commitments/commitment-societe-generale-thermal-2030-phaseout.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-thermal-2030-phaseout",
    "bank": "Société Générale",
    "commitment_number": 1,
    "category": "thermal_coal",
    "effective_date": "2026-04-01",
    "title": "Société Générale's 2030 Thermal Coal Phase-Out",
    "short_title": "2030 Thermal Coal Phase-Out",
    "subject": "Thermal Coal Phase-out in the EU and OECD",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this commitment in its Thermal Coal Sector Policy, published in April 2026. It is the bank's headline promise on coal: by 2030 it will hold no exposure at all to companies with thermal coal mining or power assets — provided those assets sit in the EU or the OECD.",
    "naive_reading": "it will have no thermal coal left on its books in Europe and the OECD by 2030",
    "plain_language_note": "A date, a direction, and a map. The map is the part to read.",
    "sources_intro": "One policy document states this commitment, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "tcp2026",
        "document_title": "Société Générale Thermal Coal Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/thermal-coal-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=1",
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
        "intro": "The commitment itself, the opening line of the section the policy gives to its long-term position. It is the only commitment in the document with a deadline attached, and Watchtower records it as a phase-out rather than a restriction.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "For its financing, asset management and investment portfolios, the Group is committed to progressively reducing to zero its exposure to the Thermal Coal Sector at the latest in 2030 for Companies with mining or power production thermal coal assets located in the EU or OECD countries.",
        "plain_rendering": "Société Générale is committed to progressively reducing to zero its exposure to the Thermal Coal Sector by 2030 at the latest, for companies with thermal coal mining or power production assets located in the EU or OECD countries.",
        "phrases": [
          {
            "id": "progressively",
            "label": "progressively reducing to zero",
            "type": "undefined_term",
            "verbatim_range": [
              89,
              119
            ],
            "plain_range": [
              33,
              63
            ],
            "means": "The word “progressively” is all that describes the shape of the reduction. The end point is zero and the end date is 2030; everything between now and then is left to that one word.",
            "lets_through": [
              "This wording lets through any path the bank chooses. There is no interim milestone, no baseline year, and no stated figure for today's exposure, so there is nothing against which progress can be measured before the deadline arrives.",
              "It also allows a flat line followed by a cliff. Nothing in the wording distinguishes a bank reducing steadily from one that does nothing until 2029."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "euoecd",
            "label": "located in the EU or OECD countries",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              248,
              283
            ],
            "plain_range": [
              193,
              228
            ],
            "means": "This explains where the 2030 date applies. Not to all of the bank's thermal coal exposure — only to the part attached to assets inside the EU or the OECD.",
            "lets_through": [
              "This wording lets through everything else, for another ten years. Commitment 2 gives the rest of the world until 2040, and that is where most thermal coal capacity is, and where most of what is still being built is being built.",
              "Watchtower records the geographic scope of this commitment as not global, which is the record agreeing that the headline date is a regional one."
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
      "client-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 306,
      "document_id": 28051,
      "institution": "societe_generale",
      "commitment_index": 1,
      "commitment_id": "2087c452-0378-5618-abcd-a1557b652d05",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=1",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        7750,
        8033
      ],
      "summary_text": "Societe Generale commits to progressively reduce to zero its financing exposure to companies with thermal coal mining or power production assets in EU or OECD countries by 2030 at the latest.",
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
      "effective_date": "2030",
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
          "recommended_because": "The headline date is a regional date, and the word carrying the schedule carries nothing.",
          "text": "This is the sentence Société Générale will be quoted on, and two things in it decide what it is worth.\n\nThe first is “progressively”. The end point is zero and the end date is 2030, and between here and there the policy sets no baseline, no interim milestone and no published figure for what the exposure is today. A bank reducing steadily and a bank doing nothing until 2029 both satisfy this wording, and nobody outside can tell them apart before the deadline lands.\n\nThe second is the map. The 2030 date applies to companies whose thermal coal assets are in the EU or the OECD. Everywhere else has until 2040, under the next commitment. Watchtower records the geographic scope of this commitment as not global — the record itself says the headline is regional.\n\nNeither point makes the commitment worthless. Both make it unverifiable until the year it falls due."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "A dated phase-out is not nothing, and most of what we review on this site is not one.\n\nWatchtower records this commitment as a `phase_out` with an `effective_date` of 2030. Every other commitment in this document, and every commitment in the bank's oil and gas and mining policies, is a `restriction` with an effective date of “immediate” — a rule about what the bank will not do, not a promise about where it will end up.\n\nIt also covers more than lending. The commitment is written for financing, asset management and investment portfolios together, which is wider than the client rules further down and wider than most peers' coal targets.\n\nThe criticism belongs to how it is measured and where it applies, not to the existence of the target."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "2030 for the OECD and 2040 for everywhere else is close to a European banking convention, which cuts both ways.\n\nIn its favour: Société Générale is not an outlier, and a bank moving alone on its own timetable would be easy to dismiss. Against it: a convention adopted by everyone is not evidence that anyone examined it, and the split tracks where the banks lend rather than where the coal burns.\n\nThe comparison worth making is inside the bank's own document. Commitment 7 excludes thermal coal miners at 20% of group revenue or 10 million tonnes a year, with immediate effect and no restriction to new business. That is a harder rule than anything the phase-out dates impose, and it is four hundred words further down the same policy."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Publish the baseline and the interim points",
          "content": "A 2030 zero with no starting figure and no milestones cannot be checked until 2030. One number now and one each year would make it checkable."
        },
        {
          "title": "Say what exposure means",
          "content": "The commitment covers financing, asset management and investment portfolios. Whether it is drawn balances, committed limits, facilitated capital markets volume or all three is not stated."
        },
        {
          "title": "Close the gap with 2040",
          "content": "Splitting the deadline by geography gives ten extra years to the region that burns the most coal. If there is a transition-justice reason for that, publish it."
        }
      ],
      "what_needs_to_change_closing": "Until then, the bank's headline coal date covers the part of the world that was going to leave coal anyway.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale has committed to reduce its thermal coal exposure to zero by 2030 in the EU and OECD. We have not yet reviewed what it financed against this commitment.",
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
