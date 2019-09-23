import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

const editor = (onChange, data) => {
  const ed = new EditorJS({
    /**
     * Id of Element that should contain the Editor
     */

    holderId: "editor-area",

    /**
     * Available Tools list.
     * Pass Tool's class or Settings object for each Tool you want to use
     */

    tools: {
      header: {
        class: Header,
        inlineToolbar: ["link"]
      }
    },

    data,
    onChange,
  });

  return ed
}
export default editor