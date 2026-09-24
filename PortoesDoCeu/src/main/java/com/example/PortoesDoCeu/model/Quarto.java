package com.example.PortoesDoCeu.model;
import java.util.ArrayList;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.UniqueConstraint;

@Entity
public class Quarto {
    @Id 
    private int numero;

    private int capacidade_maxima;
    private boolean situacao_atual;
    
}
