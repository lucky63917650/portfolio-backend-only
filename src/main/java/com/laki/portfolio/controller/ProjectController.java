package com.laki.portfolio.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

import com.laki.portfolio.model.Project;
import com.laki.portfolio.repository.ProjectRepository;

@RestController
@CrossOrigin
@RequestMapping("/projects")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    @GetMapping
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @PostMapping
    public Project saveProject(@RequestBody Project project) {
        return projectRepository.save(project);
    }
}