'use client'

// styles
import styles from './Header.module.scss'

// Components
import Hamburger from './Hamburger'
import Link from 'next/link'
import Image from 'next/image'

// hooks
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useState } from 'react'

const Header = ({ about, team, transactions, platform }) => {
	// Scrolling Header
	const [targetRef, isIntersecting] = useIntersectionObserver()

	// Mobile Menu

	const [menuOpen, setMenuOpen] = useState(false)
	const [menuClass, setMenuClass] = useState(styles.menuBtnClosed)
	const [hiddenMenuClass, setHiddenMenuClas] = useState(styles.hidden)

	const toggleMenu = () => {
		if (!menuOpen) {
			setMenuClass(styles.menuBtnOpen)
			setMenuOpen(true)
			setHiddenMenuClas('')
		} else {
			setMenuClass(styles.menuBtnClosed)
			setMenuOpen(false)
			setHiddenMenuClas(styles.hidden)
		}
	}

	const closeMenu = () => {
		setMenuClass(styles.menuBtnClosed)
		setMenuOpen(false)
		setHiddenMenuClas(styles.hidden)
	}

	return (
		<nav ref={targetRef}>
			<header
				className={isIntersecting ? styles.headerTop : styles.headerScroll}
			>
				<div className={styles.nav}>
					<Link href='/' scroll={false} passHref aria-label='Homepage'>
						<Image
							src='logo.svg'
							width={166}
							height={50}
							alt='Parallel Logo'
							priority={true}
						/>
					</Link>

					<Hamburger toggleMenu={toggleMenu} menuClass={menuClass} />

					<ul className={hiddenMenuClass}>
						<a href='/#about' aria-label={about}>
							<li onClick={() => closeMenu()}>{about}</li>
						</a>
						<a href='/#transactions'>
							<li onClick={() => closeMenu()} aria-label={transactions}>
								{transactions}
							</li>
						</a>
						<a href='/#team'>
							<li onClick={() => closeMenu()} aria-label={team}>
								{team}
							</li>
						</a>
						{/* <a href='/#platform'>
							<li onClick={() => closeMenu()} aria-label={platform}>
								{platform}
							</li>
						</a> */}
					</ul>
				</div>
			</header>
		</nav>
	)
}

export default Header
