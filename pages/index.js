import React from "react";
import EditorSidebar from "../components/editorsidebar";
import EditorPanel from "../components/editorpanel";
import "bulma";
import "./css/editor-layout.css";

const Index = () => (
  <div>
    <div className="editor-sidebar-container">
      <EditorSidebar
        username="ArieUser"
        logoutURL="/logout"
        />
    </div>
    <div className="editor-panel-container">
      <div className="notification is-warning">
        <button className="delete"></button>
        <p>Lorem ipsum, nerderinos.</p>
      </div>
      <h1 className="title is-1">Hello World</h1>
      <span className="tag is-warning">Guten Tag!</span>
      <EditorPanel></EditorPanel>
    </div>
  </div>
);

export default Index;
