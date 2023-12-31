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

	const hero = await client.getEntries({
		content_type: 'heroSection'
	})

	const about = await client.getEntries({
		content_type: 'aboutSection'
	})

	const team = await client.getEntries({
		content_type: 'teamSection'
	})

	const transactions = await client.getEntries({
		content_type: 'transactionsSection'
	})

	const platform = await client.getEntries({
		content_type: 'platformSection'
	})

	const company = await client.getEntries({
		content_type: 'companyInfo'
	})

	return (
		<main className='page'>
			<Hero content={hero.items[0]} company={company.items[0]} />
			<About content={about.items[0]} />
			<Transactions content={transactions.items[0]} />
			{team.items[0].fields.showSection && <Team content={team.items[0]} />}
			{platform.items[0].fields.showSection && (
				<OurPlatform content={platform.items[0]} />
			)}
		</main>
	)
}
