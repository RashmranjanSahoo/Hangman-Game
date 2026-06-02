# 🎮 Hangman Game

A clean, interactive, and responsive web-based Hangman game built using vanilla web technologies. This project focuses on efficient DOM manipulation, dynamic state management, and user-centric frontend logic.

## 🚀 Live Demo
👉 **[Play the Game Live Here](https://rashmranjansahoo.github.io/Hangman-Game/)** *(Update this link with your GitHub Pages deployment if active!)*

---

## 🛠️ Tech Stack

* **Structure:** HTML5
* **Styling:** CSS3 (Flexbox/Grid, responsive layout design)
* **Logic & Engine:** Vanilla JavaScript (ES6+)

---

## ✨ Features

* **Dynamic Word Generation:** Randomly selects words for a fresh gameplay experience every round.
* **Real-time State Management:** Tracks correctly/incorrectly guessed letters and dynamically updates the visual interface.
* **Win/Loss Mechanics:** Accurately detects when a user has successfully guessed the word or run out of attempts.
* **Fully Responsive:** Optimized for both desktop physical keyboards and mobile touch views.
* **Interactive Virtual Keyboard:** On-screen interactive keys that disable themselves once clicked to enhance user experience.

---

## 💡 Engineering & Learning Outcomes

Building this project from scratch helped solidify core engineering principles:
1.  **Decoupled Architecture:** Keeping game state mechanics separate from basic DOM rendering logic to maintain clean, reusable functions.
2.  **Event Handling:** Implementing robust event listeners capable of capturing both hardware keyboard events and virtual onscreen clicks smoothly.
3.  **Conditional Rendering:** Dynamically injecting elements and manipulating structural classes based on quick game engine changes.

---

## 📂 Project Structure

```text
├── index.html       # Main structure & DOM layout
├── style.css        # Responsive styling and layout designs
└── script.js        # Core game engine & state controller
