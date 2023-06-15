import {
  mdiMonitor,
  mdiSquareEditOutline,
  mdiTable,
  mdiTelevisionGuide,
  mdiAccountCardOutline,
  mdiNotebookOutline,
  mdiOpenInNew,
  mdiFileEditOutline,
  mdiCogOutline,
} from "@mdi/js";

export default [
  {
    to: "/dashboard",
    icon: mdiMonitor,
    label: "总览",
  },
  {
    to: "/income_statement",
    label: "损益表",
    icon: mdiTable,
  },
  {
    to: "/balance_sheet",
    label: "资产负债表",
    icon: mdiSquareEditOutline,
  },
  {
    to: "/trial_balance",
    label: "试算表",
    icon: mdiTelevisionGuide,
  },
  {
    to: "/journal",
    label: "日记账",
    icon: mdiNotebookOutline,
  },
  {
    to: "/account",
    label: "账户",
    icon: mdiAccountCardOutline,
  },
  // {
  //   to: "/statistics",
  //   label: "统计",
  //   icon: mdiChartBoxOutline,
  // },
  {
    to: "/editor",
    label: "编辑器",
    icon: mdiFileEditOutline,
  },
  {
    to: "/setting",
    label: "设置",
    icon: mdiCogOutline,
  },
  {
    href: "https://github.com/viperasi/vbeancount",
    label: "帮助",
    icon: mdiOpenInNew,
    target: "_blank",
  },
];
