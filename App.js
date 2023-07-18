import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🫶🏻": "HeartHands",
  "❤️": "RedHeart",
  "💀": "Skull",
  "🌘": "Waning Crescent Moon",
  "🔥": "Fire",
  "🥹": "Face Holding Back Tears",
  "🫠": "Melting Face"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    const userInput = event.target.value;
    let meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database.";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    const meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Out!</h1>
      <input onChange={emojiInputHandler} />
      <h2>Meaning: {meaning}</h2>

      <h3>Emojis We Know</h3>
      {emojisWeKnow.map((emoji) => (
        <span
          key={emoji}
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.3rem", cursor: "pointer" }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
