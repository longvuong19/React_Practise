import React, { useState } from 'react'
import SS3 from './SS3/SS3'
import SS4 from './SS4/SS4'
import DemoButton from './SS4/DemoButton/DemoButton.jsx'
import Modal from 'react-modal';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './SS3/shared/SignUp';
import Login from './SS3/shared/Login';

Modal.setAppElement('#root');

function App() {

  return (
    <BrowserRouter>

      {/* <DemoButton /> */}
      <SS3 />
    </BrowserRouter>

  )
}

export default App

{/* <div>
        <h1>Open Message Modal</h1>
        <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <h2>Enter User and Message</h2>
          <form onSubmit={handleSubmit}>
            <label>
              User:
              <input type="text" name="user" value={user} onChange={handleInputChange} />
            </label>
            <label>
              Message:
              <input type="text" name="message" value={message} onChange={handleInputChange} />
            </label>
            <button type="submit">OK</button>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </form>
        </Modal>
        {
          userDataArray.map((userData, index) => (
            <div key={index}>
              <h2>User: {userData.user}</h2>
              <p>Message: {userData.message}</p>
            </div>
          ))
        }
      </div> */}