import React, { useState, useEffect } from "react";
import "./herostyle.css";

export default function Hero() {
  const [currentText, setCurrentText] = useState(""); // Current text being typed
  const [isDeleting, setIsDeleting] = useState(false); // Whether we are deleting
  const [loopIndex, setLoopIndex] = useState(0); // Tracks which string to display
  const [typingSpeed, setTypingSpeed] = useState(100); // Typing speed

  const textArray = ["Full Stack Developer", "Tech Enthusiast", "Software Developer", "Bootcamp Graduate", "Rock Climber", "TCG Collecter and Player", "Outdoorsman"]; // Pre-defined text

  useEffect(() => {
    const handleTyping = () => {
      const currentString = textArray[loopIndex % textArray.length]; // Loop through textArray

      if (isDeleting) {
        // Delete characters
        setCurrentText((prev) => prev.slice(0, prev.length - 1));
      } else {
        // Add characters
        setCurrentText((prev) => currentString.slice(0, prev.length + 1));
      }

      // Check if typing/deleting is done
      if (!isDeleting && currentText === currentString) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false); // Switch to typing next string
        setLoopIndex((prev) => prev + 1); // Move to the next string
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer); // Cleanup timer
  }, [currentText, isDeleting, loopIndex, typingSpeed]);

  return (
    <div id="hero" className="heroContainer d-flex align-items-center justify-content-between">
      {/* Left Side - Text Content */}
      <div className="textContainer">
        <p className="fs-3 py-5">Welcome to my portfolio.</p>
        <p className="introText">I'm Kenjy Jap</p>
        <p className="subText fs-3 py-5">{currentText}<span className="cursor">|</span></p>
      </div>

      {/* Right Side - Image */}
      <div className="imageContainer">
        <img
          src="/images/gif/pixel-camp-art.gif"
          alt="Pixel art of someone camping"
          className="heroImage"
        />
      </div>
    </div>
  );
}
