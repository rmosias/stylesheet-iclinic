import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function Chips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Default
      </Typography>
      <Grid container justify="center" spacing={1}>
        <Grid item>
          <Chip label="Basic" />
        </Grid>
        <Grid item>
          <Chip label="Disabled" disabled />
        </Grid>
        <Grid item>
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="Clickable"
            onClick={handleClick}
          />
        </Grid>
        <Grid item>
          <Chip
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Deletable"
            onDelete={handleDelete}
          />
        </Grid>
        <Grid item>
          <Chip
            icon={<FaceIcon />}
            label="Clickable deletable"
            onClick={handleClick}
            onDelete={handleDelete}
          />
        </Grid>
        <Grid item>
          <Chip
            label="Custom delete icon"
            onClick={handleClick}
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
          />
        </Grid>
        <Grid item>
          <Chip label="Clickable Link" component="a" href="#chip" clickable />
        </Grid>
        <Grid item>
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="Primary clickable"
            clickable
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
          />
        </Grid>
        <Grid item>
          <Chip
            icon={<FaceIcon />}
            label="Primary clickable"
            clickable
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
          />
        </Grid>
        <Grid item>
          <Chip
            label="Deletable primary"
            onDelete={handleDelete}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            icon={<FaceIcon />}
            label="Deletable secondary"
            onDelete={handleDelete}
            color="secondary"
          />
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom>
        Outlined
      </Typography>
      <Grid container justify="center" spacing={1}>
        <Grid item>
          <Chip label="Basic" variant="outlined" />
        </Grid>
        <Grid item>
          <Chip label="Disabled" disabled variant="outlined" />
        </Grid>
        <Grid item>
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="Clickable"
            onClick={handleClick}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Chip
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Deletable"
            onDelete={handleDelete}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Chip
            icon={<FaceIcon />}
            label="Clickable deletable"
            onClick={handleClick}
            onDelete={handleDelete}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Chip
            label="Custom delete icon"
            onClick={handleClick}
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Chip
            label="Clickable link"
            component="a"
            href="#chip"
            clickable
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="Primary clickable"
            clickable
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Chip
            icon={<FaceIcon />}
            label="Primary clickable"
            clickable
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Chip
            label="Deletable primary"
            onDelete={handleDelete}
            color="primary"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Chip
            icon={<FaceIcon />}
            label="Deletable secondary"
            onDelete={handleDelete}
            color="secondary"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom>
        Small Chips
      </Typography>
      <Grid container justify="center" spacing={1}>
        <Grid item>
          <Chip size="small" label="Basic" />
        </Grid>
        <Grid item>
          <Chip
            size="small"
            avatar={<Avatar>M</Avatar>}
            label="Clickable"
            onClick={handleClick}
          />
        </Grid>
        <Grid item>
          <Chip
            size="small"
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Deletable"
            onDelete={handleDelete}
          />
        </Grid>
        <Grid item>
          <Chip
            size="small"
            icon={<FaceIcon />}
            label="Clickable Deletable"
            onClick={handleClick}
            onDelete={handleDelete}
          />
        </Grid>
        <Grid item>
          <Chip
            size="small"
            label="Custom delete icon"
            onClick={handleClick}
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
          />
        </Grid>
        <Grid item>
          <Chip
            size="small"
            label="Clickable Link"
            component="a"
            href="#chip"
            clickable
          />
        </Grid>
        <Grid item>
          <Chip
            size="small"
            avatar={<Avatar>M</Avatar>}
            label="Primary Clickable"
            clickable
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
          />
        </Grid>
        <Grid item>
          <Chip
            size="small"
            icon={<FaceIcon />}
            label="Primary Clickable"
            clickable
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
          />
        </Grid>
        <Grid item>
          <Chip
            size="small"
            label="Deletable Primary"
            onDelete={handleDelete}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size="small"
            icon={<FaceIcon />}
            label="Deletable Secondary"
            onDelete={handleDelete}
            color="secondary"
          />
        </Grid>
      </Grid>
    </div>
  );
}
