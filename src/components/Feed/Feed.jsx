import React, { useEffect, useState } from 'react';
import { Create, Image, Subscriptions, EventNote, CalendarViewDay } from '@mui/icons-material';
import './feed.css';
import InputOptions from './InputOptions/InputOptions';
import Post from './Post/Post';
import { db } from '../../Firebase/firebase';
import firbase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from "react-flip-move"
const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("");
    const user = useSelector(selectUser);
    // get Post
    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
    }, [])
    // Add Post
    const sendPost = (event) => {
        event.preventDefault()
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firbase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("")
    }
    return (
        <div className="feed">
            <div className="feed-input__container">
                <div className="feed-input">
                    <Create className="feed-input__icon" />
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Start a post' />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed-options">
                    <InputOptions title="Photo" Icon={Image} color="#70b5f9" />
                    <InputOptions title="Video" Icon={Subscriptions} color="#E7A33E" />
                    <InputOptions title="Event" Icon={EventNote} color="#C0CBCD" />
                    <InputOptions title="Write article" Icon={CalendarViewDay} color="#7FC15E" />
                </div>
            </div>
            <div className="posts">
                <FlipMove duration={750}>
                    {posts.map(({ id, data: { name, description, message, timestamp, photoUrl } }) => (
                        <Post key={id} name={name} desc={description} message={message} photoUrl={photoUrl} time={timestamp} />
                    ))}
                </FlipMove>
            </div>
        </div>
    )
}

export default Feed