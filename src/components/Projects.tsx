import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../data/resumeData';

export const Projects = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="heading-2">
        <Code size={24} style={{ color: 'var(--accent-color)' }} />
        Projects
      </h2>
      
      <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="glass-panel" 
            style={{ 
              padding: '1.5rem', 
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.3s ease, border-color 0.3s ease' 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-main)' }}>{project.title}</h3>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', transition: 'color 0.2s ease, transform 0.2s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent-color)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-muted)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    aria-label={`View ${project.title} source code on GitHub`}
                    title="View Source Code"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', transition: 'color 0.2s ease, transform 0.2s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent-color)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-muted)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    aria-label={`View live demo of ${project.title}`}
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
              {project.description}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tags.map((tag) => (
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
