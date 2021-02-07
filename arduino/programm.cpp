
#include <Keyboard.h>
char key;

void setup(){
  Serial1.begin(9600);
  Keyboard.begin();
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, 0);
}

void loop(){
  while (Serial1.available()) {
    key = Serial1.read();
    digitalWrite(LED_BUILTIN, 1);
    Keyboard.write(key);
  } 
  digitalWrite(LED_BUILTIN, 0);
  delay(10);
}