1. Como se utiliza o comando 'ps' para:

	utilizando-se a ajuda $man ps:
	
	(a) Mostrar todos os processos rodando na máquina?

		Alguns exemplos:
		  ps -e
		  ps -ef
		  ps -eF
		  ps -ely
		  ps ax
		  ps axu
		  ps -A
	
	(b) Mostrar os processos de um usuário? ps -u usuario
	
	(c) Ordenar todos os processos de acordo com o uso da CPU?
	(d) Mostrar a quanto tempo cada processo está rodando?

2. De onde vem o nome fork()?
Vem do inglês que significa "bifurcação".

3. Quais são as vantagens e desvantagens em utilizar:
	(a) system()?
		Vantagem: executar uma linha de comando pelo código em c;
		Desvantagem: dá brechas à falhas de execução, pois depende muito do sistema.
	
	(b) fork() e exec()?
		Vantagens: a função fork() cria uma cópia do processo atual e em seguida a função exec() que substitui o 
		conteúdo do novo processo por um novo programa.		
		Desvantagens: ter cautela dos dois processos gerados não mexerem na mesma variável ou aqruivo .
4. É possível utilizar o exec() sem executar o fork() antes?

5. Quais são as características básicas das seguintes funções:
	(a) execp()?
	(b) execv()?
	(c) exece()?
	(d) execvp()?
	(e) execve()?
	(f) execle()?
