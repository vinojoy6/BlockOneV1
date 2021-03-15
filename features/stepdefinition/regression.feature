# Performance Regression test for apis
Feature: This regression test suite checks 4 apis and validate if response time for single api is below SLA

Scenario: Check if response time of api to get all user are under  5 sec 
  Given I make a request to pull all users info
  When I receive response time details -> GET 
  Then Expected response time is below 5 sec to get all user info
  

Scenario: Check if response time of api to create  user is under  1 sec
  Given I make a request to create user
  When I receive response time details -> POST
  Then Expected response time is below 1 sec to create user

 Scenario: Check if response time of api to update  user detail is under  1 sec
 Given I make a request to update user detail
 When I receive response time details -> PUT
 Then Expected response time is below 1 sec to udpate user detail

  Scenario: Check if response time of api to delete  user  is under  5 sec
 Given I make a requet to delete a user
 When I receive response time details -> DELETE
 Then Expected response time is below 5 sec to delete user
