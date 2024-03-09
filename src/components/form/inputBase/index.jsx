import { TextField } from "@mui/material";
import React from "react";

const InputBase = ({ ...props }) => {
  return (
    <div>
      <TextField
        {...props}
        variant="outlined"
        fullWidth
        size="medium"
        autoComplete="false"
        sx={{
          border: "1px solid #fff",
          borderRadius: "5px",
          color: "rgba(255, 255, 255, 0.45)",
          "&::placeholder": {
            paddingLeft: "20px",
          },
        }}
      />
    </div>
  );
};

export default InputBase;
