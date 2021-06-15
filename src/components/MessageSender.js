import React, { useState } from 'react';
import './styles/MessageSender.css';
import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase';
import db from '../firebase';

const MessageSender = () => {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setImageUrl('');
    setInput('');
  };

  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            type='text'
            className='messageSender__input'
            placeholder={`Whats on your mind, ${user.displayName}?`}
          />
          <input
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            placeholder='Image URL (optional)'
            className='messageSender__image'
          />
          <button type='submit' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <Videocam style={{ color: 'red' }} />
          <h4>Live Video</h4>
        </div>
        <div className='messageSender__option'>
          <PhotoLibrary style={{ color: 'green' }} />
          <h4>Photo/Video</h4>
        </div>
        <div className='messageSender__option'>
          <InsertEmoticon style={{ color: 'orange' }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
