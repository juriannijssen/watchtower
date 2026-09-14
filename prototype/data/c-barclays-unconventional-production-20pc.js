/* Commitment data — generated from commitments/commitment-barclays-unconventional-production-20pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "barclays-unconventional-production-20pc",
    "bank": "Barclays",
    "commitment_number": 16,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "Barclays' 20% Threshold on Unconventional Oil & Gas",
    "short_title": "20% Threshold on Unconventional Oil & Gas",
    "subject": "Unconventional Oil & Gas Producers",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Unconventional Oil & Gas section of its Climate Change Statement of December 2025. It commits the bank not to finance energy groups whose production relies heavily on unconventional oil and gas.",
    "naive_reading": "it will not finance companies that rely on unconventional oil and gas",
    "plain_language_note": "The rule is plain. The Arctic definition it depends on comes from the table at the end of the statement.",
    "sources_intro": "One policy document states this commitment, and two passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=16",
        "watchtower_document_id": 4122,
        "watchtower_institution": "barclays",
        "synthesis_run": 219,
        "version_label": "December 2025",
        "published": "2025-12-01",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "verbatim_check": {
          "document": "4122-barclays-arctic-oil-gas.md",
          "passages": 2,
          "found": 2,
          "missing": []
        }
      }
    ],
    "clauses": [
      {
        "index": 1,
        "role": "rule",
        "source_id": "ccs2025",
        "title": "The rule",
        "intro": "The entity-level restriction that combines four kinds of unconventional production into one test.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide financing to Energy Groups whose aggregate share of production in Oil Sands, Extra Heavy Oil, Hydraulic Fracturing in the UK/EU, and Arctic Circle oil & gas exceeds 20% of their total oil & gas production.",
        "plain_rendering": "Barclays will not provide financing to Energy Groups whose combined production from oil sands, extra heavy oil, Hydraulic Fracturing in the UK/EU and Arctic oil & gas exceeds 20% of their total oil & gas production.",
        "phrases": [
          {
            "id": "fracking-uk-eu",
            "label": "Hydraulic Fracturing in the UK/EU",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              114,
              147
            ],
            "plain_range": [
              112,
              145
            ],
            "means": "The words “Hydraulic Fracturing in the UK/EU” count fracking only in the UK and the EU towards the 20%.",
            "lets_through": [
              "This wording lets through shale producers in North America and Argentina, whose fracking does not count at all — however much of their production it is."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "exceeds-20pc",
            "label": "exceeds 20%",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              177,
              188
            ],
            "plain_range": [
              167,
              178
            ],
            "means": "This explains the threshold: the four kinds combined, as a share of the group's total oil and gas production.",
            "lets_through": [
              "This wording lets through groups at or below a fifth, however large their unconventional production in absolute terms."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "ccs2025",
        "title": "Where it applies",
        "intro": "From the table of definitions at the end of the statement, what Barclays means by the Arctic Circle.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Arctic Circle” is set in italics in the rule, and nothing else points to its definition."
        },
        "verbatim": "Refers to the area within the Arctic Circle, which is subject to sea ice, the Arctic National Wildlife Refuge (ANWR) and Coastal Plains.",
        "plain_rendering": "The Arctic Circle means the area within the Arctic Circle, which is subject to sea ice, the Arctic National Wildlife Refuge (ANWR) and Coastal Plains.",
        "phrases": [
          {
            "id": "subject-to-sea-ice",
            "label": "subject to sea ice",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              54,
              72
            ],
            "plain_range": [
              68,
              86
            ],
            "means": "This definition may narrow the Arctic that counts. Read as a limit, it covers the area subject to sea ice, plus the Arctic National Wildlife Refuge and the Coastal Plains; the comma before “which” leaves open whether it limits or only describes.",
            "lets_through": [
              "Read as a limit, this wording lets through production from Arctic land outside those areas, which does not count towards the 20%."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "oil-sands",
      "extra-heavy-oil",
      "shale",
      "arctic",
      "unconventional"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 16,
      "commitment_id": "38cf2073-d67c-513c-858f-8d9f9987f76d",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=16",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        9566,
        9803
      ],
      "summary_text": "Barclays will not finance Energy Groups where unconventional oil & gas (Oil Sands, Extra Heavy Oil, UK/EU Fracking, Arctic) exceeds 20% of total production.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "oil_sands",
            "arctic",
            "shale"
          ],
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
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
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [
        {
          "metric": "production_share",
          "inequality": ">",
          "value": 20,
          "definition": "aggregate share of production in Oil Sands, Extra Heavy Oil, Hydraulic Fracturing in UK/EU, and Arctic Circle oil & gas as % of total oil & gas production"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 1 fields corrected]\nCHANGES:\n- Barclays will not finance oil sands exploration and production companies (majority owners or operators deriving ≥10% revenue from oil sands).: Removed exception for <10% revenue as it is already captured in the threshold field.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "EXISTING OIL AND GAS FINANCING STAYS IN PLACE · APPLICABILITY OF FINANCING RESTRICTIONS — “Any existing commitments or financing entered into prior to any of the restrictions coming into effect under the Upstream Oil & Gas and Unconventional Oil & Gas sections of this statement may remain in place”; only refinancings are subject to the restrictions.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": "commitment 6 only",
        "where": "APPLICABILITY OF FINANCING RESTRICTIONS"
      },
      {
        "condition": "SECONDARY MARKETS AND DISTRESSED COMPANIES ARE NOT “FINANCING” · KEY DEFINITIONS — Financing “excludes, without limitation, any debt or securities traded or placed through secondary market activity”, and primary financing for distressed entities, such as debt-for-equity swaps and other recapitalisations, is excluded from the definition too.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "KEY DEFINITIONS"
      },
      {
        "condition": "RESTRICTIONS DEPEND ON THIRD-PARTY DATA · THIRD PARTY DATA — “Where data is not available or is not of a reliably high quality, this may impact our ability to apply restrictions and other provisions set out in this statement.”",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "THIRD PARTY DATA"
      },
      {
        "condition": "SUBJECT TO APPLICABLE LAW · ABOUT THIS DOCUMENT — “The application of the provisions in this statement is subject to compliance with applicable laws and regulations, which may change from time to time.”",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "ABOUT THIS DOCUMENT"
      }
    ],
    "disagreements": [
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "The record carries the statement's document-wide provisions on at most two commitments: the grandfathering rule on commitment 6, and the transition-finance allowance on commitments 4 and 5.",
        "bank_green": "The definition of financing excludes secondary-market activity and distressed-company financing; the statement applies only as far as third-party data allows, and subject to applicable law; existing oil and gas financing may remain in place until refinanced; and transition finance may reach restricted upstream groups. Each reaches more commitments than the record attaches it to.",
        "action": "Record each as a standing exception on every commitment it reaches."
      }
    ],
    "assessment": {
      "strength": "holds",
      "strength_derivation": {
        "rule": "spec v3.2 §4.1",
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
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The UK/EU limit on fracking removes the largest unconventional source from the test; stated flatly that is the point.",
          "text": "The test combines four kinds of unconventional production, and quietly drops the largest.\n\nFracking counts only in the UK and the EU. Shale production in North America and Argentina — which is most of the world's unconventional oil and gas — does not count towards the 20% at all. A producer whose output is mostly American shale passes this test with none of it counted.\n\nWhat does count is oil sands, extra heavy oil, UK and EU fracking, and Arctic production as the statement defines the Arctic. Above a fifth of total production, all financing stops.\n\nWatchtower rates this `holds`. The narrowing is in the list."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who this restriction reaches.\n\nEnergy groups producing mostly oil sands, extra heavy oil or defined-Arctic oil and gas. Those are caught.\n\nThe largest unconventional producers in the world — American shale companies — are not, because their fracking is outside the UK and EU. The commitment binds producers of the unconventional sources that are hardest to grow, and releases the one that grew fastest."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the commitment aggregates. A group cannot pass by keeping each unconventional source below a threshold of its own; the four are counted together, as a share of production, and all financing is covered.\n\nWhere it stops is fracking, counted only in the UK and EU. The aggregate is a good design with the biggest ingredient left out."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Count fracking everywhere",
          "content": "Include shale production wherever it occurs in the aggregate share."
        },
        {
          "title": "Count the whole Arctic",
          "content": "Define the Arctic as everything north of the Arctic Circle, onshore and offshore."
        }
      ],
      "what_needs_to_change_closing": "Until then, the test catches producers of oil sands and heavy oil and misses the shale industry entirely.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Barclays commits not to finance energy groups whose production relies heavily on unconventional oil and gas. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": null,
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-10",
    "spec": "Commitment Analysis Spec v3.11",
    "source": "Watchtower synthesis run 219, document 4122",
    "reading": "drafted"
  }
};
