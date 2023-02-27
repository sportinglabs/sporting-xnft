import { useConnection } from "@solana/wallet-adapter-react";
import { useNFTs } from "../hooks/useNFTs";
import { usePools } from "../hooks/usePools";
import { useWallet } from "../hooks/useWallet";
import RaceSelection from "../components/stake/RaceSelection";

export default function Stake() {
  const nfts = useNFTs();

  return (
    <div className="stake">
      <div className="stake-content">
        <div className="stake-title">Pick a race</div>
        <div className="stake-items-container">
          <div className="stake-items">
            <div className="stake-items-content">
              <RaceSelection
                country="australia"
                name="Le Mans 1966"
                month_date="AUG"
                day_date="18-19"
                status="live"
                staked={89}
                track={0}
              />
              <RaceSelection
                country="france"
                name="Le Mans 1966"
                month_date="AUG"
                day_date="18-19"
                status="upcoming"
                staked={89}
                track={0}
              />
              <RaceSelection
                country="france"
                name="Le Mans 1966"
                month_date="AUG"
                day_date="18-19"
                status="expired"
                staked={89}
                track={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
