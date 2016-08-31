function[y]=fun(x)//função
     y=(x^2)-5;
endfunction

function [y]=der1(x)//primeira derivada
    y=2*x;
endfunction

function [y]=der2(x)//segunda derivada
    y=2;
endfunction

//main
a=1;
b=2
bb=1;
i=0;//contador de iterações
x0=3;
e = 0.0001;

    if(der1(a) > 0);//analisando quem será o x0
          if(der2(a) > 0);
                x0=b;
           else;
                x0=a;
           end;
     end;
     if(der1(a) < 0);//analisando quem será o x0
          if(der2(a) < 0);
              x0=b;
          else;
              x0=a;
          end;
     end;

while abs(bb)>e;
    bb=fun(x0);
    cc=der1(x0);
    x0=x0-(bb/cc);//formula geral
    i=i+1;
    if(i > 100)
        return 0
    end
   
     printf("Iteracao= %d\n",i);
     printf("Raiz= %f\n",x0);
     printf("\n");

end;