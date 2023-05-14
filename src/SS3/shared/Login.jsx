import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            minWidth: '100%',
        }}>
            <h1 style={{ marginBottom: 20 }}>Log In</h1>
            <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', marginBottom: 12 }}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%' }}
                    />
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 16,
                    marginTop: 20,
                    marginBottom: 20
                }}>
                    <button
                        style={{ padding: 8, border: '1px solid #ccc', borderRadius: 8, cursor: 'pointer' }}
                        type='submit'
                    >
                        Log In
                    </button>
                </div>
                <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <p>Don't have an account? <a href="#">Sign Up</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login