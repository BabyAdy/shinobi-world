import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import Clans from './pages/Clans';
import ClanDetails from './pages/ClanDetails';
import Villages from './pages/Villages';
import VillageDetails from './pages/VillageDetails';
import Organizations from './pages/Organizations';
import OrganizationDetails from './pages/OrganizationDetails';
import Jutsus from './pages/Jutsus';
import JutsuDetails from './pages/JutsuDetails';
import Beasts from './pages/Beasts';
import BeastDetails from './pages/BeastDetails';
import Chapters from './pages/Chapters';
import ChapterDetails from './pages/ChapterDetails';
import Others from './pages/Others';
import './index.css';
import './App.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#home');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    const [base, id] = currentPath.split('/');
    
    if (base === '#character') {
      return id ? <CharacterDetails id={id} key={id} /> : <Characters />;
    }
    
    if (base === '#clans') {
      return id ? <ClanDetails id={id} key={id} /> : <Clans />;
    }

    if (base === '#villages') {
      return id ? <VillageDetails id={id} key={id} /> : <Villages />;
    }

    if (base === '#organization') {
      return id ? <OrganizationDetails id={id} key={id} /> : <Organizations />;
    }

    if (base === '#jutsu') {
      return id ? <JutsuDetails id={id} key={id} /> : <Jutsus />;
    }

    if (base === '#beast-tails') {
      return id ? <BeastDetails id={id} key={id} /> : <Beasts />;
    }

    if (base === '#chapters') {
      return id ? <ChapterDetails id={id} key={id} /> : <Chapters />;
    }

    if (base === '#others') return <Others />;

    return <Home />;
  };

  return (
    <main className="min-h-screen">
      {renderPage()}
    </main>
  );
}

export default App;