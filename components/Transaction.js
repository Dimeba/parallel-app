// styles
import styles from './Transactions.module.scss'

// components
import Image from 'next/image'

const Transaction = ({ price, property, loan, lender, photo }) => {
	return (
		<div className={styles.transaction}>
			{photo && (
				<div className={styles.transactionPhoto}>
					<Image
						// src={'/transaction-placeholder.png'}
						src={'https:' + photo}
						fill={true}
						sizes='17.25rem'
						style={{ objectFit: 'cover', transform: 'scale(1.1)' }}
						alt='Team member photo'
						loading='lazy'
						priority={false}
					/>
				</div>
			)}
			{/* <h4>$240,000,000</h4> */}
			<h4>{price}</h4>
			<p>{property}</p>
			<p>{loan}</p>
			<p>{lender}</p>
		</div>
	)
}

export default Transaction
