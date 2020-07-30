import { createContext } from 'react';

const TweetsContext = createContext({
    tweets: [],
    handleOnNewTweet: () => {}
});

export default TweetsContext;
