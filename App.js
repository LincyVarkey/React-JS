const heading = React.createElement("h1", {
    id: "header1"
}, "Hello world!");

const heading2 = React.createElement("h2", {
    id: "header2"
}, "Good Morning");

const container = React.createElement("div", {
    id: "container"},
    [heading, heading2]);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(container);