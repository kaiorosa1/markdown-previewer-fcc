class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", null, "H1 from the App Component")));



  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));