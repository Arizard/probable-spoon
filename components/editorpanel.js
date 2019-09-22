import React, { Component } from "react";
import "../pages/css/editor-content-styles.scss"

export default class EditorPanel extends Component {
  state = {
    value: null,
    browser: false,
    editor: null
  };

  componentDidMount = () => {
    {/*
        I have to load the editor ONLY on the client using componentDidMount.
        This way it isn't throwing errors on build due to SSR.
        One issue i've notices is that hot reload causes it to die.
    */}
    this.setState({
      browser: true,
      editor: import("./editorjsnossr")
    });
  };

  render() {
    {/*
        I only want this to work in the client browser.
        It will fail with SSR - it's UGC and private to each user so it doesn't
        need to be rendered serverside anyway.
    */}
    if (this.state.browser) {
      return (
        <div>
          <div id="editor-area" className="box"></div>
        </div>
      );
    }
    return <div className="is-loading">&nbsp;</div>;
  }
}
