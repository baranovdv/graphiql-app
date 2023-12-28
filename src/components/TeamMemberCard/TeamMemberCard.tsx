import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { TeamMemberCardProps } from '../../interfaces/interfaces';

export default function TeamMemberCard({
  name,
  img,
  bio,
  github,
}: TeamMemberCardProps) {
  const [isShowmore, setIsShowmore] = useState<boolean>(false);

  const toggleShowmore = () => setIsShowmore(!isShowmore);

  return (
    <Card
      sx={{
        width: '320px',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: '3%',
        padding: '1rem 1.5rem',
        margin: '1rem 0',
        boxShadow: '-4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <CardMedia
        sx={{
          height: '150px',
          aspectRatio: '1 / 1',
          margin: 'auto',
          borderRadius: '50%',
          marginTop: '1rem',
        }}
        image={img}
        title="photo"
      />
      <CardContent sx={{ textAlign: 'justify' }}>
        <Link href={github} color="inherit" underline="hover">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            fontWeight="700"
          >
            {name}
            <GitHubIcon sx={{ marginLeft: 2 }} />
          </Typography>
        </Link>

        <Typography variant="body2" fontSize="1rem" fontWeight="600">
          {isShowmore ? bio : `${bio.substring(0, 120)}...`}
          <Button
            size="small"
            onClick={toggleShowmore}
            sx={{
              color: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            {isShowmore ? 'Show Less' : 'Show More'}
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
}
