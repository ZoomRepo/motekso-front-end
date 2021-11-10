import React from 'react';
import { useEffect, useState } from 'react';
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed'
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <div class="coming-soon">
        <img src="Motekso - Transparent.png"/>
        <h1 class="coming-soon">COMING SOON</h1>
      </div>
      <div class="twitter-feed">
        <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="MoteksoUK"/>
      </div>
    </main>
 
  );
}

export default App;
