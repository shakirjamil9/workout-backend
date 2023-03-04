exports.template = `Create a {%intensity%}-intensity, resistance training workout program for a {%age%}-year old {%gender%} whose main goal is to {%mainGoal%}. The workouts should include {%exercises%} Compound and isolation movements exercises per body part. They want to do {%resistanceDays%} days of resistance training per week, and each workout needs to be {%timeOfWorkout%} long. Please display this workout in html table, group exercises in single cell separated by columns. and also create a {%resistanceDays%}-day list of Meals (breakfast, lunch and dinner) options for the same person who is a {%eatingStyle%}. Please display this meal plan in html table, group meal in single cell separated by columns.`;

exports.replacedTemplate = (temp, data) => {
  let output = temp.replace(/{%intensity%}/g, data.intensityOfWorkout);
  output = output.replace(/{%age%}/g, data.age);
  output = output.replace(/{%gender%}/g, data.gender);
  output = output.replace(/{%mainGoal%}/g, data.mainGoal);
  output = output.replace(/{%exercises%}/g, data.exercises);
  output = output.replace(/{%resistanceDays%}/g, data.resistanceDays);
  output = output.replace(/{%timeOfWorkout%}/g, data.timeOfWorkout);
  output = output.replace(/{%eatingStyle%}/g, data.eatingStyle);

  return output;
};
