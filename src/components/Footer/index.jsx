import React, { useState } from 'react';
import './Footer.css';
import Logo from '../Logo';
import { footer } from '../../data';
import { Link } from 'react-scroll';
import FooterModal from './FooterModal';

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleModalOpen = (title) => {
    let content = '';
   if (title === 'Privacy Policy') {
  content = `At Friomer, customer privacy is an absolute priority. We only collect the information necessary to provide our services, such as name, email address, and order details. This information is stored securely and is never shared with third parties without your explicit consent. We use encryption technologies to protect your personal data and offer you the ability to modify or delete your information at any time. By using our website, you agree to our privacy policy.`;
} else if (title === 'Terms and Conditions') {
  content = `By accessing our website or placing an order with Friomer, you agree to our terms and conditions. These terms define the rules for using the site, as well as the ordering, payment, delivery, and return processes. Any order implies full acceptance of these conditions. Friomer reserves the right to modify these terms at any time. It is your responsibility to review them regularly. We are committed to providing reliable, secure services in accordance with industry standards.`;
} else if (title === 'Cookie Policy') {
  content = `We use cookies to enhance your browsing experience on our website. These cookies help remember your preferences, analyze site traffic, and personalize the content we display. You can disable cookies at any time through your browser settings, but this may affect certain site features. By continuing to browse our site without changing your settings, you accept the use of cookies in accordance with this policy.`;
}

    setModalContent({ title, content });
  };

  const handleClose = () => setModalContent(null);

  return (
    <footer id='footer'>
      <div className="container">
        <div className="row">
          <div className="column">
            <Logo />
          </div>

          {footer.map((list, index) => (
            <div className="column" key={index}>
              <div className="routes__name">{list.name}</div>
              <div className={`routes__container ${list.name === 'Section' ? 'section' : ''}`}>
                {
                  list.name === 'Explore' ? (
                    list.routes.map((route, i) => (
                      <div
                        key={i}
                        className="route__item"
                        onClick={() => handleModalOpen(route.name)}
                        style={{ cursor: 'pointer' }}
                      >
                        <p className="name">{route.name}</p>
                      </div>
                    ))
                  ) : (
                    list.routes.map((route, i) => (
                      <Link to={route.id} className="route__item" key={i}>
                        <p className="name">{route.name}</p>
                      </Link>
                    ))
                  )
                }
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <h3>Copyright &copy; All right reserved -| 2025</h3>
          
        </div>
      </div>

      {modalContent && (
        <FooterModal
          title={modalContent.title}
          content={modalContent.content}
          onClose={handleClose}
        />
      )}
    </footer>
  );
};

export default Footer;
