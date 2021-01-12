import React, { useState, useEffect } from 'react';
import CardContainer from './CardContainer';
import '../styles/App.css';

//images
import dr650 from '../images/dr650.jpg';
import drz400 from '../images/drz400.jpg';
import fz07 from '../images/fz07.jpg';
import goldwing from '../images/goldwing.jpg';
import gsxr750 from '../images/gsxr750.jpg';
import husky701 from '../images/husky701.webp';
import klr650 from '../images/klr650.jpg';
import monster from '../images/monster1200.jpg';
import ninja from '../images/ninja250.jpg';
import r1 from '../images/r1.jpg';
import sv650 from '../images/sv650.jpg';
import xsr900 from '../images/xsr900.jpg';
import ScoreDisplay from './ScoreDisplay';

function App() {
	const [bikes, setBikes] = useState([]);
	const [highScore, setHighScore] = useState(0);
	const [currentScore, setCurrentScore] = useState(0);
	const [alreadySelectedBikes, setAlreadySelectedBikes] = useState([]);

	useEffect(() => {
		shuffleCards();
	}, []);

	useEffect(() => {
		if (currentScore > highScore) setHighScore(currentScore);
	}, [currentScore, highScore]);

	function addToSelectedBikes(bike) {
		setAlreadySelectedBikes((prevSelectedBikes) => [...prevSelectedBikes, bike]);
	}

	function handleCardSelection(bikeId) {
		const selectedBike = bikes.find((bike) => bike.id === bikeId);
		if (alreadySelectedBikes.find((bike) => bike.id === bikeId)) {
			setCurrentScore(1);
			setAlreadySelectedBikes([selectedBike]);
		} else {
			incrementCurrentScore();
			addToSelectedBikes(selectedBike);
		}
		shuffleCards();
	}

	function shuffleCards() {
		let shuffledBikes = [...motorcycles];
		for (let i = shuffledBikes.length - 1; i > 0; i--) {
			let randomIndex = Math.floor(Math.random() * (i + 1));
			[shuffledBikes[i], shuffledBikes[randomIndex]] = [shuffledBikes[randomIndex], shuffledBikes[i]];
		}
		setBikes([...shuffledBikes]);
	}

	function incrementCurrentScore() {
		setCurrentScore((prevCurrentScore) => prevCurrentScore + 1);
	}

	return (
		<>
			<ScoreDisplay currentScore={currentScore} highScore={highScore}></ScoreDisplay>
			<CardContainer bikes={bikes} handleCardSelection={handleCardSelection}></CardContainer>
		</>
	);
}

const motorcycles = [
	{
		id: 'dr650',
		src: dr650,
		manufacturer: 'Suzuki',
		model: 'DR650',
		clicked: false,
	},
	{
		id: 'drz400',
		src: drz400,
		manufacturer: 'Suzuki',
		model: 'DRZ400',
		clicked: false,
	},
	{
		id: 'fz07',
		src: fz07,
		manufacturer: 'Yamaha',
		model: 'FZ-07',
		clicked: false,
	},
	{
		id: 'goldwing',
		src: goldwing,
		manufacturer: 'Honda',
		model: 'Goldwing',
		clicked: false,
	},
	{
		id: 'monster',
		src: monster,
		manufacturer: 'Ducati',
		model: 'Monster 1200S',
		clicked: false,
	},
	{
		id: 'gsxr',
		src: gsxr750,
		manufacturer: 'Suzuki',
		model: 'GSXR-750',
		clicked: false,
	},
	{
		id: 'husky',
		src: husky701,
		manufacturer: 'Husqvarna',
		model: '701 SM',
		clicked: false,
	},
	{
		id: 'r1',
		src: r1,
		manufacturer: 'Yamaha',
		model: 'YZF-R1',
		clicked: false,
	},
	{
		id: 'sv650',
		src: sv650,
		manufacturer: 'Suzuki',
		model: 'SV650',
		clicked: false,
	},
	{
		id: 'klr650',
		src: klr650,
		manufacturer: 'Kawasaki',
		model: 'KLR 650',
		clicked: false,
	},
	{
		id: 'xsr900',
		src: xsr900,
		manufacturer: 'Yamaha',
		model: 'XSR900',
		clicked: false,
	},
	{
		id: 'ninja250',
		src: ninja,
		manufacturer: 'Kawasaki',
		model: 'Ninja 250R',
		clicked: false,
	},
];

export default App;
