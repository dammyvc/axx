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
    <Card className=" flex justify-center pb-[50px] dark:bg-dark">
      <CardHeader floated={false} className="rounded-3xl">
        <img src={image} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center dark:text-light">
        <p className=" mt-2 mb-1 text-xl font-bold">{name}</p>
        <p className="font-light text-gray-400" textGradient>
          {position}
        </p>
        <Details {...detailsProps} />
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
