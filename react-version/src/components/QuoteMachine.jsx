import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainContainer from './MainContainer';
import Button from '@mui/material/Button';

import { motion } from "motion/react"

function QuoteMachine() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
  }, []);

  const backgroundColors = ["#0c034d", "#FF5722", "#2196F3", "#4CAF50", "#9C27B0", "#E91E63"];
  const textColors = ["#FFFFFF", "#000000", "#FF5722", "#9C27B0", "#FFFFFF", "#795548"];

  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("#000000");

  const fetchQuote = () => {
    setLoading(true);
    axios
      .get('https://dummyjson.com/quotes/random') // API URL
      .then((response) => {
        console.log(response)
        setQuote(response.data.quote);
        setAuthor(response.data.author);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching quote:', error);
        setLoading(false);
      });

      const newBackgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
      const newTextColor = textColors[Math.floor(Math.random() * textColors.length)];

      setBackgroundColor(newBackgroundColor);
      setTextColor(newTextColor);
  };

  return (
    <div className="quote-machine">
      {/* <h1>Quote Machine</h1> */}
      <MainContainer quote={quote} author={author} fetchQuote={fetchQuote}
          backgroundColor={backgroundColor} 
          textColor={textColor}
      />
      {/* {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>"{quote}"</p>
          <p>- {author}</p>
        </div>
      )} */}
    </div>
  );
}

export default QuoteMachine;
