import React, { useState, useEffect } from 'react';
import { Settings, Check, Pause, Play, Sparkles } from 'lucide-react';

const BackgroundSelector = ({ 
  activeMode, 
  setActiveMode, 
  isPaused, 
  setIsPaused 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { id: 'constellation', name: '3D Constellation' },
    { id: 'geometry', name: '3D Geometry' },
    { id: 'streams', name: 'Code Streams' },
    { id: 'none', name: 'None (Static)' }
  ];

  return (
    <div className={`bg-selector-wrapper ${isOpen ? 'active' : ''}`}>
      {/* Floating Toggle Button */}
      <button 
        className="bg-selector-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="Background settings"
        aria-label="Toggle background settings panel"
      >
        <Settings className={`gear-icon ${isOpen ? 'rotated' : ''}`} size={20} />
        <span className="btn-text">Customize Space</span>
      </button>

      {/* Settings Panel */}
      {isOpen && (
        <div className="bg-selector-panel">
          <div className="bg-selector-header">
            <Sparkles size={16} style={{ color: 'var(--primary-color)' }} />
            <h4>Background Space</h4>
          </div>

          <ul className="bg-options-list">
            {options.map((opt) => (
              <li key={opt.id}>
                <button
                  onClick={() => {
                    setActiveMode(opt.id);
                    localStorage.setItem('cnc-bg-mode', opt.id);
                  }}
                  className={`bg-option-item ${activeMode === opt.id ? 'active' : ''}`}
                >
                  <span className="option-name">{opt.name}</span>
                  {activeMode === opt.id && <Check size={14} className="check-icon" />}
                </button>
              </li>
            ))}
          </ul>

          {activeMode !== 'none' && (
            <div className="bg-pause-control">
              <span>Freeze Space</span>
              <button
                onClick={() => {
                  const newVal = !isPaused;
                  setIsPaused(newVal);
                  localStorage.setItem('cnc-bg-paused', newVal ? 'true' : 'false');
                }}
                className={`pause-toggle-btn ${isPaused ? 'paused' : ''}`}
                title={isPaused ? 'Resume Background Animation' : 'Pause Background Animation'}
              >
                {isPaused ? <Play size={14} /> : <Pause size={14} />}
                <span>{isPaused ? 'Resume' : 'Pause'}</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Click outside to close backdrop overlay */}
      {isOpen && (
        <div 
          className="bg-selector-backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default BackgroundSelector;
