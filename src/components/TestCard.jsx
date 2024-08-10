import React from "react";
import { ListItemText, Typography } from "@mui/material";
import { useTheme } from "../constants/Theme";
import Rating from "@mui/material/Rating";

export default function TestCard({ test }) {
  const { colors } = useTheme();
  return (
    <div className="test-card">
      <div className="test-header">
        {/* <div style={{ backgroundColor: "black", borderRadius: "50%" }}> */}
        <img src={test.img} />
        {/* </div> */}
        <ListItemText
          primary={test.name}
          secondary={test.relation + ", " + test.company}
          sx={{
            "& .MuiTypography-root": { color: colors.onSecondary },
          }}
        />
      </div>
      <div className="rating">
        <Rating
          defaultValue={test.rating}
          precision={0.1}
          readOnly
          sx={{
            "& .MuiRating-iconFilled": {
              color: colors.onSecondary, // Color for filled stars
            },
            "& .MuiRating-iconEmpty": {
              color: colors.onSecondary, // Color for unfilled stars
            },
          }}
        />
        <p>{test.rating}</p>
      </div>
      <i class="fa fa-quote-right quote"></i>
      <Typography component={"div"} variant={"p"} sx={{ marginTop: "15px" }}>
        {test.msg}
      </Typography>
    </div>
  );
}
