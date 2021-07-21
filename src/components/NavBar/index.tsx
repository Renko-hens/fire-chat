import { ReactElement } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/constants";

const NavBar = (): ReactElement => {
  const user = false;

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid
          container
          justify={'flex-end'}
        >
          { user
            ? (
              <Button
                variant={'outlined'}
              >
                Exit
              </Button>
            )
            : (
              <NavLink
                to={LOGIN_ROUTE}
              >
                <Button
                  variant={'outlined'}
                >
                  Login
                </Button>
              </NavLink>
            )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
