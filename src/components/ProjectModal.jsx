import React, { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import { MacbookPro } from "react-device-mockups";
import { Typography, Modal, Box, Backdrop } from "@mui/material";
import VPCard from "./VPCard";
import { useSpring, animated } from "@react-spring/web";
import "html5-device-mockups/dist/device-mockups.min.css";

const Fade = forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "transparent",
  borderRadius: "30px",
  //   boxShadow: 24,
  p: 4,
};

function ProjectModal({ name, image, screen }) {
  const [open, setOpen] = useState(false);
  const [src] = useState(screen);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Button to trigger modal */}
      <div
        style={{ textAlign: "center", marginTop: "50px" }}
        onClick={handleOpen}
      >
        <VPCard key={name} name={name} image={image} />
      </div>

      {/* Modal */}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
        className="project-element"
        style={{ zIndex: "999999" }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            {/* MacbookPro Mockup Section */}
            <Typography
              id="spring-modal-title"
              variant="h3"
              component="h2"
              style={{
                marginBottom: "20px",
                color: "var(--primary)",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {name}
            </Typography>
            {/* <Typography
                id="spring-modal-description"
                variant="body1"
                component="div"
                style={{ marginBottom: "20px" }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                magni a cupiditate error eaque consectetur ratione dolore
                molestiae perferendis enim alias suscipit repellendus deleniti
                voluptate earum illo quibusdam, quo similique?
              </Typography> */}
            <MacbookPro width={900} orientation="landscape" color="black">
              <video
                title="showcase"
                src={src}
                autoPlay
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </MacbookPro>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ProjectModal;
