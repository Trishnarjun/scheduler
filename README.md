# Interview Scheduler

Interview Scheduler is a single-page interactive interview appointment calender.

This repository is the code for the project: I have cloned the Interview Scheduler by using the starter repository as the boilerplate, then built upon it to practice my REACT, AXIOS, JS, WEBPACK DEV SERVER, JEST, BABEL, STORYBOOK, TEST LIBRARY skills.

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:3000/>.
4. You will need the clone of [scheduler-api](https://github.com/Trishnarjun/scheduler-api) to be running along side with with [scheduler](https://github.com/lighthouse-labs/scheduler/) by using the `npm start` command; for the data to be saved post refresh.
5. Go to <http://localhost:3000/> in your browser.

# Testing

- Running Jest Test Framework: `npm test`
- Running Storybook Visual Testbed: `npm run storybook`

## Screenshots

!["main page of the interview scheduler"](https://github.com/Trishnarjun/scheduler/blob/master/docs/main-page.png)
!["the appointment form when clicked on empty spot"](https://github.com/Trishnarjun/scheduler/blob/master/docs/appointment-form.png)
!["conform appointment UI component when user deletes appointment"](https://github.com/Trishnarjun/scheduler/blob/master/docs/confirm-ui.png)

## Dependencies

- axios
- @testing-library/react-hooks
- react-test-renderer
- Node 15.10.x or above