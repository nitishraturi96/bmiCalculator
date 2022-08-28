# bmiCalculator

To create a build, merge the code in main branch
To deploy the code on production environment, merge the code in release branch

To check the status of automatic tests run check github Actions section

POST API URL deployed on Heroku app: https://calculate-bmi-application.herokuapp.com/bmi/calculate

API input (req.body) format 
  [{"Gender":"Male","HeightCm":179,"WeightKg":96},{"Gender":"Male","HeightCm":161,"WeightKg":85},{"Gender":"Male","HeightCm":180,"WeightKg":77},{"Gender":"Female","HeightCm":166,"WeightKg":62},{"Gender":"Female","HeightCm":150,"WeightKg":70},{"Gender":"Female","HeightCm":167,"WeightKg":82}]
  
API Output Format
{"bmiTable":[{"Gender":"Male","HeightCm":179,"WeightKg":96,"BMI":30,"BMI_Category":"Moderately obese","Health_Risk":"Medium risk"},{"Gender":"Male","HeightCm":161,"WeightKg":85,"BMI":32.8,"BMI_Category":"Moderately obese","Health_Risk":"Medium risk"},{"Gender":"Male","HeightCm":180,"WeightKg":77,"BMI":23.8,"BMI_Category":"Normal weight","Health_Risk":"Low risk"},{"Gender":"Female","HeightCm":166,"WeightKg":62,"BMI":22.5,"BMI_Category":"Normal weight","Health_Risk":"Low risk"},{"Gender":"Female","HeightCm":150,"WeightKg":70,"BMI":31.1,"BMI_Category":"Moderately obese","Health_Risk":"Medium risk"},{"Gender":"Female","HeightCm":167,"WeightKg":82,"BMI":29.4,"BMI_Category":"Overweight","Health_Risk":"Enhanced risk"}],"countOfOverWeightPeople":1}
