'use client'

// styles
import styles from './Transactions.module.scss'

// components
import Transaction from './Transaction'

// hooks
import { useState, useEffect } from 'react'

const Transactions = ({ content }) => {
	// const middle = Math.ceil(transactions.length / 2)

	// const [topRow, setTopRow] = useState(transactions.slice(0, middle))
	// const [botRow, setBotRow] = useState(transactions.slice(middle))

	// const [count, setCount] = useState(0)

	// useEffect(() => {
	// 	const rotate = () => {
	// 		setTimeout(() => {
	// 			setTopRow(prev => [...prev, prev[count]])
	// 			setCount(prev => prev + 1)
	// 			console.log(topRow.length)
	// 		}, '1500')
	// 	}

	// 	rotate()
	// }, [topRow])

	return (
		<section id='transactions' className={styles.transactions}>
			<div className='containerCenter'>
				<h2>{content.fields.title}</h2>
			</div>

			<div
				className={styles.transactionsContainer}
				style={{ marginBottom: '2rem' }}
			>
				{/* Top row */}
				<div
					className={styles.slider}
					style={{
						animationDuration: `${content.fields.transactions.length * 2.5}s`
					}}
				>
					{content.fields.transactions.map(transaction => (
						<Transaction
							key={transaction.sys.id}
							price={transaction.fields.price}
							property={transaction.fields.propertyType}
							loan={transaction.fields.loanType}
							lender={transaction.fields.lenderType}
							photo={transaction.fields.photo.fields.file.url}
						/>
					))}
				</div>

				{/* Bottom row */}
				<div
					className={styles.sliderReverse}
					style={{
						animationDuration: `${content.fields.transactions.length * 2.5}s`
					}}
				>
					{content.fields.transactions.map(transaction => (
						<Transaction
							key={transaction.sys.id}
							price={transaction.fields.price}
							property={transaction.fields.propertyType}
							loan={transaction.fields.loanType}
							lender={transaction.fields.lenderType}
							photo={transaction.fields.photo.fields.file.url}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Transactions
