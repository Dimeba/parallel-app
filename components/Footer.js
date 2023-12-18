// styles
import styles from './Footer.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

const Footer = ({ about, transactions, team, platform, company }) => {
	return (
		<footer id={styles.footer} className='containerCenter'>
			<div className={styles.contactInfo}>
				<p>
					{company.fields.email}
					<br /> {company.fields.phone}
					<br />
					<br /> {company.fields.address}
					<br /> {company.fields.location}
				</p>

				<Link href='/' scroll={false} passHref aria-label='Homepage'>
					<Image
						src='symbol.svg'
						width={80}
						height={87}
						alt='Parallel Logo'
						priority={true}
					/>
				</Link>
			</div>
			<div className={styles.links}>
				<ul className={styles.menu}>
					<a href='/#about' aria-label={about.fields.title}>
						<li>{about.fields.title}</li>
					</a>
					<a href='/#transactions' aria-label={transactions.fields.title}>
						<li>{transactions.fields.title}</li>
					</a>
					{team.fields.showSection && (
						<a href='/#team' aria-label={team.fields.title}>
							<li>{team.fields.title}</li>
						</a>
					)}
					{platform.fields.showSection && (
						<a href='/#platform' aria-label={platform.fields.title}>
							<li>{platform.fields.title}</li>
						</a>
					)}
				</ul>

				<ul>
					<li>Parallel CRE © Copyright 2023</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
