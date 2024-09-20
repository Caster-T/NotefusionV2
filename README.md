1. Cambiar a tu rama de trabajo:

git checkout nombre-de-tu-rama (sus apellidos)

3. Traer los últimos cambios de la rama main antes de empezar:

git pull origin main

5. Realizar tu trabajo en la rama.

6. Traer los cambios más recientes antes de hacer un merge (esto asegura que estás al día con lo último de main):
 
  git fetch origin

7. Hacer el merge de la rama main en tu rama de trabajo:
 
  git merge origin/main

8. Subir tus cambios a tu rama en el repositorio remoto:

git push origin nombre-de-tu-rama

Suerte, Holm
