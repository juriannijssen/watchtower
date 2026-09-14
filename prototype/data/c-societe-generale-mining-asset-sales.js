/* Commitment data — generated from commitments/commitment-societe-generale-mining-asset-sales.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "societe-generale-mining-asset-sales",
    "bank": "Société Générale",
    "commitment_number": 3,
    "category": "mining",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Ban on Coal and Asbestos Asset Deals",
    "short_title": "Ban on Coal and Asbestos Asset Deals",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Mining Sector Policy, published in April 2026. It has a section of its own, separate from client rules and from project financing: the bank will not help anyone buy or sell a metallurgical coal mine or an asbestos mine.",
    "naive_reading": "it will not help buy or sell coal and asbestos mining assets",
    "plain_language_note": "One sentence, and the thing it stops is a change of ownership rather than a mine.",
    "sources_intro": "One policy document states this exclusion, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "mining2026",
        "document_title": "Société Générale Mining Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/mining-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=3",
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
        "intro": "The exclusion itself. It is the whole of section 6.2, which the policy gives to acquisition transactions alone.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide financial transactions, products and services aiming at the sale or acquisition of metallurgical coal mining or asbestos mining assets.",
        "plain_rendering": "Société Générale will not provide financial transactions, products and services aiming at the sale or acquisition of metallurgical coal mining or asbestos mining assets.",
        "phrases": [
          {
            "id": "sale-acquisition",
            "label": "aiming at the sale or acquisition",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              73,
              106
            ],
            "plain_range": [
              80,
              113
            ],
            "means": "This explains what this commitment covers: transferring a mine from one owner to another. It is about ownership changing hands, not about the mine operating.",
            "lets_through": [
              "This wording lets through every mine that stays where it is. Nothing here stops a company mining metallurgical coal indefinitely, provided it does not try to sell.",
              "It also cuts both ways. Blocking the sale of a coal mine keeps it with its current owner, which is not obviously the better outcome — a buyer committed to closing it early cannot be financed either."
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
      "metallurgical-coal",
      "advisory",
      "dedicated-transaction",
      "asbestos"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 196,
      "document_id": 28052,
      "institution": "societe_generale",
      "commitment_index": 3,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=3",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        17027,
        17189
      ],
      "summary_text": "Societe Generale will not provide financial transactions, products, or services for the sale or acquisition of metallurgical coal mining assets.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "metallurgical",
          "oil_gas_types": null,
          "value_chain": "upstream",
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
        "project_finance_only": true,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "who_it_catches",
          "recommended": true,
          "recommended_because": "The honest reading of this one is that its effect is two-sided, and saying so is more useful than forcing it into the loophole shape.",
          "text": "This exclusion stops a mine changing hands. It does not stop a mine.\n\nSection 6.2 is given entirely to acquisition transactions, and what it blocks is financing “aiming at the sale or acquisition” of metallurgical coal or asbestos mining assets. A company that keeps its mine and works it is not caught by this sentence at all — it is a rule about ownership, not about extraction.\n\nAnd the effect cuts both ways, which is unusual enough on this site to be worth writing plainly. Blocking the sale of a coal mine keeps it where it is. A buyer whose plan is early closure and rehabilitation is refused on exactly the same terms as one who intends to expand, because the policy asks what the transaction is, not what the buyer intends to do next.\n\nWe are not claiming the bank got this wrong. We are saying the sentence does not distinguish between the two, and a policy that wanted to encourage responsible closure would have to."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Two things here are better than the surrounding policy.\n\nThe first is that acquisitions get a section of their own. Most of Société Générale's exclusions are split between who the bank will bank and what it will fund; advisory work on a change of ownership falls between the two, and the oil and gas policy does not address it separately at all. This document does.\n\nThe second is asbestos. It appears nowhere else in the Société Générale sector policies we have read. Naming it alongside metallurgical coal, in a rule about who may buy and sell the assets, covers a route that a coal-only policy would leave open.\n\nNeither point is a loophole. They belong in the assessment because a reader deciding what to make of this bank should know where its drafting is stronger than usual."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "Read the section for what it lets past and the answer is: the mining.\n\nNothing in section 6.2 prevents a company extracting metallurgical coal indefinitely. Nothing prevents Société Générale lending to it — that question is answered by the 50% client test, which applies only to new relationships. Nothing prevents the mine expanding, provided nobody tries to sell it.\n\nThe exclusion engages at one moment in an asset's life: the moment it goes to market. An owner who never sells never encounters it.\n\nThat is a narrow point of contact for a rule sitting in a policy about mining, and it is why this commitment cannot carry the bank's position on metallurgical coal on its own."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so unlike the oil and gas pages there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Say what happens to the mine that is not sold",
          "content": "The exclusion stops a transfer of ownership. Nothing in this section addresses continued operation."
        },
        {
          "title": "Address responsible closure",
          "content": "A buyer whose plan is early closure and rehabilitation is refused on the same terms as one who intends to expand. If that is intended, say so; if not, carve it out."
        }
      ],
      "what_needs_to_change_closing": "Until then, this is a rule about who owns a mine rather than about whether it is mined.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not help buy or sell metallurgical coal or asbestos mining assets. We have not yet reviewed what it financed against this commitment.",
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
