package com.example.PortoesDoCeu.model;

import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
abstract class Atendimento {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne 
    private Paciente paciente;
    @ManyToOne 
    private Profissional profissional;
    
    private String observacoes;
    private LocalDateTime horario;
}
