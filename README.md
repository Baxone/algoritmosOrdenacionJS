# Algoritmos de ordenación realizados con javascript
Este es un pequeño ejercicio realizando algoritmos de ordenación en javascript. Lo he realizado como preparación para una masterclass sobre algoritmia con javascript.

* Ordenación por Selección.
    - Recorremos el array buscando el elemento mínimo según nuestro criterios de busqueda.
    - Intercambiamos ese elemento por el que esta en primera posición del array.
    - Buscamos el siguiente mínimo y lo cambiamos por el segundo y así hasta completar el array.

* Ordenación por Inserción.
    - Recorremos cada elemento del array
    - Cada elemento del se ordena de la siguiente manera:
            Si el elemento en el que estamos es menor que el que esta a su izquierda entonces intercambiamos el sitio. Lo seguimos moviendo a la izquierda hasta que tenga un elemento menor que él o hasta que lleguemos al final del array.

* Ordenación por Burbuja.
    - Como algoritmo de ordenación es el más ineficiente pero se explica como un forma de ordenar en algoritmia y por eso lo explico. Solo es recomendable para arrays cortos.
    - Recorremos el array, y si encontramos, para cada elemento dos elementos que no esten en orden les permutamos sus posiciones.
    - Repetimos este paso hasta que recorriendo el array de izquierda a derecha no encontremos un elemento desordenado.


* Ordenación rápida (Quicksort) Divide y venceras.
    - A partir de un elemento cualquiera del array llamado pivote, partimos el array en dos subconjuntos o subarrays.
    - La forma de dividirlos es situar en el conjunto de la izquierda los menores al número elegido, y a la derecha los mayores. 
    - El proceso se produce de forma recursiva hasta que solo me quede un elemento por subconjunto entonces el array estará ordenado.

    


