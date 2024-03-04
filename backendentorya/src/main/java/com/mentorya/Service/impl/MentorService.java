package com.mentorya.Service.impl;

import com.mentorya.Entity.Mentor;
import com.mentorya.Persistence.IMentorDAO;
import com.mentorya.Service.IMentorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MentorService implements IMentorService {

    @Autowired
    private IMentorDAO mentorDAO;
    @Override
    public List<Mentor> findAll() {
        return mentorDAO.findAll();
    }

    @Override
    public Optional<Mentor> findById(Long id) {
        return mentorDAO.findById(id);
    }

    @Override
    public void save(Mentor mentor) {
        mentorDAO.save(mentor);
    }

    @Override
    public void deletedByID(Long id) {
        mentorDAO.deletedByID(id);
    }
}
