package com.claim.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.claim.entity.Athlete;
import com.claim.entity.Workout;
import com.claim.repository.WorkoutRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ResponseBody;


@CrossOrigin
@RestController
public class WorkoutController {
		
	@Autowired
	WorkoutRepository workoutRepository;
	
	@RequestMapping(value = "/saveWorkout", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public void submitWorkoutDetails(@RequestBody Workout workout, @RequestParam String email) {
		Workout work = workout;
		workout.setAthlete(email);
		workoutRepository.save(work);
		
	}
	
	@RequestMapping(value = "/deleteWorkout", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.DELETE)
	public void deleteWorkout(int id) {
		
//		Workout work = workout.getId();
		Workout work = workoutRepository.findWorkoutForDelete(id);
		
//		work.toString();
		workoutRepository.delete(work);
		
	}
	
//	
//	
//	
//	@RequestMapping(value = "/findAllWorkouts", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
//	@ResponseBody private ResponseEntity <List<Workout>> findAll() {
//
//		List<Workout> workout = workoutRepository.findAll();
//
//		return new ResponseEntity<List<Workout>>(workout, HttpStatus.OK);
//	}
//	
//	
	@RequestMapping(value = "/findWorkoutByEmail", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody private ResponseEntity <List<Workout>> findWorkoutByEmail(@RequestParam String email) {
		List<Workout> workout = workoutRepository.findWorkouts(email);

		return new ResponseEntity<List<Workout>>(workout, HttpStatus.OK);
}
	
	@RequestMapping(value = "/updateWorkout", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public void updateWorkout(@RequestBody Workout workout) {
		
		workoutRepository.updateWorkout(workout.getExercise(), workout.getSets(), workout.getReps(), workout.getId());
		
	}
}
