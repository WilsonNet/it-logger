import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

function App() {
  useEffect(() => {
    M.AutoInit();
  });
}

export default App;
