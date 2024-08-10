import { ArrowForward } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function ServiceCard({ key, heading, img, link }) {
  const nav = useNavigate();
  return (
    <div className="services-card">
      <div className="services-card-title">
        <Typography component={"div"} variant="h6">
          {heading}
        </Typography>
      </div>
      <Divider
        flexItem
        oritentation="horizontal"
        sx={{ border: "0.8px solid var(--card-border)" }}
      />
      <div className="services-card-img-wrapper">
        <img className="services-card-img" src={img} />
      </div>
      <div className="services-card-button" onClick={() => nav(link)}>
        <ArrowForward sx={{ width: "50%", height: "50%" }} />
      </div>
    </div>
  );
}

export default ServiceCard;
