import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

export default function Color() {
  return (
    <React.Fragment>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box color="primary.light">primary.light</Box>
        </Grid>
        <Grid item>
          <Box color="primary.main">primary.main</Box>
        </Grid>
        <Grid item>
          <Box color="primary.dark">primary.dark</Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box color="secondary.light">secondary.light</Box>
        </Grid>
        <Grid item>
          <Box color="secondary.main">secondary.main</Box>
        </Grid>
        <Grid item>
          <Box color="secondary.dark">secondary.dark</Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box color="error.light">error.light</Box>
        </Grid>
        <Grid item>
          <Box color="error.main">error.main</Box>
        </Grid>
        <Grid item>
          <Box color="error.dark">error.dark</Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box color="text.primary">text.primary</Box>
        </Grid>
        <Grid item>
          <Box color="text.secondary">text.secondary</Box>
        </Grid>
        <Grid item>
          <Box color="text.disabled">text.disabled</Box>
        </Grid>
        <Grid item>
          <Box color="text.hint">text.hint</Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="primary.light"
          >
            primary.light
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="primary.main"
          >
            primary.main
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="primary.dark"
          >
            primary.dark
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="secondary.light"
          >
            secondary.light
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="secondary.main"
          >
            secondary.main
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="secondary.dark"
          >
            secondary.dark
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="error.light"
          >
            error.light
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="error.main"
          >
            error.main
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="error.dark"
          >
            error.dark
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="success.light"
          >
            success.light
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="success.main"
          >
            success.main
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="success.dark"
          >
            success.dark
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="warning.light"
          >
            warning.light
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="warning.main"
          >
            warning.main
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="warning.dark"
          >
            warning.dark
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="text.primary"
            color="primary.contrastText"
          >
            text.primary
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="text.secondary"
          >
            text.secondary
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="text.disabled"
          >
            text.disabled
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="text.hint"
          >
            text.hint
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
