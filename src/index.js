import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export const LoadingIndicator = (props) => {
    const { promiseInProgress } = usePromiseTracker({delay : 1000});
    return ( 
      promiseInProgress && (
         <div
           style={{
             width: "100%",
             height: "100",
             display: "flex",
             justifyContent: "center",
             alignItems: "center"
           }}
         >
           <Loader type="ThreeDots" color="#0275d8" height="100" width="100" />
         </div>  )
    );
}

ReactDOM.render(
  <div>
    <App />
    <LoadingIndicator/>
    </div>
   ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
