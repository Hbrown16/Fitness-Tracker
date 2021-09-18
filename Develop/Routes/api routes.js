const db = require("../Workouts");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        dbWorkout.forEach(workout => {
            var total = 0;
            workout.exercises.forEach(e => {
                total += e.duration;
            });
        workout.totalDuration =total;
    });
    res.json(dbWorkout);
 }).catch(err => {
     res.json(err);
 });
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        
    )
})