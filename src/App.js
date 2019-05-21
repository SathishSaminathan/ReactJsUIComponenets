import React from 'react';

import logo from './logo.svg';
import './App.css';
import ImagePreloader from './components/ImagePreLoader';
import Uploader from './components/File Uploader/Uploader';

function App() {
  return (
    <div className="App">
      <Uploader/>
    </div>
  );
}

export default App;
