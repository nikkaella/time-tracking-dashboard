function App(props) {
    return React.createElement(
        "div",
        { className: "two col-4" },
        React.createElement("img", { src: "./images/icon-work.svg" }),
        React.createElement(
            "div",
            { className: "info" },
            "Work 5hrs",
            "Previous - 7hrs",
            "32hrs",
            "Previous - 36hrs",
            "103hrs",
            "Previous - 128hrs"
        )
    );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));