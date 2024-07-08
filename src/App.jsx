//first you choose the number of teams. Then the amount of points to win Each team is handed a color Red, Blue, Green, Purple, Orange or Yellow. Max six teams. When you have chosen the number of teams you get directed to a new page where each team takes up equal space of the screen. when you touch the screen the points are added to the team. when you reach the set amount of points to win a pop up modal says what team has won and gives you the option to play again (game resets to 0 points with the same amount of points to win and same amount of teams. or New game, back to starting screen to choose amount of points and teams

//TODO
// click effects

import { useState, useEffect, useMemo } from "react"
import "./App.css"
import { RxCross2 } from "react-icons/rx"
import CustomNumberInput from "./assets/components/CustomNumberInput"
import ConfettiComponent from "./assets/components/Confetti"

const Game = () => {
	const [numTeams, setNumTeams] = useState(() => {
		const saved = localStorage.getItem("numTeams")
		return saved ? JSON.parse(saved) : 2
	})
	const [pointsToWin, setPointsToWin] = useState(() => {
		const saved = localStorage.getItem("pointsToWin")
		return saved ? JSON.parse(saved) : 10
	})
	const [teams, setTeams] = useState(() => {
		const saved = localStorage.getItem("teams")
		return saved ? JSON.parse(saved) : []
	})
	const [gameStarted, setGameStarted] = useState(() => {
		const saved = localStorage.getItem("gameStarted")
		return saved ? JSON.parse(saved) : false
	})
	const [winner, setWinner] = useState(null)

	const colors = useMemo(
		() => ["Red", "Blue", "Green", "Purple", "Orange", "Yellow"],
		[]
	)

	const initializeTeams = (numTeams) => {
		if (numTeams > 0 && numTeams <= 6) {
			const newTeams = Array.from({ length: numTeams }, (_, index) => ({
				color: colors[index],
				points: 0,
			}))
			setTeams(newTeams)
		}
	}

	useEffect(() => {
		if (!teams.length) {
			initializeTeams(numTeams)
		}
	}, [colors, numTeams, teams.length])

	useEffect(() => {
		localStorage.setItem("numTeams", JSON.stringify(numTeams))
	}, [numTeams])

	useEffect(() => {
		localStorage.setItem("pointsToWin", JSON.stringify(pointsToWin))
	}, [pointsToWin])

	useEffect(() => {
		localStorage.setItem("teams", JSON.stringify(teams))
	}, [teams])

	useEffect(() => {
		localStorage.setItem("gameStarted", JSON.stringify(gameStarted))
	}, [gameStarted])

	const handleStartGame = () => {
		setGameStarted(true)
		initializeTeams(numTeams)
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
		const resetTeams = teams.map((team) => ({ ...team, points: 0 }))
		setTeams(resetTeams)
		setWinner(null)
	}

	const startNewGame = () => {
		setNumTeams(2)
		setPointsToWin(10)
		initializeTeams(2)
		setGameStarted(false)
		setWinner(null)
		localStorage.removeItem("numTeams")
		localStorage.removeItem("pointsToWin")
		localStorage.removeItem("teams")
		localStorage.removeItem("gameStarted")
	}

	const getGridTemplate = (numTeams) => {
		if (numTeams <= 4) {
			const columns = Math.ceil(Math.sqrt(numTeams))
			const rows = Math.ceil(numTeams / columns)
			return `repeat(${rows}, 1fr) / repeat(${columns}, 1fr)`
		} else {
			return `repeat(3, 1fr) / repeat(2, 1fr)`
		}
	}

	if (!gameStarted) {
		return (
			<div className="setup-container">
				<h1 className="setup-title">Points Counter</h1>
				<h2>Game Setup</h2>
				<div className="setup-inputs">
					<label className="setup-label">
						Number of Teams (2-6):{" "}
					</label>

					<CustomNumberInput
						min={2}
						max={6}
						value={numTeams}
						onChange={(value) =>
							setNumTeams(Math.min(6, Math.max(2, value)))
						}
					/>
				</div>
				<div className="setup-inputs">
					<label className="setup-label">Points to Win: </label>
					<CustomNumberInput
						min={1}
						value={pointsToWin}
						onChange={(value) => setPointsToWin(Math.max(1, value))}
					/>
				</div>
				<button className="start-game-button" onClick={handleStartGame}>
					Start Game
				</button>
			</div>
		)
	}

	return (
		<>
			<header className="header">
				<RxCross2 className="header-icon" onClick={startNewGame} />
				<p className="header-title">Points to win: {pointsToWin}</p>
			</header>
			<div
				className="team-container"
				style={{ gridTemplate: getGridTemplate(numTeams) }}
			>
				{teams.map((team, index) => (
					<div
						className="team"
						key={index}
						style={{
							backgroundColor: team.color,
						}}
						onClick={() => handleTeamClick(index)}
					>
						{team.points}
					</div>
				))}
				{winner && (
					<>
						<ConfettiComponent />
						<div className="winner-modal">
							<h2 className="winning-team">
								{winner.color} team wins!
							</h2>
							<button
								className="modal-button"
								onClick={resetGame}
							>
								Play Again
							</button>
							<button
								className="modal-button"
								onClick={startNewGame}
							>
								New Game
							</button>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default Game
