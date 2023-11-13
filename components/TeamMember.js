// styles
import styles from './Team.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

const TeamMember = props => {
	return (
		<div className={styles.member}>
			<div className={styles.memberPhoto}>
				<Image
					src={'https:' + props.photo}
					fill={true}
					sizes='17.25rem'
					style={{ objectFit: 'contain' }}
					alt='Team member photo'
					loading='lazy'
					priority={false}
				/>
			</div>
			<div>
				<h4>{props.name}</h4>
				<p>{props.title}</p>
				<br />
				<p>Tel : {props.tel}</p>
				<p>{props.mail}</p>
				<br />
				<Link
					href={`/${props.name.toLowerCase().replace(/\s+/g, '-')}`}
					aria-label='Link to Bio'
				>
					<p>Read Bio</p>
				</Link>
			</div>
		</div>
	)
}

export default TeamMember
