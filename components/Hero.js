'use client'

// styles
import styles from './Hero.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Modal from './Modal'

// hooks
import { useState } from 'react'

const Hero = ({ content, company }) => {
	const [showModal, setShowModal] = useState(false)

	return (
		<>
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				text={content.fields.modalText}
			/>

			<section id='hero' className={styles.hero}>
				<div>{documentToReactComponents(content.fields.title)}</div>

				{/* <Link href={`mailto:${company.fields.email}`}>
					<button className='button-blue'>{content.fields.buttonText}</button>
				</Link> */}

				<button className='button-blue' onClick={() => setShowModal(true)}>
					{content.fields.buttonText}
				</button>

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
		</>
	)
}

export default Hero
