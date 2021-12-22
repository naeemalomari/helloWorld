package com.autocare.demo.student;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("students")
public class StudentController {

    @RequestMapping
    public List<Student> getAllStudents() {
        return List.of(
                new Student(UUID.randomUUID(),
                        "Naim", "AlOmari",
                        "naeemalomari@gmail.com", Student.Gender.MALE),
                new Student(UUID.randomUUID(), "Slim", "Shady",
                        "slimshady@gmail.com", Student.Gender.FEMALE),
                new Student(UUID.randomUUID(), "Thebigger", "Thebiggest",
                        "Thebigger@gmail.com", Student.Gender.MALE)

        );
    }
}
