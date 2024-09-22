import React from 'react';
import footerData from './footerdata.json';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {
  const renderIcon = (name) => {
    switch (name) {
      case 'Facebook':
        return <FacebookIcon className="text-white" />;
      case 'Instagram':
        return <InstagramIcon className="text-white" />;
      case 'LinkedIn':
        return <LinkedInIcon className="text-white" />;
      case 'YouTube':
        return <YouTubeIcon className="text-white" />;
      case 'WhatsApp':
        return <WhatsAppIcon className="text-white" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-teal-500 text-white py-10 px-6 w-screen ">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Logo Section */}
        <div>
          <h3 className="font-semibold">{footerData.logo.text}</h3>
          <div className="flex space-x-4 mt-4">
            {footerData.socialLinks.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                {renderIcon(social.name)}
              </a>
            ))}
          </div>
        </div>

        {/* Dynamic Sections */}
        {footerData.sections.map((section, index) => (
          <div key={index}>
            <h4 className="font-semibold mb-4">{section.title}</h4>
            <ul>
              {section.links ? (
                section.links.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <a href={link.url} className="hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))
              ) : (
                <ul>
                  {section.details.map((detail, idx) => (
                    <li key={idx} className="mb-2">
                      {detail.type === 'email' ? (
                        <a href={`mailto:${detail.text}`} className="hover:underline">{detail.text}</a>
                      ) : (
                        <span>{detail.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </ul>
          </div>
        ))}

        {/* Subscribe Section */}
        <div>
          <h4 className="font-semibold mb-4">Subscribe Now</h4>
          <input 
            type="email" 
            placeholder="Enter Email Address" 
            className="p-2 w-full rounded-lg text-black mb-2" 
          />
          <button className="bg-green-600 px-4 py-2 rounded-lg w-full">
            Subscribe Now
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
