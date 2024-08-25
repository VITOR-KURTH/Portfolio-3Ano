
package com.senai.biblio.controller;

import com.senai.biblio.entity.Livro;
import com.senai.biblio.service.LivroService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class LivroController {
    
    @Autowired
    LivroService livroService;
    
    @PostMapping("/Livro")
    public ResponseEntity<Long> incluirLivro(@RequestBody Livro livro){
        Long IdLivro = livroService.incluirLivro(livro);
        if(IdLivro != null){
            return new ResponseEntity<>(IdLivro,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
    @DeleteMapping("/livro/{IdLivro}")
    public ResponseEntity<Boolean> excluirLivro(@PathVariable("IdLivro") Long IdLivro){
        if(livroService.excluirLivro(IdLivro)){
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
    
    @GetMapping("/livro/{IdLivro}")
    public ResponseEntity<Livro> consultalivroPorId(@PathVariable("IdLivro") Long IdLivro){
        Livro liv = livroService.consultaLivroPorId(IdLivro);
        if(liv != null){
            return new ResponseEntity<>(liv,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @GetMapping("/livro/titulo/{titulo}")
    public ResponseEntity<Livro> consultaLivroPorNome(@PathVariable("titulo") String titulo){
        Livro liv = livroService.consultaLivroPorNome(titulo);
        if(liv != null){
            return new ResponseEntity<>(liv,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/livro")
    public ResponseEntity<List<Livro>> listarLivros(){
        List<Livro> listaLiv = livroService.listarLivros();
        if(! listaLiv.isEmpty()){
            return new ResponseEntity<>(listaLiv,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/livro")
    public ResponseEntity<Boolean> alterarLivro (@RequestBody Livro livro){
        if(livroService.alterarLivro(livro)){
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
}
