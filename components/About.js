// styles
import styles from './About.module.scss'

// components
import ComparisonTable from './ComparisonTable'
import BlueBox from './BlueBox'

const About = () => {
	return (
		<section id='about' className={styles.about}>
			<h2>About Us</h2>
			<div className={styles.services}>
				<div>
					<h3>
						<span>Competitive</span> Financing
					</h3>
					<p>
						With over $5bn in financing closed in the past decade, our extensive
						network of lenders, including regional banks, debt funds, and life
						insurance companies, ensures the best financing options for our
						clients.
					</p>
				</div>
				<div>
					<h3>
						<span>In-house</span> Service
					</h3>
					<p>
						We provide an aligned and transparent approach, acting as in-house
						advisors for our clients. With our technology platform, clients can
						interact with us and lenders, leading to a streamlined and efficient
						financing process.
					</p>
				</div>
				<div>
					<h3>
						<span>Lowest</span> Cost
					</h3>
					<p>
						With our powerful team and technology platform, we can offer
						significantly reduced advisory costs.
					</p>
					{/* <p>
						With our powerful team and technology platform, we can offer
						significantly reduced advisory costs. Unlike brokers who charge a
						percentage-based commission on closed deals, we charge a flat fee to
						manage your financing.
					</p> */}
				</div>
			</div>

			<div className={styles.highlights}>
				<ComparisonTable />
				<BlueBox newClass={styles.keyInfo}>
					<div>
						<h2>$5B+</h2>
						<p>Financing Closed</p>
					</div>
					<div>
						<h2>20+</h2>
						<p>Years of experience</p>
					</div>
					{/* <div>
						<h2>$5B+</h2>
						<p>Financing Closed</p>
					</div>
					<div>
						<h2>20+</h2>
						<p>Years of experience</p>
					</div> */}
				</BlueBox>
			</div>
		</section>
	)
}

export default About
