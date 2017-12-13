Apresente as caracter�sticas e utilidades das seguintes fun��es:
(a) popen()
* Cria um pIPE unidirecional;
*Faz um Fork
*Chama o Shell para abrir um outro processo no lugar do filho.
USO:
*FILE:Retorna um ponteiro para o stream aberto;
*const char command: Comando no formato string com o nome do binario a ser executado e seus par�metros.
(b) pclose()
*Fecha o Pipe Stream de um processo para outro
USO:  FILE*stream:ponteiro para stream aberto.
(c) fileno()
*Retorna o n�mero do descritor do arquivo.
*O n�mero do descritor � usado,por exemplo pelas fun��es de sistema read,write.
Quais s�o as vantagens e desvantagens em utilizar:
(a) popen()?
Vantagens: Possibilidade de abrir outro processo para assumir o lugar do filho.
Desvantagens: Pipe � unidirecional,n�o podendo haver retorno de informa��o.

(b) exec()? A fun��o exec() � muito �til para execu��o de programas externos,entretanto � preciso ter consciencia de que o c�digo do processo que chama a fun��o exec() sempre ser� destruido,sendo inviavel seu uso sem o uso da fun��o fork.