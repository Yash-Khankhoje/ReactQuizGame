// System library imports
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Custome components imports
import Home from './Components/Home';
import Play from './Components/Play';
import QuizSummary from './Components/QuizSummary';

// Code for App components starts hear
function App() {
  return (
    <div>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/play/quiz' exact component={Play} />
        <Route path='/play/quizSummary' exact component={QuizSummary} />
      </Router>
    </div>
  )
}

export default App
