// styles
import styles from './Transactions.module.scss'

// components
import Image from 'next/image'

const Transaction = () => {
	return (
		<div className={styles.transaction}>
			<div className={styles.transactionPhoto}>
				<Image
					src={'/transaction-placeholder.png'}
					fill={true}
					sizes='17.25rem'
					style={{ objectFit: 'contain' }}
					alt='Team member photo'
					loading='lazy'
					priority={false}
				/>
			</div>
			<h4>$240,000,000</h4>
			<p>Multifamily Portfolio</p>
			<p>Permanent Refinance</p>
			<p>Debt Fund</p>
		</div>
	)
}

export default Transaction
