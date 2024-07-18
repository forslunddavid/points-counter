import React from "react"
import "./CustomNumberInput.css"

const CustomNumberInput = ({ value, onChange, min, max, className }) => {
	const increment = () => {
		const newValue = max ? Math.min(value + 1, max) : value + 1
		onChange(newValue)
	}

	const decrement = () => {
		const newValue = min ? Math.max(value - 1, min) : value - 1
		onChange(newValue)
	}

	const handleChange = (e) => {
		const newValue = parseInt(e.target.value)
		if (!isNaN(newValue)) {
			onChange(newValue)
		}
	}

	return (
		<div className={`custom-number-wrapper ${className}`}>
			<button className="decrement" onClick={decrement}>
				-
			</button>
			<input
				className={`custom-number-input ${className}`}
				type="number"
				value={value}
				onChange={handleChange}
				min={min}
				max={max}
			/>
			<button className="increment" onClick={increment}>
				+
			</button>
		</div>
	)
}

export default CustomNumberInput
