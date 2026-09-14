/* Commitment data — generated from commitments/commitment-societe-generale-mining-mountaintop-removal.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-mining-mountaintop-removal",
    "bank": "Société Générale",
    "commitment_number": 1,
    "category": "mining",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Ban on Mountaintop Removal Mining",
    "short_title": "Ban on Mountaintop Removal Mining",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Mining Sector Policy, published in April 2026. Mountaintop removal blows the summit off a mountain to reach the coal seams underneath and pushes the rubble into the valleys below. The bank will not provide new financial products or services to any company involved in it.",
    "naive_reading": "it will not finance companies that blast the tops off mountains to reach coal",
    "plain_language_note": "One sentence with no threshold in it at all — and two words at the front that decide how much of the bank's business it touches.",
    "sources_intro": "One policy document states this exclusion, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "mining2026",
        "document_title": "Société Générale Mining Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/mining-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=1",
        "watchtower_document_id": 28052,
        "watchtower_institution": "societe_generale",
        "synthesis_run": 196,
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
        "source_id": "mining2026",
        "title": "The rule",
        "intro": "The exclusion itself, the second item in the list of clients the bank will not take on. It names a mining method and a region, and attaches no percentage to either.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide new financial products or services to… any corporate entity involved in Mountaintop removal coal mining in the Appalachians.",
        "plain_rendering": "Société Générale will not provide new financial products or services to any corporate entity involved in Mountaintop removal coal mining in the Appalachians.",
        "phrases": [
          {
            "id": "new",
            "label": "new financial products or services",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              27,
              61
            ],
            "plain_range": [
              34,
              68
            ],
            "means": "This explains what this commitment reaches: business the bank has not written yet. Watchtower records the transaction status on this commitment as new only.",
            "lets_through": [
              "Adding the word “new” means everything already on the books stays. A company mining this way that is already a client stays a client, and existing facilities run to their terms.",
              "The comparison is with the bank's own drafting elsewhere. Its oil and gas policy says existing exposure to excluded companies “will be phased out until extinction”. This policy says nothing about existing exposure at all."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "involved",
            "label": "involved in",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              87,
              98
            ],
            "plain_range": [
              93,
              104
            ],
            "means": "The words “involved in” set the test of connection. It is unusually wide — no percentage of revenue, no share of production, no materiality. Being involved is enough.",
            "lets_through": [
              "This wording lets through very little, on its own terms. This is the widest client test in any Société Générale policy we have read, and the absence of a threshold is deliberate.",
              "What it does not reach is the parent. This commitment names the corporate entity involved, and this policy — unlike the bank's thermal coal policy — does not extend to parent or holding companies."
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
      "mountaintop-removal",
      "thermal-coal",
      "metallurgical-coal",
      "client-level",
      "capital-markets"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 196,
      "document_id": 28052,
      "institution": "societe_generale",
      "commitment_index": 1,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=1",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        14196,
        14287
      ],
      "summary_text": "Societe Generale will not provide new financial products or services to any corporate entity involved in mountaintop removal coal mining in the Appalachians, subject to exceptions for pre-existing commitments, local law conflicts, or senior management approval.",
      "scope": {
        "industry": {
          "themes": "coal",
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
          "relationship_status": "new_and_existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new"
        }
      },
      "triggers": [],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Pre-existing business commitments or opportunities at an advanced stage of negotiation",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": false,
          "standing": true,
          "where": "Section 7, Application date and updates"
        },
        {
          "condition": "Contradictory to provisions of any applicable local law, rule, regulation or regulatory guidance or directive",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": false,
          "standing": true,
          "where": "Section 7, Application date and updates"
        },
        {
          "condition": "Exceptional deviations approved by a senior management-chaired group oversight committee",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": true,
          "standing": true,
          "where": "Section 5, Implementation process"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 0 fields corrected]\nCHANGES:\n- No changes required. The extractions accurately reflect the policy text and adhere to the schema rules.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Pre-existing business commitments or opportunities at an advanced stage of negotiation",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "where": "Section 7, Application date and updates"
      },
      {
        "condition": "Contradictory to provisions of any applicable local law, rule, regulation or regulatory guidance or directive",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "where": "Section 7, Application date and updates"
      },
      {
        "condition": "Exceptional deviations approved by a senior management-chaired group oversight committee",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "where": "Section 5, Implementation process"
      }
    ],
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded — as on every commitment in this document.",
        "bank_green": "Watchtower states no weakness anywhere in the Mining synthesis, on any of the five commitments. The phrases highlighted on this page are Bank.Green's reading and are labelled as such.",
        "action": "Populate the weaknesses field for this document. Our highlighted phrases are the proposal."
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
        "project_finance_only": false,
        "new_business_only": true,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The pairing is the story: the widest client test in the policy, applied only to business the bank has not written yet.",
          "text": "Société Générale wrote the widest client test in any of its sector policies and then applied it to the narrowest slice of its business.\n\nThe test is “involved in”. No percentage of revenue, no share of production, no materiality qualifier. A company that blows the tops off Appalachian mountains is caught whether that is all of its business or a fraction of it. Very few exclusions anywhere are drafted that wide, and the bank deserves the credit.\n\nThe reach is “new financial products or services”. Not existing facilities, not the client relationship, not the revolving credit already drawn. Watchtower records the transaction status on this commitment as new only.\n\nSo a company already banked by Société Générale and mining this way today is untouched by this sentence. The bank's own oil and gas policy shows it knows how to write the other half: there, exposure to excluded companies “will be phased out until extinction”. This policy says nothing at all about what it already holds."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Read the sentence for what it does not contain and it is unusual.\n\nThere is no revenue threshold. There is no production threshold. There is no “material involvement” qualifier and no carve-out for companies where mountaintop removal is a minor line of business. Being involved is enough.\n\nAlmost every other exclusion in the Société Générale set has a number in it — 30% of revenue for unconventional oil and gas, 50% for metallurgical coal. Here the bank declined to write one, and the practical effect is that no miner can argue its way under a line, because there is no line.\n\nThat is the drafting we ask for elsewhere on this site. It is worth saying so before we say what is wrong with the rest."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Two comparisons, both with documents Société Générale published itself.\n\nThe first is corporate structure. The bank's thermal coal policy extends its exclusions to parent and holding companies. This one names the corporate entity involved in the mining and stops there — so a subsidiary can be excluded while the group above it, which owns the mine and takes the profit, is not.\n\nThe second is geography. The exclusion covers mountaintop removal in the Appalachians. Tie a ban to a place and it stops working the moment the practice moves; tie it to the method and it travels. If the bank's view is that the practice is essentially Appalachian, that belongs in the policy, because at present the limit reads as a restriction without a stated reason."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so unlike the oil and gas pages there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Say what happens to existing business",
          "content": "The exclusion covers new financial products or services. The bank's oil and gas policy commits to phasing existing exposure out until extinction; this policy is silent."
        },
        {
          "title": "Follow the corporate structure",
          "content": "The rule names the entity involved in the mining. The bank's own thermal coal policy extends to parent and holding companies; this one does not."
        },
        {
          "title": "Name the method, not only the region",
          "content": "The exclusion is limited to the Appalachians. Tying it to the practice would make it durable if the practice moves."
        }
      ],
      "what_needs_to_change_closing": "Until then, the strongest client test in the policy applies only to business the bank has not written yet.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not provide new financial products or services to companies involved in mountaintop removal coal mining in the Appalachians. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Watchtower synthesis run 196, document 28052",
    "reading": "drafted"
  }
};
