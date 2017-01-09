# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Routes

- `GET /api/routes`
  - Routes index/search
- `POST /api/routes`
  - Creating a hike
- `GET /api/routes/:routeId`
  - Viewing a particular hike
- `PATCH /api/notes/:routeId`
  - Update a particular hike
- `DELETE /api/notes/:routeId`
  - Delete a hike

### Route comments

- `POST /api/routes/:routeId/comments`
- `DELETE /api/routes/:routeId/comments/:commentId`

### Trip Reports

- `GET /api/trips`
- `POST /api/trips`
- `GET /api/trips/:id`
- `DELETE /api/trips/:id`

### Trip comments

- `POST /api/trips/:tripId/comments`
- `DELETE /api/trips/:tripId/comments/:commentId`

### Friends
- `GET /api/friends`
- `GET /api/friends/:friendId`
- `POST /api/friends`
- `DELETE /api/friends/:friendId`
