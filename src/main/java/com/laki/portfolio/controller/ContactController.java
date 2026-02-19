package com.laki.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.laki.portfolio.model.Contact;
import com.laki.portfolio.repository.ContactRepository;
import com.laki.portfolio.service.EmailService;

@RestController
@CrossOrigin(origins = {
        "http://localhost:3000",
        "https://cerulean-hummingbird-1e9598.netlify.app"
})
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