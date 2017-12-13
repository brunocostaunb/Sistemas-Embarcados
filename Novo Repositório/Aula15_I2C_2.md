1. Cite as vantagens e desvantagens das comunica��o serial I2C.

Uma das vantagens desse comunica��o � que h� o bit "acknowledgment", onde � poss�vel saber se os escravos (ou o mestre) foram identificados com sucesso e assim a comunica��o foi passada. J� a desvantagem � que s�o s� dois fios, um para o clock e um para a informa��o, logo � preciso de autoriza��o do mestre para comunica��o e tamb�m todas as informa��es devem ser passadas pelo SDA (serial data line), ou seja, tanto a informa��o desejada, como o endere�o do escravo, o bit indicando se � de leitura ou escrita e tamb�m o bit de acknowledgment.

2. Considere o caso em que a Raspberry Pi deve receber leituras anal�gico/digitais de um MSP430, e que a comunica��o entre os dois � I2C. � tecnicamente poss�vel que o MSP430 mande os resultados da convers�o A/D a qualquer hora, ou ele deve aguardar a Raspberry Pi fazer um pedido ao MSP430? Por qu�?

Ele deve aguardar a Raspberry, pois como � s� um fio para enviar e receber as informa��es, deve haver uma ordem de transmiss�o. Logo, o mestre indica o endere�o do escravo e decide se ele vai ler ou enviar a informa��o.

3. Se o Raspberry Pi tiver de se comunicar com dois dispositivos via I2C, como executar a comunica��o com o segundo dispositivo?

Basta indicar o endere�o do segundo escravo na hora de enviar a informa��o. Inicialmente envia-se o bit de start na borda de descida quando o clock est� em 1, depois envia-se o endere�o do escravo, depois se o mestre vai ler ou escrever, posteriormente o bit de reconhecimento do escravo e finalmente a informa��o a ser passada.