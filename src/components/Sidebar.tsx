import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profileData, skillsData } from '../data/resumeData';

export const Sidebar = () => {
  return (
    <motion.aside 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-panel scroll-pane"
      style={{ padding: '2rem', position: 'sticky', top: '2rem', maxHeight: 'calc(100vh - 4rem)' }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="heading-1">{profileData.name}</h1>
        <h2 style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--accent-color)', marginTop: '0.25rem' }}>
          {profileData.role}
        </h2>
        <p className="text-muted" style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
          {profileData.tagline}
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          {profileData.bio}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
        <a 
          href={profileData.links.email} 
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}
          className="contact-link"
        >
          <Mail size={16} className="text-muted" style={{ transition: 'color 0.2s ease' }} />
          <span>Email</span>
        </a>
        <a 
          href={profileData.links.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}
          className="contact-link"
        >
          <FaGithub size={16} className="text-muted" style={{ transition: 'color 0.2s ease' }} />
          <span>GitHub Profile</span>
        </a>
        {profileData.links.linkedin && (
          <a 
            href={profileData.links.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}
            className="contact-link"
          >
            <FaLinkedin size={16} className="text-muted" style={{ transition: 'color 0.2s ease' }} />
            <span>LinkedIn Profile</span>
          </a>
        )}
        <a 
          href={profileData.links.phone} 
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}
          className="contact-link"
        >
          <Phone size={16} className="text-muted" style={{ transition: 'color 0.2s ease' }} />
          <span>Phone</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          <MapPin size={16} className="text-muted" />
          <span>Vellore, India</span>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--text-main)' }}>
          Technical Skills
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600 }}>
                {category}
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
};
