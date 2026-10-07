package com.example.PortoesDoCeu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller 
public class PortoesDoCeuController {

    @GetMapping("/")
    public String home() {
        return "home";
    }

    @GetMapping("/pacientes")
    public String pacientes(){
        return "pacientes";
    }

    @GetMapping("/profissionais")
    public String profissionais(){
        return "profissionais";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/agenda")
    public String agenda() {
        return "agenda";
    }

    @GetMapping("/cadastro-paciente")
    public String cadastroPaciente() {
        return "cadastro-paciente";
    }

    @GetMapping("/cadastro-profissional")
    public String cadastroProfissional() {
        return "cadastro-profissional";
    }

    @GetMapping("/sobre-nos")
    public String sobreNos() {
        return "sobre-nos";
    }
}