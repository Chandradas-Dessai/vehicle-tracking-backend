const VehicleActivityController = require('./vehicle-activity.controller'); 
const VehicleActivityModel = require('./vehicle-activity.model'); 


exports.vehicleActivityRoutes = function (app) {
    app.get('/api/place_interactions/', [ 
        VehicleActivityController.findAllPlaceInteractions
    ]);
    app.get('/api/vehicle_activity/', [ 
        VehicleActivityController.findAllVehicleActivity
    ]);
};