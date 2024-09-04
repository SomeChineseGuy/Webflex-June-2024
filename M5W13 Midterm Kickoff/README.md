## MidTerms Kickoff!

- [ ] Mid-Terms
- [ ] "MVD" / "MVP"
- [ ] Choosing a Project
- [ ] Your Approach
- [ ] MPA or SPA, that is the Question!
- [ ] Saving Time
- [ ] How to Plan your Project

## Midterms What to expect

- Same kind of project like your tiny app or tweeter
- 2 Weeks and presentation will be on the second thursday
- How are you scored?
- Teamwork, communication - we recommend having meetings with EVERYONE on the team. Either by text or a general call
- Github - looking at commits, merge conflicts
- Code Style

## Picking a project

## User Story

- As a **_, I can _**, because \_\_\_

- As a logged in user, I can see a list of availables maps, because I'm interested in things in my area
- As a logged in user, I can add pins to a map, because I want to share them with others

End to end testing

- as a ** I can do **
- end to end test everything that a \_\_\_ can do

- We want to write user stories for every single feature

## ERD

- The user stories will provide you with all of the nouns (eg: users, post, favorites)
- These nouns will give you your information for your tables.

## MVP vs MVD

- MVP Minimum Viable Product
- KV came up wit MVD
- Minimum Viable Demo
- If you aren't going to demo it, DO NOT build it

## Wireframe

- Draw out the structure of your app
- This will make it easier to know what the app looks like and what the style is going to be

# Routes

- CRUD / BREAD

Browse GET /quiz
Read GET /quiz/:id
Edit POST /edit/quiz/:id
Add POST /add/quiz
Delete POST /delete/quiz/:id

Homepage - /
Add Page - /quiz/add
Login Page - /login

## Login

- Make login SUPER basic with no hash and no salt
- email - 1@1.com
- password - 1

```js
app.get('/login/:id', (req, res) => {
  // use Cookies
  req.session.user_id = req.params.id;

  res.redirect('/');
});
```
