import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
// import { MessengerChat } from 'react-messenger-chat-plugin';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <MessengerChat
  //   pageId="100089326740327"
  //   language="sv_SE"
  //   themeColor={'#000000'}
  //   bottomSpacing={300}
  //   loggedInGreeting="loggedInGreeting"
  //   loggedOutGreeting="loggedOutGreeting"
  //   greetingDialogDisplay={'show'}
  //   debugMode={true}
  //   onMessengerShow={() => {
  //     console.log('onMessengerShow');
  //   }}
  //   onMessengerHide={() => {
  //     console.log('onMessengerHide');
  //   }}
  //   onMessengerDialogShow={() => {
  //     console.log('onMessengerDialogShow');
  //   }}
  //   onMessengerDialogHide={() => {
  //     console.log('onMessengerDialogHide');
  //   }}
  //   onMessengerMounted={() => {
  //     console.log('onMessengerMounted');
  //   }}
  //   onMessengerLoad={() => {
  //     console.log('onMessengerLoad');
  //   }}
  // />,
  // <React.StrictMode>
  <Router>
    <App />
  </Router>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
