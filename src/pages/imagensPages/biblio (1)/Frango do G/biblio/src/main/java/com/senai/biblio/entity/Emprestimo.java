
package com.senai.biblio.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.util.Date;

@Entity
@Table(name="emprestimo")
public class Emprestimo {
    
     @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long IdEmprestimo;
     
     @ManyToOne
    @JoinColumn(nullable=false)
    private Estudante estudante;
     
      @OneToOne
    @JoinColumn(nullable=false)
    private Livro livros;
     
      @Column(nullable=false)
    private Long matricula;
     
      @Column(nullable=false)
    private Date dataEmprestimo;
     
      @Column(nullable=false)
    private Date dataEntrega;
      
      @Column(nullable=false)
    private String Devolucao;

    public Estudante getEstudantes() {
        return estudante;
    }

    public void setEstudantes(Estudante estudante) {
        this.estudante = estudante;
    }

    public Livro getLivros() {
        return livros;
    }

    public void setLivros(Livro livros) {
        this.livros = livros;
    }

       
      
    public Long getIdEmprestimo() {
        return IdEmprestimo;
    }

    public void setIdEmprestimo(Long IdEmprestimo) {
        this.IdEmprestimo = IdEmprestimo;
    }

    public Long getMatricula() {
        return matricula;
    }

    public void setMatricula(Long Matricula) {
        this.matricula = Matricula;
    }

    public Date getDataEmprestimo() {
        return dataEmprestimo;
    }

    public void setDataEmprestimo(Date dataEmprestimo) {
        this.dataEmprestimo = dataEmprestimo;
    }

    public Date getDataEntrega() {
        return dataEntrega;
    }

    public void setDataEntrega(Date dataEntrega) {
        this.dataEntrega = dataEntrega;
    }

    public String getDevolucao() {
        return Devolucao;
    }

    public void setDevolucao(String Devolucao) {
        this.Devolucao = Devolucao;
    }

   
      
      
}
