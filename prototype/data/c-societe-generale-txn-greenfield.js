/* Commitment data — generated from commitments/commitment-societe-generale-txn-greenfield.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-txn-greenfield",
    "bank": "Société Générale",
    "commitment_number": 7,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Ban on New Oil & Gas Fields",
    "short_title": "Ban on New Oil & Gas Fields",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. The bank will not finance the exploration, development or production of Greenfield oil and gas fields — new fields — and it publishes a definition saying exactly which fields those are. It is the commitment the rest of this policy's Greenfield exclusions hang from.",
    "naive_reading": "it will not finance new oil and gas fields",
    "plain_language_note": "Two short sentences with no hedging in either. The definition does the work, and it does it with a date rather than a judgement.",
    "sources_intro": "One policy document states this exclusion. Two passages are quoted here: the ban, and the definition that decides which fields are new.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=7",
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
        "intro": "The exclusion itself. It names three activities and one class of field, and attaches no threshold, no percentage and no exception.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… exploration, development and production of Greenfield oil and gas fields",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are exploration, development and production of Greenfield oil and gas fields.",
        "phrases": [
          {
            "id": "dedicated",
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
            "means": "This explains what financing this commitment covers: project financing only. That is financing raised for a named activity, where it is clear what the financing is used for.",
            "lets_through": [
              "This wording blocks project financing, but it allows general corporate financing. A company opening new fields and borrowing at group level is not asking for a dedicated transaction, so this commitment does not apply. At company level the only tests are Commitments 1 to 3, and none of them asks whether a producer is opening new fields."
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
        "title": "The definition",
        "intro": "What counts as a new field. It is printed in the same section as the exclusion, immediately beneath the list, and it applies to every Greenfield exclusion in the policy.",
        "location": {
          "distance": "nearby",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "\"Greenfield\" means oil and gas fields and associated reservoirs for which the latest Final Investment Decision (FID) was made after 31 December 2021.",
        "plain_rendering": "\"Greenfield\" means oil and gas fields and associated reservoirs for which the latest Final Investment Decision (FID) was made after 31 December 2021.",
        "phrases": [
          {
            "id": "latest-fid",
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
            "means": "This explains the test of whether a field is new. It turns on a dated corporate event rather than on when oil starts flowing. The word latest matters: a field that takes a fresh investment decision after the cut-off becomes Greenfield even if it was first approved long before.",
            "lets_through": [
              "This wording lets through every field approved on or before 31 December 2021, for the whole of its producing life. A field approved in 2021 and producing until 2060 is never Greenfield, and the decades of oil that follow are outside this commitment.",
              "It also lets through expansion inside an existing field that does not require a new final investment decision. Additional wells, new phases and redevelopment can add supply for years without triggering a fresh FID."
            ],
            "defined_in_clause": null,
            "source": "watchtower_exception",
            "watchtower_ref": "Fields for which the latest Final Investment Decision (FID) was made on or before 31 December 2021.",
            "not_in_synthesis": false,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "fid",
      "greenfield"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 7,
      "commitment_id": "5472de60-3a02-5266-9e46-4a6a10633c55",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=7",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        20882,
        21473
      ],
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for the exploration, development, and production of Greenfield oil and gas fields (defined as those with an FID after December 31, 2021).",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "upstream",
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
          "condition": "Fields for which the latest Final Investment Decision (FID) was made on or before 31 December 2021.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 6.2, immediately below the exclusion list, page 9"
        },
        {
          "condition": "Exceptions for pre-existing business commitments or opportunities at an advanced stage of negotiation.",
          "carve_out_kind": "discretionary_carve_out",
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
        "carve_out_kind": "discretionary_carve_out",
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
        "watchtower": "Records the pre-2022 FID carve-out here, and marks the §7 transition exception `discretionary_carve_out` — the only commitment where that sentence is classified that way.",
        "bank_green": "The FID cut-off governs Commitments 8, 9 and 11 as well, and is recorded on none of them. The §7 classification looks like a slip.",
        "action": "Propagate the FID carve-out to 8, 9 and 11; set §7 to `bounded_carve_out` for consistency."
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
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2,
        "previous_editorial_rating": "hollowed",
        "changed": false
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "This is the best-drafted exclusion in the document and the word 'latest' is a deliberate anti-avoidance choice most banks do not make; a page that opens by showing that is far harder to wave away.",
          "text": "This is the strongest sentence in the policy, and two things about it deserve saying before anything else.\n\nThe first is that it is defined. Greenfield is not left to judgement — it is fields whose latest final investment decision came after 31 December 2021. Anyone can check a field against that. Most banks that restrict new oil and gas leave new undefined, which means it means whatever the credit committee needs it to mean.\n\nThe second is the word latest. A field first sanctioned in 2015 that takes a fresh investment decision in 2027 becomes Greenfield under this wording. That is an anti-avoidance clause, and it closes the obvious route around a cut-off date — reviving an old approval rather than taking a new one. It was not required and the bank wrote it anyway.\n\nWhat remains is scope. Like every exclusion in this section it reaches dedicated transactions, and no test anywhere in the policy asks whether a company borrowing at group level is opening new fields."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "This exclusion stops money attached to a new field. It does not stop money going to the company opening it.\n\nEvery exclusion in this section applies to dedicated transactions — financing raised for a named activity. New field development is increasingly funded from corporate balance sheets, revolving facilities and bond issues, none of which is dedicated to anything.\n\nAt company level the policy has three tests, in Commitments 1 to 3. One is a 30% threshold on four unconventional resources. One changes how that threshold is measured. One excludes private companies that are almost entirely upstream. None of them asks whether a producer is opening new fields.\n\nSo a conventional producer, majority-owned or diversified, opening new fields anywhere in the world, financed at group level, passes every gate in this document.\n\nThe cut-off compounds it. A field sanctioned on 31 December 2021 is outside the exclusion for its entire producing life, which may run past 2060."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Set against the rest of the sector, this is a better new-fields exclusion than most, and the reason is the definition rather than the ban.\n\nSeveral banks now say they will not finance new oil and gas fields. Very few say what new means. Without a definition the promise is unfalsifiable: a field is new until the bank decides it is an extension, and nobody outside can check.\n\nSociété Générale published a date, and then wrote latest to stop that date being gamed. Against a peer whose policy says new fields and stops, this one can actually be tested.\n\nWhere it falls behind is instrument scope. Banks that apply new-field restrictions at client level, rather than to dedicated transactions, reach the corporate lending that funds most field development. A defined exclusion with narrow scope and an undefined one with wide scope are different failures, and it is not obvious which lets more money through."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Apply it at client level",
          "content": "The exclusion reaches dedicated transactions only. No test in this policy asks whether a company borrowing at group level is opening new fields, which is how most new fields are funded."
        },
        {
          "title": "Reconsider the 2021 cut-off",
          "content": "A field sanctioned on 31 December 2021 sits outside this exclusion for its entire producing life. Tying the test to production rather than to the approval date would follow the oil."
        },
        {
          "title": "Say what happens to expansions inside existing fields",
          "content": "Additional wells and new phases can add years of supply without a fresh final investment decision, and nothing here addresses them."
        }
      ],
      "what_needs_to_change_closing": "The definition is the best in the policy. The scope it sits inside is the narrowest.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance the exploration, development or production of new oil and gas fields — those with a final investment decision after 31 December 2021. We have not yet reviewed what it financed against this commitment.",
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
