1. Especifique algumas portas importantes pr�-definidas para o protocolo TCP/IP.
	::21 - FTP;
	:: 23 - Telnet;
	:: 25 - SMTP;
	:: 80 - HTTP;
	:: 110 - POP3;
	:: 143 - IMAP;
	:: 443 - HTTPS.
2. Com rela��o a endere�os IP, responda:
	(a) Qual � a diferen�a entre endere�os IP externos e locais?
		o local, � o proprio endere�o da maquina, e enquanto o externo, � um que vem de fora, por meio de uma rede externa
	(b) Como endere�os IP externos s�o definidos? Quem os define?
		
	(c) Como endere�os IP locais s�o definidos? Quem os define?
	(d) O que � o DNS? Para que ele serve?
		� um sistema de gerenciamento de nomes hier�rquico e distribu�do para computadores, servi�os ou qualquer recurso conectado � Internet ou numa rede privada. Baseia-se em nomes hier�rquicos e permite a inscri��o de v�rios dados digitados al�m do nome do host e seu IP.
3. Com rela��o � pilha de protocolos TCP/IP, responda:

	(a) O que s�o suas camadas? Para que servem?
		Para identificar o a fun��o que deve ser executada
	(b) Quais s�o as camadas existentes? Para que servem?
		camada de aplica��o, � a que conecta as aplica��es a rede. � nela que tem inicio o processo de cumunica��o e que est�o os protocolos de aplica��o cliente/servidor
		a camada de transporte, garante a comunica��o entres os hosts e e transmite os dados entre as camadas de aplica��o e de internet transformando os dados em pacotes
		a fun��o da camada de internet � adicionar um cabe�alho ao pacote de dados que contem o endere�o de ip do servidor e do clente
		a camada de interface com a rede, � responsavel pelo envio dos datagramas construidos na internet com o meio fisico, os protocolos utilizados, dependem do tipo de rede fisica em que esta o dispositivo
	(c) Quais camadas s�o utilizadas pela biblioteca de sockets?
		camada de aplica��o, transporte, internet
	(d) As portas usadas por servidores na fun��o bind() se referem a qual camada?
		transporte
	(e) Os endere�os usados por clientes na fun��o connect() se referem a qual camada?
		camada de internet

4. Qual � a diferen�a entre os m�todos GET e POST no protocolo HTTP?
get, recupera um recurso do servidor
post cria um recurso no servidor