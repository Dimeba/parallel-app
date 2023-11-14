import { PT_Sans } from 'next/font/google'
import './globals.scss'

const ptSans = PT_Sans({
	subsets: ['latin'],
	weight: ['400', '700'],
	display: 'swap'
})

// components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
	title: 'Parallel CRE',
	description:
		'Parallel CRE is an in-house commercial real estate debt advisory firm, focused on providing each client with a catered experience to achieve COMPETITIVE FINANCING for the LOWEST COST',
	keywords:
		'Real Estate, Capital Services, New York City, Competitive Financing, In-house Service, Lowest Cost, Large lender network, Experienced advisors, Financing focus, No commissions',
	icons: {
		icon: '/favicon.svg'
	}
}

// contentful
import { createClient } from 'contentful'

export default async function RootLayout({ children }) {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
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
		<html lang='en'>
			<body className={ptSans.className}>
				<div className='background-symbol'>
					<Image
						src='symbol-background.svg'
						fill={true}
						style={{ objectFit: 'cover', objectPosition: 'top', opacity: 0.7 }}
						alt='background image'
					/>
				</div>
				<Header
					about={about.items[0].fields.title}
					transactions={transactions.items[0].fields.title}
					team={team.items[0].fields.title}
					platform={platform.items[0].fields.title}
				/>
				{children}
				<Footer
					about={about.items[0].fields.title}
					transactions={transactions.items[0].fields.title}
					team={team.items[0].fields.title}
					platform={platform.items[0].fields.title}
					company={company.items[0]}
				/>
			</body>
		</html>
	)
}
