1. Cambiar a tu rama de trabajo:
git checkout nombre-de-tu-rama

2. Traer los últimos cambios de la rama main antes de empezar:
git pull origin main

3. Realizar tu trabajo en la rama.

4. Traer los cambios más recientes antes de hacer un merge (esto asegura que estás al día con lo último de main):
  git fetch origin

5. Hacer el merge de la rama main en tu rama de trabajo:
  git merge origin/main

6. Subir tus cambios a tu rama en el repositorio remoto:
  git push origin nombre-de-tu-rama

Suerte, Holm
