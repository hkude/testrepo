const request = require('sync-request');
const url = "https://raw.githubusercontent.com/hirohiro-kun/testrepo/master/README.md"
const response = request("GET", url);
const bucketName = 'hk5gfree';
const AWS = require('aws-sdk');

//console.log(response.getBody().toString());
function upload_to_s3() {
    const s3 = new AWS.S3()
    fileName = "README.md"
    fileData = response.getBody().toString()
    const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: fileData
    }
    s3.upload(params, function(err, data) {
        if (err) {
            console.log(err)
            return
        }
        else {
            console.log(data)
        }
    })
}

upload_to_s3()