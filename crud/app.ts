require('dotenv').config()
// import express from 'express';
import express, { Request, Response, NextFunction } from 'express';
const app = express();
app.use(express.json());
import  sequelize  from './config/config';

sequelize.sync({ alter: true })
import userRoute from './routes/userRoute';
app.listen(process.env.PORT, () => {
    console.log(`server is listening: ${process.env.BASE_URL}${process.env.PORT}`);
})

// interface LocationWithTimezone {
//     location: string;
//     timezoneName: string;
//     timezoneAbbr: string;
//     utcOffset: number;
// };

// const getLocationsWithTimezones = (request: Request, response: Response, next: NextFunction) => {
//     let locations: LocationWithTimezone[] = [
//         {
//             location: 'Germany',
//             timezoneName: 'Central European Time',
//             timezoneAbbr: 'CET',
//             utcOffset: 1
//         },
//         {
//             location: 'China',
//             timezoneName: 'China Standard Time',
//             timezoneAbbr: 'CST',
//             utcOffset: 8
//         },
//         {
//             location: 'Argentina',
//             timezoneName: 'Argentina Time',
//             timezoneAbbr: 'ART',
//             utcOffset: -3
//         },
//         {
//             location: 'Japan',
//             timezoneName: 'Japan Standard Time',
//             timezoneAbbr: 'JST',
//             utcOffset: 9
//         }
//     ];

//     response.status(200).json(locations);
// };

// app.get('/timezones', getLocationsWithTimezones);
// error handler
app.use(function (err: object, req: Request, res: Response, next: any): any {
    // set locals, only providing error in development
    res.locals.message = err;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    // res.status(err.status || 500);
    // res.render('error');
});

app.use('/api', userRoute)