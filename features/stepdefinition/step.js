// steps.js using PactumJS
const pactum = require("pactum");
var assert = require("assert");
const { Given, When, Then, Before } = require("@cucumber/cucumber");
var res, stat, uid;
let spec = pactum.spec();

Before(() => {
	spec = pactum.spec();
});
/* GET api */

Given("I make a request to pull all users info", function () {
	url = "https://gorest.co.in/public-api/users";
	res = spec.get(url);
});

When("I receive response time details -> GET", async function () {
	await spec.toss();
});

Then("Expected response time is below 5 sec to get all user info", function () {
	rt = res._response.responseTime;
	code = res._response.json.code;
	/* checks if response is below 5 sec and response code is 200 , if both are true cosider as PASS else Fail*/
	if (rt <= 5000 && code == 200) {
		stat = "PASS";
	} else stat = "FAIL";

	/* if its FAIL , forcefully failing  exection and prints reason*/
	if (stat == "FAIL") {
		if (code !== 200) {
			assert.strictEqual("PASS", stat, "Received wrong response code");
		} else {
			assert.strictEqual(
				"PASS",
				stat,
				"Response time for api got is " + `${rt}` + "ms"
			);
		}
	}
});

/* POST api */

Given("I make a request to create user", function () {
	url = "https://gorest.co.in/public-api/users";
	eamil = Math.floor(Math.random() * 10000 + 1);

	res = spec
		.post(url)
		.withJson({
			name: "pandarakkalan",
			gender: "Male",
			email: "pandarakkalan" + `${eamil}` + "@pandaram.com",
			status: "Active",
		})
		.withHeaders({
			Authorization:
				"Bearer 253c026a214d20870d06c621b04056f26a1127ffe1822ef04721c4d9dee6b20f",
		});
});
When("I receive response time details -> POST", async function () {
	await spec.toss();
	uid = res._response.json.data.id;
});

Then("Expected response time is below 1 sec to create user", function () {
	rt = res._response.responseTime;
	code = res._response.json.code;
	/* checks if response is below 1 sec and response code is 201 , if both are true cosider as PASS else Fail*/
	if (rt <= 1000 && code == 201) {
		stat = "PASS";
	} else stat = "FAIL";
	/* if its FAIL , forcefully failing  exection and prints reason*/
	if (stat == "FAIL") {
		if (code !== 201) {
			assert.strictEqual("PASS", stat, "Received wrong response code");
		} else {
			assert.strictEqual(
				"PASS",
				stat,
				"Response time for api got is " + `${rt}` + "ms"
			);
		}
	}
});

/* PUT api */

Given("I make a request to update user detail", function () {
	url = "https://gorest.co.in/public-api/users/" + `${uid}`;
	res = spec.put(url).withJson({ name: "pp" }).withHeaders({
		Authorization:
			"Bearer 253c026a214d20870d06c621b04056f26a1127ffe1822ef04721c4d9dee6b20f",
		"Content-Type": "application/json",
		Accept: "application/json",
	});
});
When("I receive response time details -> PUT", async function () {
	await spec.toss();
});

Then(
	"Expected response time is below 1 sec to udpate user detail",
	function () {
		rt = res._response.responseTime;
		code = res._response.json.code;
		/* checks if response is below 1 sec and response code is 200 , if both are true cosider as PASS else Fail*/
		if (rt <= 1000 && code == 200) {
			stat = "PASS";
		} else stat = "FAIL";
		/* if its FAIL , forcefully failing  exection and prints reason*/
		if (stat == "FAIL") {
			if (code !== 200) {
				assert.strictEqual("PASS", stat, "Received wrong response code");
			} else {
				assert.strictEqual(
					"PASS",
					stat,
					"Response time for api got is " + `${rt}` + "ms"
				);
			}
		}
	}
);

/* Delete  api */

Given("I make a requet to delete a user", function () {
	url = "https://gorest.co.in/public-api/users/" + `${uid}`;
	res = spec.delete(url).withJson({ name: "pp" }).withHeaders({
		Authorization:
			"Bearer 253c026a214d20870d06c621b04056f26a1127ffe1822ef04721c4d9dee6b20f",
		"Content-Type": "application/json",
		Accept: "application/json",
	});
});
When("I receive response time details -> DELETE", async function () {
	await spec.toss();
});

Then("Expected response time is below 5 sec to delete user", function () {
	rt = res._response.responseTime;
	code = res._response.json.code;
	/* checks if response is below 5 sec and response code is 204 , if both are true cosider as PASS else Fail*/
	if (rt <= 5000 && code == 204) {
		stat = "PASS";
	} else stat = "FAIL";
	/* if its FAIL , forcefully failing  exection and prints reason*/
	if (stat == "FAIL") {
		if (code !== 204) {
			assert.strictEqual("PASS", stat, "Received wrong response code");
		} else {
			assert.strictEqual(
				"PASS",
				stat,
				"Response time for api got is " + `${rt}` + "ms"
			);
		}
	}
});
