/* Commitment data — generated from commitments/commitment-societe-generale-txn-fpso-greenfield.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-txn-fpso-greenfield",
    "bank": "Société Générale",
    "commitment_number": 9,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Ban on Floating Production Vessels at New Fields",
    "short_title": "Ban on Floating Production Vessels at New Fields",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. It covers the floating vessels that produce and store oil offshore, where those vessels serve a field the policy counts as new. The same sentence goes on to say something wider, which is analysed as Commitment 10.",
    "naive_reading": "it will not finance floating production vessels serving new oil and gas fields",
    "plain_language_note": "One sentence carrying two rules. Only the first is quoted as this commitment, and the word joining it to the second is doing more work than it appears to.",
    "sources_intro": "One policy document states this exclusion. Two passages are quoted here: the exclusion, and the definition that decides which fields count as new.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=9",
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
        "intro": "The exclusion itself. It is the first half of a single line that contains two separate rules about the same class of vessel.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… FPSOs associated with Greenfield upstream oil and gas fields and, after 2025, any FPSOs.",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are FPSOs associated with Greenfield upstream oil and gas fields and, after 2025, any FPSOs.",
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
            "id": "assoc-gf",
            "label": "associated with Greenfield upstream oil and gas fields",
            "type": "undefined_term",
            "verbatim_range": [
              145,
              199
            ],
            "plain_range": [
              153,
              207
            ],
            "means": "This explains the link a vessel must have to a new field before this commitment applies. The policy defines the term Midstream Infrastructures Associated to elsewhere, with a majority test. It does not define association here, and this line does not point at that definition.",
            "lets_through": [
              "This wording lets through vessels serving fields approved on or before 31 December 2021, which is most of the installed fleet and a large part of what is being redeployed.",
              "It also lets through vessels moved between fields during their life. An FPSO is a mobile asset with a thirty-year hull; the field it is associated with on the day of financing need not be the field it works on afterwards.",
              "It also lets through any vessel where the association can be argued down — chartered to an operator rather than a field, or contracted across a portfolio of fields with a mix of dates."
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
        "intro": "What counts as a new field. The definition is printed immediately beneath the exclusion list and governs every use of the term in this section.",
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
      "fpso",
      "greenfield",
      "fid",
      "upstream"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 9,
      "commitment_id": "5ebf2418-b4d6-5980-8bed-410c8aaddd81",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=9",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": false,
      "quotation_matched_note": "Watchtower records this quotation as unmatched. Its stored quote splices the lead-in and the bullet with an ellipsis, and that spliced string does not occur verbatim in the parsed document. The wording quoted on this page was taken from the policy text itself and is unaffected.",
      "quotation_char_range": null,
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for Floating Production Storage and Offloading (FPSO) units associated with Greenfield upstream oil and gas fields.",
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
        "bank_green": "The commitment turns on vessels 'associated with Greenfield' fields, so the pre-2022 FID carve-out recorded on Commitment 7 applies here too. 'Associated with' is also undefined, where the same idea is given a majority test for midstream infrastructure.",
        "action": "Add the FID carve-out and a weakness on the undefined association test."
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
          "recommended": false,
          "recommended_because": null,
          "text": "The test is association, and the policy does not say what association means.\n\nIt could have. One line above, infrastructure associated with new fields is defined by a majority test: the asset's viability and existence must depend in majority on those fields. That definition is in the glossary, it is specific, and it applies to Midstream Infrastructures Associated to. This line uses the ordinary word and points at nothing.\n\nSo the reach of the exclusion is whatever a credit committee decides association means, on a class of asset built to move. An FPSO is a hull with a thirty-year life that can be disconnected, refitted and redeployed to a different field in a different basin. Whichever field it is associated with when the money is raised is not necessarily the field it produces from later.\n\nAnd the date does the rest. A vessel serving a field sanctioned in 2021 is outside the exclusion for as long as that field produces."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "This line binds the newbuild vessel ordered for a named new field — the case where the association is on the face of the contract and nobody has to argue about it. That is a real category, and it is where most FPSO project financing sits today.\n\nIt releases the redeployment market. Converted tankers and refitted hulls moving to a second or third field are financed differently, often against the contractor's balance sheet or a charter, and the association test bites less cleanly on them.\n\nIt also releases the contractors. The companies that own and lease FPSOs are service businesses, not producers, so none of the client-level tests in Section 6.1 reaches them: they do not earn more than 30% of revenue from the four listed resources, and they are not companies whose revenues come almost entirely from upstream production. A lender can decline the vessel financing and lend to the company that owns the vessel."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "The honest reading of this line is that it was overtaken by its own second half, and a page that says so is more useful to a reader than one that argues about a clause the bank has already gone past.",
          "text": "This exclusion should be read together with the words that follow it in the same sentence: and, after 2025, any FPSOs.\n\nThat second rule is wider than this one and has no conditions in it at all. From 2026 the bank says it will not finance any floating production vessel through a dedicated transaction, whether the field behind it is new or fifty years old. Whatever this clause fails to catch, the clause beside it catches anyway.\n\nSo the fair thing to say is that Société Générale wrote a conditional exclusion and then, in the same breath, replaced it with an unconditional one. Most policies do not do that, and where they do the wider rule usually arrives in a later revision with a longer runway.\n\nWhat remains worth saying about this half of the sentence is what it reveals about drafting. The policy defines association carefully for pipelines and terminals, and leaves it undefined for vessels one line later. That inconsistency does not matter much here, because of what follows. In a future revision that narrows the wider rule, it would matter a great deal."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Define association, or point at the definition you already have",
          "content": "The glossary defines association for midstream infrastructure with a majority test. This line uses the same idea and points at nothing."
        },
        {
          "title": "Say what happens on redeployment",
          "content": "A vessel financed for one field can produce from another. Nothing here follows the asset after the transaction closes."
        },
        {
          "title": "Reach the vessel owners",
          "content": "FPSO contractors are service companies and no client-level test in this policy touches them, so the vessel can be declined and the owner financed."
        }
      ],
      "what_needs_to_change_closing": "Until then, this half of the sentence depends entirely on the half that follows it.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance floating production vessels serving new oil and gas fields. We have not yet reviewed what it financed against this commitment.",
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
