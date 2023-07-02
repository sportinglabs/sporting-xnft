import Navigation from "../../components/general/Navigation";
import Rank from "../../components/general/Rank";
import RaceItem from "../../components/race/RaceItem";
import { motion, useUnmountEffect } from "framer-motion";
import { useState, useEffect } from "react";

export default function Race() {
  const [selection, setSelection] = useState(true);

  const raw_array = [
    {
      poolAddress: "TheAddressOfTheStakingPool",
      country: "Monaco",
      name: "F1 Monaco GP",
      racetrack: "Circuit de Monaco",
      date: { startDay: 1, startMonth: 1, endDay: 2, endMonth: 2 },
      status: "finished",
      image:
        "https://raw.githubusercontent.com/them2dt/sl-resources/main/racemaps/abu-dhabi.svg",
    },
    {
      poolAddress: "TheAddressOfTheStakingPool",
      country: "Monaco",
      name: "F1 Monaco GP",
      racetrack: "Circuit de Monaco",
      date: { startDay: 1, startMonth: 1, endDay: 2, endMonth: 2 },

      status: "live",
      image:
        "https://raw.githubusercontent.com/them2dt/sl-resources/main/racemaps/abu-dhabi.svg",
    },
    {
      poolAddress: "TheAddressOfTheStakingPool",
      country: "Monaco",
      name: "F1 Monaco GP",
      racetrack: "Circuit de Monaco",
      date: { startDay: 1, startMonth: 1, endDay: 2, endMonth: 2 },

      status: "live",
      image:
        "https://raw.githubusercontent.com/them2dt/sl-resources/main/racemaps/abu-dhabi.svg",
    },
    {
      poolAddress: "TheAddressOfTheStakingPool",
      country: "Monaco",
      name: "F1 Monaco GP",
      racetrack: "Circuit de Monaco",
      date: { startDay: 1, startMonth: 1, endDay: 2, endMonth: 2 },

      status: "live",
      image:
        "https://raw.githubusercontent.com/them2dt/sl-resources/main/racemaps/abu-dhabi.svg",
    },
    {
      poolAddress: "TheAddressOfTheStakingPool",
      country: "Monaco",
      name: "F1 Monaco GP",
      racetrack: "Circuit de Monaco",
      date: { startDay: 1, startMonth: 1, endDay: 2, endMonth: 2 },

      status: "upcoming",
      image:
        "https://raw.githubusercontent.com/them2dt/sl-resources/main/racemaps/abu-dhabi.svg",
    },
  ];
  const [array, setArray] = useState<
    {
      poolAddress: string;
      country: string;
      name: string;
      racetrack: string;
      date: {
        startDay: number;
        startMonth: number;
        endDay: number;
        endMonth: number;
      };
      status: string;
      image: string;
    }[]
  >([]);
  useEffect(() => {
    const temp_array = [];
    if (selection == true) {
      for (let i = 0; i < raw_array.length; i++) {
        if (raw_array[i].status != "finished") {
          temp_array.push(raw_array[i]);
        }
      }
    } else if (selection == false) {
      for (let i = 0; i < raw_array.length; i++) {
        if (raw_array[i].status == "finished") {
          temp_array.push(raw_array[i]);
        }
      }
    }

    setArray(temp_array);
  }, [selection]);
  return (
    <div className="race">
      <div className="top-spacer"></div>
      <Rank />
      <div className="container">
        <div className="container-content">
          <motion.div
            className="race-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: 0.8,
            }}
            viewport={{ once: false }}
          >
            {selection && (
              <>
                <button
                  style={{ color: "#e73e00" }}
                  onClick={() => {
                    setSelection(true);
                  }}
                >
                  Races
                </button>
                <div className="slash">/</div>
                <button
                  onClick={() => {
                    setSelection(false);
                  }}
                >
                  Finished
                </button>
              </>
            )}
            {!selection && (
              <>
                <button
                  onClick={() => {
                    setSelection(true);
                  }}
                >
                  Races
                </button>
                <div className="slash">/</div>
                <button
                  onClick={() => {
                    setSelection(false);
                  }}
                  style={{ color: "#e73e00" }}
                >
                  Finished
                </button>
              </>
            )}
          </motion.div>
          <div className="race-items">
            {array.map((r, index) => (
              <RaceItem
                key={index}
                poolAddress={r.poolAddress}
                country={r.country}
                name={r.name}
                racetrack={r.racetrack}
                date={{
                  startDay: r.date.startDay,
                  startMonth: r.date.startMonth,
                  endDay: r.date.endMonth,
                  endMonth: r.date.endMonth,
                }}
                status={r.status}
                image={r.image}
              />
            ))}
          </div>
        </div>
      </div>
      <Navigation id={3} />
    </div>
  );
}
