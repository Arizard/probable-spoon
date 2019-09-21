import LoginInfo from "../components/logininfo";
import DocumentList from "../components/documentlist";
import ScriptingChecklist from "../components/scriptingchecklist";
import { GoChevronLeft } from "react-icons/go";

const EditorSidebar = props => (
  <div className="editor-sidebar">
    <LoginInfo 
      username={props.username}
      logoutURL={props.logoutURL}
      />
    <DocumentList></DocumentList>
    <ScriptingChecklist></ScriptingChecklist>
    {/* Collapsible, so we add a Button */}
    <button className="button is-light">
      <GoChevronLeft />
    </button>
  </div>
);

export default EditorSidebar;
