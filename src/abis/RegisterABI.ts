export const registerABI = [
  {
    type: "impl",
    name: "AuthImpl",
    interface_name: "starkaid::auth::IAuth",
  },
  {
    type: "struct",
    name: "starkaid::auth::Auth::User",
    members: [
      {
        name: "id",
        type: "core::integer::u32",
      },
      {
        name: "username",
        type: "core::felt252",
      },
      {
        name: "address",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
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
    type: "interface",
    name: "starkaid::auth::IAuth",
    items: [
      {
        type: "function",
        name: "register_user",
        inputs: [
          {
            name: "username",
            type: "core::felt252",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "get_user",
        inputs: [
          {
            name: "index",
            type: "core::integer::u32",
          },
        ],
        outputs: [
          {
            type: "starkaid::auth::Auth::User",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_all_users",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<starkaid::auth::Auth::User>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "update_username",
        inputs: [
          {
            name: "newUsername",
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
        name: "get_user_id",
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
    ],
  },
  {
    type: "constructor",
    name: "constructor",
    inputs: [],
  },
  {
    type: "event",
    name: "starkaid::auth::Auth::RegistrationSuccessiful",
    kind: "struct",
    members: [
      {
        name: "userAddress",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "userName",
        type: "core::felt252",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "starkaid::auth::Auth::Event",
    kind: "enum",
    variants: [
      {
        name: "RegistrationSuccessiful",
        type: "starkaid::auth::Auth::RegistrationSuccessiful",
        kind: "nested",
      },
    ],
  },
];
