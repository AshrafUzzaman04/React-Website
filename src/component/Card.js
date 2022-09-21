/* eslint-disable react/jsx-no-undef */
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import Img from "../image/Card (9).jpg";

export default function MediaCard(props) {
  const { name, about, image } = props.setMediaCard;

  return (
    <div className="mx-auto mt-10">
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <div className="hover:bg-[#90fff92f]">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {about}
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
          </div>
        </Card>
      </div>
    </div>
  );
}
