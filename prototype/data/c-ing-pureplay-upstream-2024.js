/* Commitment data — generated from commitments/commitment-ing-pureplay-upstream-2024.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.11",
  "commitment": {
    "commitment_id": "ing-pureplay-upstream-2024",
    "bank": "ING",
    "commitment_number": 2,
    "category": "oil_gas_expansion",
    "effective_date": "2024-09-19",
    "title": "ING's 2024 Commitment on Upstream Oil & Gas",
    "short_title": "2024 Commitment on Upstream Oil & Gas",
    "subject": "Upstream Oil & Gas",
    "article_published": "2026-08-28",
    "intro": "ING announced this commitment on 19 September 2024 in its Climate Progress Update, where chief executive Steven van Rijswijk set it out in the foreword as an expansion of the bank's oil and gas policy. From that day, ING says, it will stop all new financing to upstream oil and gas companies that keep developing new fields.",
    "naive_reading": "it has stopped financing oil and gas companies that are still opening up new fields",
    "plain_language_note": "ING did not add words with hollow meanings or a lot of noise to this commitment. It is clear on its own, and the plain version changes little beyond “we” to ING.",
    "sources_intro": "One document states this commitment, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "cpu2024",
        "document_title": "ING Climate Progress Update 2024",
        "document_url": "https://ing.com/binaries/content/assets/documents/files/climate_progress_update_2024.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/ing_group/document/4517/synthesis?run=105&commitment=2",
        "watchtower_document_id": 4517,
        "watchtower_institution": "ing_group",
        "synthesis_run": 105,
        "version_label": "September 2024",
        "published": "2024-09-18",
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
        "source_id": "cpu2024",
        "title": "The commitment",
        "intro": "The sentence from the chief executive's foreword to the 2024 Climate Progress Update. It sets two conditions on the company, and both have to be true before any financing is withheld.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We're now expanding our policy – as of today we'll also stop all new financing to pure-play upstream oil & gas companies that continue to develop new fields.",
        "plain_rendering": "ING is expanding its policy – as of today it will also stop all new financing to pure-play upstream oil & gas companies that continue to develop new fields.",
        "phrases": [
          {
            "id": "as-of-today",
            "label": "as of today",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              33,
              44
            ],
            "plain_range": [
              30,
              41
            ],
            "means": "This explains when this commitment starts: on the date of the chief executive's foreword, 19 September 2024, and only for financing agreed from then on.",
            "lets_through": [
              "This wording lets through every loan, credit facility and bond already agreed with these companies before that day. With the word “new” later in the same sentence, it leaves existing financing in place until it matures."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "pure-play",
            "label": "pure-play",
            "type": "narrowing_qualifier",
            "source": "watchtower_weakness",
            "watchtower_ref": "The restriction only applies to 'pure-play' upstream companies, meaning diversified oil and gas companies (such as integrated majors) that continue to develop new fields are not covered by this specific exclusion.",
            "not_in_synthesis": false,
            "verbatim_range": [
              82,
              91
            ],
            "plain_range": [
              81,
              90
            ],
            "means": "The word “pure-play” sets a test of whether a company works in only one part of the oil and gas value chain. It asks what kind of company the borrower is, not how much oil it produces, where it drills, or how fast it is growing.",
            "lets_through": [
              "This wording lets through any producer that also holds midstream or downstream assets. A terminal, a pipeline interest or a refinery is enough to fall outside this commitment, however much the company drills.",
              "It also lets through the integrated majors, which by definition work across the whole chain."
            ],
            "defined_in_clause": null,
            "bank_definition": {
              "quote": "a 'pure-play' company is one whose activities take place exclusively in one part of the sector value chain",
              "source_id": "cpu2024"
            }
          },
          {
            "id": "new-fields",
            "label": "…that continue to develop new fields",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              121,
              156
            ],
            "plain_range": [
              120,
              155
            ],
            "means": "This explains the second half of a two-part test. Financing is withheld only when both things are true at the same time: the company is pure-play, and it continues to develop new fields. Fail either one and this commitment does not apply.\n\nA field is a discovered accumulation of oil or gas. Opening a new one is a specific event, with its own licence and its own development plan. Adding wells to a field that is already producing is not a new field, however much oil comes out of it.",
            "lets_through": [
              "The words “new fields” let through growth inside existing fields. New wells, new phases, redevelopment of a mature field, life extension by decades. All of it is new supply. None of it is a new field.",
              "It also lets through production bought rather than developed. Acquiring fields, licences or an entire company adds output without opening anything new.",
              "It also lets through stakes in someone else's field. The wording never says whether holding an interest in a field another company operates counts as developing one. The bank decides, and does not have to publish how it decided."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "upstream",
      "new-financing",
      "existing-client"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 105,
      "document_id": 4517,
      "institution": "ing_group",
      "commitment_index": 2,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/ing_group/document/4517/synthesis?run=105&commitment=2",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-06-18",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        3757,
        3916
      ],
      "summary_text": "ING will stop providing new financing to pure-play upstream oil and gas companies that continue to develop new fields, effective immediately.",
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
          "definition": "Pure-play upstream oil & gas companies that continue to develop new fields"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [],
      "weaknesses": "The restriction only applies to 'pure-play' upstream companies, meaning diversified oil and gas companies (such as integrated majors) that continue to develop new fields are not covered by this specific exclusion.",
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 1 fields corrected]\nCHANGES:\n- [ING will stop providing new financing to pure-play upstream oil and gas companies that continue to develop new fields, effective immediately.]: Removed the exception regarding non-pure-play companies because this condition is already captured under the triggers/counterparty scope, and the schema dictates that conditions captured in other dimensions should not be duplicated in exceptions.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [],
    "disagreements": [],
    "assessment": {
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.2 §4.1",
        "inputs_source": "Watchtower record",
        "result": "hollowed",
        "weakness": true,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": true,
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "ING closed the corporate-lending gap on purpose and said so, which is unusual enough that conceding it first makes the rest of the page hard to dismiss.",
          "text": "Start with what ING got right, because it is unusual and it was deliberate.\n\nMost banks that restrict oil and gas financing restrict project finance — financing raised against a named asset — and leave corporate lending alone. Corporate lending is where most of the financing moves. A policy that stops at project finance stops before it starts.\n\nING closed that gap: Watchtower records this commitment as reaching general corporate financing and capital markets. That is a wider instrument scope than most of its peers have written down, and it was a choice, not an accident of drafting.\n\nThe problem is not what the commitment covers. It is who.\n\nThe promise bites only when two things are true at once: the borrower is pure-play, and it continues to develop new fields. The first test is about corporate structure rather than oil — a terminal or a pipeline interest is enough to fall outside it. The second turns on an administrative event, so adding wells to a producing field or buying someone else's production adds supply without opening anything new.\n\nING wrote a wide instrument scope and then pointed it at the narrowest possible set of companies."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "Start with what ING got right, because it is unusual. Most banks that restrict oil and gas financing restrict project finance — financing raised against a named asset — and leave corporate lending alone, which is where most of the financing moves. ING closed that gap: the restriction reaches general corporate financing and capital markets.\n\nThe problem is not what the commitment covers. It is who.\n\nThe promise only bites when two things are true at once: the borrower is pure-play, and it continues to develop new fields. Fail either test and the wording releases the company.\n\nThe first test is about corporate structure, not about oil. A company whose activities are not confined to one part of the value chain is exempt, and a terminal or a pipeline interest is enough. The second turns on an administrative event: adding wells to a producing field, sanctioning a new phase, redeveloping a mature asset or buying someone else's production all add supply without opening a new field.\n\nNeither test measures how much oil comes out of the ground."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Ask who this commitment actually stops.\n\nIt stops a company that does one thing: find oil, produce it, and open fields of its own to do it. No terminal, no pipeline, no midstream segment, no acquisitions. That company is caught.\n\nIt does not stop a producer that also owns infrastructure — and every major owns infrastructure by definition. It does not stop a company that grows by drilling more of what it already has. It does not stop one that buys production instead of developing it.\n\nSo the commitment binds the small and the focused, and exempts the large and the integrated. Worse, it offers a way out that costs nothing and changes nothing: acquire an interest in a pipeline and the policy stops applying to you.\n\nA climate policy that can be exited by an acquisition producing no emissions reduction whatsoever is not measuring the right thing."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower's stated weakness is carried as a phrase; the verdict prose around it is ours.",
      "what_needs_to_change": [
        {
          "title": "Test the activity, not the company",
          "content": "A restriction on financing for oil and gas exploration and production reaches every producer, whatever else it happens to own. The pure-play test should be deleted, not redefined."
        },
        {
          "title": "Replace \"new fields\" with \"new production capacity\"",
          "content": "Fields are an administrative unit. Capacity is what reaches the atmosphere. A company that adds a decade of production to a field it already operates should be counted, because it is doing the thing this commitment was written to stop."
        },
        {
          "title": "Say what happens to existing financing",
          "content": "This commitment reaches new financing only. It should say whether facilities to these companies are renewed or refinanced when they mature."
        }
      ],
      "what_needs_to_change_closing": "Until this is changed, this commitment will keep binding the companies with the least to change and releasing the ones with the most.",
      "reviewed_by": null,
      "reviewed_at": null
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That's what ING lent to two oil and gas producers in a single year, despite a commitment that was supposed to stop it. And it is only what we have been able to find so far.\n\nHow did that happen? A breach, or a loophole? That is what this page works out.",
    "what_it_funded": "two oil and gas producers still opening up new fields",
    "headline_figure": {
      "display": "$658M",
      "combines": "$120M EnQuest + $538M Vår Energi",
      "complete": false
    },
    "deals": [
      {
        "id": "ing-var-energi-2025",
        "company": "Vår Energi",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 538020916,
        "amount_display": "$538M",
        "instruments": [
          "revolving credit facility",
          "bond underwriting"
        ],
        "contradiction": "The borrower is a pure-play upstream company, so the first condition is met and the commitment does cover it. Its operated growth comes from expanding fields already in production rather than opening new ones, which the second condition does not reach.",
        "phrase_refs": [
          "new-fields"
        ],
        "source_url": null
      },
      {
        "id": "ing-enquest-2025",
        "company": "EnQuest",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 119760000,
        "amount_display": "$120M",
        "instruments": [
          "revolving credit facility",
          "second facility — instrument to confirm"
        ],
        "contradiction": "The borrower operates an oil terminal and holds interests in two pipelines, so its activities are not confined to one part of the value chain. It falls outside the pure-play test entirely, and the commitment never reaches it.",
        "phrase_refs": [
          "pure-play"
        ],
        "source_url": null
      }
    ]
  },
  "provenance": {
    "built": "2026-09-10",
    "spec": "Commitment Analysis Spec v3.11",
    "source": "Watchtower synthesis run 105, document 4517",
    "reading": "drafted"
  }
};
