import { Route, Routes } from 'react-router-dom';

import { Main } from './pages/Main/Main';
import { SignIn } from './pages/SignIn/SignIn';

import { storage } from './utils/storage';

function App() {
  const isAuth = storage.hasItem('auth');

  return (
    <Routes>
      <Route path='/' element={isAuth ? <Main /> : <SignIn />} />
    </Routes>
  );
}

export default App;
