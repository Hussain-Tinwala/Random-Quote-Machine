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
    document.body.style.backgroundColor = props.backgroundColor; // Change to your desired color
    document.body.style.transition = "background-color 0.8s ease";
  }, [props.backgroundColor]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth=""

      >
        <Box sx={{
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

          <Box component="section" sx={{
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
          <Box component="section" sx={{
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              mb: 2,
              alignItems: 'end',
              justifyContent: 'end'
            }}>
            <Button variant="contained"
              onClick={props.fetchQuote}
              style={{
                background: props.backgroundColor
              }}
            >New Quote</Button>
          </Box>

        </Box>
        {/* <Box sx={{ bgcolor: '#cfe8fc', width: 800, height: '100vh' ,color: 'success.main' }} /> */}
      </Container>
    </React.Fragment>
  );
}