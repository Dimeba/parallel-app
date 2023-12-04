// styles
import styles from '@/components/Team.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// contentful
import { createClient } from 'contentful'

const client = createClient({
	space: process.env.space,
	accessToken: process.env.accessToken
})

export async function generateStaticParams() {
	const team = await client.getEntries({
		content_type: 'team'
	})

	return team.items.map(member => ({
		bio: member.fields.name.toLowerCase().replace(/\s+/g, '-')
	}))
}

export default async function TeamMember({ params }) {
	const { bio } = params

	const team = await client.getEntries({
		content_type: 'team'
	})

	const member = team.items.find(
		member => member.fields.name.toLowerCase().replace(/\s+/g, '-') == bio
	)

	if (!bio) {
		return <div>Loading...</div>
	}

	if (!member) {
		return <div>Not found</div>
	}

	return (
		<main>
			<section id='team-member' className={styles.teamMember}>
				<div className={styles.memberPhoto}>
					<Image
						src={'https:' + member.fields.photo.fields.file.url}
						fill={true}
						sizes='17.25rem'
						style={{ objectFit: 'contain' }}
						alt='Team member photo'
						loading='lazy'
						priority={false}
					/>
				</div>
				<div className={styles.bio}>
					<Link href='/' aria-label='Homepage'>
						<p style={{ fontSize: '0.8rem' }}>Back</p>
					</Link>
					<h3 style={{ marginTop: '1rem' }}>{member.fields.name}</h3>
					<p>{member.fields.title}</p>
					<br />
					<div
						style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
					>
						{documentToReactComponents(member.fields.bio)}
					</div>
					<div>
						<br />
						<p>Tel : {member.fields.phone}</p>
						<p>{member.fields.email}</p>
						<br />
					</div>
				</div>
			</section>
		</main>
	)
}
