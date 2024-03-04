package com.mentorya.Entity;


//A continuación las importaciones de lo que venimos usando, por ejemplo la dependecia lonbok, que cuando hacemos @Data, él automáticamente se importa.
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


//La anotación @Entity llama a la entidad y las demás como Data y más nos hace ahorra código y traer los Getters y Setters, y contructores
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

//Nombre de la tabla
@Table(name = "categoria")
//Creamos la clase de la entidad:
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_categoria;
}
