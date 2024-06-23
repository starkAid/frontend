"use client";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { useMemo } from "react";


function WalletConnected() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const shortenedAddress = useMemo(() => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, [address]);

  return (
    <button onClick={() => disconnect()} className="text-saBluelite bg-saOrange rounded-md border border-saOrange hover:bg-saBluelite transition-all duration-300 hover:text-gray-200 text-sm px-5 py-2 flex items-center gap-1.5">Disconnect
      <span className="font-medium">{shortenedAddress}</span>
    </button>
  );
}

function ConnectWallet() {
  const { connectors, connect } = useConnect();

  return (
    <div className="flex items-center gap-2">
      {connectors.map((connector) => {
        return (
          <button
            key={connector.id}
            onClick={() => connect({ connector })}
            className="text-saOrange bg-white rounded-md border border-saOrange hover:bg-saOrange transition-all duration-300 hover:text-gray-200 text-sm px-6 py-2 "
          >
            {connector.id}
          </button>
        );
      })}
    </div>
  );
}

export default function WalletBar() {
  const { address } = useAccount();

  return address ? <WalletConnected /> : <ConnectWallet />;
}
