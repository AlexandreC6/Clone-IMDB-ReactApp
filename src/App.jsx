import React from 'react'
import { BrowserRouter as Router, Routes, Route}from "react-router-dom";
import Header from './components/header/Header';

function App() {
return (
  <>
    <Router>
      <Header />
      <Routes>
        <Route index element={<h1>Hello World 2</h1>}></Route>
        <Route path='movie/:id' element={<h1>Movie Details page</h1>}></Route>
        <Route path='movies/:type' element={<h1>Movies list page</h1>}></Route>
        <Route path='*' element={<h1>Erro page</h1>}></Route>
      </Routes>
    </Router>
  </>
)
}

export default App
