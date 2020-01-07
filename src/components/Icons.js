import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import ThreeDRotationIcon from "@material-ui/icons/ThreeDRotation";
import FourKIcon from "@material-ui/icons/FourK";
import ThreeSixtyIcon from "@material-ui/icons/ThreeSixty";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary
  }
}));

export default function SvgMaterialIcons() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={4}>
          <Typography>Filled</Typography>
        </Grid>
        <Grid item xs={8}>
          <DeleteIcon />
          <DeleteForeverIcon />
        </Grid>
        <Grid item xs={4}>
          <Typography>Outlined</Typography>
        </Grid>
        <Grid item xs={8}>
          <DeleteOutlinedIcon />
          <DeleteForeverOutlinedIcon />
        </Grid>
        <Grid item xs={4}>
          <Typography>Rounded</Typography>
        </Grid>
        <Grid item xs={8}>
          <DeleteRoundedIcon />
          <DeleteForeverRoundedIcon />
        </Grid>
        <Grid item xs={4}>
          <Typography>Two Tone</Typography>
        </Grid>
        <Grid item xs={8}>
          <DeleteTwoToneIcon />
          <DeleteForeverTwoToneIcon />
        </Grid>
        <Grid item xs={4}>
          <Typography>Sharp</Typography>
        </Grid>
        <Grid item xs={8}>
          <DeleteSharpIcon />
          <DeleteForeverSharpIcon />
        </Grid>
        <Grid item xs={4}>
          <Typography>Edge-cases</Typography>
        </Grid>
        <Grid item xs={8}>
          <ThreeDRotationIcon />
          <FourKIcon />
          <ThreeSixtyIcon />
        </Grid>
      </Grid>
      <h4>Colors</h4>
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <h4>Sizes</h4>
      <HomeIcon fontSize="small" />
      <HomeIcon />
      <HomeIcon fontSize="large" />
      <HomeIcon style={{ fontSize: 40 }} />
    </>
  );
}
