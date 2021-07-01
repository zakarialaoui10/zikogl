import numpy as np
import matplotlib.pyplot as plt

# Signal
T = 1
def signal(t):
    return np.sin(2. * np.pi * t / T)
# Echantillonnage
D = 1 # Duree d'observation
fe = 50 # Frequence d'echantillonnage
N = int(D * fe) + 1 # Nombre de points enregistres
te = np.linspace(0., (N-1)/fe, N) # Grille d'echantillonnage
tp = np.linspace(0., D, 1000) # Grille plus fine pour tracer l'allure du signal parfait
# Trace du signal
plt.plot(te, signal(te), 'or-', label = u"Signal echantillonne")
plt.plot(tp, signal(tp), 'b--', label = u"Signal reel")
print(te.size)
print(tp.size)
plt.grid()
plt.xlabel("Temps t")
plt.ylabel("Amplitude x(t)")
plt.legend()
plt.show()
