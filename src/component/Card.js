/* eslint-disable react/jsx-no-undef */
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image1 from "../image/Card (7).jpg";
import { Rating } from "@mui/material";

export default function MediaCard(props) {
  const name = props.setMediaCard.name;

  return (
    <div className="mx-auto mt-10">
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={image1}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Rating
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
              className="my-3"
            />
          </CardContent>

          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Submit</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
