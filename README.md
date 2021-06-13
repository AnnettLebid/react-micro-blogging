# MicroBlogging Web App 

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)

## General info
A fully functional micro blogging web app. 
It was created according to the technical documentation. The main requirements:

1. Main screen with two parts: create tweet, and tweets list Create tweet should block the tweet creation if there are more than 140 chars (need to make the button disabled) The tweets should be saved locally, so if I refresh the page they won’t be deleted the tweet list should be sorted in descending order, the latest tweet should appear first (the order should remain after refreshing the page) The username should be saved hard-coded for now (so you will be able to add it to each tweet you create).
The design is provided through Figma.

2. Move the local app data (for keeping the data between each refresh), to a server: https://fullstack-web-course.ew.r.appspot.com/ The server has one resource exposed: “/tweet”, make requests to presenting the list of tweets, and to create a new tweet The tweet object is as follows: { content: string, userName: string, date: string (ISO date) } Save the tweet to the server on tweet post, and show the list of tweets from the server Show loading indicator, and prevent from adding a new tweet when adding request is in the background Do not forget to remove the code from the first milestone that saves the data locally, you don’t want to have them both Display server errors to the user if the tweet is not added.

3. Features: Add another page that presents the current user username (which should be hard coded until now), and has a form to change the username. You should save the new username locally whenever changed, and send it to the server when creating a new tweet. Add a navbar to the top of the screen that keeps its position no matter which page you are at, with “Home” and “Profile” links. The design is in the second line of screen in figma (it is a private link).

4. Features: Instead of using state and props, use context for the tweets list and creating new tweet When creating new tweet, do not refresh the list, but add the tweet to the existing local list Instead set an interval that gets updates from the server of tweets, in case someone else added a tweet (to keep the list updated).

5. Features: Add deployment to firebase so your app will be available from a remote server Create a new firebase project.

## Technologies
Project is created with:
* React and React Context
* Node.js
* React-Bootstrap
* Firebase
	
