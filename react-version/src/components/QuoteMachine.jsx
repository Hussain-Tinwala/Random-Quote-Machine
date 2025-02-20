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
  };

  return (
    <div className="quote-machine">
      <h1>Quote Machine</h1>
      <MainContainer quote={quote} author={author} fetchQuote={fetchQuote}/>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>"{quote}"</p>
          <p>- {author}</p>
        </div>
      )}
    </div>
  );
}

export default QuoteMachine;
