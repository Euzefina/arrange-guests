
// App.js
 
import React from "react";
import Header from "./Header";
import TableApp from "./TableApp";

export default function App() {
    return (
      <div>
        <Header />
        <div className="container">
            <TableApp />
        </div>
      </div>
    );
}
