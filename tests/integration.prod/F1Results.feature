Feature: As an F1 API consumer, I want to get a drivers results so that I can celebrate
	
	#This test can be run against the mock and the real backend
	Scenario: The F1 API should show that Hamilton's first victory in 2015 was Australia
		Given I set query parameters to 
		| 	parameter   | 	value 		|
		|	driver		|	hamilton	|
		|	position 	|	1			|
		|	year 		|	2015		|
		When I GET /results
		Then response code should be 200
		Then response body path $.MRData.RaceTable.Races[0].raceName should be Australian Grand Prix

	#Error scenarios
	Scenario: The F1 API should return a 400 if the correct parameters aren't passed
		Given I set query parameters to 
		| 	parameter   | 	value 		|
		|	something	|	bad			|
		When I GET /results
		Then response code should be 400

	Scenario: The F1 API will return an error if you search for Engines
		When I GET /engines
		Then response code should be 404