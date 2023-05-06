import { AnimatePresence } from "framer-motion";
import { Loading } from "../components/Loading";
import { useNFTs } from "../hooks/useNFTs";
import { NftItem } from "../components/NftItem";

export default function Garage() {
  const nfts = useNFTs();

  if (nfts.loading) return <Loading />;

  if (nfts.error) return <div>error</div>;

  return (
    <>
      <AnimatePresence>
        <div className="stake">
          <div className="stake-content">
            <div className="stake-title">Garage</div>
            <div className="stake-items-container">
              <div className="stake-items">
                <div className="stake-items-content">
                  <div className="car-selection-list">
                    <div className="car-selection-list-content">
                      {nfts.nfts.map((nft: any) => (
                        <NftItem key={nft.id} nft={nft} withPoints={true} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}
