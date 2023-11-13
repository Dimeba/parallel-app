// styles
import styles from './Footer.module.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer id={styles.footer} className='containerCenter'>
			<div className={styles.contactInfo}>
				<p>
					info@parallelcre.com
					<br /> (917) 626-3406
					<br />
					<br /> 48 West 37th Street
					<br /> New York, NY 10018
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
					<a href='/#about' aria-label='About Us'>
						<li>About Us</li>
					</a>
					<a href='/#transactions' aria-label='Featured Transactions'>
						<li>Featured Transactions</li>
					</a>
					<a href='/#team' aria-label='Meet Our Team'>
						<li>Meet Our Team</li>
					</a>
					<a href='/#platform' aria-label='Our Platform'>
						<li>Our Platform</li>
					</a>
				</ul>

				<ul>
					{/* <Link href='#' scroll={false} passHref>
						<li>Privacy Policy</li>
					</Link>
					<Link href='#' scroll={false} passHref>
						<li>Terms of Use</li>
					</Link> */}
					<li>Parallel CRE © Copyright 2023</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
