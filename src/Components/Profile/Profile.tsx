import React from 'react';
import './Profile.css'; // Importe o CSS

const Profile: React.FC = () => {
  return (
    <div className="profile-container">
      <h2 className="profile-description">
     O que estou aprendendo 📝:
      </h2>

      <div className="badge-container">
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge" alt="javascript logo" />
        <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" alt="typescript logo" />
        <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge" alt="react logo" />
        <img src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white&style=for-the-badge" alt="nextjs logo" />
      </div>



      <h2>Meus status 📈:</h2>
      <div className="stats-container">
        <img
          src="https://github-readme-stats.vercel.app/api?username=VITOR-KURTH&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=github_dark&locale=en&hide_border=true&order=1&custom_title=Stats"
          alt="stats graph"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs?username=VITOR-KURTH&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=github_dark&hide_border=true&order=2&custom_title=Languages"
          alt="languages graph"
        />
      </div>
    </div>
  );
};

export default Profile;

