import React from 'react';
import { useUser } from '@clerk/clerk-react';
import './ProfileScreen.css';

const ProfileScreen = () => {
  const { user } = useUser();

  const studyMaterials = [
    { 
      id: 1, 
      title: 'Engineering Mathematics Notes', 
      link: 'https://drive.google.com/file/d/math-notes' 
    },
    { 
      id: 2, 
      title: 'Programming Fundamentals', 
      link: 'https://drive.google.com/file/d/programming-notes' 
    }
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Student Profile</h1>
      </div>
      {user && (
        <div className="profile-content">
          <div className="profile-details">
            <img 
              src={user.profileImageUrl || '/default-avatar.png'} 
              alt="Profile" 
              className="profile-image"
            />
            <h2>{user.fullName}</h2>
            <p>Email: {user.emailAddresses[0]?.emailAddress}</p>
          </div>
          <div className="study-materials">
            <h3>Study Materials</h3>
            <div className="materials-grid">
              {studyMaterials.map(material => (
                <a 
                  key={material.id} 
                  href={material.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="material-link"
                >
                  {material.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileScreen;
