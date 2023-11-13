// styles
import styles from './Hero.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
	return (
		<section id='hero' className={styles.hero}>
			<h1>
				We are <span>aligned with our clients</span> every step of the way
			</h1>

			<Link href='mailto:info@rallelcre.com'>
				<button className='button-blue'>Get In Touch</button>
			</Link>

			<p>
				Parallel CRE is an in-house commercial real estate debt advisory firm,
				focused on providing each client with a catered experience to achieve{' '}
				<span>COMPETITIVE FINANCING</span> for the <span>LOWEST COST</span>
			</p>

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
