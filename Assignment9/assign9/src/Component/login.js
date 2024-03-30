import { useState } from 'react'
import './login.css'

function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:8000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login Successful')
			window.location.href='/Home'
		} else {
			alert('Please check your username and password')
		}
	}

	
	return (
		<div class="class1" id="login">
			<h1>Login</h1>
			
			<form onSubmit={loginUser}>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					id="firstName"
					placeholder="User Name"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="login" />
				
			</form>
			
			<link rel="stylesheet" href="login.css"></link>
		</div>
	)
}

export default App