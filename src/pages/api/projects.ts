import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Array<any>>
) {
  res.status(200).json([
    {
      image: "https://i.ibb.co/wRSGzx9/projects-manager-preview.png",
      title: "Projects",
      description:
        "Projects manager app. Created with Next JS, GraphQL and MongoDB",
      url: "https://projects-manager.alejandrosandi.com/",
      github: "https://github.com/AleSandi22/projects",
      createdAt: "Mar, 2022",
      endAt: "April, 2022",
    },
    {
      image: "https://i.ibb.co/vwJdFJr/chat-preview.png",
      title: "Chat",
      description:
        "This is a web app where you can chat with other people. Created with Vue js and Firebase",
      url: "https://chat.alejandrosandi.com",
      github: "https://github.com/AleSandi22/chat",
      createdAt: "Dec, 2021",
      endAt: "Jan, 2022",
    },
    {
      image: "https://i.ibb.co/V3BTLQG/gym-manage-preview.png",
      title: "Payment Manager",
      description:
        "Client's payment manager of a gym. Created with React, Typescript, Node.js and PostgreSQL.",
      url: "https://payment-manager.alejandrosandi.com/",
      github: "https://github.com/AleSandi22/gym-manage-frontend",
      createdAt: "Mar, 2022",
      endAt: "Mar, 2022",
    },
    {
      image: "https://i.ibb.co/27kRrQb/tic-tac-toe.png",
      title: "Tic Tac Toe",
      description:
        "Tic tac toe game is the classic game noughts and crosses, is twith multiplayer or local mode. Created with Vue js and Firebase.",
      url: "https://tic-tac-toe.alejandrosandi.com",
      github: "https://github.com/AleSandi22/tic-tac-toe",
      createdAt: "Jan, 2022",
      endAt: "Feb, 2022",
    },
    {
      image: "https://i.ibb.co/K5kJ2WF/pomodoro-preview.png",
      title: "Pomodoro",
      description:
        "The Pomodoro technique is a method to improve the management of the time dedicated to an activity. Created with React js and Typescript",
      url: "https://pomodoro.alejandrosandi.com",
      github: "https://github.com/AleSandi22/pomodoro",
      createdAt: "Mar, 2022",
      endAt: "Mar, 2022",
    },
    {
      image: "https://i.ibb.co/VQkS3F4/memory-preview.png",
      title: "Memory",
      description:
        "Memory game, where the score of each player is saved in a global ranking. Created with Angular and Firebase.",
      url: "https://memory.alejandrosandi.com",
      github: "https://github.com/AleSandi22/memory",
      createdAt: "Jan, 2022",
      endAt: "Feb, 2022",
    },
  ]);
}
