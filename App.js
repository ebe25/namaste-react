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
