import type { NextApiRequest, NextApiResponse } from 'next';
import { ProjectsType } from 'types';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Array<ProjectsType>>
) {
  res.status(200).json([
    {
      image: 'https://i.ibb.co/Gx7xDhc/sp-api-preview.png',
      title: 'SP-API',
      description:
        'Is an api of soccer products to use in a e-commerce. Created with Next.js, Typescript and MongoDB',
      url: 'https://sp-api.alejandrosandi.com/',
      github: 'https://github.com/alejandrosandi22/sp-api',
      createdAt: 'May, 2022',
      endAt: 'Jun, 2022',
    },
    {
      image: 'https://i.ibb.co/QQTpL8Z/projects-manager-preview.png',
      title: 'Projects',
      description:
        'Projects manager app. Created with Next.js, GraphQL and MongoDB',
      url: 'https://projects-manager.alejandrosandi.com/',
      github: 'https://github.com/alejandrosandi22/projects',
      createdAt: 'Mar, 2022',
      endAt: 'April, 2022',
    },
    {
      image: 'https://i.ibb.co/Z8Vm8rZ/chat-preview.png',
      title: 'Chat',
      description:
        'This is a web app where you can chat with other people. Created with Vue js and Firebase',
      url: 'https://chat.alejandrosandi.com',
      github: 'https://github.com/alejandrosandi22/chat',
      createdAt: 'Dec, 2021',
      endAt: 'Jan, 2022',
    },
    {
      image: 'https://i.ibb.co/6XqxnZg/payment-manager-preview.png',
      title: 'Payment Manager',
      description:
        "Client's payment manager of a gym. Created with React, Typescript, Node.js and PostgreSQL.",
      url: 'https://payment-manager.alejandrosandi.com/',
      github: 'https://github.com/alejandrosandi22/gym-manage-frontend',
      createdAt: 'Mar, 2022',
      endAt: 'Mar, 2022',
    },
    {
      image: 'https://i.ibb.co/TwFNWCG/tic-tac-toe-preview.png',
      title: 'Tic Tac Toe',
      description:
        'Tic tac toe game is the classic game noughts and crosses, is twith multiplayer or local mode. Created with Vue js and Firebase.',
      url: 'https://tic-tac-toe.alejandrosandi.com',
      github: 'https://github.com/alejandrosandi22/tic-tac-toe',
      createdAt: 'Jan, 2022',
      endAt: 'Feb, 2022',
    },
    {
      image: 'https://i.ibb.co/7QsGB06/pomodoro-preview.png',
      title: 'Pomodoro',
      description:
        'The Pomodoro technique is a method to improve the management of the time dedicated to an activity. Created with React js and Typescript',
      url: 'https://pomodoro.alejandrosandi.com',
      github: 'https://github.com/alejandrosandi22/pomodoro',
      createdAt: 'Mar, 2022',
      endAt: 'Mar, 2022',
    },
    {
      image: 'https://i.ibb.co/TkyCg2t/memory-preview.png',
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