import React, { useState } from 'react'
import { LinkedIn } from '@mui/icons-material'
import './login.css'
import { useDispatch } from 'react-redux'
import { auth } from '../../Firebase/firebase';
import { login } from '../../features/userSlice'
const Login = () => {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const LoginIn = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
      .then(authUser => {
        dispatch(login({
          uid: authUser.user.uid,
          displayName: authUser.user.displayName,
          email: authUser.user.email,
          photoUrl: authUser.user.photoURL,
        }))
      }).catch(e => console.log(e));
  }
  const SignUp = () => {
    if (!name) {
      return alert("Place enter a full name!")
    }
    auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL: profilePic,
        }).then(() => {
          dispatch(login({
            uid: authUser.user.uid,
            email: authUser.user.email,
            displayName: name,
            photoUrl: profilePic,
          }))
        })
      }).catch(e => console.log(e));
  };
  return (
    <div className='login'>
      <div className="login-main">
        {/* <img src="" alt="" /> */}
        <LinkedIn style={{ fontSize: "60px", color: "#0077B5" }} />
        <form>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Full name (required if registering)' />
          <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type="text" placeholder='Profile pic URL (optional)' />
          <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
          <button onClick={LoginIn} type="submit" className='log-in'>Sign in</button>
        </form>
        <small>Not a member ? <span onClick={SignUp} className="sign-up__color">Register Now</span></small>
      </div>
    </div>
  )
}

export default Login