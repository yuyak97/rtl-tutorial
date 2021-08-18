import React, {useState, useEffect} from 'react'
import './Counter.css'

const Counter = () => {
	const [counterValue, setCounterValue] = useState(0)
	const [inputValue, setInputValue] = useState(1)

	const addToCounter = () => {
		setCounterValue(counterValue + inputValue)
	}

	const subtractFromCounter = () => {
		setCounterValue(counterValue - inputValue)
	}

	return (
		<div>
			<h1 data-testid='header'>My Counter</h1>
			<h2
				data-testid='counter'
				className={`${counterValue >= 100 ? 'green' : ''}${
					counterValue <= -100 ? 'red' : ''
				}`}>
				{counterValue}
			</h2>
			<div>
				<button data-testid='add-btn' onClick={addToCounter}>
					+
				</button>
				<input
					data-testid='input'
					type='number'
					value={inputValue}
					className='text-center'
					onChange={(e) => {
						setInputValue(parseInt(e.target.value))
					}}
				/>
				<button data-testid='subtract-btn' onClick={subtractFromCounter}>
					-
				</button>
			</div>
		</div>
	)
}

export default Counter
