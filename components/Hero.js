// styles
import styles from './Hero.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Hero = ({ content }) => {
	return (
		<section id='hero' className={styles.hero}>
			<>{documentToReactComponents(content.fields.title)}</>

			<Link href='mailto:info@rallelcre.com'>
				<button className='button-blue'>{content.fields.buttonText}</button>
			</Link>

			<>{documentToReactComponents(content.fields.subtitle)}</>

			<a href='/#about' aria-label='About Us'>
				<Image
					src='arrow-down.svg'
					width={60}
					height={60}
					alt='Arrow button to scroll to the next section'
					priority={true}
				/>
			</a>
		</section>
	)
}

export default Hero
