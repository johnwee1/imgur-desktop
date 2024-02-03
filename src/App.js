import './App.css';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import SignInSide from './SignInSide';
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInSide />}>
      </Route>
    </Routes>
  );
}

export default App;
