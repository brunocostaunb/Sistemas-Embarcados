1. Crie um programa em C para criar um cliente e um servidor. Faça com que o cliente envie os valores 1, 2, 3, 4, 5, 6, 7, 8, 9 e 10 para o servidor, com intervalos de 1 segundo entre cada envio. Depois de o cliente enviar o número 10, ele aguarda 1 segundo e termina a execução. O servidor escreve na tela cada valor recebido, e quando ele receber o valor 10, ele termina a execução.

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <sys/un.h>
#include <unistd.h>
#include <signal.h>

int main (int argc, char* const argv[])
{
	int socket_id;
	struct sockaddr_in servidorAddr;
	int length;
	unsigned short servidorPorta;
	char *IP_Servidor;
	int mensagem[10];

	if (argc != 4)
	{
		puts("   Este programa cria um cliente que se comunica");
		puts("   a um servidor TCP/IP na porta especificada");
		puts("   pelo usuario. Para permitir que o cliente comunique-se");
		puts("   com este servidor, o servidor deve ser");
		puts("   executado inicialmente com uma porta definida,");
		puts("   e o cliente devera ser executado em outra");
		puts("   janela ou em outra aba do terminal, utilizando");
		puts("   a mesma porta. O servidor escreve na tela");
		puts("   todo texto enviado pelo cliente. Se o cliente");
		puts("   transmitir o texto \"sair\", o servidor se");
		puts("   encerra. Se o usuario pressionar CTRL-C para");
		puts("   o servidor, ele tambem se encerra.");
		puts("   encerra.");
		puts("   Modo de Uso:");
		printf("      %s <IP do Servidor> <Porta do servidor> <Mensagem>\n", argv[0]);
		printf("   Exemplo: %s 127.0.0.1 8000 \"Ola socket\"\n", argv[0]);
		exit(1);
	}
	IP_Servidor = argv[1];
	servidorPorta = atoi(argv[2]);
	//mensagem = argv[3];

	fprintf(stderr, "Abrindo o socket para o cliente... ");
	socket_id = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
	if(socket_id < 0)
	{
		fprintf(stderr, "Erro na criacao do socket!\n");
		exit(0);
	}
	fprintf(stderr, "Feito!\n");
	
	fprintf(stderr, "Conectando o socket ao IP %s pela porta %d... ", IP_Servidor, servidorPorta);
	memset(&servidorAddr, 0, sizeof(servidorAddr)); // Zerando a estrutura de dados
	servidorAddr.sin_family = AF_INET;
	servidorAddr.sin_addr.s_addr = inet_addr(IP_Servidor);
	servidorAddr.sin_port = htons(servidorPorta);
	if(connect(socket_id, (struct sockaddr *) &servidorAddr, 
							sizeof(servidorAddr)) < 0)
	{
		fprintf(stderr, "Erro na conexao!\n");
		exit(0);
	}
	fprintf(stderr, "Feito!\n");

	fprintf(stderr, "Mandando mensagem ao servidor... ");
	/*length = strlen(mensagem) + 1;
	write(socket_id, &length, sizeof(length));
	write(socket_id, mensagem, length);
	fprintf(stderr, "Feito!\n");*/
	for ( int i =0; i < 10; i++){
		mensagem[i] = i+1;
		printf("%d\n", mensagem[i]);
		sleep(1);		
		}
	write(socket_id, mensagem, sizeof(mensagem));
	fprintf(stderr, "Feito!\n");
	fprintf(stderr, "Fechando o socket local... ");
	close(socket_id);
	fprintf(stderr, "Feito!\n");
	return 0;
}

2. Crie um programa em C para criar um cliente e um servidor. Execute a seguinte conversa entre cliente e servidor:

	CLIENTE: Pai, qual é a verdadeira essência da sabedoria?
	SERVIDOR: Não façais nada violento, praticai somente aquilo que é justo e equilibrado.
	CLIENTE: Mas até uma criança de três anos sabe disso!
	SERVIDOR: Sim, mas é uma coisa difícil de ser praticada até mesmo por um velho como eu...

Neste exercício, o cliente deve escrever no terminal as mensagens enviadas e recebidas.


#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <sys/un.h>
#include <unistd.h>

int main (int argc, char* const argv[])
{
	int socket_id;
	struct sockaddr_in servidorAddr;
	int length;
	unsigned short servidorPorta;
	char *IP_Servidor;
	char mensagem1[100] = "CLIENTE: Pai, qual � a verdadeira ess�ncia da sabedoria?";
  char mensagem2[100] = "SERVIDOR: Sim, mas � uma coisa dif�cil de ser praticada at� mesmo por um velho como eu...";
  char mensagem3[100];
  char mensagem4[100];

	if (argc != 4)
	{
		puts("   Este programa cria um cliente que se comunica");
		puts("   a um servidor TCP/IP na porta especificada");
		puts("   pelo usuario. Para permitir que o cliente comunique-se");
		puts("   com este servidor, o servidor deve ser");
		puts("   executado inicialmente com uma porta definida,");
		puts("   e o cliente devera ser executado em outra");
		puts("   janela ou em outra aba do terminal, utilizando");
		puts("   a mesma porta. O servidor escreve na tela");
		puts("   todo texto enviado pelo cliente. Se o cliente");
		puts("   transmitir o texto \"sair\", o servidor se");
		puts("   encerra. Se o usuario pressionar CTRL-C para");
		puts("   o servidor, ele tambem se encerra.");
		puts("   encerra.");
		puts("   Modo de Uso:");
		printf("      %s <IP do Servidor> <Porta do servidor> <Mensagem>\n", argv[0]);
		printf("   Exemplo: %s 127.0.0.1 8000 \"Ola socket\"\n", argv[0]);
		exit(1);
	}
	IP_Servidor = argv[1];
	servidorPorta = atoi(argv[2]);
	//mensagem = argv[3];

	fprintf(stderr, "Abrindo o socket para o cliente... ");
	socket_id = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
	if(socket_id < 0)
	{
		fprintf(stderr, "Erro na criacao do socket!\n");
		exit(0);
	}
	fprintf(stderr, "Feito!\n");

	fprintf(stderr, "Conectando o socket ao IP %s pela porta %d... ", IP_Servidor, servidorPorta);
	memset(&servidorAddr, 0, sizeof(servidorAddr)); // Zerando a estrutura de dados
	servidorAddr.sin_family = AF_INET;
	servidorAddr.sin_addr.s_addr = inet_addr(IP_Servidor);
	servidorAddr.sin_port = htons(servidorPorta);
	if(connect(socket_id, (struct sockaddr *) &servidorAddr,
							sizeof(servidorAddr)) < 0)
	{
		fprintf(stderr, "Erro na conexao!\n");
		exit(0);
	}
	fprintf(stderr, "Feito!\n");

	fprintf(stderr, "Recebendo mensagem do servidor... ");
	//length = strlen(mensagem) + 1;
	read(socket_id, mensagem3, sizeof(mensagem3));
	read(socket_id, mensagem4, sizeof(mensagem4));
	fprintf(stderr, "Feito!\n");
  fprintf(stderr, "%s\n",mensagem1 );
  fprintf(stderr, "%s\n",mensagem3 );
  fprintf(stderr, "%s\n", mensagem2);
  fprintf(stderr, "%s\n", mensagem4);
	fprintf(stderr, "Fechando o socket local... ");
	close(socket_id);
	fprintf(stderr, "Feito!\n");
	return 0;
}



----------------------------------------------------------------






