1. Quais s√£o as vantagens e desvantagens em utilizar:
	(a) fork?
AtravÈs da funÁ„o Fork pode-se criar um processo filho que ir· desempenhar uma funÁ„o que o usu·rio n„o pode fazer,entretanto eles passam a se tornar processos distintos e a exigir mais desempenho da CPU.
	(b) threads?
Vantagem:ComunicaÁ„o È mais simples e ocupa menos espaÁo na memÛria.
Desvantagem: Risco de corrupÁ„o de dados.


2. Quantas threads ser√£o criadas ap√≥s as linhas de c√≥digo a seguir? Quantas coexistir√£o? Por qu√™?
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
2 threads s„o criadas.
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
2 threads s„o criadas.

3. Apresente as caracter√≠sticas e utilidades das seguintes fun√ß√µes:
	(a) pthread_setcancelstate()
Define o estado de cancelabilidade do Chamando thread para o valor dado no estado . O anterior estado de cancelabilidade do segmento È retornado no buffer apontado para o estado antigo .
	(b) pthread_setcanceltype()
Define o tipo de cancelabilidade do thread de chamada para o valor indicado no tipo . O tipo de cancelabilidade anterior do thread È retornado no buffer apontado pelo oldtype
(DICA: elas s√£o relacionadas √† fun√ß√£o pthread_cancel().)





