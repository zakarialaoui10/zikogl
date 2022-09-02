
## 1- Phenomenological classification : 
#### 1- Deterministic signals :
#### 2- Random signals :
## 2- Energy classification :
#### 1- Finite energy signals :
#### 2- Signals at finite average power :
## 3- Morphological classification :
# Special signals :
## Sign function :     
```python
import numpy as np
def sign(x):
    return np.sign(x)
```
## Step function :
```python
import numpy as np
def step(t,t0=0):
    return np.where(t>=t0,1,0)
```
## Rect function :
```python
def p(t):
    return 1 * (abs(t) < 0.5)
  ``` 
 
 
 
