export const campaignABI = [
  {
    type: "impl",
    name: "CampaignImpl",
    interface_name: "starkaid::campaign::ICampaign",
  },
  {
    type: "enum",
    name: "core::bool",
    variants: [
      {
        name: "False",
        type: "()",
      },
      {
        name: "True",
        type: "()",
      },
    ],
  },
  {
    type: "enum",
    name: "starkaid::campaign::Campaign::CampaignStatus",
    variants: [
      {
        name: "Pending",
        type: "()",
      },
      {
        name: "Reviewing",
        type: "()",
      },
      {
        name: "Approved",
        type: "()",
      },
      {
        name: "Rejected",
        type: "()",
      },
      {
        name: "Unsuccessful",
        type: "()",
      },
      {
        name: "GoalReached",
        type: "()",
      },
    ],
  },
  {
    type: "struct",
    name: "starkaid::campaign::Campaign::CampaignInfo",
    members: [
      {
        name: "id",
        type: "core::integer::u32",
      },
      {
        name: "name",
        type: "core::felt252",
      },
      {
        name: "title",
        type: "core::felt252",
      },
      {
        name: "campaign_bio_uri",
        type: "core::felt252",
      },
      {
        name: "campaign_description_uri",
        type: "core::felt252",
      },
      {
        name: "budget_plan_uri",
        type: "core::felt252",
      },
      {
        name: "img1_uri",
        type: "core::felt252",
      },
      {
        name: "img2_uri",
        type: "core::felt252",
      },
      {
        name: "img3_uri",
        type: "core::felt252",
      },
      {
        name: "goal",
        type: "core::integer::u128",
      },
      {
        name: "location",
        type: "core::felt252",
      },
      {
        name: "deadline",
        type: "core::integer::u64",
      },
      {
        name: "recipient",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "funds_raised",
        type: "core::integer::u128",
      },
      {
        name: "status",
        type: "starkaid::campaign::Campaign::CampaignStatus",
      },
      {
        name: "validated",
        type: "core::bool",
      },
      {
        name: "payment_disbursed",
        type: "core::bool",
      },
    ],
  },
  {
    type: "interface",
    name: "starkaid::campaign::ICampaign",
    items: [
      {
        type: "function",
        name: "create_campaign",
        inputs: [
          {
            name: "name",
            type: "core::felt252",
          },
          {
            name: "title",
            type: "core::felt252",
          },
          {
            name: "campaign_bio_uri",
            type: "core::felt252",
          },
          {
            name: "campaign_description_uri",
            type: "core::felt252",
          },
          {
            name: "budget_plan_uri",
            type: "core::felt252",
          },
          {
            name: "img1_uri",
            type: "core::felt252",
          },
          {
            name: "img2_uri",
            type: "core::felt252",
          },
          {
            name: "img3_uri",
            type: "core::felt252",
          },
          {
            name: "goal",
            type: "core::integer::u128",
          },
          {
            name: "location",
            type: "core::felt252",
          },
          {
            name: "deadline",
            type: "core::integer::u64",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "vote_on_campaign",
        inputs: [
          {
            name: "campaign_id",
            type: "core::integer::u32",
          },
          {
            name: "approve",
            type: "core::bool",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "disburse_payments",
        inputs: [
          {
            name: "campaign_id",
            type: "core::integer::u32",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "donate",
        inputs: [
          {
            name: "campaign_id",
            type: "core::integer::u32",
          },
          {
            name: "amount",
            type: "core::integer::u128",
          },
          {
            name: "comment_uri",
            type: "core::felt252",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "get_all_campaigns",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<starkaid::campaign::Campaign::CampaignInfo>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_campaign",
        inputs: [
          {
            name: "campaign_id",
            type: "core::integer::u32",
          },
        ],
        outputs: [
          {
            type: "starkaid::campaign::Campaign::CampaignInfo",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_campaign_status",
        inputs: [
          {
            name: "campaign_id",
            type: "core::integer::u32",
          },
        ],
        outputs: [
          {
            type: "starkaid::campaign::Campaign::CampaignStatus",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "goal_not_reached",
        inputs: [
          {
            name: "campaign_id",
            type: "core::integer::u32",
          },
          {
            name: "accept_funds",
            type: "core::bool",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "is_beneficiary",
        inputs: [
          {
            name: "campaign_id",
            type: "core::integer::u32",
          },
          {
            name: "address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "external",
      },
    ],
  },
  {
    type: "constructor",
    name: "constructor",
    inputs: [
      {
        name: "auth_contract_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "validator_contract_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    type: "event",
    name: "starkaid::campaign::Campaign::CampaignCreated",
    kind: "struct",
    members: [
      {
        name: "id",
        type: "core::integer::u32",
        kind: "key",
      },
      {
        name: "name",
        type: "core::felt252",
        kind: "data",
      },
      {
        name: "title",
        type: "core::felt252",
        kind: "data",
      },
      {
        name: "goal",
        type: "core::integer::u128",
        kind: "data",
      },
      {
        name: "location",
        type: "core::felt252",
        kind: "data",
      },
      {
        name: "deadline",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "starkaid::campaign::Campaign::CampaignVoted",
    kind: "struct",
    members: [
      {
        name: "campaign_id",
        type: "core::integer::u32",
        kind: "key",
      },
      {
        name: "approve",
        type: "core::bool",
        kind: "data",
      },
      {
        name: "votes",
        type: "core::integer::u32",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "starkaid::campaign::Campaign::PaymentDisbursed",
    kind: "struct",
    members: [
      {
        name: "campaign_id",
        type: "core::integer::u32",
        kind: "key",
      },
      {
        name: "recipient",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "amount",
        type: "core::integer::u128",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "starkaid::campaign::Campaign::DonationMade",
    kind: "struct",
    members: [
      {
        name: "campaign_id",
        type: "core::integer::u32",
        kind: "key",
      },
      {
        name: "donor",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "amount",
        type: "core::integer::u128",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "starkaid::campaign::Campaign::Transferred",
    kind: "struct",
    members: [
      {
        name: "sender",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "receiver",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "amount",
        type: "core::integer::u128",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "starkaid::campaign::Campaign::Event",
    kind: "enum",
    variants: [
      {
        name: "CampaignCreated",
        type: "starkaid::campaign::Campaign::CampaignCreated",
        kind: "nested",
      },
      {
        name: "CampaignVoted",
        type: "starkaid::campaign::Campaign::CampaignVoted",
        kind: "nested",
      },
      {
        name: "PaymentDisbursed",
        type: "starkaid::campaign::Campaign::PaymentDisbursed",
        kind: "nested",
      },
      {
        name: "DonationMade",
        type: "starkaid::campaign::Campaign::DonationMade",
        kind: "nested",
      },
      {
        name: "Transferred",
        type: "starkaid::campaign::Campaign::Transferred",
        kind: "nested",
      },
    ],
  },
];
