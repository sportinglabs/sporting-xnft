import Navigation from "../../components/general/Navigation";
import Rank from "../../components/general/Rank";
import RaceItem from "../../components/race/RaceItem";
import { motion } from "framer-motion";

export default function Race() {
  
  const array = [
    {
      poolAddress: "TheAddressOfTheStakingPool",
      country: "Monaco",
      name: "F1 Monaco GP",
      racetrack: "Circuit de Monaco",
      date: { day: 1, month: 1, year: 2024 },
      status: "expired",
      image:
        "https://raw.githubusercontent.com/them2dt/sl-resources/main/racemaps/abu-dhabi.svg",
    },
    {
      poolAddress: "TheAddressOfTheStakingPool",
      country: "Monaco",
      name: "F1 Monaco GP",
      racetrack: "Circuit de Monaco",
      date: { day: 1, month: 1, year: 2024 },
      status: "live",
      image:
        "https://raw.githubusercontent.com/them2dt/sl-resources/main/racemaps/abu-dhabi.svg",
    },
    {
      poolAddress: "TheAddressOfTheStakingPool",
      country: "Monaco",
      name: "F1 Monaco GP",
      racetrack: "Circuit de Monaco",
      date: { day: 1, month: 1, year: 2024 },
      status: "upcoming",
      image:
        "https://raw.githubusercontent.com/them2dt/sl-resources/main/racemaps/abu-dhabi.svg",
    },
  ];
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
            races
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
                  day: r.date.day,
                  month: r.date.month,
                  year: r.date.year,
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
