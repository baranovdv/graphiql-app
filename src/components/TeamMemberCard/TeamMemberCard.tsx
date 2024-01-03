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
import { useLocale } from '../../context/StoreContext';
import { TeamMemberCardProps } from '../../interfaces/interfaces';

export default function TeamMemberCard({
  name,
  img,
  bio,
  github,
}: TeamMemberCardProps) {
  const [isShowmore, setIsShowmore] = useState<boolean>(false);

  const toggleShowmore = () => setIsShowmore(!isShowmore);

  const { strings, currentLanguage } = useLocale();

  return (
    <Card
      sx={{
        width: '400px',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: '3%',
        padding: '1rem 1rem',
        margin: '1rem 0',
        boxShadow: '-4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        '@media(max-width: 500px)': {
          width: '320px',
        },
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
            sx={{ color: 'rgba(0, 0, 0, 0.8)' }}
          >
            {name[currentLanguage]}
            <GitHubIcon sx={{ marginLeft: 2 }} />
          </Typography>
        </Link>

        <Typography
          variant="body2"
          fontSize="1rem"
          fontWeight="600"
          sx={{ color: 'rgba(0, 0, 0, 0.6)' }}
        >
          {isShowmore
            ? bio[currentLanguage]
            : `${bio[currentLanguage].substring(0, 120)}...`}
          <Button
            size="small"
            onClick={toggleShowmore}
            sx={{
              color: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            {isShowmore ? strings.show_less : strings.show_more}
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
}
