import React, { Component } from "react"
import "../pages/css/editor-content-styles.scss"

export default class EditorPanel extends Component {
  state = {
    value: null,
    browser: false,
    editor: null
  };

  constructor(props) {
    super(props)
  }

  shouldComponentUpdate = () => {
    console.log(this.props)
    return true
  }

  componentDidMount = () => {
    /*
        I have to load the editor ONLY on the client using componentDidMount.
        This way it isn't throwing errors on build due to SSR.
        One issue i've notices is that hot reload causes it to die.
    */
    this.setState({
      browser: true,
    });
    import("./editorjsnossr").then((module) => {
      this.setState({
        editor: module.default(
          () => {},
          this.props.currentDocument.data
        ) 
      })
    })
  };

  onClickSave = () => {
    console.log(this.state.editor)
    this.state.editor.save().then((output) => {
      console.log(output)
    }).catch((error) => {
      console.log("Error while saving: ", error)
    })
  }

  render = () => {
    /*
        I only want this to work in the client browser.
        It will fail with SSR - it's UGC and private to each user so it doesn't
        need to be rendered serverside anyway.
    */
    if (this.state.browser) {
      return (
        <div className="reset-bulma">
          <div id="editor-area"></div>
        </div>
      );
    }
    return <div className="is-loading">&nbsp;</div>;
  }
}
