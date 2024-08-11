import React from "react";
import { Typography, Button, Divider } from "@mui/material";
import { useTheme } from "../constants/Theme";
import Logo from "../components/Logo";
import Input from "../components/Input";
import { Send } from "@mui/icons-material";

export default function Footer({ sections }) {
  const { colors } = useTheme();
  return (
    <div
      className="wrapper-content"
      style={{ borderBottomLeftRadius: "0", borderBottomRightRadius: "0" }}
    >
      <div className="footer">
        <div
          className="wrapper-header"
          style={{
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Typography component={"div"} variant="h3">
            <span style={{ color: colors?.primary, fontWeight: "bold" }}>
              Let's Connect
            </span>
          </Typography>
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
        </div>
        <Divider
          flexItem
          orientation="horizontal"
          sx={{ borderWidth: "0.5px", backgroundColor: "var(--secondary)" }}
        />
        <div className="footer-content">
          <div className="footer-main footer-column">
            <Logo />
            <Typography
              component={"div"}
              variant="p"
              sx={{ fontWeight: "normal" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              esse nam, dolore tenetur pariatur repudiandae consequatur
              molestiae, impedit quam consectetur at provident? Dolor,
              architecto! Nam tempora ipsum vitae est veritatis. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Culpa esse nam,
              dolore tenetur pariatur repudiandae consequatur molestiae, impedit
              quam consectetur at provident? Dolor, architecto! Nam tempora
              ipsum vitae est veritatis.
            </Typography>
          </div>
          <div className="footer-secondary">
            <div className="footer-nav footer-column">
              <Typography
                component={"div"}
                variant="h6"
                sx={{ color: colors?.primary }}
              >
                Navigation
              </Typography>
              {sections.map(
                (section) =>
                  section.name && (
                    <>
                      <a
                        style={{ fontWeight: "normal", cursor: "pointer" }}
                        href={section.path}
                      >
                        {section.name}
                      </a>
                    </>
                  )
              )}
            </div>
            <div className="footer-contact footer-column">
              <Typography
                component={"div"}
                variant="h6"
                sx={{ color: colors?.primary }}
              >
                Contact
              </Typography>
              <Typography component={"div"} variant="p">
                +92 316 0046262
              </Typography>
              <Typography component={"div"} variant="p">
                adil.iqbal756@gmail.com
              </Typography>
              <Typography component={"div"} variant="">
                Lahore, 54000
              </Typography>
              <Input
                color={colors?.secondary}
                bgColor={colors?.onSecondary}
                iconBGColor={colors?.secondaryContainer}
                text={"Get Latest Information."}
                icon={<Send />}
                fontSize={"10px"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
