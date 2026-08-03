import { React } from 'react';
// import './../../styles/profile.css';
// import { Profile } from '../../static_components/index.js';
import { ProfileImg } from '../../assets/index.js'; // Replace with actual image path



// export default function App() {
//   return (

// }


const AboutPage = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Meet Your Therapist</h1>
          <div style={styles.heroDivider} />
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.contentWrapper}>
          {/* Image Section */}
          <div style={styles.imageSection}>
            <div style={styles.imageFrame}>
              <img
                src={ProfileImg}
                alt="Massage therapist in a calm, professional setting"
                style={styles.Profile}
              />
            </div>
            <div style={styles.imageAccent} />
          </div>

          {/* Text Section */}
          <div style={styles.textSection}>
            <h2 style={styles.sectionTag}>About</h2>
            <div style={styles.textDivider} />

            <div style={styles.credentials}>
              {/* Credentials placeholder */}
              <div style={styles.credentialItem}>
                <span style={styles.credentialDot} />
                <p style={styles.credentialText}></p>
              </div>
              <div style={styles.credentialItem}>
                <span style={styles.credentialDot} />
                <p style={styles.credentialText}></p>
              </div>
              <div style={styles.credentialItem}>
                <span style={styles.credentialDot} />
                <p style={styles.credentialText}></p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy / Extended Text Section */}
        <div style={styles.philosophySection}>
          <div style={styles.philosophyCard}>
            <h3 style={styles.philosophyTitle}>My Philosophy</h3>
            <div style={styles.philosophyDivider} />
            <div style={styles.philosophyContent}>
              {/* Placeholder for philosophy text */}
            </div>
          </div>

          <div style={styles.philosophyCard}>
            <h3 style={styles.philosophyTitle}>My Approach</h3>
            <div style={styles.philosophyDivider} />
            <div style={styles.philosophyContent}>
              {/* Placeholder for approach text */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  pageContainer: {
    backgroundColor: '#efe9e4',
    minHeight: '100vh',
    fontFamily: "'Cormorant Garamond', 'Georgia', serif",
  },

  // Hero Section
  heroSection: {
    position: 'relative',
    backgroundColor: '#474d51',
    padding: '100px 40px 80px',
    textAlign: 'center',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, #474d51 0%, #6c8b7e 100%)',
    opacity: 0.95,
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
  },
  heroTitle: {
    color: '#efe9e4',
    fontSize: '52px',
    fontWeight: '300',
    letterSpacing: '2px',
    margin: 0,
    fontFamily: "'Cormorant Garamond', 'Georgia', serif",
  },
  heroDivider: {
    width: '80px',
    height: '2px',
    backgroundColor: '#d97a5c',
    margin: '24px auto 0',
  },

  // Main Content
  mainContent: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '80px 40px',
  },

  // Content Wrapper (Image + Initial Text)
  contentWrapper: {
    display: 'flex',
    gap: '80px',
    alignItems: 'center',
    marginBottom: '100px',
    flexWrap: 'wrap',
  },

  // Image Section
  imageSection: {
    flex: '1 1 400px',
    position: 'relative',
  },
  imageFrame: {
    position: 'relative',
    zIndex: 2,
    borderRadius: '4px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(71, 77, 81, 0.15)',
  },
  Profile: {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'cover',
    aspectRatio: '4/5',
  },
  imageAccent: {
    position: 'absolute',
    bottom: '-16px',
    right: '-16px',
    width: '100%',
    height: '100%',
    border: `2px solid #c6a77a`,
    borderRadius: '4px',
    zIndex: 1,
  },

  // Text Section
  textSection: {
    flex: '1 1 400px',
  },
  sectionTag: {
    color: '#d97a5c',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    margin: '0 0 16px 0',
    fontFamily: "'Montserrat', 'Helvetica', sans-serif",
  },
  textDivider: {
    width: '50px',
    height: '2px',
    backgroundColor: '#6c8b7e',
    marginBottom: '32px',
  },

  // Credentials
  credentials: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  credentialItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
  },
  credentialDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#c6a77a',
    marginTop: '6px',
    flexShrink: 0,
  },
  credentialText: {
    color: '#474d51',
    fontSize: '17px',
    lineHeight: '1.7',
    margin: 0,
    fontFamily: "'Cormorant Garamond', 'Georgia', serif",
  },

  // Philosophy Section
  philosophySection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
  },
  philosophyCard: {
    backgroundColor: '#ffffff',
    padding: '48px 40px',
    borderRadius: '4px',
    boxShadow: '0 10px 40px rgba(71, 77, 81, 0.06)',
    borderLeft: `3px solid #6c8b7e`,
  },
  philosophyTitle: {
    color: '#474d51',
    fontSize: '24px',
    fontWeight: '400',
    letterSpacing: '1px',
    margin: '0 0 16px 0',
    fontFamily: "'Cormorant Garamond', 'Georgia', serif",
  },
  philosophyDivider: {
    width: '40px',
    height: '2px',
    backgroundColor: '#d97a5c',
    marginBottom: '24px',
  },
  philosophyContent: {
    color: '#474d51',
    fontSize: '16px',
    lineHeight: '1.8',
    fontFamily: "'Cormorant Garamond', 'Georgia', serif",
  },
};

export default AboutPage;