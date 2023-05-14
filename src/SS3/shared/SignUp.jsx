import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        if (email === '' || !email.includes('@')) {
            alert('Email không hợp lệ!');
        } else if (password === '' || password.length < 8) {
            alert('Password không hợp lệ!');
        } else if (password !== confirmPassword) {
            alert('Password chưa trùng khớp!');
        } else {
            const user = { email, password };
            fetch('https://645e884c12e0a87ac0f2a896.mockapi.io/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Đăng ký thành công!')
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Đăng ký thất bại!');
            });
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            minWidth: '100%',
        }}>
            <h1 style={{ marginBottom: 20 }}>Sign Up</h1>
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
                        style={{ width: '100%', marginBottom: 12 }}
                    />
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </button>
                </div>
                <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <p>or <a href="#">Log In</a> if you had an account.</p>
                </div>
            </form>
        </div>
    )
}

export default SignUp