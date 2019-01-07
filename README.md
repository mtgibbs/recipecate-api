# RECIPECATE-API

The api backend for creating meal plan shopping lists and managing recipes.

### Deployment

This is currently an authless REST API that handles recipe stuff for local deployment within a secure network.  Possibly on a raspberry pi.

- Install MariaDB (or Postgres).

- Install NodeJS

- Update `connection-info.dev.json` to be your database connection info (** WARNING PASSWORD IS OPEN IN PLAIN TEXT **)

- Update `server.config.json` to reflect the `port` you wish to run the api on as well as set the `host` to `0.0.0.0` if connecting externally.

- Run `npm run migrate`

- Run `npm run seed`

- Run `npm run api` to start the app.  It's up to you for your choice of persisting the app or container right now.
