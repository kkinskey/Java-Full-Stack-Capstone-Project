package com.claim.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.claim.entity.Workout;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout, String>{
	
//	@Query("SELECT A FROM Athlete A WHERE A.email = ?1 and A.password = ?2")
//	Workout loginAthlete(String email, String password);
//	
	@Query("SELECT W FROM Workout W")
	List<Workout> findAll();
	
	@Query("SELECT W FROM Workout W WHERE W.id = ?1")
	Workout findWorkoutForDelete(int id);
	
	@Query("SELECT W FROM Workout W WHERE W.athlete = ?1")
	List<Workout> findWorkouts(String athlete);
	
	@Transactional
	@Modifying
	@Query("UPDATE Workout W SET W.exercise = ?1, W.sets =?2, W.reps = ?3 WHERE W.id = ?4")
	void updateWorkout(String exercise, int sets, int reps, int id);
	
//	@Query("SELECT A FROM Athlete A WHERE A.firstName = ?1")
//	Athlete findByFirstName(String firstName);
	

}
