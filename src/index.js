import React from "react";
import ReactDOM from 'react-dom';
import App from './Components/App.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// const Index = () => {
//   return <div>Hello</div>;
// }

const WrappedApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)


ReactDOM.render(<WrappedApp />, document.getElementById("index"));