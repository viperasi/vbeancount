import type { Command } from "@codemirror/view";

import { replaceContents } from "./editor-transactions";

export const beancountFormat: Command = (cm) => {
  // put("format_source", { source: cm.state.sliceDoc() }).then(
  //   (data) => {
  //     cm.dispatch(replaceContents(cm.state, data));
  //   },
  //   (error) => {
  //     console.error(error, (err) => `Formatting source failed: ${err.message}`);
  //   }
  // );
  return true;
};
