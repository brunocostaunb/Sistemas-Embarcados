1. Quais são as vantagens e desvantagens em utilizar:
	(a) fork?
Atrav�s da fun��o Fork pode-se criar um processo filho que ir� desempenhar uma fun��o que o usu�rio n�o pode fazer,entretanto eles passam a se tornar processos distintos e a exigir mais desempenho da CPU.
	(b) threads?
Vantagem:Comunica��o � mais simples e ocupa menos espa�o na mem�ria.
Desvantagem: Risco de corrup��o de dados.


2. Quantas threads serão criadas após as linhas de código a seguir? Quantas coexistirão? Por quê?
	(a)
		void* funcao_thread_1(void *arg);
		void* funcao_thread_2(void *arg);
		
		int main (int argc, char** argv)
		{
			pthread_t t1, t2;
			pthread_create(&t1, NULL, funcao_thread_1, NULL);
			pthread_create(&t2, NULL, funcao_thread_2, NULL);
			pthread_join(t1, NULL);
			pthread_join(t2, NULL);
			return 0;
		}
2 threads s�o criadas.
	(b)
		void* funcao_thread_1(void *arg);
		void* funcao_thread_2(void *arg);
		
		int main (int argc, char** argv)
		{
			pthread_t t1, t2;
			pthread_create(&t1, NULL, funcao_thread_1, NULL);
			pthread_join(t1, NULL);
			pthread_create(&t2, NULL, funcao_thread_2, NULL);
			pthread_join(t2, NULL);
			return 0;
		}
2 threads s�o criadas.

3. Apresente as características e utilidades das seguintes funções:
	(a) pthread_setcancelstate()
Define o estado de cancelabilidade do Chamando thread para o valor dado no estado . O anterior estado de cancelabilidade do segmento � retornado no buffer apontado para o estado antigo .
	(b) pthread_setcanceltype()
Define o tipo de cancelabilidade do thread de chamada para o valor indicado no tipo . O tipo de cancelabilidade anterior do thread � retornado no buffer apontado pelo oldtype
(DICA: elas são relacionadas à função pthread_cancel().)





