import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import "./App.css";
import db from "./firebase";
import firebase from "./firebase";


function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(
    () => {
      db.collection('messages').onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()))
      });
    }, []
  )

  useEffect(
    () => {
      setUsername(prompt('please enter your name'));
    }, []
  )

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

  };

  return (
    <div className="App">
      <h1>Hey {username}</h1>
      <form>
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send
          </Button>
        </FormControl>
      </form>
      {messages.map(message => (
        <Message username={username} message={message} />

      ))}
      {/* messages */}
    </div>
  );
}

export default App;
