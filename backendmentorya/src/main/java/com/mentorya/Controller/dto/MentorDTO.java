package com.mentorya.Controller.dto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MentorDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private Integer age;
    private String category;
    private String occupation;
    private String skills;
    private String aboutMe;
}
