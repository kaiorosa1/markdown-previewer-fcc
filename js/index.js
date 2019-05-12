// Basic Components Created
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: '' };

  }

  changeText(newText) {
    this.setState({
      editorText: newText });

  }

  render() {

    return (
      React.createElement("div", null,
      React.createElement("h1", null, "H1 from the App Component"),
      React.createElement("div", { id: "main" },
      React.createElement(Editor, { changeText: this.changeText.bind(this) }),
      React.createElement(Previewer, { previewText: this.state.editorText }))));




  }}


class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  sendText(e) {
    this.props.changeText(e.target.value);
  }
  render() {
    return (
      React.createElement("div", { id: "editor-box" },
      React.createElement("h2", null, "Editor Component"),
      React.createElement("textarea", { onChange: this.sendText.bind(this), id: "editor" })));


  }}


marked.setOptions({
  breaks: true });


class Previewer extends React.Component {
  constructor(props) {
    super(props);
  }
  getMarkdownText() {
    let mark = marked(this.props.previewText, { sanitize: true });
    return { __html: mark };
  }
  render() {
    return (
      React.createElement("div", { id: "preview-box" },
      React.createElement("h2", null, "Preview Component"),
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: this.getMarkdownText() })));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));