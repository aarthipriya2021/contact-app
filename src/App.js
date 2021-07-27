import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import store from './redux/store';
import { Provider } from "react-redux";


const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <ToastContainer />
        <NavBar />
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/add" component={() => <AddPost />} />
        <Route exact path="/edit/:id" component={() => <EditContact />} />
      </Provider>
    </div>
  );
};
export default App;





// import { Route, Switch } from 'react-router-dom';
// import './App.css';
// import NavBar from './components/NavBar';
// import Home from './components/Home';
// import AddContact from './components/AddContact';
// import EditContact from './components/EditContact';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import { ToastContainer } from 'react-toastify';

// function App() {
//   return (
    
//     <Provider store={store}>
//       <div className="App">
//       {/* routes for add/ edit  */}
//       <NavBar />
//       <ToastContainer closeButton={false} style= {{ color:'red',padding:"20px 0px 0px 80%"}} />
//       <Switch>
//         <Route exact path="/" component={()=><Home />} />
//           <Route exact path="/add">
//             <AddContact />
//           </Route>
//           <Route exact path="/edit/:id">
//             <EditContact />
//           </Route>
        
//       </Switch>
      
//     </div>
//     </Provider>
    
//   );
// }

// export default App;
