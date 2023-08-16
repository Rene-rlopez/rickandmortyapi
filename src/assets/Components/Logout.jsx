import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Logout() {
    const { logout } = useAuth0();
    return (
        <button type="button" className="btn btn-danger" onClick={() => logout({ returnTo: window.location.origin })} >Logout <i className="fa-solid fa-right-from-bracket"></i> </button>
    )
}
