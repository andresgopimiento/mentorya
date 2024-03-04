package com.mentorya.Controller;

import com.mentorya.Controller.dto.MentorDTO;
import com.mentorya.Entity.Mentor;
import com.mentorya.Service.IMentorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;


@RestController
@RequestMapping("/api/mentor")
public class MentorController {


    @Autowired
    private IMentorService mentorService;

    @GetMapping("/find/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        Optional<Mentor> mentorOptional = mentorService.findById(id);

        if (mentorOptional.isPresent()) {
            Mentor mentor = mentorOptional.get();
            MentorDTO mentorDTO = MentorDTO.builder()
                    .id(mentor.getId())
                    .firstName(mentor.getFirstName())
                    .lastName(mentor.getLastName())
                    .age(mentor.getAge())
                    .category(mentor.getCategory())
                    .occupation(mentor.getOccupation())
                    .skills(mentor.getSkills())
                    .aboutMe(mentor.getAboutMe())
                    .productList(mentor.getProductList())
                    .build();

            return ResponseEntity.ok(mentorDTO);
        }
        return ResponseEntity.notFound().build();
    }

//    @GetMapping("/findAll/")
//    public ResponseEntity<?> findAll(){
//        List<MentorDTO> mentorList = mentorService.findAll()
//                .stream()
//                .map(mentor -> MentorDTO.builder()
//                        .id(mentor.getId())
//                        .firstName(mentor.getFirstName())
//                        .lastName(mentor.getLastName())
//                        .age(mentor.getAge())
//                        .category(mentor.getCategory())
//                        .occupation(mentor.getOccupation())
//                        .skills(mentor.getSkills())
//                        .aboutMe(mentor.getAboutMe())
//                        .productList(mentor.getProductList())
//                    .build())
//                .toList();
//        return ResponseEntity.ok(mentorList);
//    }
}
