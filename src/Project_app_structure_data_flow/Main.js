import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import AddPosts from "./features/posts/AddPosts";

import React from "react";

import PostList from "./features/posts/PostList";

const Main = () => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#cfe8fc", height: "200vh" }}>
          <Grid container spacing={3}>
            <Grid xs></Grid>
            <Grid xs={6} sx={{ mt: 4, mb: 4 }}>
              <h1>Add a new Post</h1>
              <AddPosts />
              <PostList />
            </Grid>
            <Grid xs></Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Main;
