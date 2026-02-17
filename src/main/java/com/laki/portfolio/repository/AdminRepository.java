package com.laki.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.laki.portfolio.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
}