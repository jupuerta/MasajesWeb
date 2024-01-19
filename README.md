# Página web de masajes
---HTML y SCSS---
En este proyecto he realizado dos htmls donde en uno está la página principal y en el otro 
la página de los servicios del salón de masaje. De entre las funcionalidades con css que 
he implementado se encuentran:
- Separación en dos columnas en donde en un lado se puede leer la descripción del masaje 
y en la otra la imagen. De una forma alterna con cada nuevo masaje.
- He conseguido que sea responsive. Cuando el tamaño de la pantalla es menor de 1000px, en vez
de ser dos columnas, se transforma en una para una lectura más clara.
- Cuando se pasa con el cursor por encima de la imagen, esta se difumina y aparece un 
cuadro en donde se muestra tanto el precio, los beneficios y el tiempo que dura.
- He puesto una sombra cada vez que el cursor estaba encima de un masaje
- Más mejoras de diseño como el fondo, el tipo de letra, etc.

---TYPESCRIPT---
El contrato que he realizado se encuentra en la página principal de inicio y en él aparecen los cuatro 
valores que el usuario tiene que introducir.
En el caso de no introducirlos todos correctamente, aparecerá un recuadro mostrando que valores no se han 
introducido correctamente. En el caso de que se haya introducido un correo electrónico inválido el mensaje 
de error será distinto que si no se haya introducido.
Si no existen errores al introducir los datos no se podrá ver el recuadro donde estarían los errores. En ese 
caso aparecerá debajo del botón de validación del contrato la frase "Procesando cita..." a modo de simulación
de procesamiento.
