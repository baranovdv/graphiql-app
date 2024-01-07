import baranovdvAvatar from '../assets/img/baranovdv.jpg';
import rpg0007avatar from '../assets/img/RPGavatar.jpg';
import sanya from '../assets/img/teamMember_Aliaksandr.png';
import { TeamMemberCardProps } from '../interfaces/interfaces';

const teamData: TeamMemberCardProps[] = [
  {
    id: 1,
    name: { En: 'Dmitry', Ру: 'Дмитрий' },
    img: baranovdvAvatar,
    bio: {
      En: 'I am an engineer with over 13 years of experience in hardware development, service and automation. I started studying web development from December 2022 at RS School from Stage 0.',
      Ру: `Я инженер с более чем 13\u2011летним опытом разработки, обслуживания и автоматизации оборудования. Я начал изучать веб\u2011разработку с декабря 2022 года в RS School с 0 ступени.`,
    },
    github: 'https://github.com/baranovdv/',
  },
  {
    id: 2,
    name: { En: 'Konstantin', Ру: 'Константин' },
    img: rpg0007avatar,
    bio: {
      En: 'I decided to become FrontEnd developer and maybe a FullStack later on.I enrolled in RSSchool React Course in October 2023, also finished Stage 1/2 of RSS FrontEnd Course 2022/2023. Had a fun time and took a lot of knowledge in.',
      Ру: 'Я решил стать FrontEnd-разработчиком, а позже, возможно, FullStack. Я записался на курс RSSchool React в октябре 2023 года, а также закончил этап 1/2 курса RSS FrontEnd 2022/2023. Было очень интересно и я получили много знаний.',
    },
    github: 'https://github.com/rpg0007/',
  },
  {
    id: 3,
    name: { En: 'Aleksandr', Ру: 'Александр' },
    img: sanya,
    bio: {
      En: 'I like solving logic problems and have a lot of free time, so I decided to entertain myself with this course',
      Ру: 'Нравится решать логические задачки и много свободного времени, поэтому решил развлечь себя этим курсом',
    },
    github: 'https://github.com/baranovdv/',
  },
];

export default teamData;
