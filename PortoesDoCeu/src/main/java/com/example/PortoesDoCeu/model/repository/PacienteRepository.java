package com.example.PortoesDoCeu.model.repository;

import com.example.PortoesDoCeu.model.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

/* repository eh pra permitir a ORM (que eh para manipular infos no BD sem usar query)
fornece metodos como:
save() -> salva ou atualiza um paciente
deleteById()-> remove um paciente pelo ID*/
public interface PacienteRepository extends JpaRepository<Paciente, String> {
}