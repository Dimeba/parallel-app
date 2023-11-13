// styles
import styles from './Transactions.module.scss'

// components
import Transaction from './Transaction'

const Transactions = () => {
	return (
		<section id='transactions' className={styles.transactions}>
			<div className='containerCenter'>
				<h2>Featured Transactions</h2>
			</div>

			<div
				className={styles.transactionsContainer}
				style={{ marginBottom: '2rem' }}
			>
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
			</div>

			<div className={styles.transactionsContainer}>
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
			</div>
		</section>
	)
}

export default Transactions
