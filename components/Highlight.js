'use client'

import { useState, useEffect } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const Highlight = ({ value }) => {
	const [count, setCount] = useState(0)
	const [targetRef, isIntersecting] = useIntersectionObserver({
		root: null,
		rootMargin: '0px',
		threshold: 1.0
	})

	useEffect(() => {
		let intervalId
		if (isIntersecting) {
			intervalId = setInterval(() => {
				setCount(prevCount => {
					if (prevCount < value) {
						return prevCount + 1
					} else {
						clearInterval(intervalId)
						return prevCount
					}
				})
			}, 100)
		}

		return () => {
			if (intervalId) {
				clearInterval(intervalId)
			}
		}
	}, [isIntersecting])

	return <span ref={targetRef}>{count}</span>
}

export default Highlight
