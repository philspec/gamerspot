import { motion, AnimatePresence } from 'framer-motion';
import GameSection from '@/components/GameSection';
import { sections } from '@/data/sections';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Welcome to GamerSpot
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Your Ultimate Gaming Destination
        </motion.p>
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Scroll to Explore
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="sections-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <AnimatePresence>
          {sections.map((section, index) => (
            <GameSection 
              key={index}
              {...section}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Footer Section */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">GamerSpot</h3>
            <p className="footer-description">
              Level up your gaming experience with the latest releases, 
              competitive esports, and premium gear.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#latest">Latest Games</a></li>
              <li><a href="#popular">Popular</a></li>
              <li><a href="#esports">Esports</a></li>
              <li><a href="#gear">Gaming Gear</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-discord"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitch"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Newsletter</h4>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-button">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-line"></div>
          <p className="copyright">
            © 2023 GamerSpot. Level Up Your Game.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default LandingPage; 