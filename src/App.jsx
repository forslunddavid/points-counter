import { useState, useEffect, useMemo, lazy, Suspense } from "react"
import { useTranslation } from "react-i18next"
import { v4 as uuidv4 } from "uuid"
import "./App.css"
import { RxCross2 } from "react-icons/rx"
import { GrEdit, GrCheckmark } from "react-icons/gr"
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
import { RotatingLines } from "react-loader-spinner"

const CustomNumberInput = lazy(() =>
	import("./assets/components/CustomNumberInput")
)
const ConfettiComponent = lazy(() => import("./assets/components/Confetti"))

let cls = 0
new PerformanceObserver((entryList) => {
	for (const entry of entryList.getEntries()) {
		if (!entry.hadRecentInput) {
			cls += entry.value
			console.log("Current CLS value:", cls, entry)
		}
	}
}).observe({ type: "layout-shift", buffered: true })

const lngs = {
	en: { nativName: "English" },
	sv: { nativName: "Svenska" },
}

const Game = () => {
	const { t, i18n } = useTranslation()

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
	const [loading] = useState(false)
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const saved = localStorage.getItem("isDarkMode")
		return saved
			? JSON.parse(saved)
			: window.matchMedia &&
					window.matchMedia("(prefers-color-scheme: dark)").matches
	})

	const [editMode, setEditMode] = useState(false)

	const colorMap = useMemo(
		() => ({
			Red: "red",
			Blue: "blue",
			Green: "green",
			Purple: "purple",
			Orange: "orange",
			Yellow: "yellow",
		}),
		[]
	)

	const translatedColors = useMemo(
		() => ({
			Red: t("colors.Red"),
			Blue: t("colors.Blue"),
			Green: t("colors.Green"),
			Purple: t("colors.Purple"),
			Orange: t("colors.Orange"),
			Yellow: t("colors.Yellow"),
		}),
		[i18n.resolvedLanguage, t]
	)

	const initializeTeams = (numTeams) => {
		if (numTeams > 0 && numTeams <= 6) {
			const newTeams = Array.from({ length: numTeams }, (_, index) => {
				const colorKey = Object.keys(colorMap)[index]
				return {
					colorName: translatedColors[colorKey],
					colorCode: colorMap[colorKey],
					points: 0,
				}
			})
			setTeams(newTeams)
		}
	}

	useEffect(() => {
		if (!teams.length) {
			initializeTeams(numTeams)
		}
	}, [colorMap, numTeams, teams.length])

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

	useEffect(() => {
		localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode))
		if (isDarkMode) {
			document.body.classList.add("dark-mode")
			document.body.classList.remove("light-mode")
		} else {
			document.body.classList.add("light-mode")
			document.body.classList.remove("dark-mode")
		}
	}, [isDarkMode])

	const handleStartGame = () => {
		setGameStarted(true)
		initializeTeams(numTeams)
	}

	const handleTeamClick = (index) => {
		if (!gameStarted || winner || editMode) return

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
		setEditMode(false)
		localStorage.removeItem("numTeams")
		localStorage.removeItem("pointsToWin")
		localStorage.removeItem("teams")
		localStorage.removeItem("gameStarted")
	}

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => !prevMode)
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

	const toggleEditMode = () => {
		setEditMode((prevEditMode) => !prevEditMode)
	}

	const handlePointsChange = (index, value) => {
		const updatedTeams = [...teams]
		updatedTeams[index].points = value
		setTeams(updatedTeams)
	}

	const numTeamsId = uuidv4()
	const pointsToWinId = uuidv4()

	return (
		<>
			{loading && (
				<div className="loader-container">
					<RotatingLines
						visible={true}
						height="96"
						width="96"
						strokeColor="#646cff"
						strokeWidth="5"
						animationDuration="0.75"
						ariaLabel="rotating-lines-loading"
					/>
				</div>
			)}
			{!loading && !gameStarted && (
				<div className="setup-container">
					<div className="settings-container">
						<div className="language-container">
							<select
								id="language-select"
								aria-label="language-select"
								onChange={(e) =>
									i18n.changeLanguage(e.target.value)
								}
								value={i18n.resolvedLanguage}
							>
								{Object.keys(lngs).map((lng) => (
									<option key={lng} value={lng}>
										{lngs[lng].nativName}
									</option>
								))}
							</select>
						</div>
						<div className="toggle-container">
							{isDarkMode ? (
								<MdOutlineLightMode onClick={toggleDarkMode} />
							) : (
								<MdOutlineDarkMode onClick={toggleDarkMode} />
							)}
						</div>
					</div>

					<h1 className="setup-title">{t("heading")}</h1>
					<h2>{t("game_setup")}</h2>
					<div className="setup-inputs">
						<label htmlFor={numTeamsId} className="setup-label">
							{t("no_teams")}
						</label>
						<Suspense fallback={<div>Loading...</div>}>
							<CustomNumberInput
								id={numTeamsId}
								min={2}
								max={6}
								value={numTeams}
								onChange={(value) =>
									setNumTeams(Math.min(6, Math.max(2, value)))
								}
							/>
						</Suspense>
					</div>
					<div className="setup-inputs">
						<label htmlFor={pointsToWinId} className="setup-label">
							{t("win_points")}
						</label>
						<Suspense fallback={<div>Loading...</div>}>
							<CustomNumberInput
								id={pointsToWinId}
								min={1}
								value={pointsToWin}
								onChange={(value) =>
									setPointsToWin(Math.max(1, value))
								}
							/>
						</Suspense>
					</div>
					<button
						className="start-game-button"
						onClick={handleStartGame}
					>
						{t("start_game")}
					</button>
				</div>
			)}
			{!loading && gameStarted && (
				<>
					<header className="header">
						<div className="header-icon">
							<RxCross2
								onClick={startNewGame}
								width="24"
								height="24"
							/>
						</div>
						<p className="header-title">
							{t("game_header")} {pointsToWin}
						</p>
						<div className="edit-header" onClick={toggleEditMode}>
							{editMode ? (
								<GrCheckmark width="24" height="24" />
							) : (
								<GrEdit width="24" height="24" />
							)}
						</div>
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
									backgroundColor: team.colorCode,
								}}
								onClick={() => handleTeamClick(index)}
							>
								{editMode ? (
									<div className="custom-input">
										<Suspense
											fallback={<div>Loading...</div>}
										>
											<CustomNumberInput
												id={`team-points-${index}`}
												min={0}
												value={team.points}
												onChange={(value) =>
													handlePointsChange(
														index,
														value
													)
												}
											/>
										</Suspense>
									</div>
								) : (
									<p className="points-container">
										{team.points}
									</p>
								)}
							</div>
						))}

						{winner && (
							<>
								<Suspense fallback={<div>Loading...</div>}>
									<ConfettiComponent className="confetti" />
								</Suspense>
								<div className="winner-modal">
									<h2 className="winning-team">
										{winner.colorName} {t("winner")}
									</h2>
									<button
										className="modal-button"
										onClick={resetGame}
									>
										{t("rematch")}
									</button>
									<button
										className="modal-button"
										onClick={startNewGame}
									>
										{t("new_game")}
									</button>
								</div>
							</>
						)}
					</div>
				</>
			)}
		</>
	)
}

export default Game
