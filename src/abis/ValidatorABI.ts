export const validatorABI = [
  {
    type: "impl",
    name: "ValidatorImpl",
    interface_name: "starkaid::validator::IValidator",
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
    name: "starkaid::validator::Validator::Status",
    variants: [
      {
        name: "Inactive",
        type: "()",
      },
      {
        name: "Active",
        type: "()",
      },
      {
        name: "Banned",
        type: "()",
      },
    ],
  },
  {
    type: "struct",
    name: "starkaid::validator::Validator::ValidatorInfo",
    members: [
      {
        name: "validator_id",
        type: "core::integer::u32",
      },
      {
        name: "stake",
        type: "core::integer::u128",
      },
      {
        name: "address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "status",
        type: "starkaid::validator::Validator::Status",
      },
    ],
  },
  {
    type: "interface",
    name: "starkaid::validator::IValidator",
    items: [
      {
        type: "function",
        name: "stake",
        inputs: [
          {
            name: "amount",
            type: "core::integer::u128",
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
        name: "unstake",
        inputs: [],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "validate_campaign",
        inputs: [
          {
            name: "campaign_id",
            type: "core::integer::u32",
          },
          {
            name: "validator_address",
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
      {
        type: "function",
        name: "get_all_validators",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<starkaid::validator::Validator::ValidatorInfo>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_active_validators",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<starkaid::validator::Validator::ValidatorInfo>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_active_validators_count",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u32",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_campaign_validators",
        inputs: [
          {
            name: "campaign_id",
            type: "core::integer::u32",
          },
        ],
        outputs: [
          {
            type: "core::array::Array::<core::integer::u32>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_validator_id",
        inputs: [
          {
            name: "address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::integer::u32",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_validator",
        inputs: [
          {
            name: "validator_id",
            type: "core::integer::u32",
          },
        ],
        outputs: [
          {
            type: "starkaid::validator::Validator::ValidatorInfo",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "is_validator",
        inputs: [
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
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_total_staked",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u128",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "constructor",
    name: "constructor",
    inputs: [],
  },
  {
    type: "event",
    name: "starkaid::validator::Validator::Staked",
    kind: "struct",
    members: [
      {
        name: "validator_id",
        type: "core::integer::u32",
        kind: "key",
      },
      {
        name: "stake",
        type: "core::integer::u128",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "starkaid::validator::Validator::Unstaked",
    kind: "struct",
    members: [
      {
        name: "validator_id",
        type: "core::integer::u32",
        kind: "key",
      },
      {
        name: "stake",
        type: "core::integer::u128",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "starkaid::validator::Validator::CampaignValidated",
    kind: "struct",
    members: [
      {
        name: "validator_id",
        type: "core::integer::u32",
        kind: "key",
      },
      {
        name: "campaign_id",
        type: "core::integer::u32",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "starkaid::validator::Validator::Event",
    kind: "enum",
    variants: [
      {
        name: "Staked",
        type: "starkaid::validator::Validator::Staked",
        kind: "nested",
      },
      {
        name: "Unstaked",
        type: "starkaid::validator::Validator::Unstaked",
        kind: "nested",
      },
      {
        name: "CampaignValidated",
        type: "starkaid::validator::Validator::CampaignValidated",
        kind: "nested",
      },
    ],
  },
];
