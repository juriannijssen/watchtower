/* Commitment data — generated from commitments/commitment-societe-generale-thermal-transition-plan.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-thermal-transition-plan",
    "bank": "Société Générale",
    "commitment_number": 4,
    "category": "thermal_coal",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Transition Plan Requirement",
    "short_title": "Transition Plan Requirement",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this rule in its Thermal Coal Sector Policy, published in April 2026. A company with thermal coal mining or power assets has to have communicated a transition plan lined up with the bank's own 2030 and 2040 dates. If it has not, it gets no new financing.",
    "naive_reading": "it will drop thermal coal clients that have no plan to get out",
    "plain_language_note": "The test is whether a document exists, not whether it is any good.",
    "sources_intro": "One policy document states this rule, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "tcp2026",
        "document_title": "Société Générale Thermal Coal Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/thermal-coal-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=4",
        "watchtower_document_id": 28051,
        "watchtower_institution": "societe_generale",
        "synthesis_run": 306,
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
        "source_id": "tcp2026",
        "title": "The rule",
        "intro": "The exclusion itself, the second item in the client criteria list. It is the only commitment in this policy that asks a client to have done something rather than to be something.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide new financial products and services to any… Company with thermal coal mining or power assets which has not communicated a transition plan aligned with the 2030/2040 thermal coal phase-out objectives of Societe Generale and any of its parent and holding companies.",
        "plain_rendering": "Société Générale will not provide new financial products and services to any company with thermal coal mining or power assets which has not communicated a transition plan aligned with the 2030/2040 thermal coal phase-out objectives of Société Générale, or to any of its parent and holding companies.",
        "phrases": [
          {
            "id": "communicated",
            "label": "has not communicated a transition plan",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              126,
              164
            ],
            "plain_range": [
              132,
              170
            ],
            "means": "The word “communicated” sets the test. What the client has to do is communicate a plan. Not deliver against it, not have it verified, not report progress on it.",
            "lets_through": [
              "This wording lets through every plan that is announced and not carried out. Nothing here makes financing conditional on the plan being met, or withdraws it when the plan slips.",
              "It also lets through plans communicated privately. The wording does not require publication, so a plan shown to the bank and to nobody else satisfies this commitment, and nobody outside can check the bank's judgement of it."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "aligned",
            "label": "aligned with the 2030/2040 thermal coal phase-out objectives",
            "type": "undefined_term",
            "verbatim_range": [
              165,
              225
            ],
            "plain_range": [
              171,
              231
            ],
            "means": "This explains the standard the plan is measured against: alignment with the bank's own dates, with no criteria published for what alignment means or who decides it.",
            "lets_through": [
              "This wording lets through any plan the bank is willing to accept. There is no methodology, no third-party benchmark and no disclosure of which clients passed.",
              "The asymmetry between the two halves of the sentence. The dates being aligned to are Société Générale's, and commitment 2 gives most of the world until 2040 — so a plan can be aligned and still keep coal running for another fourteen years."
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
      "thermal-coal",
      "transition-plan",
      "group-level",
      "parent-company",
      "phase-out"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 306,
      "document_id": 28051,
      "institution": "societe_generale",
      "commitment_index": 4,
      "commitment_id": "ed80a928-fcde-5d0a-9502-1c29effe5657",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=4",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        11501,
        11884
      ],
      "summary_text": "Societe Generale will not provide new financial products and services to companies with thermal coal mining or power assets lacking an aligned 2030/2040 transition plan, nor to their parent/holding companies.",
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
          "level": "group",
          "relationship_status": "new_and_existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new"
        }
      },
      "triggers": [
        {
          "metric": "other",
          "inequality": null,
          "value": null,
          "definition": "Holding thermal coal mining or power assets without having communicated a transition plan aligned with Societe Generale's 2030/2040 thermal coal phase-out targets"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Financing products and services dedicated to the energy transition remain permitted",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 6.1, Client criteria — Energy transition exception"
        },
        {
          "condition": "Deviations may be granted on an exceptional basis by the Societe Generale group oversight committee chaired by senior management",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": true,
          "where": "Section 5.2, Implementation process"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 9 fields corrected]\nCHANGES:\n- All commitments: Added missing `certainty` object with `certainty_rating: \"5\"` to all exceptions to comply with schema requirements.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Deviations may be granted on an exceptional basis by the Societe Generale group oversight committee chaired by senior management",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "watchtower",
        "governance_process": true,
        "standing": true,
        "where": "Section 5.2, Implementation process"
      }
    ],
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded — as on every commitment in this document.",
        "bank_green": "Watchtower states no weakness anywhere in the Thermal Coal synthesis, on any of the nine commitments. The phrases highlighted on this page are Bank.Green's reading and are labelled as such.",
        "action": "Populate the weaknesses field for this document. Our highlighted phrases are the proposal."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "inconsistency",
        "watchtower": "The section 7 exception for pre-existing business commitments and opportunities at an advanced stage of negotiation is attached to two of the nine commitments in this run — commitments 1 and 2. It is absent from commitments 3 to 9.",
        "bank_green": "Section 7 applies that exception to the sector policy as a whole, so it should sit on all nine commitments. We read the seven omissions as an extraction inconsistency rather than a feature of the policy.",
        "action": "Attach the section 7 exception to commitments 3 to 9. Note the consequence for the derived rating: spec v3.2 defines a standing carve-out as one appearing on EVERY commitment in a document, so as the record stands the section 7 exception counts as commitment-specific on commitments 1 and 2 and adds a point to each. Correcting the record would make it standing and move both from `hollowed` to `holds`. No other rating in this document would change."
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
        "project_finance_only": false,
        "new_business_only": true,
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The test is that a plan was communicated. Not published, not verified, not met.",
          "text": "The requirement is that a company “has not communicated a transition plan aligned with” the bank's 2030 and 2040 objectives. Every word of that is doing less than it appears to.\n\nCommunicated, not published. Nothing requires the plan to be public, so a document shown to the bank and to nobody else satisfies the rule and nobody outside can check the bank's assessment of it.\n\nCommunicated, not delivered. The test is met at the moment the plan arrives. Nothing in the policy reassesses it, withdraws financing when it slips, or attaches any consequence to missing it.\n\nAligned, with no published criteria. There is no methodology, no third-party benchmark and no disclosure of which clients passed. And the objectives being aligned to are Société Générale's own — the later of which, under commitment 2, is 2040. A plan can be aligned and still run coal for another fourteen years."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask which company fails this test and the answer is: one that has not written anything down.\n\nA coal-heavy utility with a published net-zero pathway passes. So does one with an unpublished pathway it has described to its bank. So does one whose plan is behind schedule, provided it was communicated. What is left is companies that have made no transition claim at all — and in 2026, among companies large enough to bank, that is a small and shrinking group.\n\nThat does not make the rule pointless. A requirement to state a position forces a conversation, and the bank's relationship managers get a document to hold clients to. But it is a disclosure requirement written as an exclusion criterion, and it should be read as the first."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "This is the only commitment in the Société Générale set that asks a client to do something rather than to be something.\n\nEvery other rule we have reviewed across the bank's three sector policies is a status test: what share of your revenue, which resource, which region, which kind of transaction. Those are checkable but static — a company either passes or it does not, and nothing about the test invites it to change.\n\nA transition plan requirement is different in kind. It creates a document, a stated intention and something to be measured against later, and it reaches every company with coal assets rather than only those above a threshold.\n\nThe mechanism is right. What is missing is everything that would make it bind: publication, criteria, and a consequence for not delivering."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Publish what alignment means",
          "content": "The rule turns on a judgement the bank makes and does not explain. A stated methodology would make the test checkable by someone outside the bank."
        },
        {
          "title": "Require the plan to be public",
          "content": "Communicated to the bank is enough as written. A published plan can be checked by anyone; a private one cannot."
        },
        {
          "title": "Make continued financing conditional on delivery",
          "content": "The rule is satisfied at the moment a plan is communicated. Nothing reassesses it later."
        }
      ],
      "what_needs_to_change_closing": "Until then, the requirement is satisfied by a document, and the bank is the only reader who has to be convinced.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not provide new financing to coal companies that have not communicated an aligned transition plan. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Watchtower synthesis run 306, document 28051",
    "reading": "drafted"
  }
};
