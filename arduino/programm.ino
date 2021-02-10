
#include <Keyboard.h>


void setup(){
  Serial1.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, 0);
}

void loop(){
  while (Serial1.available()) {
    byte x = Serial1.read();
    digitalWrite(LED_BUILTIN, 1);
    delay(10);
    digitalWrite(LED_BUILTIN, 0);
    Serial1.write(x);
  } 
  delay(100);
}