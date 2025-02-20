'use client'

import Link from 'next/link'
import React from 'react'

export default function Breadcumb({ title, subtitle, page }) {
  return (
    <div className="intro-single">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-8">
                    <div className="title-single-box">
                        <h1 className="title-single">{title}</h1>
                        <span className="color-text-a">{subtitle}</span>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <nav 
                        aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link href="/">
                                    <i className="bi bi-house-door-fill"></i>
                                </Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {page}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  );
}
