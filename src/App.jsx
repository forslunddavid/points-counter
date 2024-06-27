// app that counts points when you touch the screen.

//first you choose the number of contestants, give them names and a color. then start game. the teams/players take up an equal amount of screen space and when you touch the screen the points are added to the team/player.
import { useState } from "react"
import Select from "react-select"
import "./App.css"
import "./index.css"

const App = () => {
	const colors = [
		{ value: "#ffffff", label: "White", color: "#ffffff" },
		{ value: "#ff5900", label: "Orange", color: "#ff5900" },
		{ value: "#ff0000", label: "Red", color: "#ff0000" },
		{ value: "#fbff00", label: "Yellow", color: "#fbff00" },
		{ value: "#4dff00", label: "Green", color: "#4dff00" },
		{ value: "#00ffff", label: "Cyan", color: "#00ffff" },
		{ value: "#0800ff", label: "Blue", color: "#0800ff" },
		{ value: "#e100ff", label: "Purple", color: "#e100ff" },
		{ value: "#ff0080", label: "Pink", color: "#ff0080" },
		{ value: "#000000", label: "Black", color: "#000000" },
	]

	const getContrastColor = (hexColor) => {
		// Convert hex to RGB
		const r = parseInt(hexColor.slice(1, 3), 16)
		const g = parseInt(hexColor.slice(3, 5), 16)
		const b = parseInt(hexColor.slice(5, 7), 16)

		// Calculate luminance
		const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

		// Return black for light colors, white for dark colors
		return luminance > 0.5 ? "#000000" : "#ffffff"
	}

	const colorStyles = {
		control: (styles) => ({
			...styles,
			backgroundColor: "white",
			width: 250,
			borderColor: "lightgray",
		}),
		option: (styles, { data }) => ({
			...styles,
			backgroundColor: data.color,
			color: getContrastColor(data.color),
			padding: "10px",
			cursor: "pointer",
		}),
		singleValue: (styles, { data }) => ({
			...styles,
			color: getContrastColor(data.color),
			backgroundColor: data.color,
			padding: "2px 5px",
			borderRadius: "3px",
		}),
	}

	const [contestant, setContestant] = useState([])
	const [gameStarted, setGameStarted] = useState(false)
	const [name, setName] = useState("")
	// const [color, setColor] = useState(colors[0])
	const [selectedColor, setSelectedColor] = useState(null) // Initialize with the first color in the array

	const handleEndGame = () => {
		setGameStarted(false)
		setContestant([]) // Clear contestants when the game ends
	}

	const ContestantList = () => (
		<div>
			<h3>Contestants:</h3>
			<ul>
				{contestant.map((contestant, index) => (
					<li key={index} style={{ color: contestant.color }}>
						{contestant.name}: {contestant.points} points
						<button onClick={() => addPoints(index)}>
							Add Point
						</button>
					</li>
				))}
			</ul>
			<button onClick={handleEndGame}>End Game</button>
		</div>
	)

	const addPoints = (index) => {
		const updatedContestants = contestant.map((contestant, idx) => {
			if (idx === index) {
				return { ...contestant, points: contestant.points + 1 }
			}
			return contestant
		})
		setContestant(updatedContestants)
	}

	const handleStartGame = () => {
		setGameStarted(true)
	}

	const handleAddContestant = (name) => {
		if (name && selectedColor) {
			setContestant([
				...contestant,
				{ name, color: selectedColor.color, points: 0 },
			])
			setName("") // Clear the name input
			setSelectedColor(null) // Reset color selection
		}
	}

	return (
		<>
			<div className="page-wrapper">
				<h1>Points counter</h1>
				<div className="add-contestants-container">
					<div className="add-contestants-inputs">
						<input
							type="text"
							placeholder="Contestant Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>

						<Select
							options={colors}
							styles={colorStyles}
							value={selectedColor}
							onChange={(option) => setSelectedColor(option)}
							getOptionLabel={(option) => option.label}
							getOptionValue={(option) => option.value}
						/>

						<button
							className="add-contestant-button"
							onClick={() => handleAddContestant(name)}
						>
							Add Contestant
						</button>
					</div>
				</div>
				<div className="contestants-array-container">
					<h3>Added Contestants:</h3>
					<ul>
						{contestant.map((contestant, index) => (
							<li key={index} style={{ color: contestant.color }}>
								{contestant.name}
							</li>
						))}
					</ul>
					<button onClick={handleStartGame}>Start Game</button>
				</div>
				{gameStarted && <ContestantList />}
			</div>
		</>
	)
}

export default App
