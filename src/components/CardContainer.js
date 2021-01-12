import React from 'react';
import Card from './Card';

export default function CardContainer({ bikes, handleCardSelection }) {
	return (
		<div className="card-grid">
			{bikes.map((bike) => (
				<Card bike={bike} key={bike.id} handleCardSelection={handleCardSelection}></Card>
			))}
		</div>
	);
}
