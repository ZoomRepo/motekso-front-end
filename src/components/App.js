import React from 'react';     
import Home from './simplified-site/Home';
import './simplified-site/cover.css'

function App() {
  return (
<div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <header class="masthead mb-auto">
        <div class="inner">
          <img  class="masthead-brand logo" src={require('../assets/images/simple-transparent.png')} />
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link active" href="#">Home</a>
            <a class="nav-link" href="https://medium.com/@ollie_beumkes">Blog</a>
            {/* <a class="nav-link" href="#">Patreon</a> */}
          </nav>
        </div>
      </header>

      <main role="main" class="inner cover">
        {/* <h1 class="cover-heading">Motekso</h1> */}
        <br/>
        <br/>
        <br/>
        <p class="lead">
          Sharing innovative ideas to help educate, how modern technologies can be used to your advantage.</p>
          <br/>
        <p class="lead">
          <a href="https://medium.com/@ollie_beumkes" class="btn btn-lg btn-secondary">Check out the Blog</a>
        </p>
      </main>

      <footer class="mastfoot mt-auto">
        <div class="inner">
          <p>Follow our <a href="https://twitter.com/MoteksoUK">Twitter</a>.</p>
        </div>
      </footer>
      
    </div>
  );
}

export default App;
