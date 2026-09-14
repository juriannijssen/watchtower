/* Commitment data — generated from commitments/commitment-societe-generale-thermal-developers.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-thermal-developers",
    "bank": "Société Générale",
    "commitment_number": 3,
    "category": "thermal_coal",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Exclusion of Thermal Coal Developers",
    "short_title": "Exclusion of Thermal Coal Developers",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Thermal Coal Sector Policy, published in April 2026. Companies still building new coal — new mines, new power stations, new coal railways — are cut off from new financing, and so are the companies that own them. The definition of who counts is in the glossary, and it carries a number.",
    "naive_reading": "it will not finance companies building new coal power plants or coal mines",
    "plain_language_note": "A strong rule with a threshold hidden twelve pages away from it.",
    "sources_intro": "One policy document states this exclusion. Two passages from it are quoted here: the rule, and the definition it depends on.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "tcp2026",
        "document_title": "Société Générale Thermal Coal Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/thermal-coal-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=3",
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
        "intro": "The exclusion itself, the first item in the list of clients the bank will not take on new business with. Watchtower records it at group level — the only client rule in this policy that reaches the corporate parent by name.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide new financial products and services to any… Thermal Coal Developing Company and any of its parent and holding companies.",
        "plain_rendering": "Société Générale will not provide new financial products and services to any Thermal Coal Developing Company, or to any of its parent and holding companies.",
        "phrases": [
          {
            "id": "new-fps",
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
            "means": "This explains what this commitment reaches: business the bank has not written yet. Watchtower records the transaction status on this commitment as new.",
            "lets_through": [
              "This wording lets through everything already on the books. A coal developer with existing facilities keeps them, and keeps drawing on them, for as long as their terms run.",
              "The bank's own answer to this is commitments 1 and 2 — the phase-out dates. Those are the only thing in the policy that touches existing exposure, and the later of them is 2040."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "developing-company",
            "label": "Thermal Coal Developing Company",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              71,
              102
            ],
            "plain_range": [
              77,
              108
            ],
            "means": "This explains who is caught. The term is capitalised, which in this policy means the glossary decides what it means — and the glossary is where the qualifications live.",
            "lets_through": [
              "This wording lets through whatever the definition leaves out. The next passage sets the power threshold at capacity strictly above 300 MW and limits the reach to majority owners.",
              "It also lets through companies that have stopped developing but still operate. The test is expansion, not existence, so a company running a fleet of coal plants with no new build planned is not a developer under this policy."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "tcp2026",
        "title": "The definition",
        "intro": "The glossary entry the rule depends on. It sets out what development means, and attaches the only capacity figure in the document.",
        "location": {
          "distance": "end_of_document",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Thermal Coal Developing Companies: Companies of the Thermal Coal Sector developing, or planning to develop, additional thermal coal extraction capacities, new coal-fueled power capacities strictly above 300 MW or new transportation projects dedicated to thermal coal. Majority owners of the asset are considered.",
        "plain_rendering": "A Thermal Coal Developing Company is a company of the Thermal Coal Sector developing, or planning to develop, additional thermal coal extraction capacities, new coal-fueled power capacities strictly above 300 MW or new transportation projects dedicated to thermal coal. Majority owners of the asset are considered.",
        "phrases": [
          {
            "id": "300mw",
            "label": "strictly above 300 MW",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              188,
              209
            ],
            "plain_range": [
              190,
              211
            ],
            "means": "This explains the size a new coal-fired power project has to exceed before building it makes a company a developer. Below the line, the company is not a developer and this commitment does not apply.",
            "lets_through": [
              "The words “strictly above” let through every new coal unit of 300 MW or less. “Strictly above” puts a plant built at exactly 300 MW outside the definition.",
              "It also lets through sequential build-out. Nothing in the wording aggregates several sub-threshold units on one site, or the same developer's projects across sites."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "majority",
            "label": "Majority owners of the asset are considered",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              268,
              311
            ],
            "plain_range": [
              270,
              313
            ],
            "means": "This explains whose development counts. Ownership of the asset has to be majority ownership before the company behind it is treated as developing it.",
            "lets_through": [
              "This wording lets through minority stakes, joint ventures and consortium structures. Large coal projects are routinely built by consortia in which no single sponsor holds a majority.",
              "It also lets through the financing that follows the minority holder. A company with a 40% interest in a new coal plant is not a Thermal Coal Developing Company on this wording."
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
      "developer-exclusion",
      "group-level",
      "parent-company",
      "capital-markets"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 306,
      "document_id": 28051,
      "institution": "societe_generale",
      "commitment_index": 3,
      "commitment_id": "ac719bff-9344-531b-8de5-29e42a45772b",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=3",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        11501,
        11656
      ],
      "summary_text": "Societe Generale will not provide new financial products and services to Thermal Coal Developing Companies (or their parent/holding companies), except for dedicated energy transition financing.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": null,
          "activity_scope": "new"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "group",
          "relationship_status": "new_and_existing",
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
          "metric": "other",
          "inequality": null,
          "value": null,
          "definition": "Developing or planning to develop additional thermal coal extraction capacities, new coal-fueled power capacities strictly above 300 MW, or new transportation projects dedicated to thermal coal; includes majority owners and buyers not committing to cease operating assets within a reasonable period"
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
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "A rule about not building new coal that stops applying below 300 MW is the finding, and it is a published number.",
          "text": "Société Générale will not do new business with companies building new coal. Then the glossary says how much new coal is allowed.\n\nA Thermal Coal Developing Company is one developing additional extraction capacity, new transport projects, or new coal-fueled power capacity “strictly above 300 MW”. A new coal unit at or below 300 MW does not make its builder a developer, and the word “strictly” puts a plant built at exactly 300 MW outside the definition. Nothing in the wording adds several sub-threshold units together, on one site or across a portfolio.\n\nThe definition also counts only majority owners of the asset. Large coal projects are routinely built by consortia in which no sponsor holds a majority, and a company with a 40% interest in a new coal plant is not a developer here.\n\nThe rule itself is one of the strongest in the Société Générale set. Both of the things that limit it are twelve pages away from it, in a glossary."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Two features of this commitment are better than anything else in the bank's set.\n\nIt reaches the parent. The exclusion names “any of its parent and holding companies”, and Watchtower records the counterparty level as group. No commitment in the oil and gas policy does that, and the mining policy explicitly does not. A rule that stops at the operating subsidiary is a rule a group structure can walk around; this one does not.\n\nIt also catches intent. The definition covers companies “developing, or planning to develop”, so a company does not have to have broken ground to be excluded.\n\nThat is the right shape for a developer exclusion. The argument on this page is about the qualifications attached to it, not about its construction."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Developer exclusions are the most standardised thing in bank coal policy, which makes the 300 MW floor easy to place.\n\nThe common reference point is the Global Coal Exit List, which treats any new thermal coal capacity as expansion with no size threshold at all. Banks that align to it exclude a company for building one new unit of any size. Société Générale has adopted the structure and added a floor.\n\nIt is also worth noting where the number lives. This policy puts its client revenue thresholds in the rule itself — 25%, 50%, 20% are all printed in the operative sentence. The 300 MW figure is the one number the document keeps in the glossary, and it is the one that decides whether new coal counts as new coal."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Drop the 300 MW floor",
          "content": "A new coal-fired unit at or below 300 MW does not make its builder a developer. There is no stated reason for a size at which new coal stops counting."
        },
        {
          "title": "Reach minority sponsors",
          "content": "Only majority owners are considered. Large coal projects are commonly built through consortia where no sponsor holds a majority."
        },
        {
          "title": "Say what happens to existing facilities",
          "content": "The exclusion covers new products and services only. Existing exposure is left to the 2030 and 2040 dates."
        }
      ],
      "what_needs_to_change_closing": "Until then, the strongest client rule in the policy is decided by two qualifications in the glossary.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not provide new financing to companies developing new thermal coal capacity, or to their parents. We have not yet reviewed what it financed against this commitment.",
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
