// styles
import styles from './About.module.scss'

// components
import ComparisonTable from './ComparisonTable'
import BlueBox from './BlueBox'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const About = ({ content }) => {
	return (
		<section id='about' className={styles.about}>
			<h2>About Us</h2>
			<div className={styles.services}>
				{content.fields.services.map(service => {
					const title = service.fields.title.split(/\s+/)
					return (
						<div key={service.sys.id}>
							<h3>
								<span>{title[0]}</span> <span>{title[1]}</span>
							</h3>
							<p>{service.fields.description}</p>
						</div>
					)
				})}
			</div>

			<div className={styles.highlights}>
				<ComparisonTable />
				<BlueBox newClass={styles.keyInfo}>
					{content.fields.highlights.map(highlight => (
						<div key={highlight.sys.id}>
							<h2>{highlight.fields.value}</h2>
							<p>{highlight.fields.title}</p>
						</div>
					))}
				</BlueBox>
			</div>
		</section>
	)
}

export default About
