import { Settings } from "@/components/popups/components/Settings";
import { addUniqueModal } from "@/components/popups/popups";
import { computed } from "vue";

const AllKey = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Shift",
  "+",
  "_",
  ")",
  "(",
  "*",
  "&",
  "^",
  "%",
  "$",
  "#",
  "@",
  "!",
  "~",
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "l",
  "k",
  "j",
  "h",
  "g",
  "f",
  "d",
  "s",
  "a",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "CapsLock",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "L",
  "K",
  "J",
  "H",
  "G",
  "F",
  "D",
  "S",
  "A",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  ",",
  ".",
  "/",
  ";",
  "'",
  "[",
  "]",
  "\\",
  "<",
  ">",
  "?",
  ":",
  '"',
  "{",
  "}",
  "|",
  "Insert",
  "Home",
  "PageUp",
  "Delete",
  "End",
  "PageDown",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Control",
  "ContextMenu",
  "Alt",
  " ",
  "Meta",
  "Escape",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
  "NumLock",
  "ScrollLock",
  "Numpad0",
  "Numpad1",
  "Numpad2",
  "Numpad3",
  "Numpad4",
  "Numpad5",
  "Numpad6",
  "Numpad7",
  "Numpad8",
  "Numpad9",
  "NumpadMultiply",
  "NumpadAdd",
  "NumpadSubtract",
  "NumpadDecimal",
  "NumpadDivide",
] as const;

export type ShortcutKey = (typeof AllKey)[number];

type DefaultShortcutKey = {
  id: number;
  shortcutKey: (ShortcutKey | ShortcutKey[])[];
  name: {
    zhCN: string;
    enUS: string;
  };
  callback: () => void;
};
const defaultShortcutKeys: DefaultShortcutKey[] = [
  {
    id: 1,
    shortcutKey: ["Control", ","],
    name: {
      zhCN: "打开设置",
      enUS: "Open Settings",
    },
    callback: () =>
      addUniqueModal({
        componentName: "Settings",
      }),
  },
];
/** 重复快捷键检测 */
function detectShortcutConflict() {
  const logArr: string[] = [];
  const conflictSet = new Set();
  defaultShortcutKeys.forEach(({ shortcutKey }) => {
    const log = shortcutKey.join(" ");
    logArr.forEach((keys) => {
      const repeat =
        new RegExp("^" + keys).test(log) || new RegExp("^" + log).test(keys);
      if (repeat) conflictSet.add(`[ ${log}  <->  ${keys} ]`);
    });
    logArr.push(log);
  });
  const conflictArr = [...conflictSet.values()];
  if (conflictArr.length > 0)
    window.$CustomizeError(`快捷键冲突: ${conflictArr.join(" ; ")}`);
}
detectShortcutConflict();

export const ShortcutKeys = computed(() => {
  return defaultShortcutKeys.map((item) => {
    const custom = Settings.value.customShortcutKeys.find(
      (key) => key.id == item.id
    );
    if (custom)
      return {
        ...item,
        shortcutKey: custom.shortcutKey,
      };
    return item;
  });
});

const Keys = new Set();
function isDialogPresent() {
  return !!document.querySelector("body .n-modal-container");
}

document.addEventListener("keydown", (event) => {
  // console.log(`你按下了👉${event.key}👈`);

  if (isDialogPresent()) return;
  Keys.add(event.key);

  const success = ShortcutKeys.value.map((item) => {
    const { shortcutKey, callback } = item;
    if (shortcutKey.length != Keys.size) return;
    const endV = shortcutKey[shortcutKey.length - 1];
    if (Array.isArray(endV)) {
      if (endV.every((key) => key != event.key)) return;
    } else if (endV != event.key) return;

    const isConditionMet = shortcutKey.every((key) => {
      if (Array.isArray(key)) {
        return key.some((key) => Keys.has(key));
      } else {
        return Keys.has(key);
      }
    });

    if (isConditionMet) {
      callback();
      event.preventDefault();
      return shortcutKey.join("+");
    }
  });
  if (success.filter(Boolean).length > 1)
    console.error("有多组快捷键被触发了！", success.join(" <-> "));
});
document.addEventListener("keyup", (event) => {
  /** shift 先于一些按键松开会导致 同一个按键 按下的 key 和 松开的 key 不一致  */
  if (Keys.has(event.key)) Keys.delete(event.key);
  else Keys.clear();
});
document.addEventListener("visibilitychange", () => {
  Keys.clear();
});
