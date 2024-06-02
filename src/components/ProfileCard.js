import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react';
import Details from './Details'; // Make sure to import Details component

const ProfileCard = ({ image, name, position, detailsProps }) => {
  return (
    <Card className=" flex justify-center pb-[50px]">
      <CardHeader floated={false} className="rounded-3xl">
        <img src={image} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {position}
        </Typography>
        <Details {...detailsProps} />
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
