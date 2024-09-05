import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-heading">404</h1>
            <p className="not-found-message">Üzgünüz, aradığınız sayfa bulunamadı.</p>
            <a href="/" className="not-found-link">Ana Sayfaya Dön</a>
        </div>
    );
};

export default NotFound;
