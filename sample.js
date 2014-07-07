/**
 * Created by 401923 on 6/25/2014.
 */


var fs=require('fs');
fs.readFile("./name",function(err,data) {
        if (err) {
            console.log(err);
        }
        else {
            var name = data;
            console.log(name);
        }
    }
);






