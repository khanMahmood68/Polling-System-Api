# Polling-System-Api
API for Polling Questions - Coding Ninjas Backend Skill Test Project

Task: Need to create an API where anyone can create questions with options and also add votes to it

---

## Features
- Create a question
- Add options to a question
- Add a vote to an option of question
- Delete a question 
- Delete an option 
- View a question with it’s options and all the votes given to it

## Required Routes
- /api/v1/question/create (To create a question)
- /api/v1/question/options/:id/create (To add options to a specific question)
- /api/v1/question/delete/:id(To delete a question)
- /api/v1/question/options/delete/:id/delete (To delete an option)
- /api/v1/question/options/:id/add_vote (To increment the count of votes)
- /api/v1/question/view/:id (To view a question and it’s options)

## Folder Structure
```
CSV_Upload/
|── |config/
│   |      ├── mongoose.js
|   |
├── routes/
│   |      ├── api/
│   ├── index.js
|   |
├── controllers/
│   ├── OptionsController.js
│   ├── QuestionsController.js
|   |
├── models/
│   ├── options.js
│   ├── questions.js
|   |
├── package-lock.json
├── package.json
├── README.md
