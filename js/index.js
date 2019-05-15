// Basic Components Created
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: `# H1 Size Header 
## H2 Size Header
[link](#)
**Bolded Text**
\`<p>This is a paragraph</p>\`

\`\`\`
// Even or Odd

function evenOrOdd(number) {
    if (number%2 == 0) {
      return "Even";
    }else{
      return "Odd";
    }
}
\`\`\`

> Block Quotes Test

Lists 

1. Code Every day
1. Finish the Markdown Previewer Project (FCC)

Last but not least:

![DJ Mixer](https://images.unsplash.com/photo-1529392960549-df4af50eac23?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)
` };

  }

  changeText(newText) {
    this.setState({
      editorText: newText });

  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", null, "Markdown Previewer"),
      React.createElement("div", { id: "main" },
      React.createElement(Editor, {
        changeText: this.changeText.bind(this),
        defaultText: this.state.editorText }),

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
      React.createElement("div", null,
      React.createElement("div", null,
      React.createElement("h2", null, "Editor Componet")),

      React.createElement("div", { id: "editor-box" },
      React.createElement("textarea", { onChange: this.sendText.bind(this), id: "editor" },
      this.props.defaultText))));




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
      React.createElement("div", null,
      React.createElement("h2", null, "Preview Component"),
      React.createElement("div", { id: "preview-box" },
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: this.getMarkdownText() }))));



  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));