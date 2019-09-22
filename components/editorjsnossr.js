import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

const editor = new EditorJS({
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



  data: {
    blocks: [
      {
        type: "header",
        data: {text: "Heading", level: 2}
      },
      {
        type: "paragraph",
        data: {text: "Paragraph. Could be a <b>Focus</b> or <b>Objective</b>."}
      },
    ]
  }
});
export default editor