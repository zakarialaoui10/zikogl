import numpy as np
import matplotlib.pyplot as plt
t=np.arange(-10,10,0.25)
def rampe(t,t0):
    x=t.copy()
    x=x-t0;
    x[x<0]=0;
    return x
def sign(x):
    return np.sign(x)
def echelon(t,t0=0):
    return np.where(t>=t0,1,0)
def rect(t,centre=0,ecart=1):
    return np.where((t>=centre-ecart/2) & (t<=centre+ecart/2),1,0)
def sinc(t):
    return np.sinc(t)
