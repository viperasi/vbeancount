import { snippetCompletion } from "@codemirror/autocomplete";
import type { Completion } from "@codemirror/autocomplete";

import format from '@/util'

export const beancountSnippets: () => readonly Completion[] = () => {
  const today = format.todayAsString();
  return [
    snippetCompletion(
      `${today} #{*} "#{}" "#{}"\n  #{Account:A}  #{Amount}\n  #{Account:B}`,
      {
        label: `${today} * transaction`,
      }
    ),
  ];
};

