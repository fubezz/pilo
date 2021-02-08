import e from "express";


export class ArduinoKeyboard {
  private static keyboardCode = {
    AltLeft: 0x82,
    AltRight: 0x86,
    ArrowDown: 0xD9,
    ArrowLeft: 0xD8,
    ArrowRight: 0xD7,
    ArrowUp: 0xDA,
    Backquote: 0x60,
    Backslash: 0x5C,
    Backspace: 0xB2,
    BracketLeft: 0x5B,
    BracketRight: 0x5D,
    CapsLock: 0xC1,
    Comma: 0x2C,
    ControlLeft: 0x80,
    ControlRigth: 0x84,
    Delete: 0xD4,
    Digit0: 0x30,
    Digit1: 0x31,
    Digit2: 0x32,
    Digit3: 0x33,
    Digit4: 0x34,
    Digit5: 0x35,
    Digit6: 0x36,
    Digit7: 0x37,
    Digit8: 0x38,
    Digit9: 0x39,
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
    KeyA: 0x41,
    KeyB: 0x42,
    KeyC: 0x43,
    KeyD: 0x44,
    KeyE: 0x45,
    KeyF: 0x46,
    KeyG: 0x47,
    KeyH: 0x48,
    KeyI: 0x49,
    KeyJ: 0x4A,
    KeyK: 0x4B,
    KeyL: 0x4C,
    KeyM: 0x4D,
    KeyN: 0x4E,
    KeyO: 0x4F,
    KeyP: 0x50,
    KeyQ: 0x51,
    KeyR: 0x52,
    KeyS: 0x53,
    KeyT: 0x54,
    KeyU: 0x55,
    KeyV: 0x56,
    KeyW: 0x57,
    KeyX: 0x58,
    KeyY: 0x59,
    KeyZ: 0x5A,
    Minus: 0x2D,
    NumpadEnter: 0xB0,
    OSLeft: 0x83,
    OSRight: 0x87,
    PageDown: 0xD6,
    PageUp: 0xD3,
    Period: 0x2E,
    Quote: 0x22,
    ShiftLeft: 0x81,
    ShiftRight: 0x85,
    Slash: 0x2F,
    Space: 0x20,
    Tab: 0xB3
  }

  public static jsToHID(event: KeyboardEvent, cb: CallableFunction): number[] {

    if (typeof ArduinoKeyboard.keyboardCode[event.code] === "undefined") {
      return [];
    }
  
    const hidCode = parseInt(ArduinoKeyboard.keyboardCode[event.code]);

    if (event.type === "keydown"){
      cb([0,hidCode])
    }else{
      cb([1,hidCode])
    }
  }
}

