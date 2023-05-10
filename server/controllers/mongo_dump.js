// var fs = require('fs');
// var _ = require('lodash');
// var exec = require('child_process').exec;

// var dbOptions = {
//     user: 'Vikas8692',
//     pass: '',
//     host: 'localhost',
//     port: 27017,
//     database: 'mahaBuzz',
//     autoBackup: true,
//     removeOldBackup: false,
//     keepLastDaysBackup: 7,
//     autoBackupPath: './backup.js' // i.e. /var/database-backup/
// };

// /* return date object */
// exports.stringToDate = function (dateString) {
//     return new Date(dateString);
// }

// /* return if variable is empty or not. */
// exports.empty = function (mixedVar) {
//     var undef, key, i, len;
//     var emptyValues = [undef, null, false, 0, '', '0'];
//     for (i = 0, len = emptyValues.length; i < len; i++) {
//         if (mixedVar === emptyValues[i]) {
//             return true;
//         }
//     }
//     if (typeof mixedVar === 'object') {
//         for (key in mixedVar) {
//             return false;
//         }
//         return true;
//     }
//     return false;
// };

// dbAutoBackUp: function test() {
//     // check for auto backup is enabled or disabled
//     if (dbOptions.autoBackup == true) {
//         var date = new Date();
//         var beforeDate, oldBackupDir, oldBackupPath;
//         currentDate = this.stringToDate(date); // Current date
//         var newBackupDir = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
//         var newBackupPath = dbOptions.autoBackupPath + 'mongodump-' + newBackupDir; // New backup path for current backup process
//         // check for remove old backup after keeping # of days given in configuration
//         if (dbOptions.removeOldBackup == true) {
//             beforeDate = _.clone(currentDate);
//             beforeDate.setDate(beforeDate.getDate() - dbOptions.keepLastDaysBackup); // Substract number of days to keep backup and remove old backup
//             oldBackupDir = beforeDate.getFullYear() + '-' + (beforeDate.getMonth() + 1) + '-' + beforeDate.getDate();
//             oldBackupPath = dbOptions.autoBackupPath + 'mongodump-' + oldBackupDir; // old backup(after keeping # of days)
//         }
//         var cmd = 'mong ' + dbOptions.host + ' --port ' + dbOptions.port + ' --db ' + dbOptions.database + ' --username ' + dbOptions.user + ' --password ' + dbOptions.pass + ' --out ' + newBackupPath; // Command for mongodb dump process

//         exec(cmd, function (error, stdout, stderr) {
//             if (this.empty(error)) {
//                 // check for remove old backup after keeping # of days given in configuration
//                 if (dbOptions.removeOldBackup == true) {
//                     if (fs.existsSync(oldBackupPath)) {
//                         exec("rm -rf " + oldBackupPath, function (err) { });
//                     }
//                 }
//             }
//         });
//     }
// }

//=======================================================

const MongoClient = require('mongodb').MongoClient;
const backup = require('mongodb-backup');

const uri = 'mongodb+srv://Vikas8692:1234@cluster0.ixgyyhk.mongodb.net/?retryWrites=true&w=majority';
const options = {setInterval:`1000`}
exports.handler = async (event) => {
    console.log('Starting MongoDB backup...');

    MongoClient.connect(uri, options, async (error, client) => {
        if (error) {
            console.error(error);
            return;
        }

        try {
            await backup({
                uri: uri,
                root: './backup', // Replace with your backup directory
                tar: 'backup.tar',
                callback: function (err) {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('MongoDB backup completed.');
                    }

                    client.close();
                },
            });
        } catch (error) {
            console.error(error);
        }
    });
}
