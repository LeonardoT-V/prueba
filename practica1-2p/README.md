# Capturas de evidencia

## PRACTICA 1 DEL 2 PARCIAL

### EVIDENCIAS

Se utilizo la entidad de evaluaciones como entidad maestra para el desarrollo de esta practica

![Alt text](./img/entidad.png "entidad evaluacion")

Comprobacion de la creacion de la base de datos y sus tabla en postgresql
![Alt text](./img/postgresql.png "base de datos")

### REST API

- #### POST
  ```
    POST /api/evaluacion
  ```
  ![Alt text](./img/post.png "metodo post")
- #### GET (ONE)

  ```
    GET /api/evaluacion/:ID
  ```

  ![Alt text](./img/get_one.png "metodo get one")

- #### GET (ALL)

  ```
    GET /api/evaluacion
  ```

  ![Alt text](./img/get_all.png "metodo find-all")
  en este metodo se utilizo un array de objetos como datos, implementado en evaluacion.servicio
  ![Alt text](./img/array.png "array de objetos")

- #### PATCH

  ```
    PATCH /api/evaluacion/:ID
  ```

  ![Alt text](./img/patch.png "metodo patch")

- #### DELETE
  ```
    DELETE /api/evaluacion/:ID
  ```
  ![Alt text](./img/delete.png "metodo delete")
