// styles
import styles from './About.module.scss'

// components
import Image from 'next/image'

// assets
const tick = (
	<Image
		src='tick.svg'
		width={16}
		height={12}
		alt='tick icon'
		priority={true}
	/>
)

const Row = ({ title, tick1, tick2, tick3 }) => {
	return (
		<li>
			<p>{title}</p>
			<div className={styles.ticks}>
				{/* bring bellow back to have the first column */}
				{/* <div className={styles.third}>{tick1 ? tick : ''}</div> */}
				<div className={styles.third}>{tick2 ? tick : ''}</div>
				<div className={styles.third}>{tick3 ? tick : ''}</div>
			</div>
		</li>
	)
}

const ComparisonTable = () => {
	return (
		<div className={styles.table}>
			<div className={styles.tableHead}>
				{/* bring bellow back */}
				{/* <div className={styles.third}>
					<h5>In-House</h5>
				</div> */}
				<div className={styles.third}>
					<h5>Broker</h5>
				</div>
				<div className={styles.third}>
					<Image
						src='symbol.svg'
						width={30}
						height={30}
						alt='tick icon'
						priority={true}
					/>
				</div>
			</div>
			<ul>
				<Row
					title='Large lender network'
					tick1={false}
					tick2={true}
					tick3={true}
				/>
				<Row
					title='Experienced advisors'
					tick1={false}
					tick2={true}
					tick3={true}
				/>
				<Row title='Financing focus' tick1={false} tick2={true} tick3={true} />
				<Row title='Full-service' tick1={false} tick2={false} tick3={true} />
				<Row
					title='Transparent process'
					tick1={true}
					tick2={false}
					tick3={true}
				/>
				<Row
					title='Aligned objectives'
					tick1={true}
					tick2={false}
					tick3={true}
				/>
				{/* <Row title='No commissions' tick1={true} tick2={false} tick3={true} /> */}
			</ul>
		</div>
	)
}

export default ComparisonTable
