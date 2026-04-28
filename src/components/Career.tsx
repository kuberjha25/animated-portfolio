import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack & React Native Dev</h4>
                <h5>Paul Merchants Limited</h5>
              </div>
              <h3>2024 - NOW</h3>
            </div>
            <p>
              Revamped Mayaa Money mobile application from Expo to React Native CLI, improving app performance and user ratings; implemented code splitting to reduce cold-start time by 45%. Optimized app bundle size across platforms (50% reduction). Built B2C mobile application and B2B admin/partner portals for Paul Gold.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend & Android Dev</h4>
                <h5>Retail Scan Management Services</h5>
              </div>
              <h3>2023 - 2024</h3>
            </div>
            <p>
              Developed RetailScan Portal (B2B web portal) using React.js with role-based dashboards for retail auditors. Built MyTrack auditing app in Android Studio with offline-first architecture. Migrated EzeePay Android app to React Native within 2-month deadline.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Engineer</h4>
                <h5>Tata Communications</h5>
              </div>
              <h3>2021 - 2023</h3>
            </div>
            <p>
              Led geofencing-enabled field auditing solution for SRMS project. Developed full-stack WFM mobile application (Spring Boot backend, React.js frontend, React Native mobile). Built travel compliance monitoring system with EnableX video/audio calling integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Spring Boot Intern</h4>
                <h5>Cuemath</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Developed backend services using Java Spring Boot; contributed to production-level API development and performance optimizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
