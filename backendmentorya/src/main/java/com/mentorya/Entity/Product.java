package com.mentorya.Entity;


//A continuación las importaciones de lo que venimos usando, por ejemplo la dependecia lonbok, que cuando hacemos @Data, él automáticamente se importa.
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;


//La anotación @Entity llama a la entidad y las demás como Data y más nos hace ahorra código y traer los Getters y Setters, y contructores
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

//Nombre de la tabla
@Table(name = "product")
//Creamos la clase de la entidad:
public class Product {

    //Esta línea de código, es una anotacipon para crear un ID generado automáticamente como en MySQL el AI (AUTO_INCREMENTAL) y además PRIMARY_KEY
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 30)
    private String name;

    @Column(nullable = false, length = 500)
    private String description;

    @Column(nullable = false, length = 10)
    private BigDecimal price;


    //Acá empezamos la relación de la DB, en éste caso de prodcuto funciona al revés, un producto puede tener un creador, por tanto la realción sería ManyToOne, Muchos a uno.

    //Creamos el atributo que colocamos en Mentor, donde pusimos el mappedBy = "Mentores"
    @ManyToOne
    //Acá lo que hará es entrar y buscar id_mentor para hacer la relación, la llave foránea.
    @JoinColumn(name = "id_mentor")
    @JsonIgnore
    private Mentor mentor;
}
