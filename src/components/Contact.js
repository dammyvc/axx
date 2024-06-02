import React from 'react';
import ProfileCard from './ProfileCard'; // Make sure to import ProfileCard component

const Contact = () => {
  const profileCardProps = {
    image: '/images/profiles/John_Okoro.jpeg', // Replace with actual path to image in your public folder
    name: 'Natalie Paisley',
    position: 'CEO / Co-Founder',
    detailsProps: {
      avatar: '/images/profiles/John_Okoro.jpeg', // Replace with actual path to image in your public folder
      name: 'Tania Andrew',
      position: 'General Manager',
      company: 'ABC Construction',
      phone: '00 123 456 789',
      email: 'person@example.com',
    },
  };

  return (
    <div>
      <ProfileCard {...profileCardProps} />
    </div>
  );
};

export default Contact;
