'use strict';

var globals = module.exports = {};

globals.bmiClassification = [
  {
    min: 0,
    max: 18.4,
    category: 'Underweight',
    healthRisk: 'Malnutrition risk'
  },
  {
    min: 18.5,
    max: 24.9,
    category: 'Normal weight',
    healthRisk: 'Low risk'
  },{
    min: 25.0,
    max: 29.9,
    category: 'Overweight',
    healthRisk: 'Enhanced risk'
  },{
    min: 30.0,
    max: 34.9,
    category: 'Moderately obese',
    healthRisk: 'Medium risk'
  },{
    min: 35.0,
    max: 39.9,
    category: 'Severely obese',
    healthRisk: 'High risk'
  },{
    min: 40,
    max: Number.MAX_VALUE,
    category: 'Very severely obese',
    healthRisk: 'Very high risk'  
  }
];

