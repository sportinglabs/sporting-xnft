import { useState } from "react";
import axios from "axios";

export function StakeItem(props: {
  name: string;
  rate: number;
  earnedAmount: number;
  stakeFunction: () => Promise<void>;
}) {
  const url =
    "https://api.helius.xyz/v0/tokens/metadata?api-key=6ab23117-c35c-4e3c-94f2-1ec14d058d0d";

  const getMetadata = async () => {
    const { data } = await axios.post(url, {
      mintAccounts: ["824ATHhPrv8Zyqt4WKNtLJ3hAaXEWbRN3ukqAH6GALRX"],
    });
    console.log("metadata: ", data);
  };

  const [staked, setStaked] = useState(false);
  return (
    <div>
      <div>
        <div>
          <img src={require("../media/car.png")} />
        </div>
        <div>
          <div>
            <p>{props.name}</p>
          </div>
          <div>
            <p>◎{props.rate.toString()}/day</p>
          </div>
          <div>
            <p>◎{props.earnedAmount.toString()}</p>
          </div>
        </div>
        <button
          onClick={async () => {
            await props.stakeFunction();
            setStaked(!staked);
          }}
        >
          <p>{staked ? "unstake" : "stake"}</p>
        </button>
      </div>
    </div>
  );
}
