import { useConnection } from "@solana/wallet-adapter-react";
import { Stakeable } from "../components/Stakeable";
import { useNFTs } from "../hooks/useNFTs";
import { usePools } from "../hooks/usePools";
import { useWallet } from "../hooks/useWallet";

export default function Stake() {
  const nfts = useNFTs();
  
  return (
    <div className="stake">
      <div className="stake-content">
        <div className="stake-title">Stake</div>
        <div className="stake-items-container">
          <div className="stake-items">
            <div className="stake-items-content">
              {nfts.nfts.map((nft) => (
                <Stakeable />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
