package com.laki.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.laki.portfolio.model.Contact;
import com.laki.portfolio.repository.ContactRepository;
import com.laki.portfolio.service.EmailService;   // ✅ IMPORTANT IMPORT

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private ContactRepository repo;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public Contact save(@RequestBody Contact contact) {

        Contact saved = repo.save(contact);

        emailService.sendContactEmail(
                contact.getName(),
                contact.getEmail(),
                contact.getMessage()
        );

        return saved;
    }
}