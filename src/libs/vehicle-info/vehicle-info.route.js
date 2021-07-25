const VehicleInfoController = require('./vehicle-info.controller'); 
const VehicleInfoModel = require('./vehicle-info.model'); 


exports.vehicleInfoRoutes = function (app) {
    app.post('/place_interactions', [ 
        VehicleInfoController.insert
    ]);
    app.get('place_interactions/:vehicleId', [ 
        VehicleInfoController.findVehicleById
    ]);
    app.put('/place_interactions/:vehicleId', [ 
        VehicleInfoController.updateVehicleById
    ]);
    app.delete('/place_interactions/:vehicleId', [ 
        VehicleInfoController.deleteVehicleById
    ]);
    app.get('/place_interactions', [ 
        VehicleInfoController.findAllVehicle
    ]);
};