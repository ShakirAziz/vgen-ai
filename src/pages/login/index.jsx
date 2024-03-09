import { Box } from "@mui/material";
import React from "react";
import FormBase from "../../components/form/formBase";

const Login = () => {
  return (
    <Box sx={{ backgroundColor: "#13082A" }}>
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
          title="Login"
          buttonText="Log In"
          LinkDesc="Don't have an account?"
          linkText="Sign Up"
          linkTo="/signUp"
          inputFields={[
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
    </Box>
  );
};

export default Login;
