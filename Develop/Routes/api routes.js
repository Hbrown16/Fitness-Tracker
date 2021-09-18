const db = require("../Workouts");
const router = require("express").Router();

router.get("", (req, res) => {
    db.Workout.find({})
.then(dbWorkout => {
    dbWorkout.forEach(workout => {
        
    })

})
})