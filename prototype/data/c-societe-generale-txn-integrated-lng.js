/* Commitment data — generated from commitments/commitment-societe-generale-txn-integrated-lng.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-txn-integrated-lng",
    "bank": "Société Générale",
    "commitment_number": 11,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Ban on LNG Projects Fed by New Gas Fields",
    "short_title": "Ban on LNG Projects Fed by New Gas Fields",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. It covers liquefied natural gas projects that take their gas from fields the policy counts as new — but only where the project and the field are financed as one thing.",
    "naive_reading": "it will not finance LNG projects fed by new gas fields",
    "plain_language_note": "A single line. The word at the front of it describes a way of structuring a project, and most large LNG projects are structured the other way.",
    "sources_intro": "One policy document states this exclusion. Two passages are quoted here: the exclusion, and the definition that decides which gas fields count as new.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=11",
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
        "intro": "The exclusion itself, one line in the list of activities the bank will not finance through a dedicated transaction. The first word sets a condition about how the project is put together.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… integrated LNG projects fed with Greenfield gas fields.",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are integrated LNG projects fed with Greenfield gas fields.",
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
            "id": "integrated-lng",
            "label": "integrated LNG projects fed with Greenfield gas fields",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              139,
              193
            ],
            "plain_range": [
              147,
              201
            ],
            "means": "The word “integrated” decides which projects are covered. It means the upstream field and the liquefaction plant are developed and financed as a single project. The policy does not define the word, and it does not define what feeding a plant requires either.",
            "lets_through": [
              "This wording lets through unbundled projects, which is how most large LNG is built. A liquefaction plant financed as a tolling facility, taking gas from producers under separate supply agreements, is not an integrated project however new the fields behind it are.",
              "It also lets through plants supplied from a pipeline network, where gas from many fields of many vintages is commingled and no single field feeds the plant.",
              "It also lets through the upstream and the plant financed separately, in sequence, by the same lenders — two separate project financings, neither of them an integrated project."
            ],
            "defined_in_clause": 2,
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
        "title": "The field definition",
        "intro": "What counts as a new field. The definition sits immediately beneath the exclusion list and governs the term wherever this section uses it.",
        "location": {
          "distance": "nearby",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "“Greenfield” means oil and gas fields and associated reservoirs for which the latest Final Investment Decision (FID) was made after 31 December 2021.",
        "plain_rendering": "“Greenfield” means oil and gas fields and associated reservoirs for which the latest Final Investment Decision (FID) was made after 31 December 2021.",
        "phrases": [
          {
            "id": "latest-fid-2",
            "label": "the latest Final Investment Decision (FID) was made after 31 December 2021",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              74,
              148
            ],
            "plain_range": [
              74,
              148
            ],
            "means": "This explains the test of whether a field counts as new. It turns on a dated corporate approval rather than on when oil or gas starts flowing.",
            "lets_through": [
              "This wording lets through every field approved on or before 31 December 2021, for the whole of its producing life — which for a field approved in 2021 can run past 2060.",
              "It also lets through additional wells, new phases and redevelopment inside an existing field, none of which necessarily requires a fresh final investment decision."
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
      "greenfield",
      "fid",
      "lng",
      "liquefaction",
      "tolling"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 11,
      "commitment_id": "f103d271-2402-5ef1-a8c7-f95827fb6177",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=11",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": false,
      "quotation_matched_note": "Watchtower records this quotation as unmatched. Its stored quote splices the lead-in and the bullet with an ellipsis, and that spliced string does not occur verbatim in the parsed document. The wording quoted on this page was taken from the policy text itself and is unaffected.",
      "quotation_char_range": null,
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for integrated LNG projects fed with Greenfield gas fields.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "midstream",
          "activity_scope": "new"
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
        "field": "exceptions",
        "severity": "omission",
        "watchtower": "No commitment-specific carve-out, so this rates `holds`.",
        "bank_green": "Same missing FID carve-out. 'Integrated' is also undefined and describes a project structure most large LNG does not use.",
        "action": "Add the FID carve-out and a weakness on 'integrated'."
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
          "recommended_because": "The loophole is not in the promise but in the project structure the promise assumes, and that is invisible unless the page says it in the first line.",
          "text": "Large LNG projects are mostly not integrated, and they are not integrated for financing reasons.\n\nThe standard structure separates the upstream from the plant. Producers develop the fields. A separate company owns the liquefaction trains and is paid a fee to chill gas it never takes title to. Buyers contract for capacity. Each piece is financed by different lenders against different risks, and that separation is the point — it is what makes the plant bankable when the fields are not.\n\nThis exclusion applies to integrated LNG projects. In the structure just described there is no integrated project to decline. There is a liquefaction plant, and a set of upstream developments, and a chain of supply agreements between them.\n\nThe second condition narrows it again. The plant must be fed with new fields. Where gas reaches a plant through a pipeline network, it comes from many fields sanctioned across many years, and nobody can say which field fed which cargo.\n\nSo the line catches the fully integrated project, which is the least common way of building the largest facilities."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "The projects this reaches are the ones a single sponsor builds end to end: field, pipeline and plant developed together, financed together, owned together. Those exist — typically where one national oil company or one major controls the whole chain — and they are large.\n\nThe projects it releases are the ones assembled from parts. A tolling plant with third-party supply. A plant fed from a national grid. A joint venture where the upstream partners and the liquefaction partners are different companies with different lenders.\n\nThat asymmetry does not follow emissions or field vintage. It follows corporate structure, and corporate structure is the one thing a sponsor can choose. A project that would be caught as an integrated development is not caught if the same assets are held in two companies with a supply contract between them.\n\nSo the test rewards a particular way of organising a project rather than a particular kind of gas."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Bank restrictions on LNG have converged on two shapes. One targets the feedstock — no LNG fed by shale gas, no LNG fed by Arctic gas. The other targets new liquefaction capacity outright, whatever feeds it.\n\nSociété Générale uses the feedstock shape twice: here, tied to new fields, and in the following line, tied to shale and Arctic gas. It does not use the capacity shape at all.\n\nFeedstock tests are harder to apply than capacity tests, because gas is fungible and plants are supplied from networks. Banks that have tried them have generally had to add a tracing rule saying how feedstock is attributed. There is no tracing rule here.\n\nWhat sets this line apart from its peers is the word integrated, which no comparable policy we are aware of uses as the gate. It narrows the exclusion by project structure rather than by fuel, and that is a distinction the sector has not adopted."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Drop \"integrated\"",
          "content": "Most large LNG is financed as separate upstream and liquefaction projects. Applying the exclusion to any LNG project supplied by new fields would follow the gas rather than the corporate structure."
        },
        {
          "title": "Say how feedstock is traced",
          "content": "Where a plant draws from a pipeline network, gas from fields of every vintage is commingled. Without an attribution rule, \"fed with Greenfield gas fields\" cannot be tested."
        },
        {
          "title": "Address expansions",
          "content": "Adding a train to an existing plant to take new-field gas is neither a new project nor obviously an integrated one."
        }
      ],
      "what_needs_to_change_closing": "Until then, the structure that makes an LNG project financeable is also the structure that puts it outside this exclusion.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance integrated LNG projects supplied by new gas fields. We have not yet reviewed what it financed against this commitment.",
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
