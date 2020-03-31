import React from 'react';
import logo from './logo.svg';
import './App.css';
import YouTube from 'react-youtube';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Example/>
        <AwesomeButton/>
      </header>
    </div>
  );
}

class Example extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="dQw4w9WgXcQ"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

function Button() {
  return <AwesomeButton type="primary">Button</AwesomeButton>;
}



export default App;
