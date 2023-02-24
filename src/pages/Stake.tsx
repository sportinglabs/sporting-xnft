import { Stakeable } from "../components/Stakeable";
import { useSolanaConnection, usePublicKeys } from "../hooks/xnft-hooks";
import { getNFTsByOwner } from "../utils/nfts";

//mint: 824ATHhPrv8Zyqt4WKNtLJ3hAaXEWbRN3ukqAH6GALRX - devnet

export default function Stake() {
  async function loadNFTs() {
    const publicKey = usePublicKeys();
    const connection = useSolanaConnection();
    const nfts = await getNFTsByOwner(publicKey);
    console.log(nfts);
  }
  return (
    <div className="stake">
      <div className="stake-content">
        <div className="stake-title">Stake</div>
        <div className="stake-items-container">
          <div className="stake-items">
            <div className="stake-items-content">
              <button onClick={loadNFTs}>click it</button>
              <Stakeable />
              <Stakeable />
              <Stakeable />
              <Stakeable />
              <Stakeable />
              <Stakeable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
