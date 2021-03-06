Para todas as questões, utilize as funções da norma POSIX (open(), close(), write(), read() e lseek()). Compile os códigos com o gcc e execute-os via terminal.

1. Crie um código em C para escrever "Ola mundo!" em um arquivo chamado 'ola_mundo.txt'.

	#include <stdio.h>
	#include <fcntl.h>
	#include <unistd.h>

	int main(int argc, const char * argv[])
	{
		write(open ("ola_mundo.txt", O_WRONLY | O_CREAT, S_IRWXU), "Ola mundo!\n", 11);
		return 0;
	}

2. Crie um código em C que pergunta ao usuário seu nome e sua idade, e escreve este conteúdo em um arquivo com o seu nome e extensão '.txt'. Por exemplo, considerando que o código criado recebeu o nome de 'ola_usuario_1':
	$ ./ola_usuario_1
	$ Digite o seu nome: Eu
	$ Digite a sua idade: 30
	$ cat Eu.txt
	$ Nome: Eu
	$ Idade: 30 anos
	
	#include <stdio.h>	// Para a funcao printf()
	#include <fcntl.h>	// Para a funcao open()
	#include <unistd.h>	// Para a funcao close()
	#include <string.h>

	int main(int argc, const char * argv[])
	{
		char Nome[50], FileName[53], Buffer[100] = "Nome: ", str[10];
		int idade;

		printf("Digite o seu nome: ");
		scanf("%s", Nome);
		printf("Digite a sua idade: ");
		scanf("%d", &idade);
		strcpy(FileName, Nome);
		strcat(FileName, ".txt");

		strcat(Buffer, Nome);
		strcat(Buffer, "\nIdade: ");
		sprintf(str, "%d", idade);
		strcat(Buffer, str);
		strcat(Buffer, "\n\0");

		write(open (FileName, O_WRONLY | O_CREAT, S_IRWXU), Buffer, 50);

		return 0;
	}
	
3. Crie um código em C que recebe o nome do usuário e e sua idade como argumentos de entrada (usando as variáveis argc e *argv[]), e escreve este conteúdo em um arquivo com o seu nome e extensão '.txt'. Por exemplo, considerando que o código criado recebeu o nome de 'ola_usuario_2':
	$ ./ola_usuario_2 Eu 30
	$ cat Eu.txt
	$ Nome: Eu
	$ Idade: 30 anos
	
	#include <stdio.h>	// Para a funcao printf()
	#include <fcntl.h>	// Para a funcao open()
	#include <unistd.h>	// Para a funcao close()
	#include <string.h>

	int main(int argc, char *argv[])
	{

		char Nome[50], FileName[53], Buffer[100] = "Nome: ";

		strcpy(FileName, argv[1]);
		strcat(FileName, ".txt");

		strcat(Buffer, argv[1]);
		strcat(Buffer, "\nIdade: ");
		strcat(Buffer, argv[2]);
		strcat(Buffer, "\n\0");

		write(open (FileName, O_WRONLY | O_CREAT, S_IRWXU), Buffer, 50);

		return 0;
	}
	

4. Crie uma função que retorna o tamanho de um arquivo, usando o seguinte protótipo:

	#include <stdio.h>
	#include <fcntl.h>
	#include <unistd.h>

	int tam_arq_texto(char *nome_arquivo)
	{
		return lseek( open (nome_arquivo, O_RDONLY) , 0, SEEK_END);
	}

Salve esta função em um arquivo separado chamado 'bib_arqs.c'. Salve o protótipo em um arquivo chamado 'bib_arqs.h'. Compile 'bib_arqs.c' para gerar o objeto 'bib_arqs.o'.

5. Crie uma função que lê o conteúdo de um arquivo-texto e o guarda em uma string, usando o seguinte protótipo:

	void le_arq_texto(char *nome_arquivo, char *conteudo)
	{
		read(open (nome_arquivo, O_RDONLY), conteudo, tam_arq_texto(nome_arquivo));
	}

Repare que o conteúdo do arquivo é armazenado no vetor 'conteudo[]'. Ou seja, ele é passado por referência. Salve esta função no mesmo arquivo da questão 4, chamado 'bib_arqs.c'. Salve o protótipo no arquivo 'bib_arqs.h'. Compile 'bib_arqs.c' novamente para gerar o objeto 'bib_arqs.o'.

6. Crie um código em C que copia a funcionalidade básica do comando 'cat': escrever o conteúdo de um arquivo-texto no terminal. Reaproveite as funções já criadas nas questões anteriores. Por exemplo, considerando que o código criado recebeu o nome de 'cat_falsificado':
	$ echo Ola mundo cruel! Ola universo ingrato! > ola.txt
	$ ./cat_falsificado ola.txt
	$ Ola mundo cruel! Ola universo ingrato!

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
					if(j == strlen(argv[1])-1)
					{
						q++;
						break;
					}
				}
				j = 0;
			}

		printf("'%s' ocorre %d vezes no arquivo '%s'\n", argv[1], q, argv[2] );
		return 0;
	}
