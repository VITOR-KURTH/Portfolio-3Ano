
package com.senai.biblio.service;

import com.senai.biblio.entity.Estudante;
import com.senai.biblio.repository.EstudanteRepository;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class EstudanteService {
    
     
    @Autowired
    EstudanteRepository estudanteRepository;
    
    public Long incluirEstudante(Estudante estudante){
       
        if(estudante.getMatricula() == null || estudante.getNome() == null ||
           estudante.getSenha() == null || estudante.getEmail() == null){
            return null;
        }
        if(estudanteRepository.findByMatricula(estudante.getMatricula()) != null){
            return null;
        }
        String senhaCod = hashSenha(estudante.getSenha());
        estudante.setSenha(senhaCod);        
        return estudanteRepository.save(estudante).getIdEstudante();
    }
   
    public boolean excluirEstudantePorId(Long IdEstudante){
       if(estudanteRepository.findById(IdEstudante).isPresent()){
           estudanteRepository.deleteById(IdEstudante);
           return true;
       }
       return false;
   }
    
    public Estudante loginEstudante(Long matricula, String senha){
       
        String senhaHash = "";
        Estudante estudanteBD = estudanteRepository.findByMatricula(matricula);
        if(estudanteBD != null){
            senhaHash = hashSenha(senha);
            String senhaBD = estudanteBD.getSenha();
            //System.out.println("senha do banco...: " + senhaBD);
            //System.out.println("senha do login...: " + senhaHash);
            if( senhaHash.equals(senhaBD) ){              
               return estudanteBD;
            }
        }        
        return null;
    }
   
    public String hashSenha(String passwd){
        String passwdCod = null;
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            //md. update(salt);
            final byte[] hashBytes = md.digest(passwd.getBytes(StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < hashBytes.length; i++) {
                sb.append(Integer.toString((hashBytes[i] & 0xff) + 0x100, 16).substring(1));
            }
            passwdCod = sb.toString();
        } catch (NoSuchAlgorithmException e) {
            e.getLocalizedMessage();
        }
        return passwdCod;
    }
   
    public List<Estudante> listarEstudantes(){
       
        return estudanteRepository.findAll();      
    }
   
    public boolean excluirEstudante(Long IdEstudante){
        if (estudanteRepository.findById(IdEstudante).isPresent()){
            estudanteRepository.deleteById(IdEstudante);
            return true;
        }
        return false;
    }
   
    public Estudante consultarEstudantePorId(Long IdEstudante){
        Estudante estudante = estudanteRepository.findById(IdEstudante).get();
        if(estudante != null){
            return estudante;
        }
        return null;
    }
    
     public Estudante consultarEstudantePorMatricula(Long Matricula){
        Estudante estudante = estudanteRepository.findById(Matricula).get();
        if(estudante != null){
            return estudante;
        }
        return null;
    }
    
    public boolean atualizaEstudante(Estudante estudante){
       if(estudante.getNome() == null ||
           estudante.getEmail() == null ||
           estudante.getTelefone() == null ||
           estudante.getMatricula() == null)
           {
            return false;
       }
       Estudante estBD = estudanteRepository.getReferenceById(estudante.getIdEstudante());
       
       if(estBD != null){
           if(estBD.getMatricula() != estudante.getMatricula() && 
            estudanteRepository.findByMatricula(estudante.getMatricula())!= null){
                return false;
            }
       estBD.setTelefone(estudante.getTelefone());
       estBD.setMatricula(estudante.getMatricula());
       estBD.setEmail(estudante.getEmail());
       estBD.setNascimento(estudante.getNascimento());
       estBD.setNome(estudante.getNome());
       estudanteRepository.save(estBD);
       return true;
    }
   return false;
}  
     
}
