int verde1 = 13;
int amarelo1 = 12;
int vermelho1 = 11;
int verde2 = 10;
int amarelo2 = 9;
int vermelho2 = 8;
void setup()
{
  pinMode(verde1, OUTPUT);
  pinMode(amarelo1, OUTPUT);
  pinMode(vermelho1, OUTPUT);
  pinMode(verde2, OUTPUT);
  pinMode(amarelo2, OUTPUT);
  pinMode(vermelho2, OUTPUT);
}
void farol1()
{
  digitalWrite(verde1, HIGH);
  delay(4000);
  digitalWrite(verde1, LOW);
  digitalWrite(amarelo1, HIGH);
  delay(3000);
  digitalWrite(amarelo1, LOW);
  digitalWrite(vermelho1, HIGH);
  delay(4000);
  digitalWrite(vermelho1, LOW);
}
void loop()
{
  farol1();
  while (verde1 = HIGH)
  {
    digitalWrite(vermelho2, HIGH);
    delay(4000);
    digitalWrite(vermelho2, LOW);
    digitalWrite(verde2, HIGH);
    delay(4000);
    digitalWrite(verde2, LOW);
    digitalWrite(amarelo2, HIGH);
    delay(3000);
    digitalWrite(amarelo2, LOW);
  }
  if (/* condition */)
  {
    /* code */
  }
  
}