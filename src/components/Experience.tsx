import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experienceData } from '../data/resumeData';

export const Experience = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{ marginBottom: '3rem' }}
    >
      <h2 className="heading-2">
        <Briefcase size={24} style={{ color: 'var(--accent-color)' }} />
        Experience & Education
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1.5rem', paddingLeft: '0.25rem' }}>
        {experienceData.map((item, index) => (
          <div key={item.id} style={{ position: 'relative', paddingLeft: '2rem' }}>
            {/* Vertical timeline line */}
            <div 
              style={{ 
                position: 'absolute', 
                left: '6px', 
                top: '0.45rem', 
                bottom: index !== experienceData.length - 1 ? '-2.5rem' : 'auto', 
                width: '2px', 
                backgroundColor: 'var(--border-color)',
                transition: 'background-color 0.3s ease'
              }} 
            />

            {/* Fully centered timeline dot with glow - never cut off */}
            <div 
              style={{ 
                position: 'absolute', 
                left: '7px', 
                top: '0.45rem', 
                transform: 'translateX(-50%)', 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--accent-color)', 
                border: '2px solid var(--bg-color)',
                boxShadow: '0 0 0 2px var(--accent-glow)',
                transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
              }} 
            />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-main)' }}>{item.title}</h3>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '0.15rem' }}>{item.company}</h4>
              </div>
              <span 
                style={{ 
                  fontSize: '0.875rem', 
                  color: 'var(--badge-color)', 
                  fontWeight: 500, 
                  backgroundColor: 'var(--badge-bg)', 
                  border: '1px solid var(--badge-border)',
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '9999px',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.date}
              </span>
            </div>
            
            <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
              {item.description}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              {item.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
