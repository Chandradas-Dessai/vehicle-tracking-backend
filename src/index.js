const express = require('express');
const env = require('./configs/env');
//const vehicleInfo = require('./libs/vehicle-info/vehicle-info.route');
const vehicleActivity = require('./libs/vehicle-activity/vehicle-activity.route');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
}); 

app.use(express.json());
//vehicleInfo.vehicleInfoRoutes(app);
vehicleActivity.vehicleActivityRoutes(app);

app.listen(env.port, () => {
    console.log('app listening at port %s', env.port);
});