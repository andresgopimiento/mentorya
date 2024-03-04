package com.mentorya.Entity;


//A continuación las importaciones de lo que venimos usando, por ejemplo la dependecia lonbok, que cuando hacemos @Data, él automáticamente se importa.
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;


//La anotación @Entity llama a la entidad y las demás como Data y más nos hace ahorra código y traer los Getters y Setters, y contructores
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

//Nombre de la tabla
@Table(name = "mentor")
//Creamos la clase de la entidad:
public class Mentor {

    //Esta línea de código, es una anotacipon para crear un ID generado automáticamente como en MySQL el AI (AUTO_INCREMENTAL) y además PRIMARY_KEY
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //Acá hacemos los demás campos correspondientes a los mentores, en la DB usaremos el español y acá en el código el inglés
    private Long id;


    //@Column sirve para llamar a la columna, en este caso llamada fisrtName, el nullable = false indica que no puede ser nulo, y length sería la longitud de ese campo, en este caso 25 cartacteres
    @Column(nullable = false, length = 25)
    private String firstName;

    @Column(nullable = false, length = 30)
    private String lastName;

    @Column(nullable = false, unique = true, length = 50)
    private String email;

    @Column(nullable = false, unique = true, length = 20)
    private String phone;

    @Column(nullable = false, length = 2)
    private Integer age;

    @Column(nullable = false, length = 30)
    private String category;

    @Column(nullable = false, length = 30)
    private String occupation;

    @Column(nullable = false, length = 50)
    private String skills;

    @Column(nullable = false, length = 1000)
    private String aboutMe;


    //Una vez finalizados los campos personales de Mentores, acá empezaremos con la relación en la DB

    //Antes de empezar es bueno aclarar lo siguiente, según el modelo de ERD Diagrama de Entidad Relación, es Mentores 1, a Productos muchos, una relación 1 a muchos, o OneToMany, lo que quiere decir que un Mentor puede tener muchos productos.


    // La anotación @OneToMany indica una relación uno a muchos entre esta clase y la clase Product.
    @OneToMany(mappedBy = "mentor", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    //Acá explicaré cada una de las cosas según lo que entendí:
    //mappedBy se usa para mapear un atributo que estará en product, en éste caso ese atributo se llama "mentor" así le coloqué.
    //cascade = CascadeType.ALL lo que indica es que cualquier movimiento que hagamos en cascada en la clase actual llamada Mentor, lo haga también en Product.
    //Fetch srive para que no sobrecargue el listado cuando tengamos un Mentores simplemente usará la lista cuando la necesitemos usar.
    //OrphanRemoval indica que si eliminamos un mentor, elimina los productos, porque un producto no va a existir si el creador no existe.


    // La siguiente línea crea una colección ArrayList para almacenar los productos relacionados.
    private List<Product> productList = new ArrayList<>();


}
