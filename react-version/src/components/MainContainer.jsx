import Button from '@mui/material/Button';

import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

// import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useEffect } from 'react';

export default function MainContainer(props) {
  useEffect(() => {
    document.body.style.backgroundColor = props.backgroundColor;
    document.body.style.transition = "background-color 0.8s ease";
  }, [props.backgroundColor]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth=""

      >
        <Box
          id="quote-box"
          sx={{
            bgcolor: '#cfe8fc', height: 400, width: 750,
            borderRadius: '16px',
            mx: 'auto',
            mt: 15,
            borderColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            transition: 'all 0.8 ease'
          }}
          style={{
            color: props.backgroundColor
          }}
        >

          <Box component="section"
            id="text"
            sx={{
              // width: 650, border: '1px solid grey',
              m: 5,
              mb: 2,
              // mx:2,
              p: 2,
              height: 200,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontWeight: 'medium',
              fontSize: 28

            }}>
            {props.quote}
          </Box>
          <Box
            component="section"
            id="author"
            sx={{
              width: 650,
              // border: '1px solid grey',
              m: 2,
              // mx:2,
              px: 5,
              height: 100,
              textAlign: 'right',
              fontWeight: 'bold',
              fontStyle: 'oblique'
            }}>
            - {props.author}
          </Box>


          {/* <Button variant="contained">Hello world</Button>
          <Button variant="contained">Hello world</Button> */}
          {/* <Box
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              mb: 2,
              alignItems: 'end',
              justifyContent: 'end'
            }}>
            <Button
              id="new-quote"
              variant="contained"
              onClick={props.fetchQuote}
              style={{
                background: props.backgroundColor
              }}
            >New Quote</Button>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            mb: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <a
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text="${props.quote}" - ${props.author}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'white',
                padding: '10px 20px',
                backgroundColor: '#1DA1F2',
                borderRadius: '5px',
                fontWeight: 'bold',
                fontSize: '16px',
              }}
            >
              <i className="fab fa-twitter" style={{ marginRight: '8px', fontSize: '20px' }}></i>
            </a>
          </Box> */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',  
              mb: 2,
              alignItems: 'center', 
              justifyContent: 'center',
              gap: '20px' 
            }}
          >

            <Button
              id="new-quote"
              variant="contained"
              style={{
                background: '#cfe8fc',
                borderColor: props.backgroundColor
              }}
            >
              <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text="${props.quote}" - ${props.author}`}
                target="_blank"
                rel="noopener noreferrer"

              >
                <i className="fab fa-twitter" style={{ margin: '8px', color: props.backgroundColor, fontSize: '25px' }}></i> {/* Twitter icon */}
                {/* Tweet Quote */}
              </a>

            </Button>

            {/* New Quote Button */}
            <Button
              id="new-quote"
              variant="contained"
              onClick={props.fetchQuote}
              style={{
                background: props.backgroundColor
              }}
            >
              New Quote
            </Button>
          </Box>


        </Box>
        {/* <Box sx={{ bgcolor: '#cfe8fc', width: 800, height: '100vh' ,color: 'success.main' }} /> */}
      </Container>
    </React.Fragment>
  );
}