import type { NextApiRequest, NextApiResponse } from 'next';
import { ProjectsType } from 'types';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Array<ProjectsType>>
) {
  res.status(200).json([
    {
      image: '/static/images/projects-manager-preview.webp',
      title: 'Projects Manager',
      description:
        'Projects manager app. Created with Next.js, GraphQL and MongoDB',
      url: 'https://projects-manager.alejandrosandi.com/',
      github: 'https://github.com/alejandrosandi22/projects',
      createdAt: 'Mar, 2022',
      endAt: 'April, 2022',
    },
    {
      image: '/static/images/chat-preview.webp',
      title: 'Chat',
      description:
        'This is a web app where you can chat with other people. Created with Vue js and Firebase',
      url: 'https://chat.alejandrosandi.com',
      github: 'https://github.com/alejandrosandi22/chat',
      createdAt: 'Dec, 2021',
      endAt: 'Jan, 2022',
    },
    {
      image: '/static/images/payment-manager-preview.webp',
      title: 'Payment Manager',
      description:
        "Client's payment manager of a gym. Created with React, Typescript, Node.js and PostgreSQL.",
      url: 'https://payment-manager.alejandrosandi.com/',
      github: 'https://github.com/alejandrosandi22/gym-manage-frontend',
      createdAt: 'Mar, 2022',
      endAt: 'Mar, 2022',
    },
    {
      image: '/static/images/tic-tac-toe-preview.webp',
      title: 'Tic Tac Toe',
      description:
        'Tic tac toe game is the classic game noughts and crosses, is twith multiplayer or local mode. Created with Vue js and Firebase.',
      url: 'https://tic-tac-toe.alejandrosandi.com',
      github: 'https://github.com/alejandrosandi22/tic-tac-toe',
      createdAt: 'Jan, 2022',
      endAt: 'Feb, 2022',
    },
    {
      image: '/static/images/pomodoro-preview.webp',
      title: 'Pomodoro',
      description:
        'The Pomodoro technique is a method to improve the management of the time dedicated to an activity. Created with React js and Typescript',
      url: 'https://pomodoro.alejandrosandi.com',
      github: 'https://github.com/alejandrosandi22/pomodoro',
      createdAt: 'Mar, 2022',
      endAt: 'Mar, 2022',
    },
    {
      image: '/static/images/memory-preview.webp',
      title: 'Memory',
      description:
        'Memory game, where the score of each player is saved in a global ranking. Created with Angular and Firebase.',
      url: 'https://memory.alejandrosandi.com',
      github: 'https://github.com/alejandrosandi22/memory',
      createdAt: 'Jan, 2022',
      endAt: 'Feb, 2022',
    },
  ]);
}

/* {
    image: '/static/images/sp-api-preview.webp',
    title: 'SP-API',
    description:
      'Is an api of soccer products to use in a e-commerce. Created with Next.js, Typescript and MongoDB',
    url: 'https://sp-api.alejandrosandi.com/',
    github: 'https://github.com/alejandrosandi22/sp-api',
    createdAt: 'May, 2022',
    endAt: 'Jun, 2022',
  }, */
