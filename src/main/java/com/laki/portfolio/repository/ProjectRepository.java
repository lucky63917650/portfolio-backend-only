package com.laki.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.laki.portfolio.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}