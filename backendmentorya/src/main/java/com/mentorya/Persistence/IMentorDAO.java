package com.mentorya.Persistence;

import com.mentorya.Entity.Mentor;

import java.util.List;
import java.util.Optional;

public interface IMentorDAO {

    List<Mentor> findAll();

    Optional<Mentor> findById(Long id);
    void save(Mentor mentor);

    void deletedByID(Long id);
}
