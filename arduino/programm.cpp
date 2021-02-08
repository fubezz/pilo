
#include <Keyboard.h>


void setup(){
  Serial1.begin(9600);
  Keyboard.begin();
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, 0);
}

void loop(){
  while (Serial1.available()) {
    char cmd[2] = {0,0};
    int x = Serial1.readBytes(cmd, 2);
    if (cmd[0] == 0){
      Keyboard.press(cmd[1]);  
      digitalWrite(LED_BUILTIN, 1);
      delay(10);
      digitalWrite(LED_BUILTIN, 0);
    }else{
      Keyboard.release(cmd[1]);
    }
  } 
}