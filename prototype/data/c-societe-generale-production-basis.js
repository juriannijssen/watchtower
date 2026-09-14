/* Commitment data — generated from commitments/commitment-societe-generale-production-basis.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-production-basis",
    "bank": "Société Générale",
    "commitment_number": 2,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Production Test for Upstream Companies",
    "short_title": "Production Test for Upstream Companies",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this rule in its Oil & Gas Sector Policy, published in April 2026, immediately after the 30% threshold it modifies. For companies whose business is almost entirely upstream, the bank measures that threshold against production rather than revenue. It is a refinement the bank did not have to make.",
    "naive_reading": "it will not finance companies whose business is producing oil and gas",
    "plain_language_note": "One sentence, and the plain rendering only removes a parenthetical the reader does not need. Both of the words the analysis turns on are the bank's own.",
    "sources_intro": "One policy document states this rule, and one passage from it is quoted here. It modifies the exclusion in Commitment 1 rather than standing alone.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=2",
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
        "intro": "A modifier on the 30% threshold, printed directly beneath it. It changes what the threshold is measured against for one kind of company.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "In the specific case of Companies generating almost all of their revenues from upstream Oil and Gas activities (i.e. exploration, development and production), the 30% threshold will be applied to their production.",
        "plain_rendering": "For Companies generating almost all of their revenues from upstream oil and gas activities, the 30% threshold will be applied to their production.",
        "phrases": [
          {
            "id": "almost-all",
            "label": "almost all of their revenues",
            "type": "undefined_term",
            "verbatim_range": [
              45,
              73
            ],
            "plain_range": [
              25,
              53
            ],
            "means": "This explains the test of which companies get the production basis instead of the revenue basis. No figure is attached, and almost all is not defined anywhere in the policy.",
            "lets_through": [
              "This wording lets through any producer the bank decides is not almost all upstream. The sentence directly above publishes a number; this one does not, so which companies fall under which basis is settled inside the bank and never has to be explained."
            ],
            "defined_in_clause": null,
            "source": "watchtower_weakness",
            "watchtower_ref": "The term 'almost all of their revenues' is not quantitatively defined, leaving room for subjective interpretation.",
            "not_in_synthesis": false,
            "bank_definition": null
          },
          {
            "id": "production",
            "label": "their production",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              196,
              212
            ],
            "plain_range": [
              129,
              145
            ],
            "means": "This explains the alternative basis. For companies that qualify, the 30% is measured against what they produce rather than what they earn.",
            "lets_through": [
              "This wording lets through reserves, drilling rights and approved development. Production is what came out of the ground this year, so a company can hold overwhelmingly unconventional reserves and a pipeline of unconventional projects while its current production sits under the line."
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
        "intro": "What the policy means by Company, reached from a footnote on the passage above. It decides which entity the concentration test is measured against, and it is printed in the glossary at the end of the document.",
        "location": {
          "distance": "end_of_document",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Company: refers to the legal entity and companies in its scope of consolidation. Consequently, for the calculation of the indicators in this policy for a Company, reference must be made to its consolidated financial statements.",
        "plain_rendering": "A Company means the legal entity together with every company it consolidates. The tests in this policy are calculated from its consolidated financial statements.",
        "phrases": [
          {
            "id": "consolidated-2",
            "label": "its consolidated financial statements",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              189,
              226
            ],
            "plain_range": [
              123,
              160
            ],
            "means": "This explains where the threshold is measured. Both the concentration test and the 30% are calculated across the whole consolidated group rather than at the entity actually producing.",
            "lets_through": [
              "This wording lets through any upstream business owned by a diversified parent. A subsidiary that is entirely upstream production is not almost all upstream once it is consolidated into a group that also refines, trades or generates power — so it never qualifies for the production test at all, and falls back to the revenue test in Commitment 1, where the same consolidation dilutes it a second time.",
              "The compounding is the point: this commitment was written to stop revenue swings hiding production, and the entity it is measured against is chosen so that the companies most exposed to the swings are the least likely to reach it."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          }
        ],
        "watchtower_origin": "Watchtower attaches this passage to this commitment's counterparty scope (`counterparty_scope.quotations`), so the quotation is sourced from the record. The phrase highlighted inside it is Bank.Green's reading."
      }
    ],
    "glossary_refs": [
      "upstream",
      "production-threshold"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 2,
      "commitment_id": "0a1fb659-c9db-5977-ad3a-c8ccbf2c5df2",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=2",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        16929,
        17154
      ],
      "summary_text": "For companies generating almost all of their revenues from upstream oil and gas activities, the 30% exclusion threshold is applied to their production share of unconventional resources instead of revenues.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "arctic",
            "oil_sands",
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
          "certainty": null
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
          "value": 30,
          "definition": "production of Arctic oil and gas, Ecuadorian Amazonian oil, Oil sands or other extra heavy oil, and Shale oil or gas for companies generating almost all of their revenues from upstream Oil and Gas activities"
        },
        {
          "metric": "other",
          "inequality": null,
          "value": null,
          "definition": "generating almost all of their revenues from upstream Oil and Gas activities (i.e. exploration, development and production)"
        }
      ],
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
          "condition": "Account holding and cash management services provided to subsidiaries of integrated oil and gas companies (IOCs).",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 2.2, Scope of the Group's activities, page 4"
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
      "weaknesses": "The term 'almost all of their revenues' is not quantitatively defined, leaving room for subjective interpretation.",
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
    "disagreements": [],
    "assessment": {
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.2 §4.1 — derived from Watchtower fields only",
        "inputs_source": "Watchtower record",
        "result": "hollowed",
        "weakness": true,
        "commitment_specific_carve_outs": 1,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 2,
        "previous_editorial_rating": "hollowed",
        "changed": false
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "This passage exists only to close a gap the bank could have left open, and a page that opens by conceding that is much harder to dismiss than one that does not.",
          "text": "Most of what is written about bank policy is about what banks leave out. This sentence is a bank putting something in.\n\nA revenue-based threshold has a known weakness for pure-play producers: revenue swings with price, with hedging and with accounting, and none of that has anything to do with how much oil comes out of the ground. A company can drop below a revenue threshold in a bad year without producing a barrel less.\n\nSociété Générale saw that and wrote a second basis. For companies that are almost entirely upstream, the 30% is applied to production. That is a harder test to game and a more honest measure of the thing the policy is about, and the bank did not have to add it.\n\nWhat it did not do is say who qualifies. Almost all of their revenues carries no number, in a paragraph whose whole point is that numbers matter. The refinement is real; the gate to it is not."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "This rule decides which companies are measured on production rather than revenue, and it decides it with an undefined phrase.\n\nAlmost all of their revenues has no figure attached. The sentence directly above it publishes 30%, and a footnote explains how to cumulate across categories, so the drafting elsewhere in this paragraph is precise. Here it is not, and the consequence is that a company's basis of assessment is settled privately.\n\nThe basis itself has a second gap. Production is what a company took out of the ground; it says nothing about what it holds or what it has sanctioned. A producer whose reserves are overwhelmingly unconventional, and whose approved projects are too, can sit under 30% of current production for years while it builds them.\n\nA threshold measured on output alone is always looking backwards."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Against the sector, this is an unusually thoughtful piece of drafting, and against the paragraph it sits in, it is unusually loose.\n\nVery few bank policies distinguish between revenue-based and volume-based thresholds at all. Most set one number against revenue and stop, which leaves pure-play producers assessed on a figure that moves with the oil price. Société Générale is among the few to notice and to write a second basis for them.\n\nBut the same paragraph publishes 30%, and a footnote on the line above explains how to cumulate resource categories. The bank is capable of precision here and used it twice within four lines. Then it wrote almost all.\n\nThe comparison worth drawing is not with banks that publish nothing. It is with the same bank, two sentences earlier."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Put a number on \"almost all\"",
          "content": "The threshold this rule modifies is published as 30%. Whatever figure decides who is assessed on production, publishing it would make the gate as checkable as the test behind it."
        },
        {
          "title": "Add reserves and sanctioned projects",
          "content": "Production measures what a company took out of the ground this year. A producer building an unconventional pipeline of projects stays under the line until they start producing."
        }
      ],
      "what_needs_to_change_closing": "The bank found a real weakness in its own threshold and fixed it. It then left the door to the fix undefined.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "For companies that are almost entirely upstream, Société Générale measures its 30% unconventional threshold against production rather than revenue. We have not yet reviewed what it financed against this commitment.",
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
