#Learned about how to inject react using cdn links
#Learned about React.createElement("Element", {obj of attributes}, [children])
#Learned how to use ReactDOM.createRoot(document.getElementsById("root"))
#Render the root using the render() method
#All the created elements by  createElement are not HTML, but they are Js Variables=> Objects

#const heading = React.createElement(
  "h1",
  {id: "heading", class: "rootdiv"},
  "Hello world from React!"
);
console.log(heading); //Js object not html