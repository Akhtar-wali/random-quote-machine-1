import React, { useState, useEffect } from 'react'
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const App = () => {

  let [quotes, setQuotes] = useState([
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { text: "Insanity is doing the same thing, over and over again, but expecting different results.", author: "Albert Einstein" },
    { text: "It is better to be hated for what you are than to be loved for what you are not.", author: "André Gide" },
    { text: "It does not do to dwell on dreams and forget to live.", author: "J.K. Rowling" },
    { text: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { text: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { text: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard" },
    { text: "A man who dares to waste one hour of time has not discovered the value of life.", author: "Charles Darwin" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "Dost thou love life? Then do not squander time, for that's the stuff life is made of.", author: "Benjamin Franklin" },
    { text: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison" },
    { text: "Keep smiling, because life is a beautiful thing and there's so much to smile about.", author: "Marilyn Monroe" },
    { text: "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.", author: "Buddha" },
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    { text: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
    { text: "The greatest pleasure of life is love.", author: "Euripides" },
    { text: "Life is made of ever so many partings welded together.", author: "Charles Dickens" },
    { text: "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.", author: "George Bernard Shaw" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "Live in the sunshine, swim the sea, drink the wild air.", author: "Ralph Waldo Emerson" },
    { text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    { text: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
    { text: "Live each day as if your life had just begun.", author: "Johann Wolfgang Von Goethe" },
    { text: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
    { text: "To succeed in life, you need two things: ignorance and confidence.", author: "Mark Twain" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "Life itself is the most wonderful fairy tale.", author: "Hans Christian Andersen" },
    { text: "Life is trying things to see if they work.", author: "Ray Bradbury" },
    { text: "Life is ten percent what happens to you and ninety percent how you respond to it.", author: "Charles R. Swindoll" },
    { text: "Life would be tragic if it weren't funny.", author: "Stephen Hawking" },
    { text: "The purpose of life is a life of purpose.", author: "Robert Byrne" },
    { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { text: "My life is my message.", author: "Mahatma Gandhi" },
    { text: "Go confidently in the direction of your dreams! Live the life you’ve imagined.", author: "Henry David Thoreau" },
    { text: "Life shrinks or expands in proportion to one’s courage.", author: "Anaïs Nin" },
    { text: "The art of life is to know how to enjoy a little and to endure very much.", author: "William Hazlitt" },
    { text: "The best way to pay for a lovely moment is to enjoy it.", author: "Richard Bach" },
    { text: "To live is so startling it leaves little time for anything else.", author: "Emily Dickinson" },
    { text: "Only a life lived for others is a life worthwhile.", author: "Albert Einstein" }
  ]
  )
  let [quote, setQuote] = useState({
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  })
  useEffect(() => {
    //random number between 0 and quotes.length
    const randomNumber = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomNumber])
    console.log(quotes)
  }, [])
  ///rabdom color generator
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  return (
    <div className='random-quote-machine' style={{backgroundColor: randomColor}}>

<div id='quote-box' style={{backgroundColor: 'white'}}>
  <div className='quote-text' style={{color: randomColor}}>
    <FontAwesomeIcon icon={faQuoteLeft} />
    <span id='text'>{quote.text}</span>
  </div>
  <div className='quote-author'>
    <span id='author'>{quote.author}</span>
  </div>
  <div className='buttons'>
    <a 
      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`}
      id='tweet-quote'
      target='_blank'
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <button 
      id='new-quote' 
      onClick={() => {
        const randomNumber = Math.floor(Math.random() * quotes.length)
        setQuote(quotes[randomNumber])
      }}
    >
      New Quote
    </button>
  </div>
</div>

    </div>
  )
}

export default App