// Basic Components Created
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", null, "H1 from the App Component"),
      React.createElement(Editor, null),
      React.createElement(Previewer, null)));



  }}


class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h2", null, "Editor Component"),
      React.createElement("textarea", { id: "editor" })));


  }}


class Previewer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { id: "preview" },
      React.createElement("h2", null, "Preview Component"))));



  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));