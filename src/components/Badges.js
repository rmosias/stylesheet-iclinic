import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  shape: {
    backgroundColor: theme.palette.primary.main,
    width: 40,
    height: 40
  },
  shapeCircle: {
    borderRadius: "50%"
  }
}));

export default function SimpleBadge() {
  const classes = useStyles();
  const rectangle = <div className={classes.shape} />;
  const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;

  return (
    <div className={classes.root}>
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={10} color="secondary">
        <MailIcon />
      </Badge>
      <IconButton aria-label="4 pending messages">
        <Badge badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
      </IconButton>
      <h4>Dot badge</h4>
      <Badge color="primary" variant="dot">
        <MailIcon />
      </Badge>
      <Badge color="secondary" variant="dot">
        <MailIcon />
      </Badge>
      <Badge color="error" variant="dot">
        <Typography>Typography</Typography>
      </Badge>
      <h4>Badge overlap</h4>
      <Badge color="secondary" badgeContent=" ">
        {rectangle}
      </Badge>
      <Badge color="secondary" badgeContent=" " variant="dot">
        {rectangle}
      </Badge>
      <Badge color="secondary" overlap="circle" badgeContent=" ">
        {circle}
      </Badge>
      <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
        {circle}
      </Badge>
    </div>
  );
}
