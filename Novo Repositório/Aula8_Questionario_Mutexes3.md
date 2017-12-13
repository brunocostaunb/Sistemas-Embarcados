Apresente as características e utilidades das seguintes funções:
(a) popen()
* Cria um pIPE unidirecional;
*Faz um Fork
*Chama o Shell para abrir um outro processo no lugar do filho.
USO:
*FILE:Retorna um ponteiro para o stream aberto;
*const char command: Comando no formato string com o nome do binario a ser executado e seus parâmetros.
(b) pclose()
*Fecha o Pipe Stream de um processo para outro
USO:  FILE*stream:ponteiro para stream aberto.
(c) fileno()
*Retorna o número do descritor do arquivo.
*O número do descritor é usado,por exemplo pelas funções de sistema read,write.
Quais são as vantagens e desvantagens em utilizar:
(a) popen()?
Vantagens: Possibilidade de abrir outro processo para assumir o lugar do filho.
Desvantagens: Pipe é unidirecional,não podendo haver retorno de informação.

(b) exec()? A função exec() é muito útil para execução de programas externos,entretanto é preciso ter consciencia de que o código do processo que chama a função exec() sempre será destruido,sendo inviavel seu uso sem o uso da função fork.