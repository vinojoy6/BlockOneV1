# BlockOne Single API performance suite

> This regression test suite checks 4 apis and validate if response time for single api is below SLA

# Continuous deployment

> I tried to setup using circleci with docker

## Known issues for "MY" Continuous deployment setup

> Currently Docker steps for ECS or Kubernetes is not included .I was not able to validate end to end setup as i dont have proper setup to deploy docker

# Infra details

> Used cucumberJS and pactumJS

# Docker details

> Docker image vinojoy/blockone_vino is currently publically available

# Local Setup

> I used VScode as IDE , download from git repo https://github.mheducation.com/VINO-JOY/BlockOne.git , to run locally idealy you can use command .\node_modules\.bin\cucumber-js --publish .\features\stepdefinition\regression.feature to run from home directory
