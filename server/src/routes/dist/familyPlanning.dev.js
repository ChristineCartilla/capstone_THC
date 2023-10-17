"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.familyPlanningRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _Profile = require("../models/Profile.js");

var _MedicalRecord = require("../models/MedicalRecord.js");

var _ObstetricalHistory = require("../models/ObstetricalHistory.js");

var _FamilyPlanning = require("../models/FamilyPlanning.js");

var _MedicalHistory = require("../models/MedicalHistory.js");

var _FamilyPlanningAssessment = require("../models/FamilyPlanningAssessment.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function getAge(date) {
  var today = new Date();
  var birthDate = new Date(date);
  var age = today.getFullYear() - birthDate.getFullYear();
  var monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
    _readOnlyError("age"), age--;
  }

  return age;
}

var router = _express["default"].Router(); // ADDING INSTANCE IN AN EXISTING PROFILE


exports.familyPlanningRouter = router;
router.post("/add/:id", function _callee(req, res) {
  var profId, findProfile, age, obstetricalInstance, medicalHistoryInstance, serviceInstance, matRec, profile;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          profId = req.params.id;
          _context.prev = 1;
          findProfile = _Profile.ProfileModel.findById({
            _id: profId
          });

          if (!findProfile) {
            _context.next = 27;
            break;
          }

          age = getAge(req.body.spouseDoB);
          obstetricalInstance = new _ObstetricalHistory.ObstetricalHistoryModel(req.body);
          _context.next = 8;
          return regeneratorRuntime.awrap(obstetricalInstance.save());

        case 8:
          medicalHistoryInstance = new _MedicalHistory.MedicalHistoryModel(req.body);
          _context.next = 11;
          return regeneratorRuntime.awrap(medicalHistoryInstance.save());

        case 11:
          serviceInstance = new _FamilyPlanning.FamilyPlanningModel(_objectSpread({}, req.body, {
            spouseAge: age
          }));
          _context.next = 14;
          return regeneratorRuntime.awrap(serviceInstance.save());

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap(_FamilyPlanning.FamilyPlanningModel.findOneAndUpdate({
            _id: serviceInstance._id
          }, {
            obstetricalHistory: obstetricalInstance._id,
            medicalHistory: medicalHistoryInstance._id
          }));

        case 16:
          _context.next = 18;
          return regeneratorRuntime.awrap(_MedicalRecord.MedicalRecordModel.create({
            service_id: serviceInstance._id,
            service_name: "FamilyPlanning",
            reference: "family_planning"
          }));

        case 18:
          matRec = _context.sent;
          _context.next = 21;
          return regeneratorRuntime.awrap(_Profile.ProfileModel.findOneAndUpdate({
            _id: profId
          }, {
            $push: {
              medical_records: matRec._id
            }
          }));

        case 21:
          profile = _context.sent;

          if (!profile) {
            _context.next = 26;
            break;
          }

          return _context.abrupt("return", res.json("Family Planning Record Successfully Added"));

        case 26:
          return _context.abrupt("return", res.json("Error Occurred when adding to Profile"));

        case 27:
          return _context.abrupt("return", res.json("Cannot Add Family Planning Record, Profile Not Found"));

        case 30:
          _context.prev = 30;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);

        case 33:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 30]]);
}); // ADD ASSESSMENT TO THE SPECIFIC INSTANCE

router.post("/add/assessment/:profid/:recordid", function _callee2(req, res) {
  var recordid, profid, findRecord, latestVS, assessment, matHealthRec;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          recordid = req.params.recordid;
          profid = req.params.profid;
          _context2.prev = 2;
          findRecord = _FamilyPlanning.FamilyPlanningModel.findById({
            _id: recordid
          });

          if (!findRecord) {
            _context2.next = 19;
            break;
          }

          _context2.next = 7;
          return regeneratorRuntime.awrap(_Profile.ProfileModel.findById({
            _id: profid
          }).populate("vital_signs"));

        case 7:
          latestVS = _context2.sent;
          assessment = new _FamilyPlanningAssessment.FamilyPlanningAssessmentModel(_objectSpread({}, req.body, {
            vitalSign: latestVS.vital_signs[0]
          }));
          _context2.next = 11;
          return regeneratorRuntime.awrap(assessment.save());

        case 11:
          _context2.next = 13;
          return regeneratorRuntime.awrap(_FamilyPlanning.FamilyPlanningModel.findByIdAndUpdate({
            _id: recordid
          }, {
            $push: {
              familyPlanningAssessment: assessment._id
            }
          }));

        case 13:
          matHealthRec = _context2.sent;

          if (!matHealthRec) {
            _context2.next = 18;
            break;
          }

          return _context2.abrupt("return", res.json("Family Planning Assessment Record Successfully Added"));

        case 18:
          return _context2.abrupt("return", res.json("Error Occurred when adding to Record"));

        case 19:
          return _context2.abrupt("return", res.json("Cannot Add Family Planning Assessment Record, Record Not Found"));

        case 22:
          _context2.prev = 22;
          _context2.t0 = _context2["catch"](2);
          res.json(_context2.t0);

        case 25:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 22]]);
}); // FETCH SPECIFIC RESIDENT WITH FAMILY PLANNING RECORDS

router.get("/:profid", function _callee3(req, res) {
  var profid, fetchprofiles;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          profid = req.params.profid;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_Profile.ProfileModel.findById({
            _id: profid
          }).populate({
            path: "medical_records",
            populate: {
              path: "service_id",
              model: "family_planning",
              populate: {
                path: "obstetricalHistory",
                model: "obstetrical_history"
              }
            }
          }).populate({
            path: "medical_records",
            populate: {
              path: "service_id",
              model: "family_planning",
              populate: {
                path: "medicalHistory",
                model: "medical_history"
              }
            }
          }).exec());

        case 4:
          fetchprofiles = _context3.sent;
          // console.log(fetchprofiles)
          res.json(fetchprofiles);
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          res.json(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
}); // FETCH SPECIFIC RECORD OF SPECIFIC RESIDENT

router.get("/getrecord/:profid/:recid", function _callee4(req, res) {
  var profid, recid, resident, record;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          profid = req.params.profid;
          recid = req.params.recid;
          _context4.prev = 2;

          if (!(profid && recid)) {
            _context4.next = 11;
            break;
          }

          _context4.next = 6;
          return regeneratorRuntime.awrap(_Profile.ProfileModel.findById({
            _id: profid
          }));

        case 6:
          resident = _context4.sent;
          _context4.next = 9;
          return regeneratorRuntime.awrap(_FamilyPlanning.FamilyPlanningModel.findOne({
            _id: recid
          }).populate("medicalHistory").populate("obstetricalHistory").populate("familyPlanningAssessment"));

        case 9:
          record = _context4.sent;
          res.json({
            resident: resident,
            record: record
          });

        case 11:
          _context4.next = 16;
          break;

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](2);
          res.json(_context4.t0);

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 13]]);
}); // FETCH SPECIFIC ASSESSMENT

router.get("/assessment/:recid", function _callee5(req, res) {
  var recid, assessmentInstance;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          recid = req.params.recid;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_FamilyPlanningAssessment.FamilyPlanningAssessmentModel.findById({
            _id: recid
          }).populate("vitalSign"));

        case 4:
          assessmentInstance = _context5.sent;
          res.json(assessmentInstance);
          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          res.json(_context5.t0);

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 8]]);
});