import avatar from '../assets/img/avatar.png';
import baranovdvAvatar from '../assets/img/baranovdv.jpg';
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
    img: avatar,
    bio: {
      En: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      Ру: 'Важно заботиться о больном, чтобы за ним следили, но это произойдет в такое время, когда будет много работы и боли. Если говорить до мельчайших подробностей, то никто не должен заниматься никакой работой, если не получит от нее какой-либо пользы. Не сердись на боль, на выговор, на удовольствие он хочет быть волоском от боли в надежде, что не будет размножения. Если не ослеплены похотью, не выходят, виноваты те, кто бросает свои обязанности, душа смягчается, то есть трудится',
    },
    github: 'https://github.com/baranovdv/',
  },
  {
    id: 3,
    name: { En: 'Aleksandr', Ру: 'Александр' },
    img: avatar,
    bio: {
      En: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      Ру: 'Важно заботиться о больном, чтобы за ним следили, но это произойдет в такое время, когда будет много работы и боли. Если говорить до мельчайших подробностей, то никто не должен заниматься никакой работой, если не получит от нее какой-либо пользы. Не сердись на боль, на выговор, на удовольствие он хочет быть волоском от боли в надежде, что не будет размножения. Если не ослеплены похотью, не выходят, виноваты те, кто бросает свои обязанности, душа смягчается, то есть трудится',
    },
    github: 'https://github.com/baranovdv/',
  },
];

export default teamData;
