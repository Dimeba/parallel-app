// contentful
import { createClient } from 'contentful'

// components
import Hero from '@/components/Hero'
import About from '@/components/About'
import Transactions from '@/components/Transactions'
import Team from '@/components/Team'
import OurPlatform from '@/components/OurPlatform'

export default async function Home() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const team = await client.getEntries({
		content_type: 'team'
	})

	return (
		<main>
			<Hero />
			<About />
			<Transactions />
			<Team team={team.items} />
			<OurPlatform />
		</main>
	)
}
