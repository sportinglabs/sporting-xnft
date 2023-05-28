import { motion } from "framer-motion";

export default function GarageItem(props: {
  mint: string;
  name: string;
  image: string;
  specs: string[];
}) {
  const anchor = "/garage/item?mint=" + props.mint;
  return (
    <a href={anchor}>
      <motion.div
        className="garage-item"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.8,
        }}
        viewport={{ once: false }}
      >
        <div className="garage-item-content">
          <div className="garage-item-cover">
            <img src={props.image} alt="nft" />
          </div>
          <div className="garage-item-details">
            <div className="garage-item-name">{props.name}</div>
            <div className="garage-item-specs">
              <div className="garage-item-spec">
                <div className="garage-item-key">Engine</div>
                <div className="garage-item-value">{props.specs[0]}</div>
              </div>
              <div className="garage-item-spec">
                <div className="garage-item-key">Driver</div>
                <div className="garage-item-value">{props.specs[1]}</div>
              </div>
              <div className="garage-item-spec">
                <div className="garage-item-key">Cockpit</div>
                <div className="garage-item-value">{props.specs[2]}</div>
              </div>
              <div className="garage-item-spec">
                <div className="garage-item-key">Front Wing</div>
                <div className="garage-item-value">{props.specs[3]}</div>
              </div>
              <div className="garage-item-spec">
                <div className="garage-item-key">Rear Wing</div>
                <div className="garage-item-value">{props.specs[4]}</div>
              </div>
              <div className="garage-item-spec">
                <div className="garage-item-key">Tires</div>
                <div className="garage-item-value">{props.specs[5]}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </a>
  );
}
