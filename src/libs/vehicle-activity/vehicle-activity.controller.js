const VehicleActivityModel= require('./vehicle-activity.model');
const fs = require('fs');


exports.findAllPlaceInteractions = (req, res) => {
    let startDate = req.query.start_tis,
        endDate = req.query.end_tis;
    if(startDate && endDate) {
        VehicleActivityModel.findPlaceInteractionsByDate(startDate, endDate)
        .then((result) => {
            res.status(200).send(result);
        }, err => {
            res.status(406).send(err);
        });
    } else {
        VehicleActivityModel.findAllPlaceInteractions()
        .then((result) => {
            res.status(200).send(result);
        }, err => {
            res.status(406).send(err);
        });
    }
}; 

exports.findAllVehicleActivity = (req, res) => {
    let license = req.query.license,
        startDate = req.query.start_tis,
        endDate = req.query.end_tis;
        if(license  && startDate && endDate) {
            VehicleActivityModel.findAllVehicleActivity(license, startDate, endDate)
                .then((result) => {
                    res.status(200).send(result);
                }, err => {
                    res.status(406).send(err);
            });
        } else {
            VehicleActivityModel.findAllPlaceInteractions()
            .then((result) => {
                res.status(200).send(result);
            }, err => {
                res.status(406).send(err);
            });
        }
 }; 