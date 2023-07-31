// C++ code

int i = 0;

int B = 0;

int j = 0;

void setup()
{
  pinMode(9, OUTPUT);
}

void loop()
{
  for (B = 0; B <= 255; B += 1) {
    analogWrite(9, B);
    delay(30); 
  }
  for (B = 255; B >= 0; B -= 1) {
    analogWrite(9, B);
    delay(30); 
  }
}