// script.js

// Sample Exercise Data with Icons
const exercises = [
    { name: "Push-ups", description: "A classic upper body exercise.", icon: "fas fa-hand-paper" },
    { name: "Squats", description: "Strengthens your legs and core.", icon: "fas fa-running" },
    { name: "Plank", description: "Improves core strength and stability.", icon: "fas fa-user" },
    { name: "Lunges", description: "Works on leg muscles and balance.", icon: "fas fa-walking" },
  ];
  
  // Populate Exercise List
  function populateExerciseList() {
    const exerciseList = document.getElementById("exercise-list");
    exercises.forEach(exercise => {
      const option = document.createElement("option");
      option.value = exercise.name;
      option.textContent = exercise.name;
      exerciseList.appendChild(option);
    });
  }
  
  // Show Exercise Details
  function showExerciseDetails(exerciseName) {
    const selectedExercise = exercises.find(exercise => exercise.name === exerciseName);
  
    if (selectedExercise) {
      document.getElementById("exercise-name").textContent = selectedExercise.name;
      document.getElementById("exercise-description").textContent = selectedExercise.description;
  
      // Show Exercise Details Section
      document.getElementById("exercise-selection").classList.add("hidden");
      document.getElementById("exercise-details").classList.remove("hidden");
    }
  }
  
  // Add Exercise to History
  function addExerciseToHistory(exerciseName, sets, reps) {
    const historyItem = document.createElement("li");
    historyItem.innerHTML = `
      <i class="${exercises.find(ex => ex.name === exerciseName).icon}"></i>
      ${exerciseName} - ${sets} sets of ${reps} reps
    `;
    document.getElementById("history-list").appendChild(historyItem);
  
    // Show Workout History Section
    document.getElementById("workout-history").classList.remove("hidden");
  }
  
  // Event Listeners
  document.getElementById("start-exercise").addEventListener("click", () => {
    const selectedExercise = document.getElementById("exercise-list").value;
    if (selectedExercise) {
      showExerciseDetails(selectedExercise);
    } else {
      alert("Please select an exercise.");
    }
  });
  
  document.getElementById("complete-exercise").addEventListener("click", () => {
    const exerciseName = document.getElementById("exercise-name").textContent;
    const sets = document.getElementById("sets").value;
    const reps = document.getElementById("reps").value;
  
    if (sets && reps) {
      addExerciseToHistory(exerciseName, sets, reps);
  
      // Reset Exercise Details Section
      document.getElementById("exercise-selection").classList.remove("hidden");
      document.getElementById("exercise-details").classList.add("hidden");
    } else {
      alert("Please enter valid sets and reps.");
    }
  });
  
  // Initialize App
  populateExerciseList();