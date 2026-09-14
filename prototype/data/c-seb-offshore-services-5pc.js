/* Commitment data — generated from commitments/commitment-seb-offshore-services-5pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "seb-offshore-services-5pc",
    "bank": "SEB Group",
    "commitment_number": 9,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's 5% Threshold on Offshore Services",
    "short_title": "5% Threshold on Offshore Services",
    "subject": "Offshore Oil and Gas Services",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. Offshore services are the vessels, rigs, supply boats and subsea contractors that make offshore production possible. Above 5% of revenue, SEB will not provide new financial services — unless the company is an oil and gas producer, in which case a different rule applies.",
    "naive_reading": "it does not do business with the companies that service offshore oil rigs",
    "plain_language_note": "A rule about the contractors, with a carve-out that sends the biggest of them elsewhere.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=9",
        "watchtower_document_id": 25537,
        "watchtower_institution": "seb_group",
        "synthesis_run": 181,
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
        "intro": "The restriction itself, the whole of the offshore services section. Watchtower records the transaction status as new — this is the only place in the document where the record marks the transaction rather than the relationship.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB Group avoids providing new Financial Services to Offshore Services Companies where revenue from Offshore Services represents more than 5% of the Company’s revenue.",
        "plain_rendering": "SEB Group avoids providing new Financial Services to Offshore Services Companies where revenue from Offshore Services represents more than 5% of the Company’s revenue.",
        "phrases": [
          {
            "id": "new-fs",
            "label": "new Financial Services",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              27,
              49
            ],
            "plain_range": [
              27,
              49
            ],
            "means": "This explains what is withheld: services not yet provided. Watchtower records the transaction status on this commitment as new.",
            "lets_through": [
              "Adding the word “new” means everything already in place stays. An offshore contractor with existing facilities keeps them.",
              "It also leaves the relationship itself in place. Watchtower records the relationship status here as new and existing, so SEB can remain the company's bank while declining new services — a distinction the policy does not explain."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "unless",
            "label": "more than 5% of the Company’s revenue",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              129,
              166
            ],
            "plain_range": [
              129,
              166
            ],
            "means": "This explains the threshold, on revenue from offshore services specifically.",
            "lets_through": [
              "This wording lets through diversified marine and engineering groups below the line. A large offshore contractor with a big renewables installation business can fall under 5%.",
              "It also lets through oil and gas exploration and production companies, explicitly. Watchtower records the exception: this commitment does not apply where the company is an E&P company subject to other restrictions — so an integrated producer running its own offshore fleet is handled by commitment 6, at the same 5% but only for new clients."
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
      "upstream",
      "offshore",
      "revenue-threshold",
      "client-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 9,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=9",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        13245,
        13412
      ],
      "summary_text": "SEB Group restricts new financial services to offshore services companies deriving more than 5% of revenue from offshore services, unless they are an oil & gas exploration and production company.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
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
          "relationship_status": "new_and_existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": false,
          "transaction_status": "new"
        }
      },
      "triggers": [
        {
          "metric": "revenue_share",
          "inequality": ">",
          "value": 5,
          "definition": null
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Unless the company is an oil & gas exploration and production company subject to other restrictions",
          "carve_out_kind": null,
          "carve_out_kind_source": null,
          "governance_process": null,
          "standing": false,
          "where": "recorded on this commitment only"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 20 fields corrected]\nCHANGES:\n- Corrected certainty ratings across all commitments from null to certainty objects with rating '5' to ensure schema compliance and reflect high confidence in extraction.",
      "not_in_synthesis_note": null
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
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.2 §4.1",
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
          "recommended_because": "The carve-out reroutes rather than exempts, and that is only visible once you read it against commitment 6.",
          "text": "The exception on this commitment does not exempt anyone. It moves them to a weaker rule.\n\nThe restriction covers offshore services companies above 5% of revenue from offshore services — vessels, rigs, supply boats, subsea contractors. Then Watchtower records the exception: unless the company is an oil and gas exploration and production company subject to other restrictions.\n\nThose other restrictions are commitment 6, which binds new clients only. So an integrated producer running its own offshore fleet moves from a rule about all financial services to a rule about new relationships. The bigger the company, the softer the test it lands on.\n\nReading the sentence alone, “unless they are an E&P company” looks like tidy drafting. Reading it against the record, it is a routing decision."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "What is left after the carve-out is the contractors.\n\nDrilling contractors, seismic vessel operators, supply and anchor-handling fleets, subsea engineering firms. Companies whose business is serving offshore production without owning the hydrocarbons. Above 5% of revenue from that work, SEB provides no new financial services.\n\nThat is a real population and a real restriction. It is also the part of the offshore chain with the least pricing power and the most exposure to a downturn — which is worth noting when assessing what the rule costs the bank."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "The scope here is unusually precise, and the record shows it.\n\nWatchtower records the relationship status as new and existing but the transaction status as new — the only commitment in the document where those differ. SEB can remain an offshore contractor's bank while declining to provide anything further. That is a narrower instrument than ending a relationship and a more usable one.\n\nCapital markets are recorded as out of scope here and in scope on every other client rule, which is either a deliberate limit or an extraction slip. Either way it is the kind of detail only a structured record surfaces."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Say why producers get the softer rule",
          "content": "An E&P company above 5% offshore services revenue is routed to commitment 6, which binds new clients only. The carve-out moves the bigger companies to the weaker test."
        },
        {
          "title": "Cover the relationship, not just new services",
          "content": "The record marks the relationship as new and existing but the transaction as new. SEB can stay the bank and decline the business."
        }
      ],
      "what_needs_to_change_closing": "Until then, the contractors are held to a rule the producers are not.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "SEB avoids new financial services to offshore services companies above 5% of revenue, unless they are oil and gas producers. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Watchtower synthesis run 181, document 25537",
    "reading": "drafted"
  }
};
