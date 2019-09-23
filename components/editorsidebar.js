import LoginInfo from "../components/logininfo";
import DocumentList from "../components/documentlist";
import ScriptingChecklist from "../components/scriptingchecklist";

const EditorSidebar = props => (
  <div className="editor-sidebar">
    <LoginInfo 
      username={props.username}
      logoutCallback={props.logoutCallback}
      />
    <DocumentList
      userDocuments={props.userDocuments}
      openDocument={props.openDocument}
      />
    <ScriptingChecklist></ScriptingChecklist>
    {/* Collapsible, so we add a Button */}
  </div>
);

export default EditorSidebar;
