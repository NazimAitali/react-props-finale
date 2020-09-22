import React from "react";
import logo from "./logo.svg";
import "./App.css";
import 'antd/dist/antd.css'
import Profile from "./profile/Profile";



function App() {
  const name = "Nazim Ait Ali";
  const pro = "Web developper";
  const bio =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.";
 
  return (
    <div className="App">
      <Profile fullName={name} bio={bio} profession={pro} />
      
    </div>
    
  );
}

export default App;
