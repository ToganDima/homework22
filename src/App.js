import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsList from './components/PostsList';
import NewPostForm from './components/NewPostForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="newpost" element={<NewPostForm />} />
        <Route path="*" element={<PostsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
