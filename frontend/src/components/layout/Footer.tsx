// Footer Component
import {
    EnvelopeIcon,
    ChatBubbleLeftRightIcon,
  } from '@heroicons/react/24/outline';
  
  export const Footer = () => {
    const whatsappNumber = '94710901871';
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    const email = 'voxosolution@gmail.com';
  
    return (
      <footer className="bg-primary-900 border-t border-primary-700">
        <div className="max-w-7xl mx-auto px-3 py-1">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
  
            {/* Left - Copyright */}
            <div className="text-primary-300 text-center md:text-left">
              © {new Date().getFullYear()}{' '}
              <span className="font-semibold text-white">
                VOXOsolution
              </span>{' '}
              All rights reserved
            </div>
  
            {/* Center - Contact Icons Only */}
            <div className="flex items-center gap-6">
  
              {/* Email Icon */}
              <a
                href={`mailto:${email}`}
                className="p-2 rounded-full text-primary-300 hover:text-white hover:bg-primary-800 transition-all"
                title="Send Email"
              >
                <EnvelopeIcon className="w-5 h-5" />
              </a>
  
              {/* WhatsApp Icon */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-primary-300 hover:text-white hover:bg-primary-800 transition-all"
                title="Chat on WhatsApp"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
              </a>
  
            </div>
  
            {/* Right - Branding */}
            <div className="text-primary-400 text-center md:text-right">
              Powered by{' '}
              <span className="font-medium text-primary-200">
                VOXOsolution
              </span>
            </div>
  
          </div>
        </div>
      </footer>
    );
  };
  