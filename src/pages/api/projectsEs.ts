import type { NextApiRequest, NextApiResponse } from 'next';
import { ProjectsType } from 'types';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Array<ProjectsType>>
) {
  res.status(200).json([
    {
      image: '/static/images/projects-manager-preview.webp',
      title: 'Administrador de Proyectos',
      description:
        'Una aplicación web de administrador de proyectos. Creado con Next.js, GraphQL y MongoDB',
      url: 'https://projects-manager.alejandrosandi.com/',
      github: 'https://github.com/alejandrosandi22/projects',
      createdAt: 'Mar, 2022',
      endAt: 'Abril, 2022',
    },
    {
      image: '/static/images/chat-preview.webp',
      title: 'Chat',
      description: 'Una aplicación web de chat. Creado con Vue js y Firebase',
      url: 'https://chat.alejandrosandi.com',
      github: 'https://github.com/alejandrosandi22/chat',
      createdAt: 'Dec, 2021',
      endAt: 'Enero, 2022',
    },
    {
      image: '/static/images/payment-manager-preview.webp',
      title: 'Administrador de Pagos',
      description:
        'Un administrador de pagos para un gimnasio. Creado con React, Typescript, Node.js y PostgreSQL.',
      url: 'https://payment-manager.alejandrosandi.com/',
      github: 'https://github.com/alejandrosandi22/gym-manage-frontend',
      createdAt: 'Mar, 2022',
      endAt: 'Mar, 2022',
    },
    {
      image: '/static/images/tic-tac-toe-preview.webp',
      title: 'Tres en raya',
      description:
        'El clásico juego de gato o tres en raya, con la opción de jugar online o local. Creado con Vue js y Firebase.',
      url: 'https://tic-tac-toe.alejandrosandi.com',
      github: 'https://github.com/alejandrosandi22/tic-tac-toe',
      createdAt: 'Enero, 2022',
      endAt: 'Feb, 2022',
    },
    {
      image: '/static/images/pomodoro-preview.webp',
      title: 'Pomodoro',
      description:
        'La técnica Pomodoro es un método para mejorar la gestión del tiempo dedicado a una actividad. Creado con React y Typescript',
      url: 'https://pomodoro.alejandrosandi.com',
      github: 'https://github.com/alejandrosandi22/pomodoro',
      createdAt: 'Mar, 2022',
      endAt: 'Mar, 2022',
    },
    {
      image: '/static/images/memory-preview.webp',
      title: 'Juego Memoria',
      description:
        'Juego de memoria, donde el puntaje es guardado en un rankinkg. Creado con Angular y Firebase.',
      url: 'https://memory.alejandrosandi.com',
      github: 'https://github.com/alejandrosandi22/memory',
      createdAt: 'Enero, 2022',
      endAt: 'Feb, 2022',
    },
  ]);
}

/*     {
      image: '/static/images/sp-api-preview.webp',
      title: 'SP-API',
      description:
        'Una api de productos de fútobl para utilizar en un e-commerce. Creado con Next.js, Typescript y MongoDB',
      url: 'https://sp-api.alejandrosandi.com/',
      github: 'https://github.com/alejandrosandi22/sp-api',
      createdAt: 'May, 2022',
      endAt: 'Jun, 2022',
    }, */
