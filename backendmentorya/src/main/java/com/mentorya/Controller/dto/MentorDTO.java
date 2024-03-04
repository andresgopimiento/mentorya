package com.mentorya.Controller.dto;
import com.mentorya.Entity.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MentorDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String gender;
    private String country;
    private String email;
    private String phone;
    private Integer age;
    private String category;
    private String occupation;
    private String skills;
    private String aboutMe;

    private List<Product> productList = new ArrayList<>();
}
