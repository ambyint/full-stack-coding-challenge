# React Coding Challenge

The purpose of this challenge is to set up a React application, where users will be able to
edit book info (and create new books, if you have enough time to
implement it). Once you are done with the challenge, please fire up a
Pull Request and the team will follow up.

## Brief

I am a user of the app and I want to create a book object and edit
previously provided info about it, so that my reading list can stay up
to date. The form should be split into three steps:

1.  Choose subject (one of the two).
2.  Depending on the selection in the first step, display a list of
    reading material. Choose one.
3.  When reading material chosen, display all the info that's available
    about the book in a form (meaning that the book info can be edited).

## Requirements

*   All steps should be visible on the screen and changable at all times
    (when they are available -- step 1 when nothing is picked, step 1
    and 2 when step 1 is picked and step 1, 2 and 3 when step 2 is
    picked).

*   You can use whatever libraries, task runners and build processes you
    like. React and plain JavaScript are the only requirements (ES6
    encouraged, but no TypeScript, CoffeeScript, etc). Redux is strongly
    encouraged if you see a need for it.

### Suggested order of completion

This depends on how much time you were given to accomplish the task.
Ideally you would provide a solution for each of the outlined steps
unless they are marked as optional.

1.  Data fetching from the api.
2.  Form steps logic.
3.  Unit tests
4.  (optional) Saving the data.
5.  (optional) Styling (minor for a 2-3 h challenge, more if there's more time).

## API Usage

API can be launched using `npm start`. You will need to run `npm
install` once starting working on the project to install dependencies.

| Endpoint                     | Result                                              |
|------------------------------|-----------------------------------------------------|
| /books?subjects_like=Fiction | Lists all books that contain "Fiction" as a subject |
| /subjects                    | Lists all available subjects                        |

---

More info about API usage can be found at the [json-server
repo](https://github.com/typicode/json-server).

