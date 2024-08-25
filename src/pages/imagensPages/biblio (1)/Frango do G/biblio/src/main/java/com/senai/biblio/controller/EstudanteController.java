
package com.senai.biblio.controller;

import com.senai.biblio.entity.Estudante;
import com.senai.biblio.entity.Login;
import com.senai.biblio.service.EstudanteService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EstudanteController {
    
    @Autowired
    EstudanteService estudanteService;
    
    @GetMapping("/estudante/id/{IdEstudante}")
    public ResponseEntity<Estudante> consultaEstudantePorId(
        @RequestParam("IdEstudante") Long IdEstudante) {
        Estudante est = estudanteService.consultarEstudantePorId(IdEstudante);
        if(est != null) {
            return new ResponseEntity<>(est,HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    } // URL: (Get) http://localhost:8010/biblioteca/estudante/id/{IdEstudante}
    
    
    @GetMapping("/estudante/matricula/{matricula}")
    public ResponseEntity<Estudante> consultaEstudantePorMatricula(
        @RequestParam("matricula") Long matricula) {
        Estudante est = estudanteService.consultarEstudantePorMatricula(matricula);
        if(est != null) {
            return new ResponseEntity<>(est,HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    } // URL: (Get) http://localhost:8010/biblioteca/estudante/matricula/{matricula}
    
    @GetMapping("/estudante")
    public ResponseEntity<List<Estudante>> listarEstudantes() {
        List estudantes = estudanteService.listarEstudantes();
        if (! estudantes.isEmpty()) {
            return new ResponseEntity<>(estudantes, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
      } // URL: (Get) http://localhost:8010/biblioteca/estudante
    
    @PostMapping("estudante")
    public ResponseEntity<Long> incluirEstudante(@RequestBody Estudante estudante){
        Long idCli = estudanteService.incluirEstudante(estudante);
        if (idCli != null) {
            return new ResponseEntity<>(idCli,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    } // URL: (Post) http://localhost:8010/biblioteca/estudante
    
    @PutMapping("estudante")
    public ResponseEntity<Boolean> atualizarEstudante(@RequestBody Estudante estudante){
        Boolean atualizaEst = estudanteService.atualizaEstudante(estudante);
        if (atualizaEst) {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.INTERNAL_SERVER_ERROR);
    }// URL: (Put) http://localhost:8010/biblioteca/estudante
    
    @DeleteMapping("/estudante/{IdEstudante}")
    public ResponseEntity<Boolean> excluirEstudantePorId(
        @RequestParam("IdEstudante") Long IdEstudante) {
        Boolean est = estudanteService.excluirEstudantePorId(IdEstudante);
        if(est) {
            return new ResponseEntity<>(true,HttpStatus.OK);
        } else {
            return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
        }
    } // URL: (Get) http://localhost:8010/biblioteca/estudante/IdEstudante/{IdEstudante}
    
    @PostMapping("/estudante/login")
    public ResponseEntity<Estudante> loginEstudante(@RequestBody Login login){
        Estudante estudante = estudanteService.loginEstudante(login.getMatricula(),login.getSenha());
        if (estudante != null) {
            return new ResponseEntity<>(estudante,HttpStatus.OK);
        }
        return new ResponseEntity<>(estudante,HttpStatus.NOT_FOUND);
    }
    
}
