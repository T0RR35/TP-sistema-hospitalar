package com.example.PortoesDoCeu.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;

@Entity
public class Internacao extends Atendimento{
    @ManyToOne
    private Quarto quarto;
    private LocalDate alta_prevista; 
    private LocalDateTime data_alta;


}
