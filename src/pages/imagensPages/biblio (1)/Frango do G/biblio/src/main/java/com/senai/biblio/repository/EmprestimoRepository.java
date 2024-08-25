
package com.senai.biblio.repository;

import com.senai.biblio.entity.Emprestimo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmprestimoRepository extends JpaRepository<Emprestimo,Long>{
    Emprestimo findByMatricula(Long matricula);
}
