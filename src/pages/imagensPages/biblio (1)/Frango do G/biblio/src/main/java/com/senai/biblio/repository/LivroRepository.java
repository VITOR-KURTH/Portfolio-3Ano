
package com.senai.biblio.repository;

import com.senai.biblio.entity.Livro;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface LivroRepository extends JpaRepository<Livro, Long> {
    
    Livro findByTitulo(String titulo);

}
