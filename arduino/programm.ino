
#include <Keyboard.h>

void setup(){
  Serial1.begin(9600);
  Keyboard.begin();
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, 0);
}

void loop(){
  while (Serial1.available() > 1) {
    byte msg[2] = {0, 0};
    Serial1.readBytes(msg,2);
    if (msg[0] == 0x01){
      digitalWrite(LED_BUILTIN, 1);
      delay(10);
      digitalWrite(LED_BUILTIN, 0);
      Keyboard.press(msg[1]); 
    }else{
      Keyboard.release(msg[1]);
    }
  } 
  delay(100);
}