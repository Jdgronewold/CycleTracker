


> Schema

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
home_lat        | float     | not null
home_long       | float     | not null

## Routes
column name     | data type | details
----------------|-----------|-----------------------
name            | string    | not null
description     | text      | not null,
user_id         | integer   | not null, indexed
mapOptions      | Object    | not null
mileage         | float     | not null

## Friends
column name     | data type | details
----------------|-----------|-----------------------
user_id         | integer   | not null, indexed
friend_id       | intege    | not null, indexed

## Workouts
column name     | data type | details
----------------|-----------|-----------------------
name            | integer   | not null
date            | string    | not null
route_id        | integer   | not null, indexed
user_id         | integer   | not null, indexed
duration        | time      |
gear            | text      |
notes           | text      |
pictures        | Object    |

## Comments
column name     | data type | details
----------------|-----------|-----------------------
user_id         | integer   | not null, indexed
route_id        | integer   |
trip_id         | integer   |
body            | text      | not null
