import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes } from "@lexical/html";
import { useEffect } from "react";

export function HtmlExportPlugin({
  onHtmlChange,
}: {
  onHtmlChange: (html: string) => void;
}) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Fire whenever the editor updates
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const html = $generateHtmlFromNodes(editor, null); // whole document
        onHtmlChange(html);
      });
    });
  }, [editor, onHtmlChange]);

  return null;
}
