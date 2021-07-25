const VehicleInfoModel = require('./vehicle-info.model');
const fs = require('fs');


exports.insert = (req, res) => {
    VehicleInfoModel.createVehicleInfo(req.body).then((result) => {
        res.status(201).send(result);
    }, err => {
        res.status(406).send(err);
    });
};

exports.findVehicleById = (req, res) => {
    Ve.findVehicleById(req.params.vehicleId)
        .then((result) => {
            res.status(200).send(result);
        }, err => {
            res.status(err.status).send(err.message);
        });
};
exports.updateVehicleById = (req, res) => {
    if (req.file != undefined) {
        let id = req.params.vehicleId
        VehicleInfoModel.findVehicleById(id)
            .then((result) => {
                VehicleInfoModel.updateVehicleById(req.body, id)
                    .then((r) => {
                        res.status(200).send(r);
                    }, err1 => {
                        res.status(406).send(err1);
                    });
            }, err => {
                res.status(406).send(err);
            });
    } else {

        VehicleInfoModel.updateVehicleById(req.body, req.params.vehicleId)
            .then((result) => {
                res.status(200).send(result);
            }, err => {
                res.status(406).send(err);
            });
    }
};
exports.deleteVehicleById = (req, res) => {
    let id = req.params.vehicleId;
    VehicleInfoModel.findVehicleById(id)
        .then((result) => {
            if (result.image != null) {
                fs.unlinkSync(result.image);
            }
            VehicleInfoModel.deleteVehicleById(id)
                .then((r) => {
                    res.status(200).send(r);
                }, err1 => {
                    res.status(406).send(err1);
                });
        }, err => {
            res.status(406).send(err);
        });
};
exports.findAllVehicle = (req, res) => {
    VehicleInfoModel.findAllVehicleInfo()
        .then((result) => {
            res.status(200).send(result);
        }, err => {
            res.status(406).send(err);
        });
}; 