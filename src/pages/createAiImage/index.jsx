import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { Picker } from "emoji-mart";

const ImageGenerator = () => {
  const classes = useStyles();
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [randomImageUrl, setRandomImageUrl] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get(
        "https://source.unsplash.com/random/200x200"
      );
      setRandomImageUrl(response.request.responseURL);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/text-to-image",
        { prompt: prompt } // Send the 'prompt' data as the request body
      );
      setImageUrl(response.data.message);
      setRandomImageUrl("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const letterCount = prompt.length;

  return (
    <>
      <Header />
      <Box className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          AI Image Generator
        </Typography>
        {randomImageUrl && (
          <div>
            <img
              src={randomImageUrl}
              alt="Random"
              style={{ maxWidth: "100%" }}
            />
          </div>
        )}
        {imageUrl && (
          <div>
            <h2 style={{ color: "#fff" }}>Generated Image:</h2>
            <img
              src={imageUrl}
              alt="Generated"
              style={{ maxWidth: "100%", color: "#fff" }}
            />
          </div>
        )}
        <Box className={classes.formContainer}>
          <input
            type="text"
            placeholder="Enter prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className={classes.inputField}
          />
          {showEmojiPicker && (
            <Picker
              onSelect={(emoji) => setPrompt(prompt + emoji.native)}
              set="google"
              title="Pick your emoji"
              emoji="point_up"
              style={{
                position: "absolute",
                bottom: "calc(100% + 10px)",
                right: 50,
                zIndex: 3,
              }}
            />
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Generate Image"}
          </Button>
          <Typography
            className={classes.letterCount}
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            {letterCount} letters
          </Typography>{" "}
        </Box>
      </Box>
    </>
  );
};

export default ImageGenerator;

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    height: "100vh",
    marginTop: "30px!important",
  },
  title: {
    marginBottom: "2rem !important",
    color: "#fff",
    textShadow: "2px  2px #000",
  },
  formContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginTop: "1rem !important",
  },
  inputField: {
    marginRight: "1rem",
    padding: "0.5rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "500px",
    height: "42px !important",
  },
  letterCount: {
    position: "absolute",
    left: "2px !important",
    top: "50px !important",
    color: "#fff !important",
    cursor: "pointer",
  },
});
