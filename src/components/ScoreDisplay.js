import React from 'react';

export default function ScoreDisplay({ currentScore, highScore }) {
	return (
		<div className="scores-container">
			<h1>Memory Game</h1>
			<div className="current-score">Current Score: {currentScore}</div>
			<div className="high-score">High Score: {highScore}</div>
		</div>
	);
}
