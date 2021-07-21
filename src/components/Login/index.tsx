import { ReactElement, useContext } from 'react';
import firebase from 'firebase';
import { Box, Button, Container, Grid } from "@material-ui/core";
const Login = (): ReactElement => {
  return (
    <Container>
      <Grid
        container
        style={{
          height: window.innerHeight - 50
        }}
        alignItems="center"
        justify="center"
      >
        <Grid
          container
          style={{
            width: 400,
            backgroundColor: 'lightgray',
          }}
          alignItems="center"
          direction="column"
        >
          <Box p={5}>
            <Button
              variant="outlined"
            >
              Login with Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
