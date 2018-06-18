# CS362-CryptoCurrencyViewer
A MERN stack Web Application, that allows users to keep track of their books. And help them read good.

---
## Screenshots:
![](https://github.com/robeartoe/readgood/blob/master/Images/userpage.png)
![](https://github.com/robeartoe/readgood/blob/master/Images/login.png)
![](https://github.com/robeartoe/readgood/blob/master/Images/AddBook.png)

## Frameworks Used:
MongoDB,Express, React, and Node.JS.

Reactstrap

## Installation:

1. Install Packages on Packages.json:
  ```bash
  npm install
  ```
2. Setup .env file:
  * A .env file needs to be created in the project folder. Holding two variables.
  ```bash
  jwtTokenSecret="sampleToken"
  secret="sampleToken"
  ```
3. Run Mongo:
  ```bash
  mongod
  ```
  * Note: MongoDB needs to be installed. More information on installing MongoDB can be found [here](https://docs.mongodb.com/manual/installation/?jmp=footer).
4. Run React and Node(on two separate terminal instances):
  ```bash
  npm start
  npm run api
  ```
