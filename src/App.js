import React, { useState, useEffect } from 'react';
import './App.css';

import {MdSend} from 'react-icons/md'

export default function App() {
  const [chatBox, setChatBox] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  // useEffect(() => {
  // const timer =  setTimeout(() => {
  //     setOpen(true);
  // }, 1000)
  //  return () => clearTimeout(timer);
  // }, []);



  return (
    <main>
      <Message/>
      {chatBox && (<Message/>)}
      <button className='chatBtn' onClick={handleOpen}>
        Chat
      </button>
    </main>
  );
}


const Message=()=> {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

  // const handleMessageChange = (event) => {
  //   setMessage(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
    console.log('Name:', name);
    console.log('Message:', message);
  };

  return (
    <div class='popupBox'>
      <form onSubmit={handleSubmit} action="" method="get" class='messageForm'>
        <div class='header'>
           <div>Message</div>
           <div class='popupButton'>
              <button> - </button>
              <button> X </button>
             </div>
        </div>
        <div>
        <label htmlFor="name">Name:</label><br/>
        <input type="text" class="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter your Name' required />
        </div>
        <div class='formButton'>
          <label htmlFor="message">Message:</label><br />
          {/* <textarea class='textMessage'  value={message} onChange={(e)=>setMessage(e.target.value)}  cols="20" required></textarea> */}
          <input type='text' id="message" class='messageInput' placeholder='enter your message' onChange={(e)=>setMessage(e.target.value)}/>
          <button class='submitBtn' ><MdSend/></button>
        </div>
      </form>
    </div>
  );
}



