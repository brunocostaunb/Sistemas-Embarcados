1. Por que o Linux recebeu esse nome?
Por causa do nome do criador Linus Torvalds.

2. O que s�o daemons?
Em um sistema operacional, um daemon � um programa de computador que � executado como um processo em segundo plano em vez de estar
sob o controle direto de um usu�rio interativo.

3. O que � o shell?
Um shell � um interpretador de linha de comando ou que fornece uma interface de usu�rio tradicional da linha de comando do Unix.
Os usu�rios direcionam a opera��o do computador digitando comandos como texto para um interpretador de linha de comando executar,
ou criando scripts de texto de um ou mais desses comandos.

4. Por que � importante evitar executar o terminal como super-usu�rio?
Porque o super-usu�rio tem total controle sobre o sistema, podendo manipular arquivos essenciais para seu funcionamento. 
Logo, um usu�rio inexperiente pode corromper o sistema.

5. Qual bot�o do teclado completa o que o usu�rio escreve no terminal, de acordo com o contexto?
A tecla "tab".

6. Quais bot�es do teclado apresentam instru��es escritas anteriormente?
A seta para cima.

7. Apresente os respectivos comandos no terminal para:
  (a) Obter mais informa��es sobre um comando.
  man [comando]
  
  (b) Apresentar uma lista com os arquivos dentro de uma pasta.
  ls
  
  (c) Apresentar o caminho completo da pasta.
  pwd
  
  (d) Trocar de pasta.
  cd [pasta]
  
  (e) Criar uma pasta.
  mkdir [nome_da_pasta]
  
  (f) Apagar arquivos definitivamente.
  rm [nome_do_arquivo]
  
  (g) Apagar pastas definitivamente.
  rm -r [nome_da_pasta]
  
  (h) Copiar arquivos.
  cp 
  
  (i) Copiar pastas.
  cp -avr [destino1] [destino2]
  
  (j) Mover arquivos.
  mv [nome_do_arquivo] [destino]
  
  (k) Mover pastas.
  mv [pasta1] [pasta1] [destino]
  
  (l) Renomear pastas.
  mv [nome_antigo] [nome_novo]
  
  (m) Apresentar o conte�do de um arquivo.
  cat [nome_do_arquivo]
  
  (n) Apresentar o tipo de um arquivo.
  file [arquivo]
  
  (o) Limpar a tela do terminal.
  clear
  
  (p) Encontrar ocorr�ncias de palavras-chave em um arquivo-texto.
  grep -rnw [diretorio] -e [texto]
  
  (q) Ordenar informa��es em um arquivo-texto.
  sort [nome_do_arquivo]
  
  (r) Substituir ocorr�ncias de palavras-chave em um arquivo-texto.
  sed -i [s/original/novo/g] [nome_do_arquivo]
  
  (s) Conferir se dois arquivos s�o iguais.
  cmp --silent [antigo] [novo] || echo "arquivos sao diferentes"
  
  (t) Escrever algo na tela.
  echo "frase"

