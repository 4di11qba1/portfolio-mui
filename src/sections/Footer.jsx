import React from "react";
import { Typography, Button, Divider } from "@mui/material";
import { useTheme } from "../constants/Theme";
import Logo from "../components/Logo";
import Input from "../components/Input";
import { Send } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Footer({ sections, id }) {
  const { colors, windowWidth, delay, transition } = useTheme();
  return (
    <div
      className="wrapper-content observer"
      style={{
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
        marginLeft: windowWidth > 1920 ? "calc((100vw - 1920px) / 2)" : "",
      }}
      id={id}
    >
      <div className="footer">
        <div
          className="wrapper-header"
          style={{
            alignItems: "center",
            gap: "20px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ delay: delay, ...transition }}
          >
            <Typography component={"div"} variant="h3">
              <span style={{ color: colors?.primary, fontWeight: "bold" }}>
                Let's Connect
              </span>
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ delay: delay, ...transition }}
          >
            <Button
              variant="contained"
              className="button wrapper-header-button"
              style={{
                backgroundColor: "var(--on-secondary)",
                color: "var(--secondary)",
                height: "50px",
                width: "150px",
                fontSize: "1rem",
              }}
            >
              {" "}
              Hire Me{" "}
            </Button>
          </motion.div>
        </div>
        <Divider
          flexItem
          orientation="horizontal"
          sx={{ borderWidth: "0.5px", backgroundColor: "var(--secondary)" }}
        />
        <div className="footer-content">
          <div className="footer-main footer-column">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ delay: delay + 0.3, ...transition }}
            >
              <Logo />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ delay: delay + 0.5, ...transition }}
            >
              <Typography
                component={"div"}
                variant="p"
                sx={{ fontWeight: "normal", color: colors?.secondary }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                esse nam, dolore tenetur pariatur repudiandae consequatur
                molestiae, impedit quam consectetur at provident? Dolor,
                architecto! Nam tempora ipsum vitae est veritatis. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Culpa esse nam,
                dolore tenetur pariatur repudiandae consequatur molestiae,
                impedit quam consectetur at provident? Dolor, architecto! Nam
                tempora ipsum vitae est veritatis.
              </Typography>
            </motion.div>
          </div>
          <motion.div
            className="footer-secondary"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: delay + 0.3, ...transition }}
          >
            <div className="footer-nav footer-column">
              <Typography
                component={"div"}
                variant="h6"
                sx={{ color: colors?.primary }}
              >
                Navigation
              </Typography>
              {sections.map(
                (section, index) =>
                  section.name && (
                    <motion.a
                      key={index}
                      style={{ fontWeight: "normal", cursor: "pointer" }}
                      href={section.path}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{
                        delay: delay + 0.3 + index * 0.2,
                        ...transition,
                      }}
                    >
                      {section.name}
                    </motion.a>
                  )
              )}
            </div>
            <motion.div
              className="footer-contact footer-column"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ delay: delay + 0.3, ...transition }}
            >
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ delay: delay + 0.5, ...transition }}
              >
                <Typography
                  component={"div"}
                  variant="h6"
                  sx={{ color: colors?.primary }}
                >
                  Contact
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ delay: delay + 0.7, ...transition }}
              >
                <Typography component={"div"} variant="p">
                  +92 316 0046262
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ delay: delay + 0.9, ...transition }}
              >
                <Typography component={"div"} variant="p">
                  adil.iqbal756@gmail.com
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ delay: delay + 1.1, ...transition }}
              >
                <Typography component={"div"} variant="">
                  Lahore, 54000
                </Typography>
              </motion.div>
              <Input
                color={colors?.secondary}
                bgColor={colors?.onSecondary}
                iconBGColor={colors?.secondaryContainer}
                text={"Get Latest Information."}
                icon={<Send />}
                fontSize={"10px"}
                delay={delay + 1.3}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
