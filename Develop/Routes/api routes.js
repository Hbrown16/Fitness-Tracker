const db = require("../Workouts");
const router = require("express").Router();

router.get("", (req, res) => {
    db.Workout.find({})
.then(dbWorkout => {
    dbWorkout.forEach(workout => {
        var total = 0;
        workout.exercises.forEach(e => {
            total += e.duration;
        });
        workout.totalDuration =total;
    });

})
})