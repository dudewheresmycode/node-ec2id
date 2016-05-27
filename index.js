
var request = require('sync-request');
var AWSURL = "http://169.254.169.254/latest/meta-data/instance-id";

function ec2id(){
	var res = request('GET', AWSURL);
	return res.getBody('utf8');	
}

module.exports = ec2id;