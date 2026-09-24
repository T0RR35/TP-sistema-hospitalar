package com.example.PortoesDoCeu.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Profissional {

    @Id 
    private String registro;
    private String nome;    
    private String especialidade;
    private String telefone;
    private String email;

    @OneToOne
    //@JoinColumn(name = "address_id", referencedColumnName = "id")
    private Agenda agenda;

}