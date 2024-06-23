export const progressTrackABI = [
  {
    type: "impl",
    name: "ProgressTrackingImpl",
    interface_name: "starkaid::progress_tracking::IProgressTracking",
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
    name: "starkaid::progress_tracking::ProgressTracking::ProgressReport",
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
        name: "campaign_owner",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "timestamp",
        type: "core::integer::u64",
      },
      {
        name: "disbursed_amount",
        type: "core::integer::u64",
      },
      {
        name: "report_uri",
        type: "core::felt252",
      },
    ],
  },
  {
    type: "interface",
    name: "starkaid::progress_tracking::IProgressTracking",
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
            name: "disbursed_amount",
            type: "core::integer::u64",
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
        name: "get_campaign_report",
        inputs: [
          {
            name: "campaign_id",
            type: "core::integer::u32",
          },
        ],
        outputs: [
          {
            type: "starkaid::progress_tracking::ProgressTracking::ProgressReport",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_reports",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<starkaid::progress_tracking::ProgressTracking::ProgressReport>",
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
        name: "campaign_contract_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    type: "event",
    name: "starkaid::progress_tracking::ProgressTracking::ReportSubmitted",
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
    name: "starkaid::progress_tracking::ProgressTracking::Event",
    kind: "enum",
    variants: [
      {
        name: "ReportSubmitted",
        type: "starkaid::progress_tracking::ProgressTracking::ReportSubmitted",
        kind: "nested",
      },
    ],
  },
];
