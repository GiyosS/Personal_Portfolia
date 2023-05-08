import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import React from "react";

import { useSelector } from "react-redux";

import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";
import { selectAllUsers } from "./postsSlice";

const PostList = () => {
  const posts = useSelector(selectAllUsers);

  // sorting posts with younger time
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <Card sx={{ maxWidth: 345, m: 1 }} key={post.id}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.content.substring(0, 100)}
        </Typography>
        <p>
          <PostAuthor userId={post.userId} />
        </p>
        <p>
          <TimeAgo timestamp={post.date} />
        </p>
      </CardContent>
      <CardActions>
        <ReactionButtons post={post} />
      </CardActions>
    </Card>
  ));
  return <div>{renderedPosts}</div>;
};

export default PostList;
