
package com.senai.biblio.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="livros")
public class Livro {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long IdLivro;
    
    @Column(nullable=false)
    private String titulo;
    
    @Column(nullable=false)
    private String editora;
    
    @Column(nullable=false)
    private String autor;
    
    @Column(nullable=false)
    private Integer ano;

    public Long getIdLivro() {
        return IdLivro;
    }

    public void setIdLivro(Long IdLivro) {
        this.IdLivro = IdLivro;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getEditora() {
        return editora;
    }

    public void setEditora(String editora) {
        this.editora = editora;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public Integer getAno() {
        return ano;
    }

    public void setAno(Integer ano) {
        this.ano = ano;
    }
    
    
}
