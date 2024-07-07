//first you choose the number of teams. Then the amount of points to win Each team is handed a color Red, Blue, Green, Purple, Orange or Yellow. Max six teams. When you have chosen the number of teams you get directed to a new page where each team takes up equal space of the screen. when you touch the screen the points are added to the team. when you reach the set amount of points to win a pop up modal says what team has won and gives you the option to play again (game resets to 0 points with the same amount of points to win and same amount of teams. or New game, back to starting screen to choose amount of points and teams

import { useState, useEffect } from "react"
import "./App.css"

const Game = () => {
	const [numTeams, setNumTeams] = useState(2)
	const [pointsToWin, setPointsToWin] = useState(10)
	const [teams, setTeams] = useState([])
	const [gameStarted, setGameStarted] = useState(false)
	const [winner, setWinner] = useState(null)

	const colors = ["Red", "Blue", "Green", "Purple", "Orange", "Yellow"]

	useEffect(() => {
		if (numTeams > 0 && numTeams <= 6) {
			const newTeams = Array.from({ length: numTeams }, (_, index) => ({
				color: colors[index],
				points: 0,
			}))
			setTeams(newTeams)
		}
	}, [numTeams])

	const handleStartGame = () => {
		setGameStarted(true)
	}

	const handleTeamClick = (index) => {
		if (!gameStarted || winner) return

		const updatedTeams = [...teams]
		updatedTeams[index].points += 1

		if (updatedTeams[index].points >= pointsToWin) {
			setWinner(updatedTeams[index])
		}

		setTeams(updatedTeams)
	}

	const resetGame = () => {
		setTeams(teams.map((team) => ({ ...team, points: 0 })))
		setWinner(null)
	}

	const startNewGame = () => {
		setNumTeams(2)
		setPointsToWin(10)
		setTeams([])
		setGameStarted(false)
		setWinner(null)
	}

	if (!gameStarted) {
		return (
			<div className="setup-container">
				<h1>Game Setup</h1>
				<div className="setup-inputs">
					<label>Number of Teams (2-6): </label>
					<input
						type="number"
						min="2"
						max="6"
						value={numTeams}
						onChange={(e) =>
							setNumTeams(
								Math.min(
									6,
									Math.max(2, parseInt(e.target.value))
								)
							)
						}
					/>
				</div>
				<div className="setup-inputs">
					<label>Points to Win: </label>
					<input
						type="number"
						min="1"
						value={pointsToWin}
						onChange={(e) =>
							setPointsToWin(
								Math.max(1, parseInt(e.target.value))
							)
						}
					/>
				</div>
				<button onClick={handleStartGame}>Start Game</button>
			</div>
		)
	}

	return (
		<div style={{ display: "flex", height: "100vh" }}>
			{teams.map((team, index) => (
				<div
					key={index}
					style={{
						flex: 1,
						backgroundColor: team.color,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						fontSize: "2em",
						cursor: "pointer",
					}}
					onClick={() => handleTeamClick(index)}
				>
					{team.points}
				</div>
			))}
			{winner && (
				<div className="winner-modal">
					<h2>{winner.color} team wins!</h2>
					<button onClick={resetGame}>Play Again</button>
					<button onClick={startNewGame}>New Game</button>
				</div>
			)}
		</div>
	)
}

export default Game
