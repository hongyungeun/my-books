import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import Error from './pages/Error';


function App() {
  return (
    <div className='App'>
      <ErrorBoundary FallbackComponent={Error}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/book/:id' element={<Detail/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
