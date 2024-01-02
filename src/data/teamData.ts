import avatar from '../assets/img/avatar.png';
import baranovdvAvatar from '../assets/img/baranovdv.jpg';
import rpg0007avatar from '../assets/img/RPGavatar.jpg';
import { TeamMemberCardProps } from '../interfaces/interfaces';

const teamData: TeamMemberCardProps[] = [
  {
    name: 'Dmitry',
    img: baranovdvAvatar,
    bio: 'I am an engineer with over 13 years of experience in hardware development, service and automation. I started studying web development from December 2022 at RS School from Stage 0.',
    github: 'https://github.com/baranovdv/',
  },
  {
    name: 'Konstantin',
    img: rpg0007avatar,
    bio: 'I decided to become FrontEnd developer and maybe a FullStack later on.I enrolled in RSSchool React Course in October 2023, also finished Stage 1/2 of RSS FrontEnd Course 2022/2023. Had a fun time and took a lot of knowledge in.',
    github: 'https://github.com/rpg0007/',
  },
  {
    name: 'Aleksandr',
    img: avatar,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    github: 'https://github.com/baranovdv/',
  },
];

export default teamData;
