# CPAD_Project1_Group42_Frontend

Project name: SCHOOL VACCINATION TRACKER

Backend Project Link: https://github.com/raunakp/CPAD_Project1_42_Backend

## Members

| Name | email |
| ----------- | ----------- |
| Mary John Madathil | 2021mt93505@wilp.bits-pilani.ac.in |
| Chitresh Jain | 2021mt12437@wilp.bits-pilani.ac.in |
| Raunak Poddar | 2021mt12277@wilp.bits-pilani.ac.in |

## Reference Links

| Purpose | URL | Description | Comments |
| ----------- | ----------- | ----------- | ----------- |
| Cross platform Frontend | <https://reactnative.dev/> | Create native apps for Android and iOS using React | React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.

## Important files/directories

| Path | Description | Comments |
| ----------- | ----------- | ----------- |
| assets | [./assets](./assets) | Images, etc. |
| pages | [./pages/](./data/ecomm.db) | The sqlite db file. |
| package.json | [./package.json](./package.json) | Application dependencies |
| app.json | [./app.json](./app.json) | App version & other details |
| App.js | [./App.js](./App.js) | Application entry point, Screen route definitions |
| app-constants-apis | [./app-constants-apis](./app-constants-apis) | API Paths - note the host part: "localhost:3090" - it is expected that your backend service is running for the frontend (ReactNative App to function correctly) |

## Run the project

**Ensure that the Backend (Node.js service) linked above is running so that APIs work.**

- $ npm install
- $ expo start

### Issues on Mac OS
try:
- $ npm install --legacy-peer-deps
- $ eport NODE_OPTIONS=--openssl-legacy-provider
- $ expo doctor --fix-dependencies


## API Documentation
- Import this [Postman collection](https://www.getpostman.com/collections/1f2175b01a6a088d6932) to test the APIs locally.
- [Documentation available here](https://documenter.getpostman.com/view/454/2s8YRqjpu4)
