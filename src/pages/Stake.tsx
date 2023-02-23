import { StakeItem } from "../components/StakeItem";

export default function Stake() {
  /*   const pools = usePools();
  console.log(pools);

  const nfts = useNFTs();
  console.log(nfts);

  const connection = useSolanaConnection(); //create a connection
  const wallet = usePublicKeys(); //initialize wallet

  const stakeFunction = async () => {
    try {
      console.log(wallet.toBase58()); //test wallet

      // const response = await stake(
      //   connection,
      //   wallet,
      //   new PublicKey("AuSEFWEjek6qveQotqHRZxFhGRdEb1Wwub4gSCqaqLpT")
      // ); //execute staking function

      // console.log(response); //print out
    } catch (e) {
      console.error(e);
    }
  }; */
  return (
    <div>
      <div>
        <div>
          <div>
            <p>Staking</p>
          </div>
          <StakeItem
            name={"Red Bull RB9"}
            rate={10}
            earnedAmount={430}
            stakeFunction={async () => {}}
          />
          <StakeItem
            name={"Red Bull RB9"}
            rate={10}
            earnedAmount={430}
            stakeFunction={async () => {}}
          />
          <StakeItem
            name={"Red Bull RB9"}
            rate={10}
            earnedAmount={430}
            stakeFunction={async () => {}}
          />
        </div>
      </div>
    </div>
  );
}
