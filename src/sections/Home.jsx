import { FormatQuote, Star } from "@mui/icons-material";
import { Chip } from "@mui/material";
import { Avatar } from "../assets/Index.jsx";
import { motion } from "framer-motion";
import { useTheme } from "../constants/Theme.jsx";

function Home({ id }) {
  const { delay, transition } = useTheme();
  return (
    <div className="home observer" id={id}>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{ opacity: 0, y: -100 }}
        transition={transition}
      >
        <Chip className="home-chip" label="Hello!" variant="outlined" />
      </motion.div>
      <motion.p
        className="home-quote"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={transition}
        exit={{ opacity: 0, scale: 0.5 }}
      >
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        We're <span>NexEnt Labs</span>, <br /> your top choice for innovative
        software solutions!
      </motion.p>
      <div className="home-rating">
        <motion.div
          className="home-rating-quote1"
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -500 }}
          transition={transition}
        >
          <FormatQuote className="home-icon" />
          <p>
            NexEnt team's exceptional skills ensure our website’s success.
            <br />
            Highly Recommended.
          </p>
        </motion.div>
        <motion.div
          className="home-rating-quote2"
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={transition}
        >
          <div style={{ display: "flex", gap: "1px" }}>
            <Star className="home-icon" />
            <Star className="home-icon" />
            <Star className="home-icon" />
            <Star className="home-icon" />
            <Star className="home-icon" />
          </div>
          <p>All projects done with full client satisfaction.</p>
        </motion.div>
      </div>
      <div className="hero-section">
        <motion.div
          className="hero-bg"
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.5 }}
          transition={transition}
        ></motion.div>
        <motion.img
          className="hero"
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          exit={{ y: 500 }}
          transition={transition}
          src={Avatar}
          alt={"Avatar"}
        />
      </div>
    </div>
  );
}

export default Home;
