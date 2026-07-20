import Button from './Components/Button.jsx';
import ProfileCard from './Components/ProfileCard.jsx';

function App() {
  const profiles = [
    { name: 'Ayoola', role: 'Aspiring React Developer', imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Bobola', role: 'Aspiring Frontend Developer', imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Tunde', role: 'Backend Engineer', imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Ngozi', role: 'Product Manager', imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { name: 'Emeka', role: 'DevOps Engineer', imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { name: 'Fatima', role: 'Data Analyst', imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { name: 'Segun', role: 'Mobile Developer', imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { name: 'Blessing', role: 'QA Engineer', imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { name: 'Kelechi', role: 'Full-Stack Developer', imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { name: 'Aisha', role: 'Cloud Engineer', imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg' },
  ];

  return (
    <div className="App">
      <Button onClick={() => alert('Clicked!')}>Get Started</Button>

      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            role={profile.role}
            imageUrl={profile.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;