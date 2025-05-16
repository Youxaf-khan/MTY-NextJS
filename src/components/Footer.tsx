import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">MoveToYourGoals</h3>
            <p className="text-gray-400">
              Empowering businesses with virtual assistance and custom web development solutions.
            </p>
            <div className="flex space-x-4">
              <SocialIcon
                url="https://www.instagram.com/movetoyourgoals"
                bgColor="#E1306C"
                fgColor="white"
                style={{ height: 40, width: 40 }}
              />
              <SocialIcon
                url="https://www.linkedin.com/company/movetoyourgoals"
                bgColor="#0077B5"
                fgColor="white"
                style={{ height: 40, width: 40 }}
              />
              <SocialIcon
                url="https://github.com/Youxaf-Khan"
                bgColor="#333"
                fgColor="white"
                style={{ height: 40, width: 40 }}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Virtual Assistance
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@movetoyourgoals.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MoveToYourGoals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
