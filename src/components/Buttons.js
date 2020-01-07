import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AlarmIcon from "@material-ui/icons/Alarm";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export default function ContainedButtons() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Contained Buttons
      </Typography>
      <Grid container spacing={1} justify="center">
        <Grid item>
          <Button variant="contained">Default</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" disabled>
            Disabled
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" disableElevation>
            Disable elevation
          </Button>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom>
        Text Buttons
      </Typography>
      <Grid container spacing={1} justify="center">
        <Grid item>
          <Button>Default</Button>
        </Grid>
        <Grid item>
          <Button color="primary">Primary</Button>
        </Grid>
        <Grid item>
          <Button color="secondary">Secondary</Button>
        </Grid>
        <Grid item>
          <Button disabled>Disabled</Button>
        </Grid>
        <Grid item>
          <Button href="#text-buttons">Link</Button>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom>
        Outlined Buttons
      </Typography>
      <Grid container spacing={1} justify="center">
        <Grid item>
          <Button variant="outlined">Default</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" href="#outlined-buttons">
            Link
          </Button>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom>
        ButtonGroup
      </Typography>
      <Grid container spacing={1} justify="center">
        <Grid item>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Grid>
        <Grid item>
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Grid>
        <Grid item>
          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="text primary button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom>
        Group sizes and colors
      </Typography>
      <Grid container spacing={1} justify="center">
        <Grid item>
          <ButtonGroup size="small" aria-label="small outlined button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Grid>
        <Grid item>
          <ButtonGroup
            color="secondary"
            aria-label="outlined secondary button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Grid>
        <Grid item>
          <ButtonGroup
            size="large"
            color="primary"
            aria-label="large outlined primary button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom>
        Group orientation
      </Typography>
      <Grid container spacing={1} justify="center">
        <Grid item>
          <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical outlined primary button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom>
        Floating Action Buttons
      </Typography>
      <Grid container spacing={1} justify="center">
        <Grid item>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Grid>
        <Grid item>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
        </Grid>
        <Grid item>
          <Fab variant="extended">
            <NavigationIcon />
            Navigate
          </Fab>
        </Grid>
        <Grid item>
          <Fab disabled aria-label="like">
            <FavoriteIcon />
          </Fab>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom>
        Icon Buttons
      </Typography>
      <Grid container spacing={1} justify="center">
        <Grid item>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="delete" disabled color="primary">
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="secondary" aria-label="add an alarm">
            <AlarmIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
