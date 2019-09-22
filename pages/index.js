import React from "react";
import EditorSidebar from "../components/editorsidebar";
import EditorPanel from "../components/editorpanel";
import "bulma";
import "./css/editor-layout.scss";

const userDocuments = [
  { 
    name: "Document01",
    title: "Document01",
    owner: "Arie",
    data: "(omitted by presenter)",
    uuid: "fake-uuid-fake-uuid",
  },
  { 
    name: "Document02",
    title: "Document02",
    owner: "Arie",
    data: "(omitted by presenter)",
    uuid: "fake-uuid-fake-uuid",
  },
  { 
    name: "Document03",
    title: "Document03",
    owner: "Arie",
    data: "(omitted by presenter)",
    uuid: "fake-uuid-fake-uuid",
  },
]

const Index = () => (
  <div>
    <div className="editor-sidebar-container">
      <EditorSidebar
        username="ArieUser"
        logoutURL="/logout"
        userDocuments={userDocuments}
        />
    </div>
    <div className="editor-panel-container">
      <EditorPanel></EditorPanel>
    </div>
  </div>
);

export default Index;
