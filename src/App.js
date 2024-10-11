import logo from "./logo.svg";
import Rewards from "./Rewards";

function App() {
	return (
		<html>
			<head>
				{/* Linking to Font Awesome for icons */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
				{/* Importing Poppins font from Goggle Fonts */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<div>
				<header className="header">
					{/* Logo linked to the main website */}
					<a href="https://liven.love/">
						<img src={logo} alt="logo" className="logo" />{" "}
					</a>
					{/* Button linking to the app download page */}
					<a href="https://app.liven.com.au/" className="primary-btn">
						Get app
					</a>
				</header>
				<main className="main">
					<div className="hero-container">
						<h1 className="title">San Dollars</h1>
						<p className="description">
							Pay now, eat more later! Earn a bonus when you buy food upfront.
							Tap now to purchase.
						</p>
					</div>
					{/* Rendering the Rewards component */}
					<Rewards />
				</main>
				<footer className="footer">
					<img src={logo} alt="logo" className="logo" />
				</footer>
			</div>
		</html>
	);
}

export default App;
