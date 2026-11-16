import React from 'react';
import './Footer.css';

const FooterModal = ({ title, content, onClose }) => {
  return (
    <div className="footer-modal-backdrop" onClick={onClose}>
      <div className="footer-modal" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onClose} className="btn btn__primary">Fermer</button>
      </div>
    </div>
  );
};

export default FooterModal;
