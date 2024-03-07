import { Button as MuiButton } from "@mui/material";
import { withStyles } from "@mui/styles";

const Button = withStyles((theme) => ({
  root: {
    borderRadius: 5,
    fontSize: "16px !important",
    boxShadow: "none !important",
  },

  contained: {
    fontFamily: "Clash Display,sans-serif !important",
    background: "linear-gradient(90deg, #C094DC 0%, #63B5E4 100%)",
    fontWeight: 300 + " !important",
    letterSpacing: 1.6,
  },
  outlined: {
    position: "relative",
    fontWeight: 300 + " !important",
    "&:before": {
      content: "''",
      padding: "2px",
      borderRadius: 3,
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: "linear-gradient(45deg, #BC96DD, #67B4E4)",
      "-webkit-mask":
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      "-webkit-mask-composite": "destination-out",
    },
  },
}))(MuiButton);

export default Button;
