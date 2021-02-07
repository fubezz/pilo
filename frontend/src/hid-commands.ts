import e from "express";


export class HID {
  private static hidCommands = {
    "AltLeft": "0xe2",
    "AltRight": "0xe6",
    "ArrowDown": "0x51",
    "ArrowLeft": "0x50",
    "ArrowRight": "0x4f",
    "ArrowUp": "0x52",
    "Backquote": "0x35",
    "Backslash": "0x31",
    "Backspace": "0x2a",
    "BracketLeft": "0x2f",
    "BracketRight": "0x30",
    "CapsLock": "0x39",
    "Comma": "0x36",
    "ControlLeft": "0xe0",
    "Delete": "0x4c",
    "Digit0": "0x27",
    "Digit1": "0x1e",
    "Digit2": "0x1f",
    "Digit3": "0x20",
    "Digit4": "0x21",
    "Digit5": "0x22",
    "Digit6": "0x23",
    "Digit7": "0x24",
    "Digit8": "0x25",
    "Digit9": "0x26",
    "End": "0x4d",
    "Enter": "0x28",
    "Equal": "0x2e",
    "Escape": "0x29",
    "F1": "0x3a",
    "F2": "0x3b",
    "F3": "0x3c",
    "F4": "0x3d",
    "F5": "0x3e",
    "F6": "0x3f",
    "F7": "0x40",
    "F8": "0x41",
    "F9": "0x42",
    "F10": "0x43",
    "F11": "0x44",
    "F12": "0x45",
    "Home": "0x4a",
    "IntlBackslash": "0x31",
    "KeyA": "0x04",
    "KeyB": "0x05",
    "KeyC": "0x06",
    "KeyD": "0x07",
    "KeyE": "0x08",
    "KeyF": "0x09",
    "KeyG": "0x0a",
    "KeyH": "0x0b",
    "KeyI": "0x0c",
    "KeyJ": "0x0d",
    "KeyK": "0x0e",
    "KeyL": "0x0f",
    "KeyM": "0x10",
    "KeyN": "0x11",
    "KeyO": "0x12",
    "KeyP": "0x13",
    "KeyQ": "0x14",
    "KeyR": "0x15",
    "KeyS": "0x16",
    "KeyT": "0x17",
    "KeyU": "0x18",
    "KeyV": "0x19",
    "KeyW": "0x1a",
    "KeyX": "0x1b",
    "KeyY": "0x1c",
    "KeyZ": "0x1d",
    "MetaLeft": "0xe3",
    "MetaRight": "0xe7",
    "Minus": "0x2d",
    "NumpadEnter": "0x58",
    "PageDown": "0x4e",
    "PageUp": "0x4b",
    "Period": "0x37",
    "Quote": "0x34",
    "Semicolon": "0x33",
    "ShiftLeft": "0xe1",
    "ShiftRight": "0xe5",
    "Slash": "0x38",
    "Space": "0x2c",
    "Tab": "0x2b"
  }

  public static jsToHID(event: KeyboardEvent, cb: CallableFunction): number[] {

    if (typeof HID.hidCommands[event.code] === "undefined") {
      return [];
    }
    if (event.type === "keyup"){
      return [0,0,0,0,0,0,0,0]
    }

    const hidCode = parseInt(HID.hidCommands[event.code]);

    let modifierCode = 0
    if (event.ctrlKey) {
      modifierCode |= 0x01
    }
    if (event.shiftKey) {
      modifierCode |= 0x02
    }
    if (event.altKey) {
      modifierCode |= 0x04
    }

    const hid = [modifierCode, 0, hidCode, 0, 0, 0, 0, 0]
    cb(hid)
  }
}

