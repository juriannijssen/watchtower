/* Commitment data — generated from commitments/commitment-seb-peat-extraction-5pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "seb-peat-extraction-5pc",
    "bank": "SEB Group",
    "commitment_number": 21,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's 5% Threshold on Peat Extraction",
    "short_title": "5% Threshold on Peat Extraction",
    "subject": "Peat Extraction for Fuel",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in section 9 of its Sector Policy on Fossil Fuels, published in April 2026. Peat is the fuel nobody writes policies about — burned mainly in Finland, Estonia and Ireland, and more carbon-intensive per unit of energy than coal. SEB restricts it at the same 5% line as everything else.",
    "naive_reading": "it does not do business with companies digging peat",
    "plain_language_note": "A fuel almost no bank names, at the same threshold as coal.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": null,
        "watchtower_document_id": 25537,
        "watchtower_institution": "seb_group",
        "synthesis_run": null,
        "version_label": "April 2026",
        "published": "2026-04-23",
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
        "source_id": "seb2026",
        "title": "The rule",
        "intro": "The restriction itself, the opening line of section 9. It binds new and existing relationships alike, with no exception attached and no limit to dedicated finance.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB Group avoids Business Relationships with thermal peat extraction Companies where more than 5% of revenue is derived from thermal peat extraction.",
        "plain_rendering": "SEB Group avoids Business Relationships with thermal peat extraction Companies where more than 5% of revenue is derived from thermal peat extraction.",
        "phrases": [
          {
            "id": "peat5",
            "label": "more than 5% of revenue",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              85,
              108
            ],
            "plain_range": [
              85,
              108
            ],
            "means": "This explains the threshold, on revenue from peat extraction — the same number the policy uses for coal mining, coal power, upstream oil and gas, offshore services and unconventional oil.",
            "lets_through": [
              "This wording lets through diversified energy groups below the line. In the Baltic and Nordic markets peat extraction often sits inside a utility with generation, heat and network businesses attached.",
              "Nothing else. There is no exception, no restriction to new business and no restriction to project financing in this commitment — which is why it rates `holds`."
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
      "peat",
      "upstream",
      "revenue-threshold",
      "client-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": false,
      "run": null,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": null,
      "commitment_id": null,
      "url": null,
      "agent_name": null,
      "schema": null,
      "synthesis_updated": null,
      "quotation_matched": false,
      "quotation_char_range": null,
      "summary_text": "Not recorded. Section 9 does not appear in synthesis run 181.",
      "scope": {
        "industry": {
          "themes": "peat",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "new_and_existing"
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
          "value": 5,
          "definition": "revenue derived from thermal peat extraction"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [],
      "weaknesses": null,
      "reviewer_notes": null,
      "not_in_synthesis_note": "Run 181 extracted 20 commitments, all of them coal or oil and gas. Section 9 of the policy sets out four further restrictions on thermal peat, including a 2030 phase-out. None appears in the record. The reviewer notes for this run read '0 added, 0 removed, 0 split, 20 fields corrected', so the omission was not caught in review either."
    },
    "general_carve_outs": [
      {
        "condition": "DEVIATIONS GO TO AN INTERNAL PROCESS · APPENDIX B — Deviations from restrictions and requirements in this policy shall be handled according to established SEB Group internal processes. No committee is named, no threshold is set, and nothing is said about how often this happens.",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "APPENDIX B"
      },
      {
        "condition": "A 5% FLOOR ON THE WHOLE POLICY · SECTION 4.2 — The policy covers companies with more than 5% of company revenues from activities in the fossil fuel sector, calculated at SEB Group global limit holder level. Below that line the document does not engage at all.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "SECTION 4.2"
      },
      {
        "condition": "SOME ACTIVITIES SIT OUTSIDE THE POLICY · SECTION 4.1 — Seized assets held in the ordinary course of business, client order facilitation, market making, anything SEB is obliged to provide by law or regulation, and products where another financial institution is the provider are all exempt. SEB Asset Management Holding AB and Gamla Livförsäkrings AB SEB Trygg Liv are outside the policy entirely.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": "commitment 1 only",
        "where": "SECTION 4.1"
      },
      {
        "condition": "IT BINDS LARGE COMPANIES HARDEST · SECTION 4.2 — Restrictions, requirements and expectations all apply to large companies. SMEs get restrictions and requirements only. Retail counterparties are outside the policy — it acts as a guide.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": "commitment 1 only",
        "where": "SECTION 4.2"
      }
    ],
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded on any of the twenty commitments in this run.",
        "bank_green": "Watchtower states no weakness anywhere in this synthesis. Every phrase highlighted on this page is Bank.Green's reading and is labelled as such.",
        "action": "Populate the weaknesses field. Our highlighted phrases are the proposal — the strongest candidate on this document is the three-party transition-plan condition on commitment 16."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "No exception is recorded on more than one commitment. Twelve of the twenty carry none at all, and the record contains no policy-wide carve-out.",
        "bank_green": "The policy does have provisions that sit above every commitment. Appendix B routes deviations from any restriction to unnamed SEB Group internal processes. Section 4.2 applies the whole document only above 5% of company revenue from the fossil fuel sector, and excludes Retail entirely. Section 4.1 exempts seized assets, client order facilitation, market making, legally required activity, and two named asset-management entities. Watchtower attaches the section 4 items to commitment 1 only, and the Appendix B deviation clause to nothing.",
        "action": "Attach the Appendix B deviation clause and the section 4 scope provisions to every commitment, as standing exceptions."
      },
      {
        "field": "commitments",
        "severity": "omission",
        "watchtower": "Run 181 extracted twenty commitments, every one of them coal or oil and gas.",
        "bank_green": "Run 181 extracted 20 commitments, all of them coal or oil and gas. Section 9 of the policy sets out four further restrictions on thermal peat, including a 2030 phase-out. None appears in the record. The reviewer notes for this run read '0 added, 0 removed, 0 split, 20 fields corrected', so the omission was not caught in review either.",
        "action": "Re-run document 25537. Section 9 contains four restrictions on thermal peat, including a 2030 commitment."
      }
    ],
    "assessment": {
      "strength": "holds",
      "strength_derivation": {
        "rule": "spec v3.2 §4.1",
        "inputs_source": "Bank.Green's reading of the policy text — no synthesis record exists for this commitment",
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
          "recommended_because": "The commitment is strong and the omission is the story; the page has to carry both.",
          "text": "On the wording, this is one of the strongest sentences in the policy — and nobody reading the synthesis would know it exists.\n\nFive per cent of revenue from thermal peat extraction, business relationships rather than transactions, new and existing alike, capital markets included, no exception of any kind. Under the derived rule that is a score of zero.\n\nPeat matters more than its obscurity suggests: burning it releases more CO2 per unit of energy than coal, and the peatlands it comes from are among the densest carbon stores on land. Almost no bank policy names it. This one restricts it on the same terms as coal.\n\nWatchtower synthesis run 181 does not contain this commitment, or the three that follow it."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "No other document in this project mentions peat at all.\n\nSociété Générale's three sector policies cover coal, oil and gas, and mining. Macquarie's report covers coal and oil and gas. Peat appears once, in section 9 of this policy, and is restricted at the same threshold as coal mining.\n\nFor a Nordic and Baltic bank that is the relevant fuel to have addressed. Finland and Estonia are the main EU users, and the companies that burn it are exactly the kind of regional utility a bank like SEB would otherwise bank without a second thought."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "The only criticism available is the one that applies to every restriction in this policy: the verb.\n\nSEB “avoids” these relationships. The policy never defines avoidance, and Appendix B sends deviations to unnamed internal processes. That is as true here as anywhere else.\n\nBeyond that, there is nothing in the sentence to hold against it — no threshold to argue with, no exception, no limitation to new business or dedicated finance."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options. This commitment has no synthesis record at all — scope, thresholds and rating inputs are all Bank.Green's reading of the policy text.",
      "what_needs_to_change": [
        {
          "title": "Nothing, on the wording",
          "content": "This sentence is as clean as any in the document. The problem is not the policy."
        },
        {
          "title": "Get section 9 into the synthesis",
          "content": "Four restrictions on a fuel more carbon-intensive than coal are missing from the record entirely."
        }
      ],
      "what_needs_to_change_closing": "Until the record catches up, one of the strongest sentences in this policy is invisible to anyone reading the synthesis.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "SEB avoids business relationships with companies earning more than 5% of revenue from thermal peat extraction. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Policy text, document 25537 section 9 — NOT in synthesis run 181",
    "reading": "drafted"
  }
};
