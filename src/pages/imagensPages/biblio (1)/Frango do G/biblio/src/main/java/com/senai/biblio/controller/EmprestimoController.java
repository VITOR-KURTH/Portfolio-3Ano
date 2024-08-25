package com.senai.biblio.controller;

import com.senai.biblio.entity.Emprestimo;
import com.senai.biblio.service.EmprestimoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class EmprestimoController {
    
    @Autowired
    private EmprestimoService emprestimoService;

    @GetMapping("/biblioteca/id/{idEmprestimo}")
    public ResponseEntity<Emprestimo> consultarEmprestimoPorId(@PathVariable("idEmprestimo") Long idEmprestimo) {
        Emprestimo emprestimo = emprestimoService.findById(idEmprestimo).orElse(null);
        if (emprestimo != null) {
            return new ResponseEntity<>(emprestimo, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/emprestimos/matricula/{matricula}")
    public ResponseEntity<Emprestimo> consultarEmprestimoPorMatricula(@PathVariable("matricula") Long matricula) {
        Emprestimo emprestimo = emprestimoService.findByMatricula(matricula);
        if (emprestimo != null) {
            return new ResponseEntity<>(emprestimo, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/emprestimos")
    public ResponseEntity<Long> incluirEmprestimo(@RequestBody Emprestimo emprestimo) {
        Emprestimo novoEmprestimo = emprestimoService.save(emprestimo);
        if (novoEmprestimo != null) {
            return new ResponseEntity<>(novoEmprestimo.getIdEmprestimo(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/emprestimos")
    public ResponseEntity<Boolean> alterarEmprestimo(@RequestBody Emprestimo emprestimo) {
        if (emprestimoService.findById(emprestimo.getIdEmprestimo()).isPresent()) {
            emprestimoService.save(emprestimo);
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/emprestimos/id/{idEmprestimo}")
    public ResponseEntity<Boolean> excluirEmprestimo(@PathVariable("idEmprestimo") Long idEmprestimo) {
        if (emprestimoService.findById(idEmprestimo).isPresent()) {
            emprestimoService.deleteById(idEmprestimo);
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    }
}