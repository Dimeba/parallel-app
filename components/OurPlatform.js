// styles
import styles from './OurPlatform.module.scss'

// components
import BlueBox from './BlueBox'
import ImageContainer from './ImageContainer'

const OurPlatform = ({ content }) => {
	return (
		<section id='platform' className={styles.platform}>
			<BlueBox newClass={styles.platformContent}>
				<div className={styles.platformText}>
					<h2>{content.fields.title}</h2>
					<p>{content.fields.description}</p>
				</div>

				<ImageContainer
					src={'https:' + content.fields.image.fields.file.url}
					contain
					className={styles.platformImage}
				/>
			</BlueBox>
		</section>
	)
}

export default OurPlatform
