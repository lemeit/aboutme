## Del intercambio al próximo estado de un órgano

El campo usa temperatura relativa $\theta=T-T_a$, una malla de $40^3$ celdas y dominio de lado 2: $h=2/39$ y $\Delta V=h^3$. Cada órgano tiene capacidad $C=0{,}00012$ y conductancia hacia el medio $G=0{,}000035$, en unidades del modelo.

El flujo firmado hacia el medio es $q=G(\theta_o-\theta_m)$. Si el órgano está más caliente, $q>0$ y entrega calor; si está más frío, recibe calor. Durante $\delta t$:

$$\Delta Q=q\,\delta t,\qquad \Delta\theta_o=-\frac{\Delta Q}{C},\qquad \Delta\theta_c=\frac{\Delta Q}{\Delta V}\frac{w_c}{\sum_jw_j}.$$

Los pesos gaussianos se normalizan sobre las celdas alcanzadas. Al sumar $\Delta V\Delta\theta_c$ en todas ellas se recupera $\Delta Q$, opuesto al cambio térmico del órgano. Se usa capacidad volumétrica unitaria. El muestreo del medio interpola ocho vóxeles vecinos; el depósito reparte el intercambio, no elige un único píxel.

**Ejemplo ilustrativo:** $\theta_o=0{,}5$, $\theta_m=0{,}1$ y $\delta t=0{,}04$.

| Operación | Valor |
| --- | --- |
| Diferencia | $0{,}4$ |
| Flujo $q$ | $0{,}000035(0{,}4)=0{,}000014$ |
| Calor transferido | $0{,}00000056$ |
| Cambio del órgano | $-0{,}00000056/0{,}00012\approx-0{,}0046667$ |
| Estado tras ese intercambio aislado | $0{,}4953333$ |

En la ejecución también actúan control y conducción; la tabla aísla este intercambio para mostrar su signo y su cálculo.

## Conducción, control y presupuesto

Entre órganos vecinos se transfiere $\Delta Q_{k,k+1}=C\,0{,}32(\theta_k-\theta_{k+1})\delta t$, restando a uno lo que se suma al otro. El control impone una consigna y una potencia:

$$\theta^*_k=s[0{,}70+0{,}10\sin(1{,}7a+0{,}6k)](1-e^{-a/1{,}1})b,$$
$$P_k=Ck_{\mathrm{ctrl}}(\theta^*_k-\theta_k),\qquad \Delta\theta_k=\frac{P_k\delta t}{C}.$$

$a$ es edad, $s=\pm1$ polaridad y $b$ modifica la consigna durante ahorro. La ganancia basal es $k_{\mathrm{ctrl}}=0{,}9$. La potencia se limita si la reserva no alcanza. Calentar y enfriar consumen presupuesto mediante $|P_k|$:

$$\frac{dE}{dt}=-\sum_k|P_k|-\mu a_{\mathrm{act}}-P_{\mathrm{escape}}-D,\qquad \mu=0{,}00007.$$

En V4.4 y V4.5, $a_{\mathrm{act}}=1$ y los términos de escape y drenaje son cero. V4.6 puede activarlos. $E$ representa trabajo disponible, distinto del calor firmado $C\theta$. El mantenimiento se contabiliza fuera del campo mostrado; enfriar no crea una reserva negativa ni representa una heladera termodinámica completa.

## Qué persiste al agotarse la reserva

Al llegar a $E\le0$, el controlador deja de actuar. Los órganos aún intercambian calor pasivamente. El criterio de retiro exige más de tres unidades de tiempo desde el agotamiento y $\max|\theta_k|<0{,}08$; antes del retiro se deposita en el campo el calor residual.

El medio continúa con $\partial_t\theta=\alpha\nabla^2\theta+Q$. En cada subpaso usa seis vecinos y $r=\alpha\delta t/h^2\le0{,}15$. Los bordes ambientales permiten salida de calor. Identidad, anatomía y nacimiento son reglas del modelo; la difusión por sí sola no los deduce.
