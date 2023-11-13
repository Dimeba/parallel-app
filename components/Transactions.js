// styles
import styles from './Transactions.module.scss'

// components
import Transaction from './Transaction'

const Transactions = () => {
	const tempList = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
	]
	const middle = Math.ceil(tempList.length / 2)

	return (
		<section id='transactions' className={styles.transactions}>
			<div className='containerCenter'>
				<h2>Featured Transactions</h2>
			</div>

			<div
				className={styles.transactionsContainer}
				style={{ marginBottom: '2rem' }}
			>
				{/* Top row */}
				<div
					className={styles.slider}
					style={{
						animationDuration: `${tempList.slice(0, middle).length * 3}s`
					}}
				>
					{tempList.slice(0, middle).map((item, index) => (
						<Transaction key={index} />
					))}
				</div>

				{/* Bottom row */}
				<div
					className={styles.sliderBack}
					style={{ animationDuration: `${tempList.slice(middle).length * 3}s` }}
				>
					{tempList.slice(middle).map((item, index) => (
						<Transaction key={index} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Transactions
