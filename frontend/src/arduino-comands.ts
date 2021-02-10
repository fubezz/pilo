import e from "express";


export class ArduinoKeyboard {
  private static nonPrintableCode = {
    //Optional Keys
    AltLeft: 0x82,
    AltRight: 0x86,
    ArrowDown: 0xD9,
    ArrowLeft: 0xD8,
    ArrowRight: 0xD7,
    ArrowUp: 0xDA,
    OSLeft: 0x83,
    OSRight: 0x87,
    PageDown: 0xD6,
    PageUp: 0xD3,
    ShiftLeft: 0x81,
    ShiftRight: 0x85,
    Backspace: 0xB2,
    CapsLock: 0xC1,
    ControlLeft: 0x80,
    ControlRigth: 0x84,
    Delete: 0xD4,
    End: 0xD5,
    Enter: 0xB0,
    Equal: 0x3D,
    Escape: 0x1B,
    F1: 0xC2,
    F2: 0xC3,
    F3: 0xC4,
    F4: 0xC5,
    F5: 0xC6,
    F6: 0xC7,
    F7: 0xC8,
    F8: 0xC9,
    F9: 0xCA,
    F10: 0xCB,
    F11: 0xCC,
    F12: 0xCD,
    Home: 0xD2,
    Insert: 0xD1,
    NumpadEnter: 0xB0,
    Tab: 0xB3,
  }
  private static printableCode = {
    //Printable Keys
    Backquote: "`",
    Backslash: "\\",
    BracketLeft: "[",
    BracketRight: "]",
    Comma: ",",
    Digit0: "0",
    Digit1: "1",
    Digit2: "2",
    Digit3: "3",
    Digit4: "4",
    Digit5: "5",
    Digit6: "6",
    Digit7: "7",
    Digit8: "8",
    Digit9: "9",
    KeyA: "a",
    KeyB: "b",
    KeyC: "c",
    KeyD: "d",
    KeyE: "e",
    KeyF: "f",
    KeyG: "g",
    KeyH: "h",
    KeyI: "i",
    KeyJ: "j",
    KeyK: "k",
    KeyL: "l",
    KeyM: "m",
    KeyN: "n",
    KeyO: "o",
    KeyP: "p",
    KeyQ: "q",
    KeyR: "r",
    KeyS: "s",
    KeyT: "t",
    KeyU: "u",
    KeyV: "v",
    KeyW: "w",
    KeyX: "x",
    KeyY: "y",
    KeyZ: "z",
    Minus: "-",
    Period: ".",
    Quote: "\"",
    Slash: "/",
    Space: " ",
  }

  public static JSToKeystroke(event: KeyboardEvent, cb: CallableFunction): number[] {
    
    let hidCode;

    if (Object.keys(ArduinoKeyboard.nonPrintableCode).includes(event.code)){
      hidCode = ArduinoKeyboard.nonPrintableCode[event.code]
    }else if (Object.keys(ArduinoKeyboard.printableCode).includes(event.code)){
      hidCode = ArduinoKeyboard.printableCode[event.code].charCodeAt()
    }else{
      return []
    }

    if (event.type === "keydown"){
      cb([0x01,hidCode])
    }else{
      cb([0x02,hidCode])
    }
  }
}

