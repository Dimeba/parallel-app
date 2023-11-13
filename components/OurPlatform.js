// styles
import styles from './OurPlatform.module.scss'

// components
import BlueBox from './BlueBox'
import ImageContainer from './ImageContainer'

const OurPlatform = () => {
	return (
		<section id='platform' className={styles.platform}>
			<BlueBox newClass={styles.platformContent}>
				<div className={styles.platformText}>
					<h2>Our Platform</h2>
					<p>
						Using our technology platform, clients can interact with us and
						lenders, resulting in streamlined communication and a more efficient
						financing process.
					</p>
				</div>

				<ImageContainer
					src={'/platform-mockup.png'}
					contain
					className={styles.platformImage}
				/>
			</BlueBox>
		</section>
	)
}

export default OurPlatform
