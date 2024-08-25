
package com.senai.biblio.service;

import com.senai.biblio.entity.Livro;
import com.senai.biblio.repository.LivroRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class LivroService {
    
    @Autowired
    private LivroRepository livroRepository;
    
    public Long incluirLivro(Livro livro){
        
        if(livro.getTitulo() == null ||
           livro.getAutor() == null ||
           livro.getEditora() == null ||
           livro.getAno() == null){
           return null;
        }
        return livroRepository.save(livro).getIdLivro();
    }
    
    public boolean excluirLivro(Long IdLivro){
        if(livroRepository.findById(IdLivro).isPresent()){
           livroRepository.deleteById(IdLivro);
           return true;
        }
        return false;
    }
    
    public Livro consultaLivroPorId(Long IdLivro){
        Optional<Livro> liv = livroRepository.findById(IdLivro);
        if(liv.isPresent()){
            return liv.get();
        }
        return null;      
    }
    
    public List<Livro> listarLivros(){
        return livroRepository.findAll();
    }
    
    public Livro consultaLivroPorNome(String titulo){
        return livroRepository.findByTitulo(titulo);
    }
    
    public boolean alterarLivro(Livro livro){
     if(livro.getAno() == null ||
        livro.getTitulo() == null ||
        livro.getAutor() == null ||
        livro.getEditora() == null){
        return false;
        }
     Livro livBD = livroRepository.getReferenceById(livro.getIdLivro());
        if(livBD != null){
           livBD.setTitulo(livro.getTitulo());
           livBD.setAutor(livro.getAutor());
           livBD.setEditora(livro.getEditora());
           livBD.setAno(livro.getAno());
           livroRepository.save(livBD);
           return true;
        }
        return false;
    }
}