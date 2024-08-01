import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PropTypes from "prop-types";
import { CardMedia, List, Typography } from "@mui/material";

// displayCard Component to hold card design and props
const DisplayCard = ({ fullName, bio, imgSrc, profession }) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia component="img" height="140" image={imgSrc} />
      <CardContent className="text-center">
        <List className="text-ellipsis">
          <Typography variant="h5" color="text.secondary">
            {fullName}
          </Typography>
          <Typography className="pb-4 pt-4">{bio}</Typography>
          <Typography variant="h6">Profession: {profession}</Typography>
        </List>
      </CardContent>
    </Card>
  );
};

DisplayCard.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  imgSrc: PropTypes.string,
  profession: PropTypes.string,
};

export default DisplayCard;
