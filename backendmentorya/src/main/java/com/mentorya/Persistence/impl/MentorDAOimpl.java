package com.mentorya.Persistence.impl;

import com.mentorya.Entity.Mentor;
import com.mentorya.Persistence.IMentorDAO;
import com.mentorya.Repository.MentorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;


@Component
public class MentorDAOimpl implements IMentorDAO {

    @Autowired
    private MentorRepository mentorRepository;
    @Override
    public List<Mentor> findAll() {
            return (List<Mentor>) mentorRepository.findAll();
    }

    @Override
    public Optional<Mentor> findById(Long id) {
        return mentorRepository.findById(id);
    }

    @Override
    public void save(Mentor mentor) {
        mentorRepository.save(mentor);
    }

    @Override
    public void deletedByID(Long id) {
        mentorRepository.deleteById(id);
    }
}
