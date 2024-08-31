import React from "react";
import { useTheme } from "../constants/Theme";
import { Typography } from "@mui/material";
import Input from "../components/Input";
import Achievement from "../components/Achievement";
import StarIcon from "@mui/icons-material/Star";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import HighlightedService from "../components/HighlightedService";
import {
  DarkModeOutlined,
  LanguageOutlined,
  MobileFriendlyOutlined,
} from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Contact({ id }) {
  const { colors, delay, transition } = useTheme();
  return (
    <div className="wrapper observer" id={id}>
      <div className="wrapper-content-simple">
        <div className="contact">
          <div
            className="wrapper-header"
            style={{
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              textAlign: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={transition}
            >
              <Typography
                component={"div"}
                variant="h3"
                style={{ maxWidth: "600px" }}
              >
                Have an Awesome Project Idea?{" "}
                <span style={{ color: colors?.primary, fontWeight: "bold" }}>
                  Let's Discuss
                </span>
              </Typography>
            </motion.div>
          </div>
          <Input
            color={colors?.secondary}
            iconBGColor={colors?.onSecondary}
            text={"Send us You Email. We Will Contact You ASAP."}
            buttonText={"Send"}
          />
          <div className="mail-achievements">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ ...transition, delay: (index + 1) * 0.2 }}
              >
                <Achievement
                  key={index}
                  icon={achievement.icon}
                  desc={achievement.desc}
                />
              </motion.div>
            ))}
          </div>
          <div className="highlighted-services-section">
            {highlightedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ ...transition, delay: (index + 1) * 0.2 }}
              >
                <HighlightedService key={index} service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const achievements = [
  {
    icon: <StarIcon sx={{ width: "20px", height: "20px" }} />,
    desc: "4.9/5 Average Ratings",
  },
  {
    icon: <AccountBalanceIcon sx={{ width: "20px", height: "20px" }} />,
    desc: "10+ Projects Completed",
  },
  {
    icon: <LibraryAddCheckIcon sx={{ width: "20px", height: "20px" }} />,
    desc: "Prestigious Institute Degrees",
  },
];

const highlightedServices = [
  {
    icon: (
      <DarkModeOutlined
        sx={{ width: "30px", height: "30px", color: "var(--on-secondary)" }}
      />
    ),
    heading: "UI/UX Development",
    desc: "Create user-friendly and visually appealing interfaces for websites, mobile apps, or software products.",
  },
  {
    icon: (
      <LanguageOutlined
        sx={{ width: "30px", height: "30px", color: "var(--on-secondary)" }}
      />
    ),
    heading: "Web Development",
    desc: "Create user-friendly and visually appealing interfaces for websites, mobile apps, or software products.",
  },
  {
    icon: (
      <MobileFriendlyOutlined
        sx={{ width: "30px", height: "30px", color: "var(--on-secondary)" }}
      />
    ),
    heading: "Mobile Development",
    desc: "Create user-friendly and visually appealing interfaces for websites, mobile apps, or software products.",
  },
];
