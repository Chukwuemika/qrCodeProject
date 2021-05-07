import React from 'react';
import './App.css';
import HelloWorld from "./componets/HelloWorld";
import HelloWorld2 from "./componets/HelloWorld2";
import HelloWorld3 from "./componets/HelloWorld3";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Column1">
       <HelloWorld/>
       </div>
       <div className="Column1">
       <HelloWorld2 />
       </div>
       <div className="Column1">
       <HelloWorld3 />
       </div>
    </div>
  );
}

export default App;
