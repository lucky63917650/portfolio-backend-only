package com.laki.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.laki.portfolio.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}