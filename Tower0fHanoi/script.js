body {
    margin: 0;
    padding: 20px;
    min-height: 100vh;
    background: linear-gradient(to bottom, #87CEEB, #E6E6FA);
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.game-container {
    max-width: 800px;
    width: 100%;
    text-align: center;
}

h1 {
    color: #333;
    margin-bottom: 20px;
}

.controls {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    margin-bottom: 20px;
    align-items: center;
}

.control-group {
    display: flex;
    gap: 5px;
    align-items: center;
}

button {
    padding: 8px 16px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;
}

button:hover {
    background: #45a049;
}

button:disabled {
    background: #cccccc;
    cursor: not-allowed;
}

.warning {
    color: red;
    font-weight: bold;
    margin-bottom: 10px;
    opacity: 0;
    transition: opacity 0.5s;
}

.warning.show {
    opacity: 1;
    animation: shakeWarning 0.5s;
}

.board {
    display: flex;
    justify-content: space-around;
    perspective: 1000px;
    padding: 20px;
}

.peg {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.peg-label {
    margin-top: 10px;
    font-weight: bold;
    color: #333;
}

.peg-stick {
    width: 15px;
    height: 200px;
    background: linear-gradient(to right, #8B4513, #A0522D, #8B4513);
    border-radius: 5px 5px 0 0;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.disk {
    position: absolute;
    height: 25px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    transform-style: preserve-3d;
    transition: all 0.3s ease;
}

.disk.selected {
    transform: translateY(-30px) translateZ(20px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.4);
}

/* 关键帧动画 */
@keyframes shakeWarning {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
}

@keyframes glowWin {
    0% { box-shadow: 0 0 5px gold; }
    50% { box-shadow: 0 0 20px gold, 0 0 30px orange; }
    100% { box-shadow: 0 0 5px gold; }
}

@keyframes diskFloat {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
}

.win-animation .disk {
    an...