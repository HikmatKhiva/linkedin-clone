import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
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
      <Toaster
        position='top-center'
        toastOptions={{
          success: {
            theme: {
              primary: "#0074b1"
            }
          }
        }}
      >

      </Toaster>
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
