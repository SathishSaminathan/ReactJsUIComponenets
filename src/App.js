import React from 'react';

import logo from './logo.svg';
import './App.css';
import ImagePreloader from './components/ImagePreLoader';
import Uploader from './components/File Uploader/Uploader';
import DragAndDrop from './components/DragAndDrop';

function App() {
  return (
    <div className="App">
      <DragAndDrop/>
    </div>
  );
}

export default App;
