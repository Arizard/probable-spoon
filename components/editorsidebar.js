import LoginInfo from "../components/logininfo";
import DocumentList from "../components/documentlist";
import ScriptingChecklist from "../components/scriptingchecklist";

const EditorSidebar = props => (
  <div className="editor-sidebar">
    <LoginInfo 
      username={props.username}
      logoutURL={props.logoutURL}
      />
    <DocumentList
      userDocuments={props.userDocuments}
      />
    <ScriptingChecklist></ScriptingChecklist>
    {/* Collapsible, so we add a Button */}
  </div>
);

export default EditorSidebar;
