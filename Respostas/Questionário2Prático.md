Para todas as quest�es, escreva os comandos correspondentes no terminal.

1. Escreva o texto "Ola mundo cruel!" em um arquivo denominado "Ola_mundo.txt". Apresente o conte�do deste arquivo no terminal.
brunocosta@debian:~$ echo "Ola mundo Cruel!" >> Ola_mundo.txt
brunocosta@debian:~$ cat Ola_mundo.txt
Ola mundo Cruel!

2. Apresente o nome de todos os arquivos e pastas na pasta 'root'.
brunocosta@debian:~$ cd /
brunocosta@debian:/$ ls
bin   dev  home        lib    lost+found  mnt  proc  run   srv  tmp  var
boot  etc  initrd.img  lib64  media       opt  root  sbin  sys  usr  vmlinuz

3. Apresente o tipo de todos os arquivos e pastas na pasta 'root'.
brunocosta@debian:~$ cd /
brunocosta@debian:/$ ls -l
total 84
drwxr-xr-x   2 root root  4096 Mar  9 12:10 bin
drwxr-xr-x   3 root root  4096 Mar  9 12:12 boot
drwxr-xr-x  18 root root  3160 Mar 14 05:17 dev
drwxr-xr-x 135 root root 12288 Mar 12 17:43 etc
drwxr-xr-x   3 root root  4096 Mar  9 12:12 home
lrwxrwxrwx   1 root root    31 Mar  9 12:04 initrd.img -> /boot/initrd.img-3.16.0-4-amd64
drwxr-xr-x  18 root root  4096 Mar  9 12:10 lib
drwxr-xr-x   2 root root  4096 Mar  9 12:03 lib64
drwx------   2 root root 16384 Mar  9 12:03 lost+found
drwxr-xr-x   3 root root  4096 Mar  9 12:04 media
drwxr-xr-x   2 root root  4096 Mar  9 12:03 mnt
drwxr-xr-x   2 root root  4096 Mar  9 12:03 opt
dr-xr-xr-x 204 root root     0 Mar 14 05:17 proc
drwx------   3 root root  4096 Mar 11 18:47 root
drwxr-xr-x  22 root root   820 Mar 14 05:22 run
drwxr-xr-x   2 root root  4096 Mar  9 12:12 sbin
drwxr-xr-x   2 root root  4096 Mar  9 12:03 srv
dr-xr-xr-x  13 root root     0 Mar 14 05:29 sys
drwxrwxrwt  14 root root  4096 Mar 14 05:24 tmp
drwxr-xr-x  10 root root  4096 Mar  9 12:03 usr
drwxr-xr-x  12 root root  4096 Mar  9 12:11 var
lrwxrwxrwx   1 root root    27 Mar  9 12:04 vmlinuz -> boot/vmlinuz-3.16.0-4-amd64

4. Apresente somente as pastas dentro da pasta 'root'.
brunocosta@debian:/$ ls -d */
bin/   dev/  home/  lib64/       media/  opt/   root/  sbin/  sys/  usr/
boot/  etc/  lib/   lost+found/  mnt/    proc/  run/   srv/   tmp/  var/

5. Descubra em que dia da semana caiu o seu anivers�rio nos �ltimos dez anos.
brunocosta@debian:/$ cal -d 2007-11
   November 2007      
Su Mo Tu We Th Fr Sa  
             1  2  3  
 4  5  6  7  8  9 10  
11 12 13 14 15 16 17  
18 19 20 21 22 23 24  
25 26 27 28 29 30

Para as quest�es a seguir, use a pasta no endere�o https://github.com/DiogoCaetanoGarcia/Sistemas_Embarcados/raw/master/Questoes/Arqs_aula_02.zip

6. Liste somente os arquivos com extens�o .txt.
brunocosta@debian:~/Downloads/Arqs_aula_02$ ls | grep ".txt"
arquivo.txt
cal_1990.txt
cal_1991.txt
cal_1992.txt
cal_1993.txt
cal_1994.txt
cal_1995.txt
cal_1996.txt
cal_1997.txt
cal_1998.txt
cal_1999.txt
cal_2000.txt
cal_2001.txt
cal_2002.txt
cal_2003.txt
cal_2004.txt
cal_2005.txt
cal_2006.txt
cal_2007.txt
cal_2008.txt
cal_2009.txt
cal_2010.txt
cal_2011.txt
cal_2012.txt
cal_2013.txt
cal_2014.txt
cal_2015.txt
cal_2016.txt
cal_2017.txt
cal_2018.txt
cal_2019.txt
cal_2020.txt
cal.txt
cal_types.txt

7. Liste somente os arquivos com extens�o .png.
brunocosta@debian:~/Downloads/Arqs_aula_02$ ls | grep ".png"
BusinessTux.png
linux1.png
linux2.png
linux3.png
linux_inside.png
linux-penguin-icon-39742.png
linux.png
Tux-in-a-suit.png
tux-linux-professional_0-100520358-orig.png
TUX.png
xanderrun-tux-construction-8454.png

8. Liste somente os arquivos com extens�o .jpg.
brunocosta@debian:~/Downloads/Arqs_aula_02$ ls | grep ".jpg"
d36f1a2be6a927ac3e2e1e4eacdedded.jpg
oRva1OGD_400x400.jpg
oRva1OGD.jpg
zz39112bb5.jpg

9. Liste somente os arquivos com extens�o .gif.
brunocosta@debian:~/Downloads/Arqs_aula_02$ ls | grep ".gif"
1086970.gif

10. Liste somente os arquivos que contenham o nome 'cal'.
brunocosta@debian:~/Downloads/Arqs_aula_02$ ls | grep "cal"
cal_1990.txt
cal_1991.txt
cal_1992.txt
cal_1993.txt
cal_1994.txt
cal_1995.txt
cal_1996.txt
cal_1997.txt
cal_1998.txt
cal_1999.txt
cal_2000.txt
cal_2001.txt
cal_2002.txt
cal_2003.txt
cal_2004.txt
cal_2005.txt
cal_2006.txt
cal_2007.txt
cal_2008.txt
cal_2009.txt
cal_2010.txt
cal_2011.txt
cal_2012.txt
cal_2013.txt
cal_2014.txt
cal_2015.txt
cal_2016.txt
cal_2017.txt
cal_2018.txt
cal_2019.txt
cal_2020.txt
cal.txt
cal_types.txt

11. Liste somente os arquivos que contenham o nome 'tux'.
brunocosta@debian:~/Downloads/Arqs_aula_02$ ls | grep "tux"
tux-linux-professional_0-100520358-orig.png
xanderrun-tux-construction-8454.png

12. Liste somente os arquivos que comecem com o nome 'tux'.
brunocosta@debian:~/Downloads/Arqs_aula_02$ ls | grep -E ^tux
tux-linux-professional_0-100520358-orig.png
