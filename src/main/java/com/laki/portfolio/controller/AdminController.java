package com.laki.portfolio.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.laki.portfolio.model.Admin;
import com.laki.portfolio.repository.AdminRepository;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    @PostMapping
    public Admin saveAdmin(@RequestBody Admin admin) {
        return adminRepository.save(admin);
    }
}