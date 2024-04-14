import React, { useState } from "react";
import FormBase from "../../components/form/formBase";
import ForgotPassword from "../../components/ForgetPassword"; // Import the Forgot Password Component
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import { Box, Link } from "@mui/material";
import axios from "axios"; // Import Axios for HTTP requests

const Login = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false); // State to toggle display of Forgot Password component
  const [showEmailForm, setShowEmailForm] = useState(false); // State to toggle display of email form
  const [emailForOTP, setEmailForOTP] = useState(""); // State to store the email for OTP
  const [otp, setOtp] = useState(""); // State to store the OTP entered by the user

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post("http://localhost:3000/api/signIn", {
          email: values.email,
          password: values.password,
          emailforverification: values.email,
        });
        console.log(response.data); // Log the response from the server
        resetForm();
        setShowEmailForm(true); // Show the email form
      } catch (error) {
        // Handle login error
        alert(error.response.data.message);
      }
    },
  });

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleSendOTP = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/signIn", {
        emailforverification: emailForOTP, // Use the email entered by the user
      });
      console.log(response.data); // Log the response from the server
      // Handle success, e.g., show a success message
    } catch (error) {
      // Handle error
      alert(error.response.data.message);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/signInverify",
        {
          email: emailForOTP,
          otp: otp,
        }
      );
      console.log(response.data); // Log the response from the server
      // Handle success, e.g., navigate to dashboard
    } catch (error) {
      // Handle error
      alert(error.response.data.message);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "120vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "25%",
          zIndex: 1, // Set a higher z-index for the form box
        }}
      >
        {!showEmailForm ? (
          <FormBase
            title="Login"
            buttonText="Log In"
            LinkDesc="Don't have an account?"
            linkText="Sign Up"
            linkTo="/signUp"
            handleSubmit={formik.handleSubmit}
            inputFields={[
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
                error:
                  formik.touched.password && Boolean(formik.errors.password),
                helperText: formik.touched.password && formik.errors.password,
                value: formik.values.password,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
              },
            ]}
          />
        ) : (
          <Box>
            <p>
              Please enter the email address where you want to receive the OTP:
            </p>
            <input
              type="email"
              value={emailForOTP}
              onChange={(e) => setEmailForOTP(e.target.value)}
            />
            <button onClick={handleSendOTP}>Send OTP</button>
            <p>Enter OTP:</p>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerifyOTP}>Verify OTP</button>
          </Box>
        )}
        <Box
          sx={{
            textAlign: "center",
            mt: !showEmailForm ? -3 : 0, // Hide the link when email form is shown
            zIndex: 2,
          }}
        >
          {!showEmailForm && ( // Render the link only when email form is not shown
            <Link href="" onClick={handleForgotPasswordClick}>
              Forgot Password?
            </Link>
          )}
        </Box>
      </Box>
      {showForgotPassword && <ForgotPassword />}
    </Box>
  );
};

export default Login;
