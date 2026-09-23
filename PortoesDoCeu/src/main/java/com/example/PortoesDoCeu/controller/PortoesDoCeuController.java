package com.example.PortoesDoCeu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller 
public class PortoesDoCeuController {

    @GetMapping("/")
    public String home() {
        return "home";
    }
}
