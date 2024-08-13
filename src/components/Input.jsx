import React from "react";
import { MailOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function Input({
  width,
  bgColor,
  iconBGColor,
  color,
  icon,
  buttonText,
  text,
  fontSize,
}) {
  return (
    <div
      className="wrapper-content mail-input"
      style={{ width: width, backgroundColor: bgColor }}
    >
      <div
        className="icon-button"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: iconBGColor,
          color: color,
        }}
      >
        <MailOutlined
          className="icon"
          sx={{
            width: "30px",
            height: "30px",
          }}
        />
      </div>
      <input
        className="mail-placeholder"
        placeholder={text}
        style={{ fontSize: fontSize }}
      />
      {icon ? (
        <div
          className="icon-button"
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: iconBGColor,
            color: color,
          }}
        >
          {icon}
        </div>
      ) : (
        buttonText && (
          <Button
            variant="contained"
            className="button"
            style={{
              backgroundColor: "var(--on-secondary)",
              color: "var(--secondary)",
              height: "40px",
              width: "80px",
              fontSize: "1rem",
            }}
          >
            {" "}
            {buttonText}{" "}
          </Button>
        )
      )}
    </div>
  );
}
