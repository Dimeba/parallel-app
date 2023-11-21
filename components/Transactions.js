'use client'

// styles
import styles from './Transactions.module.scss'

// components
import Transaction from './Transaction'

// hooks
import { useState, useEffect } from 'react'

const Transactions = ({ content }) => {
	const middle = Math.ceil(content.fields.transactions.length / 2)

	const topRow = [
		...content.fields.transactions.slice(0, middle),
		...content.fields.transactions.slice(0, middle),
		...content.fields.transactions.slice(0, middle)
	]
	const botRow = [
		...content.fields.transactions.slice(middle),
		...content.fields.transactions.slice(middle),
		...content.fields.transactions.slice(middle)
	]

	return (
		<section id='transactions' className={styles.transactions}>
			<div className='containerCenter'>
				<h2>{content.fields.title}</h2>
			</div>

			<div className={styles.transactionsContainer}>
				{/* Top row */}
				<div
					className={styles.slider}
					style={{
						animationDuration: `${topRow.length * 2.5 * 3}s`
					}}
				>
					{topRow.map((transaction, index) => (
						<Transaction
							key={transaction.sys.id + index}
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
						animationDuration: `${botRow.length * 2.5 * 3}s`
					}}
				>
					{botRow.map((transaction, index) => (
						<Transaction
							key={transaction.sys.id + index}
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
