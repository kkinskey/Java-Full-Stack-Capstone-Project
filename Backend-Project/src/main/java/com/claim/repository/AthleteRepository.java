package com.claim.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.claim.entity.Athlete;

@Repository
public interface AthleteRepository extends JpaRepository<Athlete, String>{
	
	@Query("SELECT A FROM Athlete A WHERE A.email = ?1 and A.password = ?2")
	Athlete loginAthlete(String email, String password);
	
	@Query("SELECT A FROM Athlete A")
	List<Athlete> findAll();
	
//	@Query("SELECT A FROM Athlete A WHERE A.firstName = ?1")
//	Athlete findByEmail(String email);
	
	
	

}
