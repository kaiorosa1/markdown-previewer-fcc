// Basic Components Created
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: `# Front End Libraries Project 
## This is the markdown project

this is a project made by Kaio Rosa as part of the 
Front End Libraries Certification on freeCodeCamp.

[Learn More](#)

**Example of the usage**
Showing some markdown you can use: 

Inline Code
\`<p>This is a paragraph</p>\`

Multiline Code
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

If you want to use quotes you can do it too.
> Block Quotes Test

Lists are also part of it.

1. Code Every day
1. Finish the Markdown Previewer Project (FCC)

Last but not least, you can add images as well. Here's an example:

![DJ Mixer](https://images.unsplash.com/photo-1537734552481-35f4a9aca8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)
` };

  }

  changeText(newText) {
    this.setState({
      editorText: newText });

  }

  render() {
    return (
      React.createElement("div", null,

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
      React.createElement("div", { className: "title-box" },
      React.createElement("h2", null, "Editor Component")),

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
      React.createElement("div", { className: "title-box" },
      React.createElement("h2", null, "Preview Component")),

      React.createElement("div", { id: "preview-box" },
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: this.getMarkdownText() }))));



  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));