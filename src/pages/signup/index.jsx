import React from "react";
import FormBase from "../../components/form/formBase";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";

const Signup = ({ history }) => {
  // Receive history as prop
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/signUp",
          values
        );
        console.log("Response:", response);
        alert("Signup successful!");
        resetForm();
        history.push("/login"); // Redirect to login page
      } catch (error) {
        console.error("Error:", error.response.data.message);
        alert("Signup failed: " + error.response.data.message);
      }
    },
  });

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
        handleSubmit={formik.handleSubmit}
        inputFields={[
          {
            id: "firstName",
            name: "firstName",
            type: "text",
            label: "First Name",
            error: formik.touched.firstName && Boolean(formik.errors.firstName),
            helperText: formik.touched.firstName && formik.errors.firstName,
            value: formik.values.firstName,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
          },
          {
            id: "lastName",
            name: "lastName",
            type: "text",
            label: "Last Name",
            error: formik.touched.lastName && Boolean(formik.errors.lastName),
            helperText: formik.touched.lastName && formik.errors.lastName,
            value: formik.values.lastName,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
          },
          {
            id: "email",
            name: "email",
            type: "email",
            label: "Email",
            error: formik.touched.email && Boolean(formik.errors.email),
            helperText: formik.touched.email && formik.errors.email,
            value: formik.values.email,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
          },
          {
            id: "password",
            name: "password",
            type: "password",
            label: "Password",
            error: formik.touched.password && Boolean(formik.errors.password),
            helperText: formik.touched.password && formik.errors.password,
            value: formik.values.password,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
          },
        ]}
      />
    </Box>
  );
};

export default Signup;
