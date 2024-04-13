import React from "react";
import FormBase from "../../components/form/formBase";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import axios from "axios"; // Import Axios for HTTP requests

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "", // Corrected typo here
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: async (values, action) => {
      try {
        // Send form data to backend
        const response = await axios.post(
          "http://localhost:3000/api/signUP",
          values
        ); // Assuming your backend API endpoint is /api/signup
        console.log("Response:", response); // Log response from server
        alert("Signup successful!"); // Show success message
        action.resetForm(); // Reset the form
      } catch (error) {
        console.error("Error:", error); // Log any errors
        alert("Signup failed. Please try again."); // Show error message
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
            id: "lastName", // Corrected typo here
            name: "lastName", // Corrected typo here
            type: "text",
            label: "Last Name",
            error: formik.touched.lastName && Boolean(formik.errors.lastName), // Corrected typo here
            helperText: formik.touched.lastName && formik.errors.lastName, // Corrected typo here
            value: formik.values.lastName, // Corrected typo here
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
