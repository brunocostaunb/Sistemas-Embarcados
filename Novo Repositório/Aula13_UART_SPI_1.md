1. Cite as vantagens e desvantagens das comunica��o serial:

_(a) Ass�ncrona (UART)._
Uma das vantagens da UART � que ela � ass�ncrona, logo por n�o haver a necessidade do clock, tamb�m n�o h� preocupa��es com os resistores de pull-up. Por�m, isso ao mesmo tempo pode ser uma desvantagem j� que como n�o h� a temporiza��o do bit, tanto o transmissor quanto o receptor devem sabem previamente a dura��o.

_(b) SPI._
As vantagens da SPI � que o projetista pode escolher a velocidade da transmiss�o, podendo chegando at� 500000. A desvantagem � que � a comunica��o que mais necessita de fios.

2. Considere o caso em que a Raspberry Pi deve receber leituras anal�gico/digitais de um MSP430, e que a comunica��o entre os dois � UART. � tecnicamente poss�vel que o MSP430 mande os resultados da convers�o A/D a qualquer hora, ou ele deve aguardar a Raspberry Pi fazer um pedido ao MSP430? Por qu�?

O MSP430 pode mandar informa��es sem nenhum requisi��o da Raspberry. Isso se d� porque s�o dois fios distintos, um para enviar e um para receber, e n�o h� um clock. Logo, tanto a Rasberry pode dar o bit de START e come�ar a informa��o quanto o MSP430.

3. Considere o caso em que a Raspberry Pi deve receber leituras anal�gico/digitais de um MSP430, que a comunica��o entre os dois seja SPI, e que o MSP430 seja o escravo. � tecnicamente poss�vel que o MSP430 mande os resultados da convers�o A/D a qualquer hora, ou ele deve aguardar a Raspberry Pi fazer um pedido ao MSP430? Por qu�?

Dessa vez, o MSP430 deve aguardar o pedido da Raspberry. Isso se d� porque na comunica��o SPI, o clock est� no mestre, que � a Raspberry. Logo, � necess�rio a autoriza��o do mestre para a comunica��o pois � ele quem vai dar o sinal do clock.

4. Se o Raspberry Pi tiver de se comunicar com dois dispositivos via UART, como executar a comunica��o com o segundo dispositivo?

Para isso, ap�s mandar o bit de START e os bits que cont�m a informa��o desejada, o pr�ximo bit � o de endere�o do dispositivo escolhido. Sabendo desse endere�o, a informa��o � enviada para o dispositivo requisitado.

5. Se o Raspberry Pi tiver de se comunicar com dois dispositivos via SPI, como executar a comunica��o com o segundo dispositivo?

J� na comunica��o SPI � mais f�cil pois existe a possibilidade de colocar mais um fio para indicar o endere�o do escravo. Dessa forma, basta ligar esse fio nos escravos e setar e/ou zerar os escravos necess�rios para a comunica��o s� com um deles.