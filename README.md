# Ride Tracker

[Ride Tracker][ride] is a web application for users to track their bike rides. Inspired by Map My Run, users can create routes that calculate both the distance traveled and elevation ascended. Users can view their friend's routes and workouts.

Ride Tracker is a personal project by Jeff Gronewold

![Splash][home_page]

## Features

- User accounts with secure authentication
- Custom map creation
- Route tracking allows you to calculate elation gain through Google Elevation
- Track previous workouts
- Find friends and view their routes/workouts
- Comment on friends routes

![demo map][map]

## Project Design

Ride Tracker was designed and built in two weeks.

A [proposal][proposal] was drafted to help provide an implementation timeline during the development process.

A [database schema][schema] was prepared alongside the design proposal.

## Technology

Ride Tracker is a single-page application built on Rails and React.js, with many dependencies in both the backend and the frontend. Maps utilize the Google Maps Javascript API and images are stored on [Cloudinary][cloudinary]


## Future Implementations

Elevation data can break if there are not enough sampling points to generate average

Use of google charts to create better visuals



[ride]: https://mapmyhike.herokuapp.com/#/welcome/home
[home_page]: ./docs/Splash.png "Splash page"
[map]: ./docs/map_image.png
[cloudinary]: http://cloudinary.com/
