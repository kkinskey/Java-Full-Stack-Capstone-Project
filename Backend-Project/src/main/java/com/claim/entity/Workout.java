package com.claim.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

	@Entity
	@Table(name="workout")
	public class Workout {
		
		@Id
		@Column(name="id")
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		private int id;
		
		@Column(name="exercise")
		private String exercise;
		
		@Column(name="sets")
		private int sets;
		
		@Column(name="reps")
		private int reps;
		
//		@ManyToOne(cascade = CascadeType.ALL)
//		@JoinColumn(name="athlete_id")
		@Column(name="athlete_id")
		private String athlete;
		
		
		public int getId() {
			return id;
		}
		
		public void setId(int id) {
			this.id = id;
		}
		
		public String getExercise() {
			return exercise;
		}
		
		public void setExercise(String exercise) {
			this.exercise = exercise;
		}
		
		public int getSets() {
			return sets;
		}
		
		public void setSets(int sets) {
			this.sets = sets;
		}
		
		public int getReps() {
			return reps;
		}
		
		public void setReps(int reps) {
			this.reps = reps;
		}

		public String getAthlete() {
			return athlete;
		}

		public void setAthlete(String athlete) {
			this.athlete = athlete;
		}
		
		
}
