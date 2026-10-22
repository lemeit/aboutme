from pathlib import Path
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np
dest=Path('static/images/fisica-4to');dest.mkdir(parents=True,exist_ok=True)
preview=Path('work/graficos-curso');preview.mkdir(exist_ok=True)
plt.rcParams.update({'font.family':'DejaVu Sans','font.size':11,'axes.titlesize':12,'axes.labelsize':11,'svg.fonttype':'none','axes.spines.top':False,'axes.spines.right':False})
orange='#b44900';blue='#243d55'
def finish(fig,name):
 for ax in fig.axes:ax.grid(alpha=.18);ax.set_axisbelow(True)
 fig.tight_layout();fig.savefig(dest/f'{name}.svg',bbox_inches='tight');fig.savefig(preview/f'{name}.png',dpi=140,bbox_inches='tight');plt.close(fig)
t=np.linspace(0,5,101);fig,axes=plt.subplots(1,2,figsize=(9.2,3.6));axes[0].plot(t,2+2*t,color=orange,lw=2.4);axes[0].set(xlabel='Tiempo t (s)',ylabel='Posición x (m)',title='x₀ = 2 m; v = 2 m/s');axes[1].plot(t,np.full_like(t,2),color=blue,lw=2.4);axes[1].fill_between(t,0,2,alpha=.17,color=orange);axes[1].set(xlabel='Tiempo t (s)',ylabel='Velocidad v (m/s)',title='Área = desplazamiento = 10 m',ylim=(0,3));finish(fig,'mru')
t=np.linspace(0,4,101);fig,axes=plt.subplots(1,3,figsize=(11,3.6));axes[0].plot(t,2*t+.5*t*t,color=orange,lw=2.4);axes[0].set(xlabel='Tiempo t (s)',ylabel='Posición x (m)',title='x₀ = 0; v₀ = 2 m/s');axes[1].plot(t,2+t,color=blue,lw=2.4);axes[1].fill_between(t,0,2,alpha=.15,color=blue,label='Rectángulo');axes[1].fill_between(t,2,2+t,alpha=.25,color=orange,label='Triángulo');axes[1].set(xlabel='Tiempo t (s)',ylabel='Velocidad v (m/s)',ylim=(0,7),title='Área total = 16 m');axes[1].legend(fontsize=9);axes[2].plot(t,np.ones_like(t),color=orange,lw=2.4);axes[2].set(xlabel='Tiempo t (s)',ylabel='Aceleración a (m/s²)',ylim=(0,2),title='a = 1 m/s²');finish(fig,'mruv')
t=np.linspace(0,1,100);x=5*np.sqrt(3)*t;y=5*t-5*t*t;fig,ax=plt.subplots(figsize=(8,3.6));ax.plot(x,y,color=orange,lw=2.5);ax.scatter([0,x[-1]],[0,0],color=blue);ax.annotate('Altura máxima: 1,25 m',(x[50],y[50]),xytext=(5.4,1.5),arrowprops={'arrowstyle':'->','color':blue});ax.set(xlabel='Posición horizontal x (m)',ylabel='Altura y (m)',ylim=(-.05,1.85),title='v₀ = 10 m/s; ángulo = 30°; g = 10 m/s²');finish(fig,'tiro-oblicuo')
i=np.linspace(0,.3,100);fig,ax=plt.subplots(figsize=(7.2,3.6));ax.plot(i,20*i,color=orange,lw=2.5);ax.set(xlabel='Corriente I (A)',ylabel='Tensión V (V)',title='Resistor óhmico ideal: R = 20 Ω');ax.text(.03,5.1,'Pendiente ΔV/ΔI = 20 Ω',color=blue);finish(fig,'ohm')
c=np.linspace(0,100,101);fig,ax=plt.subplots(figsize=(7.2,3.6));ax.plot(c,9*c/5+32,color=orange,lw=2.5);ax.scatter([0,100],[32,212],color=blue);ax.set(xlabel='Temperatura (°C)',ylabel='Temperatura (°F)',title='Relación afín: °F = (9/5) °C + 32');finish(fig,'escalas')
x=np.linspace(0,.1,101);fig,axes=plt.subplots(1,2,figsize=(9.2,3.6));axes[0].plot(x,np.full_like(x,20),color=blue,lw=2.3);axes[0].fill_between(x,0,20,color=blue,alpha=.18);axes[0].set(xlabel='Desplazamiento (m)',ylabel='Fuerza aplicada (N)',title='F constante: área = Fd = 2 J',ylim=(0,25));axes[1].plot(x,200*x,color=orange,lw=2.3);axes[1].fill_between(x,0,200*x,color=orange,alpha=.2);axes[1].set(xlabel='Deformación desde longitud natural (m)',ylabel='Fuerza aplicada (N)',title='Resorte: área = kx²/2 = 1 J',ylim=(0,25));finish(fig,'areas-trabajo')
print('6 gráficos SVG y previsualizaciones generados')
