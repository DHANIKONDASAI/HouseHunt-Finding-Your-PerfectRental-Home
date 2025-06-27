// src/pages/Home.js
import React from "react";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/023/307/449/small/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        textAlign: "center",
        padding: "20px",
        color: "#fff",
        backdropFilter: "blur(4px)",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          color: "#ffffff", // pure white text
          textShadow: "2px 2px 6px rgba(0, 32, 96, 0.7)", // deep navy blue shadow
        }}
      >
        Welcome to HouseHunt
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#f0f8ff", // soft bluish-white (AliceBlue)
          textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)", // black shadow for clarity
        }}
      >
        Looking for a home or have one to share? Start here!
      </p>
    </div>
  );
};

export default Home;
