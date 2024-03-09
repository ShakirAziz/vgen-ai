import React from "react";
import FormBase from "../../components/form/formBase";
import { Box } from "@mui/material";

const Signup = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "25%",
      }}
    >
      <FormBase
        title="Register"
        buttonText="Register"
        LinkDesc="Already a member?"
        linkText="Login"
        linkTo="/login"
        inputFields={[
          { id: "username", name: "username", type: "text", label: "Username" },
          { id: "email", name: "email", type: "email", label: "Email" },
          {
            id: "password",
            name: "password",
            type: "password",
            label: "Password",
          },
        ]}
      />
    </Box>
  );
};

export default Signup;
