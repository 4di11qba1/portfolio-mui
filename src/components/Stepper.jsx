import { IconButton, MobileStepper } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useTheme } from "../constants/Theme";

// eslint-disable-next-line react/prop-types
function Stepper({ position, handleNext, handlePrev, steps }) {
    const { colors } = useTheme();
    return (
        <div className="stepper">
            <MobileStepper
                variant="progress"
                steps={steps}
                position="static"
                activeStep={position}
                className="stepper"
                sx={{
                    "& .MuiLinearProgress-root": {
                        borderRadius: "5px",
                        height: "7px",
                        width: "100%",
                    },
                    "& .MuiLinearProgress-determinate": {
                        backgroundColor: "var(--secondary)",
                        "& .MuiLinearProgress-bar": {
                            backgroundColor: "var(--on-secondary)",
                        },
                    },
                }}
                nextButton={
                    <IconButton onClick={handleNext}>
                        <ArrowForward sx={{ color: colors?.secondary }} />
                    </IconButton>
                }
                backButton={
                    <IconButton onClick={handlePrev}>
                        <ArrowBack sx={{ color: colors?.secondary }} />
                    </IconButton>
                }
            />
        </div>
    );
}

export default Stepper;
