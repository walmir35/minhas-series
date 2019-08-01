import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import Header from './Header';
import Generos from './Generos';
import Home from './Home';
import NovoGenero from './NovoGenero';
import EditarGenero from './EditarGenero';
import api from  './api';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {

  const [data, setData] = useState({});


  useEffect(() => {
    api.get('/api').then(res => {
      setData(res.data);
      //console.log(res.data);
    })
    //console.log('AQUi');
  }, []);
  

    
  return (
    <Router>
      <div>
        <Header />
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/generos/novo' exact component={NovoGenero} />
        <Route path='/generos/:id' exact component={EditarGenero} />
        <Route path='/generos' exact component={Generos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
