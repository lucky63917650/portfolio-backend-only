package com.laki.portfolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendContactEmail(String name, String email, String messageText) {

        try {
            SimpleMailMessage message = new SimpleMailMessage();

            message.setFrom("lucky6391765086@gmail.com");
            message.setTo("lucky6391765086@gmail.com");
            message.setSubject("🚀 New Portfolio Contact Message");

            message.setText(
                    "New Contact Form Submission\n\n" +
                            "Name: " + name +
                            "\nEmail: " + email +
                            "\nMessage: " + messageText
            );

            mailSender.send(message);

            System.out.println("EMAIL SENT SUCCESSFULLY ✅");

        } catch (Exception e) {
            System.out.println("EMAIL FAILED ❌");
            e.printStackTrace();
        }
    }
}