import axios from "axios";

const url = "https://fullstack-web-course.ew.r.appspot.com/";

export function getTweets() {
  return axios.get(`${url}/tweet`);
}


export function createTweet(newTweet) {
    return axios.post(`${url}/tweet`, { tweet: newTweet});
}