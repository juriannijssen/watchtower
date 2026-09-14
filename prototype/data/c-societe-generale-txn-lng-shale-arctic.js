/* Commitment data — generated from commitments/commitment-societe-generale-txn-lng-shale-arctic.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-txn-lng-shale-arctic",
    "bank": "Société Générale",
    "commitment_number": 12,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Ban on LNG Fed by Shale or Arctic Gas",
    "short_title": "Ban on LNG Fed by Shale or Arctic Gas",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. It is a feedstock rule: the bank will not finance liquefaction and export capacity supplied by shale gas or by Arctic gas. Whether it applies to a given plant depends on where the gas came from, and the policy does not say how that is established.",
    "naive_reading": "it will not finance LNG projects fed by shale gas or Arctic gas",
    "plain_language_note": "One line. Two of its terms decide the reach of the exclusion, and one of them is drawn on a map in the glossary.",
    "sources_intro": "One policy document states this exclusion. Two passages are quoted here: the exclusion, and the glossary entry that draws the Arctic boundary.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=12",
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
        "intro": "The exclusion itself, one line in the list of activities the bank will not finance through a dedicated transaction. It sets a size test on the project and a source test on the gas.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… new projects or significant expansion of LNG production or exportation fed by shale gas or Arctic gas",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are new projects or significant expansion of LNG production or exportation fed by shale gas or Arctic gas.",
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
            "id": "significant-expansion",
            "label": "significant expansion",
            "type": "undefined_term",
            "verbatim_range": [
              155,
              176
            ],
            "plain_range": [
              163,
              184
            ],
            "means": "This explains the size test an addition to an existing plant has to meet. The policy gives no number, no percentage of capacity and no reference point, and it does not say who decides.",
            "lets_through": [
              "The word “significant” lets through debottlenecking and small capacity additions, which is how existing plants grow most cheaply. A series of small additions can add a train's worth of capacity without any single step being significant.",
              "It also lets through any expansion a sponsor and a credit committee agree is not significant, since nothing in the policy contradicts them."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          },
          {
            "id": "fed-by",
            "label": "fed by shale gas or Arctic gas",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              210,
              240
            ],
            "plain_range": [
              218,
              248
            ],
            "means": "This explains the source test. The gas entering the plant has to be shale gas or Arctic gas. The policy sets out no method for attributing feedstock and no threshold for how much of a plant's supply must come from either source.",
            "lets_through": [
              "This wording lets through plants supplied from a pipeline network. Gas from shale and conventional fields is commingled long before it reaches a terminal, and no molecule can be traced to a formation.",
              "It also lets through plants with mixed supply, because the policy names no percentage. A terminal drawing most of its gas from shale can point to its conventional contracts.",
              "It also lets through gas bought on the market rather than contracted from a named field, where the seller is a trader and the origin is not part of the transaction."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "ogp2026",
        "title": "The Arctic definition",
        "intro": "Where the bank draws the Arctic boundary. It is printed in the glossary at the end of the policy, and it uses two different tests for sea and for land.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "The exclusion capitalises Arctic and nothing else marks it as a defined term; the definition is three pages further on."
        },
        "verbatim": "Arctic region: For the sake of this policy, the Arctic region is defined as the following: Offshore areas: “Arctic waters” as defined in the Convention on the Safety of Life at Sea (regulation XIV/1.3) and the International Maritime Organization (IMO) Polar Code (see map p 9 of Annex 10). Onshore areas: North of the Arctic Circle (north of 66°33′47.2″ N)",
        "plain_rendering": "“Arctic region” means, for the sake of this policy: offshore, the “Arctic waters” defined in the Convention on the Safety of Life at Sea and the International Maritime Organization Polar Code; onshore, North of the Arctic Circle (north of 66°33′47.2″ N).",
        "phrases": [
          {
            "id": "arctic-circle",
            "label": "North of the Arctic Circle (north of 66°33′47.2″ N)",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              305,
              356
            ],
            "plain_range": [
              202,
              253
            ],
            "means": "This explains the onshore boundary. It is a line of latitude, which makes it precise and checkable — and it is a line, so a field one kilometre south of it is not Arctic gas under this policy.",
            "lets_through": [
              "This wording lets through gas fields in the sub-Arctic producing regions that sit just below the circle, including much of the West Siberian gas province that supplies Russian liquefaction capacity.",
              "It also lets through onshore gas produced south of the line and piped north into Arctic infrastructure, which the definition does not follow.",
              "It also lets through any field where the licence area straddles the circle, since the definition speaks to location and not to apportionment."
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
      "lng",
      "shale",
      "debottlenecking",
      "commingled-gas"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 12,
      "commitment_id": "a75246fe-99ff-5227-b6c4-a0e2f4cf2933",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=12",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": false,
      "quotation_matched_note": "Watchtower records this quotation as unmatched. Its stored quote splices the lead-in and the bullet with an ellipsis, and that spliced string does not occur verbatim in the parsed document. The wording quoted on this page was taken from the policy text itself and is unaffected.",
      "quotation_char_range": null,
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for new projects or significant expansions of LNG production or export facilities fed by shale gas or Arctic gas.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "arctic",
            "shale"
          ],
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
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded.",
        "bank_green": "The commitment turns on whether a plant is 'fed by shale gas or Arctic gas', and the policy sets out no method for attributing feedstock. 'Significant expansion' is also undefined — the same shape of gap Watchtower flags on Commitments 2, 3, 8 and 14.",
        "action": "Add a weakness on 'significant expansion' and on the absent feedstock attribution rule."
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
        "total": 1,
        "previous_editorial_rating": "hollowed",
        "changed": false
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The exclusion turns on tracing gas to its formation, and the reason that cannot be done is a fact about pipelines rather than an opinion about the bank.",
          "text": "Gas is fungible. Once it enters a pipeline network it is mixed with gas from every other field feeding that network, and nothing downstream can say which molecules came from shale.\n\nThis exclusion asks whether a liquefaction project is fed by shale gas. For a plant with a dedicated pipeline from a named field, that question has an answer. For a plant connected to a national grid — which is how most export capacity outside a few integrated projects is supplied — it does not. The gas arrives commingled, bought under contracts that specify quantity and delivery point rather than geology.\n\nThe policy sets no attribution rule and no threshold. It does not say that a plant is caught where a majority of its supply is shale, or where any of it is, or how a sponsor should demonstrate either.\n\nThe size test has the same problem in a smaller form. Expansion is excluded only where it is significant, and no number is given.\n\nArctic gas is different, and it is the reason this is not the weakest line in the document. Arctic projects are identifiable, few and named."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Two things here are better than the sector norm.\n\nThe first is that the Arctic boundary is drawn rather than described. The glossary gives a latitude — north of 66°33′47.2″ N onshore — and points to the IMO Polar Code offshore. Most policies say Arctic and stop, which leaves each bank free to decide where the Arctic begins when a transaction arrives. This one can be checked against a map by anyone.\n\nThe second is that the exclusion covers exportation as well as production. A rule that stops at liquefaction trains misses the export terminals that make the trains worth building; this one names both.\n\nWhat undoes the good work is the absence of an attribution rule. A precisely drawn boundary is only as good as the method for deciding whether a plant's gas came from inside it, and there is no method. The bank has done the hard part — publishing a checkable line — and left out the easy part."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Feedstock-based LNG restrictions are now common among European banks, and they share this weakness. Several exclude LNG fed by shale gas; almost none publishes a rule for establishing that a given plant is so fed.\n\nWhere Société Générale is ahead is the Arctic definition. A published latitude with an offshore reference to the IMO Polar Code is more specific than most peers manage, and it removes an argument that other policies leave open.\n\nWhere it sits behind is the alternative approach. A growing number of policies now restrict new liquefaction capacity outright, regardless of feedstock, on the reasoning that capacity built today commits gas supply for decades whatever its source. That test needs no tracing and no threshold; it asks only whether a plant is being built.\n\nSociété Générale uses the feedstock shape in this line and in the one before it, and the capacity shape nowhere. Two feedstock tests without an attribution rule reach less than one capacity test would."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Publish an attribution rule",
          "content": "Say what share of a plant's supply must come from shale or Arctic gas for the exclusion to apply, and how a sponsor evidences it. Without that, the test cannot be applied to any plant on a network."
        },
        {
          "title": "Put a number on \"significant\"",
          "content": "Expansion is excluded only where it is significant, and nothing in the policy says what that means. A percentage of existing capacity would settle it."
        },
        {
          "title": "Follow the gas south of the line",
          "content": "The Arctic definition is a latitude. Gas produced just below it and piped into Arctic export infrastructure is outside the exclusion."
        }
      ],
      "what_needs_to_change_closing": "Until then, a plant on a pipeline network cannot be tested against this exclusion at all.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance new or significantly expanded LNG capacity fed by shale or Arctic gas. We have not yet reviewed what it financed against this commitment.",
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
