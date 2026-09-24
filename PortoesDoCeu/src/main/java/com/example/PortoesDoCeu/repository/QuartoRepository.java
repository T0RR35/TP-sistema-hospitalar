package com.example.PortoesDoCeu.repository;

import com.example.PortoesDoCeu.model.Quarto;

import org.springframework.data.jpa.repository.JpaRepository;

/* repository eh pra permitir a ORM (que eh para manipular infos no BD sem usar query)
fornece metodos como:
save() -> salva ou atualiza um paciente
deleteById()-> remove um paciente pelo ID*/
public interface QuartoRepository extends JpaRepository<Quarto, Integer> {
}