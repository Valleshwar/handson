/**
 * Created by 401923 on 6/27/2014.
 */

var fs=require('fs');
fs.readFile('./profile.json',function(err,data)
{
    if(err)
    {
        throw 'err'+err;
    }
    else {
        var json = JSON.parse(data);
        console.log(json);
        json.employee.id = "1234412";
        console.log(json);
        fs.writeFile('./profile.json', JSON.stringify(json));
    }

});
