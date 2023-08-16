import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function Login() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div class="d-flex justify-content-center align-items-center vh-100">
        <button type="button" className="boton3" onClick={() => loginWithRedirect()}>Login</button>
        </div>)
}
