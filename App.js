import React from "react";
import ReactDOM from "react-dom";

/* 

    <div id=parent>
        <div id="child1">
            <h1> a h1 tag <h1>
            <h2> a h2 tag <h2>
        </div>
        <div id="child2">
            <h1> a h1 tag <h1>
            <h2> a h2 tag <h2>
        </div>
    </div>




*/

/*

#Parcel 
Creates a server
 HMR (Hot Module replacement) -> thus the live reloading and rendering.
#HMR (Hot Module  replacement) uses the File Watcher Algorithm-> c++
#Bundler
#MINIFY
#Dev and Production Build
#Cleaning our Code
#Super fast build algorithm
#Image optimization
#Chahing while development
#compression
#Compatible with older version of browser
#Https on dev
#Auto assign pot number
#Consistent Hashing Algorithm
#Zero config



#Transitive dependencies- dependicies inside the lock.json . if a is dependent on b and b is dependent on c.


*/

const heading = React.createElement(
  "h1",
  {id: "heading", class: "rootdiv"},
  "Hello world from React!"
);
console.log(heading); //object

const parent = React.createElement("div", {id: "parent"}, [
  React.createElement("div", {id: "child1"}, [
    React.createElement("h1", {}, "hi im h1"),
    React.createElement("h2", {}, "hi im h2"),
  ]),
  React.createElement("div", {id: "child2"}, [
    React.createElement("h1", {}, "hi im h1"),
    React.createElement("h2", {}, "hi im h2"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
