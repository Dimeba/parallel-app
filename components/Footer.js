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
					<a href='/#about' aria-label={about}>
						<li>{about}</li>
					</a>
					<a href='/#transactions' aria-label={transactions}>
						<li>{transactions}</li>
					</a>
					<a href='/#team' aria-label={team}>
						<li>{team}</li>
					</a>
					{/* <a href='/#platform' aria-label={platform}>
						<li>{platform}</li>
					</a> */}
				</ul>

				<ul>
					<li>Parallel CRE © Copyright 2023</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
