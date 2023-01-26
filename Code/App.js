import React from 'react'; 
import ReactDOM from "react-dom/client"
 
const head = React.createElement("h1", {}, "namaste");

const head2 = React.createElement("h3", { 
    props: "attribute" 
}, "React");

const container = React.createElement("div", { id: "container" }, [
    head,
    head2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
