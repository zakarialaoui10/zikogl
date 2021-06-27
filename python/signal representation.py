import numpy as np
import matplotlib.pyplot as plt
t=np.arange(-10,10,1)
def rampe(t):
    x=t.copy()
    x[x<0]=0
    return x
def sign(x):
    return np.sign(x)
def echelon(t):
    return np.ones(len(t))
plt.axis([-10,10,0,10])
plt.plot(t,rampe(t))
plt.show()
plt.plot(t,sign(t))
plt.show()
plt.stem(t,echelon(t))
plt.show()
