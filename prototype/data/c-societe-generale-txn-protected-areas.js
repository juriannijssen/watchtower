/* Commitment data — generated from commitments/commitment-societe-generale-txn-protected-areas.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-txn-protected-areas",
    "bank": "Société Générale",
    "commitment_number": 13,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Ban on Drilling in Protected Areas",
    "short_title": "Ban on Drilling in Protected Areas",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. It names four kinds of protected place and refuses to finance oil and gas development inside them. A second passage, a page later in the same section, says what the bank does when the exclusion does not apply.",
    "naive_reading": "it will not finance oil and gas drilling inside protected natural areas",
    "plain_language_note": "One long sentence and one shorter one. The lists in the first are precise; what decides the exclusion's reach is which categories the lists leave out and what the word about position means.",
    "sources_intro": "One policy document states this exclusion. Two passages are quoted here: the exclusion, and the weaker test that applies to the same places when the exclusion is not triggered.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=13",
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
        "intro": "The exclusion itself. It names three activities, one part of the value chain, a positional test and four categories of protected place.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… development, construction or expansion of upstream oil and gas operations located within a UNESCO World Heritage Site, a Ramsar site, a nationally protected area (IUCN categories I-IV) or a site of the Alliance for Zero Extinction.",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are development, construction or expansion of upstream oil and gas operations located within a UNESCO World Heritage Site, a Ramsar site, a nationally protected area (IUCN categories I-IV) or a site of the Alliance for Zero Extinction.",
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
            "id": "upstream-within",
            "label": "upstream oil and gas operations located within",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              181,
              227
            ],
            "plain_range": [
              189,
              235
            ],
            "means": "This explains two conditions in four words. The activity has to be upstream — finding and producing oil and gas, not moving or processing it — and it has to sit inside the boundary of the protected place.",
            "lets_through": [
              "This wording lets through pipelines, roads, terminals and processing plants, none of which is upstream. A protected area crossed by infrastructure serving fields outside it is not covered by this commitment.",
              "It also lets through wells drilled outside a boundary and directed underneath it. Extended-reach drilling routinely travels several kilometres horizontally, and the operation is located where the rig stands.",
              "It also lets through development immediately outside a boundary whose effects — water abstraction, spills, noise, access roads, flaring — fall inside it."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          },
          {
            "id": "iucn",
            "label": "(IUCN categories I-IV)",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              301,
              323
            ],
            "plain_range": [
              309,
              331
            ],
            "means": "This explains which nationally protected areas count. The IUCN classifies protected areas in six categories by management objective, from strict nature reserves at I to sustainable-use areas at VI. This commitment takes the first four.",
            "lets_through": [
              "This wording lets through IUCN categories V and VI, which between them account for a large share of the world's protected land — including most protected areas in which extractive activity is legally possible in the first place.",
              "It also lets through nationally protected areas that carry no IUCN assignment at all, which is common outside the countries that report fully to the World Database on Protected Areas."
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
        "role": "condition",
        "source_id": "ogp2026",
        "title": "The second test",
        "intro": "What happens in the same places when the exclusion above does not apply. It is printed a page later in the same section, under a different heading, and asks for something considerably less.",
        "location": {
          "distance": "nearby",
          "signposting": "none",
          "signposting_note": "The exclusion gives no indication that a second and weaker test covers the same protected places a page further on."
        },
        "verbatim": "For activities located within, or with potential material impacts on a protected area, if the exclusion criteria are not triggered, evidence is provided that the development is legally permitted and consistent with any regulatory management plans for such area.",
        "plain_rendering": "For activities located within, or with potential material impacts on a protected area, if the exclusion criteria are not triggered, Société Générale looks for evidence that the development is legally permitted and consistent with any regulatory management plans for such area.",
        "phrases": [
          {
            "id": "legally-permitted",
            "label": "legally permitted and consistent with any regulatory management plans",
            "type": "undefined_term",
            "verbatim_range": [
              177,
              246
            ],
            "plain_range": [
              192,
              261
            ],
            "means": "This explains the standard applied to protected areas this commitment does not reach. It asks whether the host state allows the development, and whether it fits that state's own plan for the area.",
            "lets_through": [
              "This wording lets through any development a government has authorised. Where a state has opened a protected area to drilling, the permit is the evidence, and the test is met by the fact of the authorisation.",
              "It also lets through areas with no management plan, since the requirement is consistency with any plan that exists.",
              "It also covers everything the categories in the line above leave out, since this is what applies instead."
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
      "upstream",
      "iucn-categories",
      "ramsar",
      "aze",
      "extended-reach-drilling"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 13,
      "commitment_id": "13911cda-15bc-5a4b-9634-b73276ac15b0",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=13",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": false,
      "quotation_matched_note": "Watchtower records this quotation as unmatched. Its stored quote splices the lead-in and the bullet with an ellipsis, and that spliced string does not occur verbatim in the parsed document. The wording quoted on this page was taken from the policy text itself and is unaffected.",
      "quotation_char_range": null,
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for upstream oil and gas operations located within UNESCO World Heritage Sites, Ramsar sites, nationally protected areas (IUCN I-IV), or Alliance for Zero Extinction sites.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "upstream",
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
        "bank_green": "The exclusion covers IUCN categories I-IV of six. Categories V and VI are outside it, and a weaker test applies there — legally permitted and consistent with any management plan — printed a page later under a different heading.",
        "action": "Add a weakness on the category cut, and record the evaluation-priority test as a carve-out."
      },
      {
        "field": "geographic_scope.global_scope",
        "severity": "contradiction",
        "watchtower": "`false`.",
        "bank_green": "The policy states it is applicable worldwide and this commitment names no territory. Every other commitment in the run is `true`.",
        "action": "Check whether this is a tagging error."
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
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "Naming Alliance for Zero Extinction sites is genuinely ahead of the sector, and a page that opens by granting that is much harder to dismiss when it goes on to the categories the line leaves out.",
          "text": "This is a better protected-areas exclusion than most, and the reason is the fourth item on the list.\n\nAlmost every bank policy names UNESCO World Heritage Sites. Many add Ramsar wetlands. Very few name Alliance for Zero Extinction sites — places holding the last known population of a species facing extinction — and naming them is a deliberate choice to protect somewhere by what lives there rather than by its diplomatic status.\n\nThe IUCN reference is also specific. Nationally protected area is a phrase that means whatever a country says it means; tying it to a published classification makes the promise checkable.\n\nThen comes the cut. The exclusion takes categories I to IV and stops. Categories V and VI — protected landscapes and sustainable-use areas — are excluded from the exclusion, and they are where extractive activity is most often legally possible. What applies there instead is printed a page later: evidence that the development is legally permitted and consistent with the area's management plan. That is a test a state's own permit satisfies.\n\nThe strong list is real. So is the line drawn through the middle of it."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "Three things fall outside this exclusion, and together they are most of what happens to a protected area during oil and gas development.\n\nThe first is everything that is not upstream. The pipeline crossing the park, the access road cut through it, the processing plant on its edge — none of these is exploration, development or production. A protected area can be traversed and serviced without the exclusion applying.\n\nThe second is geometry. The test is whether the operation is located within the boundary. Extended-reach drilling routinely travels several kilometres horizontally, so a well pad sited outside a protected area can produce from beneath it. And harm does not stop at a line: water abstraction, spills, flaring and traffic cross boundaries that operations do not.\n\nThe third is the category cut. Categories V and VI are outside, and they cover a large share of protected land worldwide — in many countries, all of the protected land where drilling is lawful at all.\n\nFor those places the applicable test, a page later, is that the development is legally permitted. Which is to say: the exclusion does not apply where the host state has decided it should not."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Set against comparable policies, the list here is above average and the geometry is standard.\n\nOn the list, Société Générale names four categories where the common practice is one or two. Alliance for Zero Extinction sites in particular are rare in bank policy, and their presence suggests someone consulted a conservation source rather than copying a peer.\n\nOn the boundary test, the language is the sector default. Located within is what most policies say, and most have the same problem with directional drilling and with impacts that travel. A handful of policies now use a buffer — a stated distance outside the boundary — or apply the exclusion to operations with material impacts on an area rather than inside it. Both approaches reach cases this one does not.\n\nOn the category cut, I-IV is the more restrictive of the two conventions in use; some peers exclude only World Heritage Sites and Ramsar wetlands, with no IUCN reference at all. Others apply their exclusion across all six categories. Société Générale sits between them."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Cover the infrastructure, not only the drilling",
          "content": "Pipelines, roads and processing plants are not upstream operations, so a protected area can be crossed and serviced without engaging this exclusion."
        },
        {
          "title": "Replace \"located within\" with an impact test",
          "content": "A well pad outside a boundary can produce from beneath it, and abstraction, spills and flaring cross boundaries that operations do not."
        },
        {
          "title": "Extend beyond IUCN categories I-IV",
          "content": "Categories V and VI hold a large share of protected land and are where extractive activity is most often lawful. What applies there instead is a permitting check."
        }
      ],
      "what_needs_to_change_closing": "Until then, the places most exposed to drilling are the places this exclusion does not reach.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance oil and gas development inside World Heritage Sites, Ramsar wetlands, strictly protected national areas or Alliance for Zero Extinction sites. We have not yet reviewed what it financed against this commitment.",
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
