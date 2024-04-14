import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Paper, Stack, Typography } from "@mui/material";
import InputBase from "../inputBase";
import Button from "../../button";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const FormBase = ({
  title,
  buttonText,
  linkText,
  linkTo,
  LinkDesc,
  inputFields,
  handleSubmit,
}) => {
  const classes = useStyles();

  // Function to initiate Google OAuth
  const handleGoogleSignIn = () => {
    // Redirect the user to the backend route responsible for initiating Google OAuth
    window.location.href = "/auth/google";
  };

  return (
    <Paper elevation={4} className={classes.formContainer}>
      <Typography className={classes.formCaption}>{title}</Typography>
      <form
        className={classes.formBase}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        {inputFields.map((value, index) => (
          <InputBase
            key={index}
            label={value.label}
            name={value.name}
            type={value.type}
            value={value.value}
            onChange={value.onChange}
            error={value.error}
            helperText={value.helperText}
            onBlur={value.onBlur}
          />
        ))}
        <Box className={classes.formActions}>
          <Button
            variant="contained"
            type="submit"
            onClick={(e) => console.log("submited")}
          >
            {buttonText}
          </Button>
          <Typography className={classes.middleText}>OR</Typography>
          <Button
            className={classes.button}
            onClick={handleGoogleSignIn} // Call the function to initiate Google OAuth
            startIcon={<FcGoogle />}
          >
            Sign in with Google
          </Button>

          <Stack direction="row" gap={1} justifyContent="center">
            <Typography>{LinkDesc}</Typography>
            <Link to={linkTo}>{linkText}</Link>
          </Stack>
        </Box>
      </form>
    </Paper>
  );
};

export default FormBase;

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: "2rem",
    textAlign: "center",
    width: "100%",
  },
  formCaption: {
    fontSize: "1.875rem !important",
    fontWeight: "700 !important",
    marginBottom: "1rem !important",
  },
  formBase: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1.5rem",
  },
  formActions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "0.5rem",
  },
  button: {
    border: "2px solid #00000085 !important",
    borderRadius: "20px !important",
    textDecoration: "none !important",
    color: "black !important",
    fontSize: "15px !important",
    textTransform: "none !important",
  },
  middleText: {
    margin: "10px 0px !important",
  },
}));
