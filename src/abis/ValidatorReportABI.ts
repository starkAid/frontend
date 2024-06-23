export const validatorReportABI = [
  {
    type: "impl",
    name: "ValidatorReportImpl",
    interface_name: "starkaid::validator_report::IValidatorReport",
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
    type: "struct",
    name: "starkaid::validator_report::ValidatorReport::CampaignReport",
    members: [
      {
        name: "report_id",
        type: "core::integer::u32",
      },
      {
        name: "campaign_id",
        type: "core::integer::u32",
      },
      {
        name: "validator_id",
        type: "core::integer::u32",
      },
      {
        name: "timestamp",
        type: "core::integer::u64",
      },
      {
        name: "response_given",
        type: "core::bool",
      },
      {
        name: "report_uri",
        type: "core::felt252",
      },
    ],
  },
  {
    type: "interface",
    name: "starkaid::validator_report::IValidatorReport",
    items: [
      {
        type: "function",
        name: "submit_report",
        inputs: [
          {
            name: "campaign_id",
            type: "core::integer::u32",
          },
          {
            name: "response_given",
            type: "core::bool",
          },
          {
            name: "report_uri",
            type: "core::felt252",
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
        name: "get_report",
        inputs: [
          {
            name: "campaign_id",
            type: "core::integer::u32",
          },
          {
            name: "report_id",
            type: "core::integer::u32",
          },
        ],
        outputs: [
          {
            type: "starkaid::validator_report::ValidatorReport::CampaignReport",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_campaign_reports",
        inputs: [
          {
            name: "campaign_id",
            type: "core::integer::u32",
          },
        ],
        outputs: [
          {
            type: "core::array::Array::<starkaid::validator_report::ValidatorReport::CampaignReport>",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "constructor",
    name: "constructor",
    inputs: [
      {
        name: "validator_contract_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    type: "event",
    name: "starkaid::validator_report::ValidatorReport::ReportSubmitted",
    kind: "struct",
    members: [
      {
        name: "campaign_id",
        type: "core::integer::u32",
        kind: "key",
      },
      {
        name: "timestamp",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "starkaid::validator_report::ValidatorReport::Event",
    kind: "enum",
    variants: [
      {
        name: "ReportSubmitted",
        type: "starkaid::validator_report::ValidatorReport::ReportSubmitted",
        kind: "nested",
      },
    ],
  },
];
