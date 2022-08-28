'use strict';
const express = require('express');

const globals = require('./../../../globals');

module.exports = function bmiRouter() {
  return new express.Router()
  .post('/calculate', bmiCalculator);

  function bmiCalculator(req, res, next) {
    console.log('Entering bmiCalculator function');

    try {
      console.log(req.body);
      let bmiTable = req.body;
      for(let obj of bmiTable) {
        var bmiProperties = calcBmiAndGetBmiProperties(obj.HeightCm, obj.WeightKg);
        obj.BMI = bmiProperties.bmi;
        obj.BMI_Category = bmiProperties.category;
        obj.Health_Risk = bmiProperties.healthRisk;
      }
  
      let countOfOverWeightPeople = getCountOfAProperty(bmiTable, 'BMI_Category', 'Overweight');
  
      res.send({
        bmiTable: bmiTable,
        countOfOverWeightPeople: countOfOverWeightPeople
      });
    }
    catch(err) {
      console.log(err);
      next(err);
    }
  }
};

function calcBmiAndGetBmiProperties(heightInCm, weightInKg) {
  const bmiClassification = globals.bmiClassification;

  let bmi = calculateBMI(heightInCm, weightInKg);
  for(let obj of bmiClassification) {
    if(bmi >= obj.min && bmi <= obj.max) {
      return {
        bmi: bmi,
        category: obj.category,
        healthRisk: obj.healthRisk
      }
    }
  }
  throw new Error('Invalid BMI input');
}

function calculateBMI(heightInCm, weightInKg) {
  let heightInM = convertCmToM(heightInCm);
  let bmi = weightInKg/(heightInM*heightInM);

  return roundToOneDecimalPlace(bmi);
}

function getCountOfAProperty(bmiTable, key, category) {
  let count = 0;
  for(let obj of bmiTable) {
    if(obj[key] === category) {
      count++;
    }
  }
  return count;
}

function convertCmToM(heightInCm) {
  return heightInCm/100;
}

function roundToOneDecimalPlace(num) {
  return +(Math.round(num + "e+1")  + "e-1");
}