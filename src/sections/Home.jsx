import { FormatQuote, Star } from "@mui/icons-material";
import { Chip } from "@mui/material";
import { Avatar } from "../assets/Index.jsx";

function Home() {
  return (
    <div className="home">
      <Chip className="home-chip" label="Hello!" variant="outlined" />
      <p className="home-quote">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
        I'm <span>Adil</span>, <br /> Front End Developer
      </p>
      <div className="home-rating">
        <div className="home-rating-quote1">
          <FormatQuote className="home-icon" />
          <p>
            Adil’s exceptional Front End skills ensure our website’s success.
            <br />
            Highly Recommended.
          </p>
        </div>
        <div className="home-rating-quote2">
          <div style={{ display: "flex", gap: "1px" }}>
            <Star className="home-icon" />
            <Star className="home-icon" />
            <Star className="home-icon" />
            <Star className="home-icon" />
            <Star className="home-icon" />
          </div>
          <p>All projects done with full client satisfaction.</p>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-bg"></div>
        <img className="hero" src={Avatar}  alt={"Avatar"} />
      </div>
    </div>
  );
}

export default Home;
