﻿Para todas as questões, compile-as com o gcc e execute-as via terminal.

1. Crie um código em C para escrever "Ola mundo!" em um arquivo chamado 'ola_mundo.txt'.
	#include<stdio.h>

	int main()
	{
		FILE * fp = fopen("Ola_mundo.txt", "w");
		fputs("Ola mundo!\n", fp);
		fclose(fp);
		return 0;
	}

2. Crie um código em C que pergunta ao usuário seu nome e sua idade, e escreve este conteúdo em um arquivo com o seu nome e extensão '.txt'. Por exemplo, considerando que o código criado recebeu o nome de 'ola_usuario_1':
	$ ./ola_usuario_1
	$ Digite o seu nome: Eu
	$ Digite a sua idade: 30
	$ cat Eu.txt
	$ Nome: Eu2. Crie um c
	$ Idade: 30 anos
	$

	#include<stdio.h>

	int main()
	{
		char Nome[50], buf[0x100];
		int idade;

		printf("Digite o seu nome: ");
		scanf("%s", Nome);
		printf("Digite a sua idade: ");
		scanf("%d", &idade);

		snprintf(buf, sizeof(buf), "%s.txt", Nome);
		FILE *fp = fopen(buf, "w");

		fprintf(fp, "Nome: %s\nIdade: %d\n", Nome,  idade);
		return 0;
	}

3. Crie um código em C que recebe o nome do usuário e e sua idade como argumentos de entrada (usando as variáveis argc e *argv[]), e escreve este conteúdo em um arquivo com o seu nome e extensão '.txt'. Por exemplo, considerando que o código criado recebeu o nome de 'ola_usuario_2':
	$ ./ola_usuario_2 Eu 30
	$ cat Eu.txt
	$ Nome: Eu
	$ Idade: 30 anos
	$
	
	#include<stdio.h>
	#include<stdlib.h>

	int main(int argc, char *argv[])
	{
		char buf[0x100];

		snprintf(buf, sizeof(buf), "%s.txt", argv[1]);
		FILE *fp = fopen(buf, "w");

		fprintf(fp, "Nome: %s\nIdade: %d\n", argv[1],  atoi(argv[2]));
		fclose(fp);
		return 0;
	}

4. Crie uma função que retorna o tamanho de um arquivo, usando o seguinte protótipo:

	int tam_arq_texto(char *nome_arquivo);

Salve esta função em um arquivo separado chamado 'bib_arqs.c'. Salve o protótipo em um arquivo chamado 'bib_arqs.h'. Compile 'bib_arqs.c' para gerar o objeto 'bib_arqs.o'.

	#include<stdio.h>
	#include<stdlib.h>
	int tam_arq_texto(char *nome_arquivo)
	{
		int tam=-1;
		char ch=' ';
		FILE *fp = fopen(nome_arquivo, "r");
		while(ch!=EOF)
		{
			ch = fgetc(fp);
			tam++;
		}
		fclose(fp);
		return tam;
	}

5. Crie uma função que lê o conteúdo de um arquivo-texto e o guarda em uma string, usando o seguinte protótipo:

	void le_arq_texto(char *nome_arquivo, char *conteúdo);

Repare que o conteúdo do arquivo é armazenado no vetor 'conteudo[]'. Ou seja, ele é passado por referência. Salve esta função no mesmo arquivo da questão 4, chamado 'bib_arqs.c'. Salve o protótipo no arquivo 'bib_arqs.h'. Compile 'bib_arqs.c' novamente para gerar o objeto 'bib_arqs.o'.

	void le_arq_texto(char *nome_arquivo, char *conteudo)
	{
		int i=0;
		char ch=' ';
		FILE *fp = fopen(nome_arquivo, "r");
		while(1)
		{
			ch = fgetc(fp);
			if(ch != EOF)
			{
				conteudo[i] = ch;
				i++;
			}
			else 
				break;
		}
		conteudo[i+1]='\0';
		fclose(fp);
	}

6. Crie um código em C que copia a funcionalidade básica do comando 'cat': escrever o conteúdo de um arquivo-texto no terminal. Reaproveite as funções já criadas nas questões anteriores. Por exemplo, considerando que o código criado recebeu o nome de 'cat_falsificado':
	$ echo Ola mundo cruel! Ola universo ingrato! > ola.txt
	$ ./cat_falsificado ola.txt
	$ Ola mundo cruel! Ola universo ingrato!
	$

	#include <stdio.h>
	#include <stdlib.h>
	#include "bib_arqs.h"

	int main(int argc, char *argv[])
	{
		char *String = (char*) malloc(tam_arq_texto(argv[1])+1);
		le_arq_texto(argv[1], String);
		printf("%s", String);
		return 0;
	}

7. Crie um código em C que conta a ocorrência de uma palavra-chave em um arquivo-texto, e escreve o resultado no terminal. Reaproveite as funções já criadas nas questões anteriores. Por exemplo, considerando que o código criado recebeu o nome de 'busca_e_conta':
	$ echo Ola mundo cruel! Ola universo ingrato! > ola.txt
	$ ./busca_e_conta Ola ola.txt
	$ 'Ola' ocorre 2 vezes no arquivo 'ola.txt'.
	$

	#include <stdio.h>
	#include <stdlib.h>
	#include <string.h>
	#include "bib_arqs.h"

	int main(int argc, char *argv[])
	{
		char *String = (char*) malloc(tam_arq_texto(argv[2])+1);
		char *T = (char*) malloc(tam_arq_texto(argv[2])+1);
		le_arq_texto(argv[2], String);

		int i, j=0, q=0;
		for(i = 0; i <= strlen(String)-strlen(argv[1]) ; i++)
			if(String[i] == argv[1][0])
			{
				while(String[i+j] == argv[1][j])
				{
					j++;
					if(j == strlen(argv[1])-1 )
					{
						q++;
						break;
					}
				}
				j = 0;
			}

		printf("'%s' ocorre %d vezes no arquivo '%s'", argv[1], q, argv[2] );
		return 0;
	}
