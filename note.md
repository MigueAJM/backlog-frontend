# Notes

### Instalar CLI de angular.

`npm install -g @angular/cli`

### Generar proyecto de angular.

`ng new my-project-angular`

### Inicializar servidor.

`ng serve`

### Abrir instancia en el navegador.

`ng serve -o`

### Crear un nuevo componente.

`ng generate component count` o `ng g c count`

#### Notes:

En las plantillas no se puede usar este tipo de sintaxis `numero++` o `numero -= 1`, en este caso seria de esta forma `numero = numero + 1`

- Clases que se agregan a los inputs

  | class        | why                                                    |
  | ------------ | ------------------------------------------------------ |
  | ng-untouched | Aun no se accede al input                              |
  | ng-touched   | Se accedio al input                                    |
  | ng-pristine  | Se accede pero no se hace ningun cambio                |
  | ng-dirty     | Se hizo un cambio en el input                          |
  | ng-invalid   | No se cumplen todas las reglas de validación del input |
  | ng-valid     | Se cumplieron todas las reglas de validación del input |
