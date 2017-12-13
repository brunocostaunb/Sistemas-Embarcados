1. Especifique algumas portas importantes pré-definidas para o protocolo TCP/IP.
	::21 - FTP;
	:: 23 - Telnet;
	:: 25 - SMTP;
	:: 80 - HTTP;
	:: 110 - POP3;
	:: 143 - IMAP;
	:: 443 - HTTPS.
2. Com relação a endereços IP, responda:
	(a) Qual é a diferença entre endereços IP externos e locais?
		o local, é o proprio endereço da maquina, e enquanto o externo, é um que vem de fora, por meio de uma rede externa
	(b) Como endereços IP externos são definidos? Quem os define?
		
	(c) Como endereços IP locais são definidos? Quem os define?
	(d) O que é o DNS? Para que ele serve?
		é um sistema de gerenciamento de nomes hierárquico e distribuído para computadores, serviços ou qualquer recurso conectado à Internet ou numa rede privada. Baseia-se em nomes hierárquicos e permite a inscrição de vários dados digitados além do nome do host e seu IP.
3. Com relação à pilha de protocolos TCP/IP, responda:

	(a) O que são suas camadas? Para que servem?
		Para identificar o a função que deve ser executada
	(b) Quais são as camadas existentes? Para que servem?
		camada de aplicação, é a que conecta as aplicações a rede. É nela que tem inicio o processo de cumunicação e que estão os protocolos de aplicação cliente/servidor
		a camada de transporte, garante a comunicação entres os hosts e e transmite os dados entre as camadas de aplicação e de internet transformando os dados em pacotes
		a função da camada de internet é adicionar um cabeçalho ao pacote de dados que contem o endereço de ip do servidor e do clente
		a camada de interface com a rede, é responsavel pelo envio dos datagramas construidos na internet com o meio fisico, os protocolos utilizados, dependem do tipo de rede fisica em que esta o dispositivo
	(c) Quais camadas são utilizadas pela biblioteca de sockets?
		camada de aplicação, transporte, internet
	(d) As portas usadas por servidores na função bind() se referem a qual camada?
		transporte
	(e) Os endereços usados por clientes na função connect() se referem a qual camada?
		camada de internet

4. Qual é a diferença entre os métodos GET e POST no protocolo HTTP?
get, recupera um recurso do servidor
post cria um recurso no servidor