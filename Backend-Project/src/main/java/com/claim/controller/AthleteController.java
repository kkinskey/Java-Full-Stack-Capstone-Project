package com.claim.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.claim.entity.Athlete;
import com.claim.entity.Workout;
import com.claim.repository.AthleteRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ResponseBody;


@CrossOrigin
@RestController
public class AthleteController {
		
	@Autowired
	AthleteRepository athleteRepository;
	
	@RequestMapping(value = "/saveAthlete", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public void submitAthleteDetails(@RequestBody Athlete athlete) {
		Athlete ath = athlete;
		System.out.println(ath.getEmail());
		athleteRepository.save(ath);
		
	}
	
//	@RequestMapping(value = "/updateProfile", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.PUT)
//	public void updateProfile(@RequestBody Athlete athlete) {
//		
////		Workout work = workout.getId();
//		Athlete ath = athleteRepository.getById(athlete.getEmail());
//		
////		work.toString();
//		athleteRepository.
//		
//	}
	
//	@RequestMapping(value = "/saveWorkout", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
//	public void submitWorkoutDetails(@RequestBody Workout workout) {
//		Workout work = workout;
//		athleteRepository.save(work);
//		
//	}
	
	
	
	
//	@RequestMapping(value = "/findAll", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
//	@ResponseBody private ResponseEntity <List<Athlete>> findAll() {
//
//		List<Athlete> athlete = athleteRepository.findAll();
//
//		return new ResponseEntity<List<Athlete>>(athlete, HttpStatus.OK);
//	}
	
	@RequestMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public ResponseEntity<Optional<Athlete>> loginStudent(@RequestBody Athlete athlete) {
		Optional<Athlete> ath = Optional.of(athleteRepository.loginAthlete(athlete.getEmail(), athlete.getPassword()));
		
		if (ath != null) {
		return new ResponseEntity<Optional<Athlete>>(ath, HttpStatus.OK);
		}
		return new ResponseEntity<Optional<Athlete>>(ath, HttpStatus.UNAUTHORIZED);

	}
	
//	@RequestMapping(value = "/displayAthleteInfo", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
//	@ResponseBody private ResponseEntity<Optional<Athlete>> findOneAthlete(String email) {
//		Optional<Athlete> ath = athleteRepository.findById(email);
//		return ResponseEntity<Optional<Athlete>>(ath, HttpStatus.OK);
//	}
	
	@RequestMapping(value = "/findAthleteByEmail", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody private ResponseEntity<Optional<Athlete>> findAthleteEmail(String email) {
		Optional<Athlete> athlete = athleteRepository.findById(email);

		return new ResponseEntity<Optional<Athlete>>(athlete, HttpStatus.OK);
}
}
