import React from 'react';
import { useEffect, useState } from 'react';
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed'
import '../styles/index.scss'
import Sidebar from './sidebar/Sidebar'
import BlogPage from './blog/BlogPage'


function App() {
  return (
    <main>
      {/* TODO: automatically hide sidebar until hover over */}
      {/* <Sidebar/> */}
      <BlogPage/>
    </main>
  );
}

export default App;
