//SetTargetUrl.js

var season = context.getVariable("request.queryparam.season");
var driver = context.getVariable("request.queryparam.driver");
var position = context.getVariable("request.queryparam.position");
var baseUrl = context.getVariable("target.url");

if (context.getVariable("environment.name") === "prod") {
	context.setVariable("target.url", baseUrl + 
		season + "/drivers/" + 
		driver + "/results/" + 
		position + ".json");
} else {
	if(driver != "hamilton" && driver != "button"){
		context.setVariable("request.header.x-mock-filename", "error");
		context.setVariable("request.header.x-mock-response-code", "404");
	}
	else {
		context.setVariable("request.header.x-mock-filename", driver);
	}	
}