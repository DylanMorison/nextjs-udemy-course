'use client'

import { useEffect } from "react"

export default function HomePage() {
	console.log("[HomePage] rendering")

	useEffect(() => {}, [])

	return (
		<>
			<h1>Indie Gamer</h1>
			<p>Only the best indie games, reviewed for you.</p>
		</>
	)
}
