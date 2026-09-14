/* Commitment data — generated from commitments/commitment-societe-generale-thermal-asset-sales.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-thermal-asset-sales",
    "bank": "Société Générale",
    "commitment_number": 8,
    "category": "thermal_coal",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Ban on Thermal Coal Asset Deals",
    "short_title": "Ban on Thermal Coal Asset Deals",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Thermal Coal Sector Policy, published in April 2026. It has a section of its own: the bank will not help anyone buy or sell thermal coal assets, coal developers, or companies earning more than a quarter of their revenue from coal.",
    "naive_reading": "it will not help buy or sell thermal coal assets",
    "plain_language_note": "The broadest sentence in the document, and the one with the fewest qualifications attached.",
    "sources_intro": "One policy document states this exclusion, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "tcp2026",
        "document_title": "Société Générale Thermal Coal Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/thermal-coal-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=8",
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
        "intro": "The exclusion itself, the whole of the section the policy gives to acquisition transactions. It is the only commitment in the document Watchtower records with a single exception rather than two, and the only one that carries no restriction to new business.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide financial products or services aiming at the sale or acquisition of… Assets in the Thermal Coal Sector; or Thermal Coal Developing Companies; or Companies with more than 25% of their revenue linked to the Thermal Coal Sector.",
        "plain_rendering": "Société Générale will not provide financial products or services aiming at the sale or acquisition of assets in the Thermal Coal Sector, of Thermal Coal Developing Companies, or of Companies with more than 25% of their revenue linked to the Thermal Coal Sector.",
        "phrases": [
          {
            "id": "sale-acq",
            "label": "aiming at the sale or acquisition",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              58,
              91
            ],
            "plain_range": [
              65,
              98
            ],
            "means": "This explains what this commitment covers: transferring coal from one owner to another. It is about ownership changing hands rather than about the asset operating.",
            "lets_through": [
              "This wording lets through every plant and mine that stays where it is. Nothing here stops a company running thermal coal assets, which is what the phase-out dates and the client rules are for.",
              "It also cuts both ways, and this is worth saying plainly. Blocking a sale keeps the asset with its current owner. A buyer whose plan is early closure is refused on the same terms as one who intends to run it to the end of its life."
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
      "advisory",
      "dedicated-transaction",
      "revenue-threshold"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 306,
      "document_id": 28051,
      "institution": "societe_generale",
      "commitment_index": 8,
      "commitment_id": "bfb41175-ad11-5f3e-900e-e936b9f602e7",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=8",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        12724,
        12982
      ],
      "summary_text": "Societe Generale excludes financial products or services facilitating the sale or acquisition of thermal coal assets, Thermal Coal Developing Companies, or companies with >25% thermal coal revenue.",
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
          "relationship_status": "new_and_existing",
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
          "value": 25,
          "definition": "revenue linked to the Thermal Coal Sector for target companies in acquisition transactions"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
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
      "strength": "holds",
      "strength_derivation": {
        "rule": "spec v3.2 §4.1 — derived from Watchtower fields only",
        "inputs_source": "Watchtower record",
        "result": "holds",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 0
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "The record carries fewer qualifications here than on any other commitment in the bank's set, and the page should say so plainly.",
          "text": "This is the first commitment anywhere in Société Générale's three sector policies that our rating rule leaves standing, and the reason is visible in the record.\n\nIt is not restricted to new business. It is not restricted to dedicated transactions. It is not restricted to new clients. Watchtower records no weakness, and the only exception attached to it is the deviation clause that sits over every commitment in the policy.\n\nThe coverage is wide in its own terms too: any financing or service aiming at the sale or acquisition of thermal coal assets, of Thermal Coal Developing Companies, or of companies above 25% coal revenue. The advisory fee, the acquisition facility and the underwriting are all inside it.\n\nWe publish a rating derived from Watchtower's record rather than from our own impression, and this is what it looks like when a record carries nothing to hold against a sentence."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "What this exclusion stops is a coal asset changing hands. It does not stop a coal asset.\n\nNothing here prevents a company running thermal coal mines or power stations — that is what the client rules and the phase-out dates are for. The rule engages at one moment in an asset's life, when it goes to market, and an owner who never sells never meets it.\n\nAnd its effect is genuinely two-sided, which is worth writing plainly rather than dressing up. Blocking a sale keeps the asset with its current owner. A buyer whose plan is early closure and rehabilitation is refused on exactly the same terms as one who intends to run it to the end of its life, because the policy asks what the transaction is and not what the buyer intends to do next.\n\nWe are not saying the bank got this wrong. We are saying the sentence does not distinguish, and a policy built around a 2030 and 2040 exit has a reason to care about who buys what it is exiting."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Société Générale has now written the same rule twice in one month.\n\nThe mining policy blocks financing aiming at the sale or acquisition of metallurgical coal and asbestos mining assets. This one blocks it for thermal coal assets, coal developers and companies above 25% coal revenue. Both sit in a section of their own, separate from client criteria and from dedicated transactions — a structure the bank's oil and gas policy does not have at all.\n\nThe thermal version is the wider of the two: it names companies as well as assets, and it carries a revenue threshold so that a diversified owner is caught alongside a pure-play one.\n\nThat the same drafting appears in two policies and not the third is worth asking about. Oil and gas asset transactions are the largest of the three markets by value, and they are the one the bank has not addressed this way."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Address responsible closure",
          "content": "A buyer committed to early closure and rehabilitation is refused on the same terms as one who is not. If that is intended, say so; if not, carve it out."
        },
        {
          "title": "Say what happens to the asset that is not sold",
          "content": "The exclusion stops a transfer. Continued operation is left to the phase-out dates, the later of which is 2040."
        }
      ],
      "what_needs_to_change_closing": "Until then, this is the one rule in the document with nothing much hiding inside it.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not help buy or sell thermal coal assets, coal developers, or companies above 25% coal revenue. We have not yet reviewed what it financed against this commitment.",
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
