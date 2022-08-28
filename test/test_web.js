'use strict';

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("./../lib/web/index");

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('API Test', function () {
  describe('/POST bmi', function () {
    it('POST request should return a valid response', (done) => {
      const reqBody = [
          {"Gender":"Male","HeightCm":179,"WeightKg":96},
          {"Gender":"Male","HeightCm":161,"WeightKg":85},
          {"Gender":"Male","HeightCm":180,"WeightKg":77},
          {"Gender":"Female","HeightCm":166,"WeightKg":62},
          {"Gender":"Female","HeightCm":150,"WeightKg":70},
          {"Gender":"Female","HeightCm":167,"WeightKg":82}
      ];
      chai.request(server())
        .post('/bmi/calculate')
        .send(reqBody)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have.property('bmiTable');
          response.body.should.have.property('countOfOverWeightPeople');
          done();
        })
    });
  });
});