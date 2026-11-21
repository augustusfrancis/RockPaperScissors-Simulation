# Rock Paper Scissors Simulation

A simple, interactive browser-based Rock Paper Scissors game built with vanilla JavaScript, HTML, and CSS. Play against the computer and track your performance with persistent score tracking.

## Features

- **Interactive Gameplay**: Click on rock, paper, or scissors buttons to play against the computer
- **Auto Play Mode**: Automatically simulate games every second with randomly selected moves
- **Random Computer Moves**: Computer randomly selects its move for fair gameplay
- **Live Results**: See the outcome of each round instantly
- **Visual Feedback**: Display both player and computer moves with emoji icons
- **Score Tracking**: Wins, losses, and ties are tracked throughout the session
- **Persistent Storage**: Scores are saved in browser's local storage and persist across sessions
- **Reset Functionality**: Clear all scores with a single click
- **Responsive Design**: Clean, centered layout with a dark theme

## Project Structure

```
RockPaperScissors-Simulation/
├── images/
│   ├── rock-emoji.png
│   ├── paper-emoji.png
│   └── scissors-emoji.png
├── scripts/
│   └── RockPaperScissors.js
├── styles/
│   └── RockPaperScissors.css
├── index.html
└── README.md
```

## File Descriptions

- **index.html**: Main HTML file containing the game structure
- **RockPaperScissors.js**: JavaScript logic for game mechanics, score tracking, and local storage
- **RockPaperScissors.css**: Styling for the game interface with dark theme and centered layout
- **images/**: Contains emoji icons for rock, paper, and scissors

## How to Run

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Click on any move button to start playing manually
4. Click "Auto Play" to watch the computer play against itself automatically (games run every second)
5. Click "Stop Auto Play" to pause the automatic gameplay
6. Your scores will be automatically saved

**Or visit the live demo:** https://augustusfrancis.github.io/RockPaperScissors-Simulation/

## Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling and visual design
- **JavaScript (ES6)**: Game logic and interactivity
- **Local Storage API**: Persistent score tracking

## Game Mechanics

- Computer move is generated using `Math.random()` with equal probability (1/3) for each choice
- Auto play uses `setInterval()` to automatically trigger games every 1 second
- Both player and computer moves are randomly generated in auto play mode
- Scores are stored as a JSON object in browser's local storage
- Results are displayed dynamically after each round
- Score persists even after closing the browser

## Browser Compatibility

Works on all modern browsers that support:
- HTML5
- CSS3
- JavaScript ES6
- Local Storage API

## Future Enhancements

Potential improvements could include:
- Sound effects for each move
- Animation transitions
- Difficulty levels
- Multiplayer mode
- Game statistics and history
- Keyboard shortcuts

## License

Free to use and modify for personal or educational purposes.
