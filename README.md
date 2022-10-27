# Goals API

Goals REST API with JWT Auth built with Express.js & MongoDB

## All Routes

| About       | HTTP Methods                |
| ----------- | --------------------------- |
| Signup User | `POST /api/v1/users/signup` |
| Login User  | `POST /api/v1/users/login`  |
| Get User    | `GET /api/v1/users/me`      |
| Get Goals   | `GET /api/v1/goals`         |
| Create Goal | `POST /api/v1/goals`        |
| Update Goal | `PUT /api/v1/goals/:id`     |
| Delete GOal | `DELETE /api/v1/goals/:id`  |

## Mongoose Schema:

`User` Username & Password.

`Goal` UserID & Text.

_Enjoy 💙_
