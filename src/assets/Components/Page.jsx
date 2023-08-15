import React from 'react'

export default function Page() {
    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item p-2">
                    <button className="page-link">Anterior</button>
                </li>
                <li className="page-item p-2">
                    <button className="page-link">Siguiente</button>
                </li>
            </ul>
        </nav>
    )
}