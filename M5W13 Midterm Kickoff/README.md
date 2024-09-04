## MidTerms Kickoff!

- [ ] Mid-Terms
- [ ] "MVD" / "MVP"
- [ ] Choosing a Project
- [ ] Your Approach
- [ ] MPA or SPA, that is the Question!
- [ ] Saving Time
- [ ] How to Plan your Project

### Pick a Project

- Wiki Map
- Quiz App
- Story Creator
- Decision Maker
- PasswordKeepR
- Smart TODO List
- Resource Wall
- Buy/Sell Listing Website
- Schoodle
- Food Pick-up Ordering

### User Stories

- A _user story_ describes how users will interact with your application
- They have the form: As a **\_\_**, I want to **\_\_**, because **\_\_**.
- eg. As a _user_, I want to _be able to save posts_, because _I want to review them later_.
- User stories can also be negated: As a **\_**, I shouldn't be able to **\_\_**, because **\_**.
- eg. As a _user_, I shouldn't be able to _edit other users posts_, because _I don't own those posts_.

### ERD

- The user stories provide you with nouns (eg. user, posts, favourites)
- Use these nouns/entities to build out your database (ie. tables are the nouns from the stories)

### Routes

- Once you know the resources that you'll have, write out the routes that you'll need to perform BREAD operations on those resources
- Remember RESTful conventions (they make it much easier)

### MVP vs MVD

- There is a concept in development of an MVP, the Minimum Viable Product
- An MVP has just enough features to be useful to a user
- This concept helps streamline the development process and help keep the team on target
- For mid-terms, we want to focus on the MVD, the Minimum Viable Demo
- **If you aren't going to demo it, don't build it**

### Wireframes

- Draw out the structure of your web pages
- This will make it much easier to build out these pages later
- This is also a great opportunity to get input from all of the team members
- Design matters... however you are a developer, not a designer
- Get inspiration from websites you visit

### User Login

- Don't do it
- Seriously, don't do it
- We know that you know how to register and login users

```js
// do this instead
app.get('/login/:id', (req, res) => {
  // using encrypted cookies
  req.session.user_id = req.params.id;

  // or using plain-text cookies
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});
```

### Tech Choices

- We have made all the tech choices for you
- Back End: Node and Express
- Front End: HTML, CSS, JS, jQuery, Bootstrap

### The Mid-term Skeleton

- Use the provided `node-skeleton` as a template for your project
- This will get you up and running quickly

### SPA vs Multi-page App

- These concepts are not mutually exclusive
- You can choose one or the other or both

### Git

- Use Git best practices (ask a mentor for clarification if you need it)
- Use branches

### DO NOT CODE ON MASTER

- I repeat, do not code on master

### Splitting up the Work

- Horizontally - each dev working on only FE, BE, or DB
- Vertically - each dev working on a slice of FE, BE, and DB
- Pair Programming - working together on the same tasks

### Communication

- Make sure to communicate with your team members
- Use Slack, iMessage, Google Hangouts, whatever... just make sure that everyone is on the same page
