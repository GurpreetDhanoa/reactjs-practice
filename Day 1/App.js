const heading = React.createElement(
    "div", // parent 
    { id: "parent"}, // pass attributes
    [
        React.createElement(
            "h1", // parent 
            { id: "heading"}, // pass attributes
            "Hello World From ReactsJs" // children
        ),
        React.createElement(
            "h2", // parent 
            { id: "subheading"}, // pass attributes
            "Amazing Javascript Library" // children
        )
    ]
);

console.log(heading); // react object

/* interact with browser to create root for react*/
const root = ReactDOM.createRoot(document.getElementById("root"));

/* render the heading*/
root.render(heading);