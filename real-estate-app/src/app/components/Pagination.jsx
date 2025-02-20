'use client'

import React from 'react'

export default function Pagination() {
  return (
    <nav className="pagination-a">
        <ul className="pagination justify-content-end">
            <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1">
                    <span className="bi bi-chevron-left"></span>
                </a>
            </li>
            <li className="page-item active">
                <a className="page-link" href="#">1</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">3</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">4</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">5</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                    <span className="bi bi-chevron-right"></span>
                </a>
            </li>
        </ul>
    </nav>
  )
}
