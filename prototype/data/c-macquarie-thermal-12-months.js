/* Commitment data — generated from commitments/commitment-macquarie-thermal-12-months.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "macquarie-thermal-12-months",
    "bank": "Macquarie Group",
    "commitment_number": 3,
    "category": "coal",
    "effective_date": "immediate",
    "title": "Macquarie's Refusal to Finance Thermal Coal Beyond 12 Months",
    "short_title": "Refusal to Finance Thermal Coal Beyond 12 Months",
    "article_published": "2026-09-09",
    "intro": "This is Macquarie's standing position on thermal coal after the metallurgical split. It is not a ban on financing thermal coal. It is a ban on financing it for longer than a year at a time, from the balance sheet.",
    "naive_reading": "it will not lend to thermal coal for longer than a year",
    "plain_language_note": "Not a prohibition. A maturity limit.",
    "sources_intro": "One sustainability report states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "mq2026",
        "document_title": "Macquarie Group Sustainability Report",
        "document_url": null,
        "synthesis_url": "https://watchtower.bank.green/institution/macquaire_bank/document/34887/synthesis?run=204&commitment=3",
        "watchtower_document_id": 34887,
        "watchtower_institution": "macquaire_bank",
        "synthesis_run": 204,
        "version_label": "Sustainability Report 2026 (Group) — see date note",
        "published": "2026-03-31",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file"
      }
    ],
    "clauses": [
      {
        "index": 1,
        "role": "rule",
        "source_id": "mq2026",
        "title": "The rule",
        "intro": "The sentence as it appears in the report. Watchtower splits it into two commitments — the balance sheet half is this page, the advisory half is the next — and records both against the same characters of the source.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Macquarie continues to have no appetite for financing >12 months using its balance sheet or to advise on transactions where the underlying purpose relates to the purchase, operation, development or expansion of thermal coal activities",
        "plain_rendering": "Macquarie continues to have no appetite for financing >12 months using its balance sheet, or to advise on transactions where the underlying purpose relates to the purchase, operation, development or expansion of thermal coal activities.",
        "phrases": [
          {
            "id": "twelve",
            "label": "financing >12 months",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              44,
              64
            ],
            "plain_range": [
              44,
              64
            ],
            "means": "This explains where the line is. Financing for thermal coal is not refused; financing for thermal coal that runs longer than a year is.",
            "lets_through": [
              "The twelve-month line lets through everything shorter. Trade finance, pre-payment facilities, working capital lines, letters of credit and inventory finance are overwhelmingly written inside twelve months, and those are the instruments that move coal.",
              "It also lets through renewals. Nothing in the wording stops an eleven-month facility being renewed, and a continuously renewed short facility is long-term financing with a different label. The report does not say whether renewals are treated as new financing."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "balancesheet",
            "label": "using its balance sheet",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              65,
              88
            ],
            "plain_range": [
              65,
              88
            ],
            "means": "This explains where the financing comes from. The limit applies to Macquarie's own book.",
            "lets_through": [
              "This wording lets through arranging. Syndicating a loan to other lenders, underwriting a bond, or placing paper with investors are not balance sheet financing, and this half of the sentence does not reach them.",
              "The footnote that defines these words for commitment 1 removes leasing, asset finance and trade-income financing from what “financing” means. If that definition carries here, the maturity limit does not apply to them either."
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
      "dedicated-transaction",
      "new-financing",
      "capital-markets",
      "asset-finance",
      "carve-out"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 204,
      "document_id": 34887,
      "institution": "macquaire_bank",
      "commitment_index": 3,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/macquaire_bank/document/34887/synthesis?run=204&commitment=3",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-07-07",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": "Watchtower's stored quotation carries the footnote marker as `$^{29}$` after “balance sheet” — a parsing artefact. The marker is footnote 29, the definition quoted on commitment 1's page. It is removed from the text shown here.",
      "quotation_char_range": [
        43803,
        44044
      ],
      "summary_text": "Macquarie has no appetite for balance sheet financing greater than 12 months for the purchase, operation, development, or expansion of thermal coal activities.",
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
          "relationship_status": null,
          "certainty": "5"
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
          "condition": "Financing of 12 months or less is permitted",
          "carve_out_kind": null,
          "carve_out_kind_source": null,
          "governance_process": null,
          "standing": false,
          "where": "recorded on this commitment only"
        },
        {
          "condition": "Ability to work with coal companies to finance projects that will significantly reduce emissions or support diversification with a credible transition plan",
          "carve_out_kind": null,
          "carve_out_kind_source": null,
          "governance_process": null,
          "standing": true,
          "where": "recorded on every commitment in this run"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 1 removed, 0 split, 1 fields corrected]\nCHANGES:\n- Removed upstream oil and gas emissions intensity target: Quantitative portfolio reduction targets without a defined endpoint are out of scope per schema rules.\n- Macquarie committed to not engaging in new balance sheet activity to fund the purchase, development, or expansion of coal mines or coal-fired power stations, though metallurgical coal was carved back into appetite in late 2024.: Changed activity_scope to 'new_and_existing' — 'purchase' and 'expansion' apply to existing assets.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Ability to work with coal companies to finance projects that will significantly reduce emissions or support diversification with a credible transition plan",
        "carve_out_kind": null,
        "carve_out_kind_source": null,
        "governance_process": null,
        "standing": true,
        "where": "recorded on every commitment in this run"
      }
    ],
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded on any of the four commitments in this run.",
        "bank_green": "Watchtower states no weakness anywhere in this synthesis. Every phrase highlighted on this page is Bank.Green's reading and is labelled as such. The strongest candidate on this document is footnote 29 — a definition that removes four categories of coal exposure from the measure a headline commitment is reported against.",
        "action": "Populate the weaknesses field for this document. Footnote 29 is the proposal."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "Every exception on this document carries carve_out_kind: null and governance_process: null. Nine exceptions across four commitments, none of them classified.",
        "bank_green": "Three of them are definitional subtractions from a measure (footnote 29), two are dated management decisions reopening a previously closed category, one is a tenor allowance, and one is a conditional permission resting on a credible transition plan. These are four different kinds of thing and the record treats them identically.",
        "action": "Classify carve_out_kind on this document. The transition-plan ability is the one that most clearly needs it — it is conditional on an assessment the bank makes, with no stated governance process."
      },
      {
        "field": "quotation",
        "severity": "duplication",
        "watchtower": "Commitments 3 and 4 carry identical quotations and identical character ranges (43803–44044). One sentence in the report was recorded as two commitments.",
        "bank_green": "We think the split is right — a maturity limit on the bank's own lending and a refusal to sell an advisory service are different commitments with different scopes. But the record gives no way to tell that the two rows come from one sentence, and a reader of either row alone would not know the other half exists.",
        "action": "Where one passage yields two commitments, carry a cross-reference so each row names the other. Neither of these pages should be published alone."
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
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "A maturity limit constrains the finance that builds mines and leaves untouched the finance that moves coal.",
          "text": "This is not a refusal to finance thermal coal. It is a refusal to finance it for more than twelve months at a time, from Macquarie's own balance sheet.\n\nThat distinction does real work in one direction: project finance and acquisition finance for mines and power stations run for years, and a twelve-month ceiling rules them out. It does no work at all in the other. Trade finance, pre-payment facilities, inventory finance, receivables finance, letters of credit and working capital lines are almost always written inside a year. Those are the instruments that move coal that has already been dug, and this sentence permits every one of them.\n\nNothing in the wording addresses renewal either. An eleven-month facility rolled each year is long-term financing wearing a short label, and the report does not say whether a renewal counts as new financing under this restriction.\n\nAnd the limit applies only to the balance sheet. Syndicating a ten-year facility to other lenders or underwriting a bond for a thermal coal producer is not balance sheet financing, and this half of the sentence does not reach it."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "A number is a rare thing in a commitment, and this one is a number.\n\nMost restrictions we review turn on words a bank defines for itself — “developer”, “significant”, “dedicated”, “primarily linked to”. A twelve-month maturity ceiling is not one of those. It is a fact about a facility that appears in the loan documents, and it is either exceeded or it is not.\n\nIt is also aimed at the right thing. Long-dated money is what makes a new mine or a new power station financeable; a bank that will not lend beyond a year cannot be the lender that gets one built. That is a narrower claim than a ban on thermal coal, and it is a claim that could in principle be checked against a loan register.\n\nThe gap is what falls under the ceiling rather than the ceiling itself, and the answer to that is disclosure, not a different number."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "No other commitment in this review set is drafted as a maturity limit, which makes comparison awkward and instructive.\n\nSociété Générale and SEB both restrict by counterparty: a company above a revenue threshold is out, at any tenor, for any product. Macquarie restricts by instrument: any company is in, at any size, provided the money is short. The first shape asks who you bank; the second asks how you bank them.\n\nNeither shape is obviously stronger. A revenue threshold with a high percentage catches almost nobody; a maturity limit with no counterparty test catches every long facility and no short one. What the two do share is that both are stated in a checkable unit, which puts them ahead of the commitments in this set that turn on adjectives.\n\nThe question worth putting to Macquarie is why the two tests are not combined. A twelve-month ceiling and a revenue threshold are not alternatives."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so nothing sourced sits underneath these options — they are entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Say whether renewals count",
          "content": "An eleven-month facility renewed each year is long-term financing. The report does not say whether a renewal is treated as new financing under this restriction."
        },
        {
          "title": "Define thermal coal activities",
          "content": "The metallurgical split is now the whole of Macquarie's coal position, and the report never says where the line falls — at the mine, at the product, or at the stated end use."
        },
        {
          "title": "Extend the limit past the balance sheet",
          "content": "Arranging and underwriting are not balance sheet financing. A bank that will not lend for more than a year but will syndicate a ten-year facility has not withdrawn from the financing."
        }
      ],
      "what_needs_to_change_closing": "Until then, the limit reaches the tenor and not the coal.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Macquarie has no appetite for balance sheet financing of more than 12 months for thermal coal activities. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Watchtower synthesis run 204, document 34887",
    "reading": "drafted"
  }
};
