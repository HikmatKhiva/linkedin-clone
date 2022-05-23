import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Feed, Header, Sidebar } from './components/export';
import Login from './components/Login/Login';
import Widget from './components/Widgets/Widget';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './Firebase/firebase';
function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          email: userAuth.email,
          photoUrl: userAuth.photoURL
        }))
      } else { dispatch(logout()) }
    })
  }, [dispatch])
  return (
    <div className="app">
      <Header />
      {user ?
        <div className='container app-body'>
          <Sidebar />
          <Feed />
          <Widget />
        </div> : <Login />
      }
    </div >
  );
}

export default App;
