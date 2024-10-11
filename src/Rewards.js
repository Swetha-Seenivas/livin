import React, { useState } from "react";
import livinLogoSm from "./livin-logo-sm.webp";

// List of rewards with their buy amounts and bonuses
const rewardsList = [
	{ id: "1", buy: 30, bonus: 10 },
	{ id: "2", buy: 50, bonus: 5 },
	{ id: "3", buy: 100, bonus: 15 },
	{ id: "4", buy: 250, bonus: 50 },
	{ id: "5", buy: 500, bonus: 125 },
];

function Rewards() {
	// State to manage the current rewards and the toggle state
	const [rewards, setRewards] = useState(rewardsList);
	const [toggleState, setToggleState] = useState(false);

	// Handler to toggle the state and update the rewards list
	const clickHandler = () => {
		setToggleState(!toggleState); // Toggle the state
		if (toggleState) {
			setRewards(rewardsList); // Reset rewards to full list if toggled off
		} else {
			setRewards(rewardsList.slice(1)); // Remove the first reward if toggled on
		}
	};

	return (
		<div>
			<div className="pill-container">
				<i className="fa fa-gift fa-md gift-icon" aria-hidden="true"></i>
				<p className="">Purchase as gift</p>
				<label className="toggle">
					{/* Toggle switch */}
					<input type="checkbox" onChange={clickHandler} />{" "}
					<span className="toggle-switch"></span>
				</label>
			</div>
			<div className="rewards-container">
				{/* Mapping through the rewards array to display each reward */}
				{rewards.map((reward, index) => (
					<div
						onClick={() => (window.location.href = "https://liven.love/")} // Redirect on click
						className="card"
						id={reward.id}
					>
						{/* Show app exclusive banner for the first reward when toggle is off */}
						{index === 0 && !toggleState && (
							<div className="pill-container app-exclusive">
								<img src={livinLogoSm} alt="logo" className="logo-sm" /> App
								exclusive
							</div>
						)}
						<div>
							<h2>Buy</h2>
							<p className="price">${reward.buy}</p> {/* Display buy amount */}
						</div>
						<div className="bonus-icon-wrapper">
							<i className="fa fa-btc fa-lg fa-inverse" aria-hidden="true"></i>{" "}
						</div>
						<div className="bonus-section">
							{/* Display bonus amount */}
							<h2>Bonus</h2>
							<p className="price">${reward.bonus}</p>{" "}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Rewards;
