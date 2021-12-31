import React from 'react';
import { useEffect, useState } from 'react';
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed'
import '../styles/index.scss'
import Sidebar from './sidebar/Sidebar'
import BlogPage from './blog/BlogPage'


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
      {/* TODO: automatically hide sidebar until hover over */}
      {/* <Sidebar/> */}
      <BlogPage/>
      {/* <div class="twitter-feed">
        <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="MoteksoUK"/>
      </div> */}
    </main>
 
  );
}

export default App;
