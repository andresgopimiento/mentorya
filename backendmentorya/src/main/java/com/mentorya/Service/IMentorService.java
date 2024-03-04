package com.mentorya.Service;

import com.mentorya.Entity.Mentor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface IMentorService {
    List<Mentor> findAll();

    Optional<Mentor> findById(Long id);
    void save(Mentor mentor);

    void deletedByID(Long id);
}
