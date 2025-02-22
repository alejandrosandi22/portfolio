import FirebaseIcon from '@/assets/svg/FirebaseIcon';
import NestJSIcon from '@/assets/svg/NestJSIcon';
import NextJSIcon from '@/assets/svg/NextJSIcon';
import PostgreSQLIcon from '@/assets/svg/PostgreSQLIcon';
import PythonIcon from '@/assets/svg/PythonIcon';
import TypeScriptIcon from '@/assets/svg/TypeScriptIcon';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section id='projects' className='mb-48 mt-10 lg:mt-24'>
      <div className='mb-24 flex w-full flex-col items-center'>
        <span className='mb-2 bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text font-migra text-base font-medium text-transparent'>
          Selected Projects
        </span>
        <h2 className='w-full px-5 text-center text-3xl font-medium md:text-4xl lg:text-5xl'>
          Bringing ideas to life through code
        </h2>
      </div>
      <div className='flex w-full flex-col items-center gap-16 px-5'>
        <ProjectCard
          image='https://i.ibb.co/WcLP6f0/dashboard-shrinkr.webp'
          title='Shrinkr URL Shortener'
          description={
            <div>
              <p>
                I developed an intuitive URL shortener to simplify link sharing.
                Using Next.js and NestJS, I created a scalable and efficient
                solution. Key features include:
              </p>
              <ul className='mt-2 list-inside list-disc'>
                <li>
                  <strong>Intuitive UI:</strong> Designed for optimal user
                  experience and increased user retention.
                </li>
                <li>
                  <strong>Real-time analytics:</strong> Provides valuable
                  insights into link performance.
                </li>
                <li>
                  <strong>Robust security:</strong> Ensures data privacy and
                  protection.
                </li>
              </ul>
            </div>
          }
          path='/shrinkr'
          skills={[TypeScriptIcon, NextJSIcon, NestJSIcon, PostgreSQLIcon]}
        />
        <ProjectCard
          className='lg:flex-row-reverse'
          image='https://i.ibb.co/HhtrNfw/mpec.webp'
          title='Mily’s Perfumería Catalog'
          description={
            <div>
              <p>
                Successfully developed a fragrance catalog website that
                empowered a client to expand their sales reach. Key features
                include:
              </p>
              <ul className='mt-2 list-inside list-disc'>
                <li>
                  <strong>Intuitive product navigation</strong> for effortless
                  customer browsing.
                </li>
                <li>
                  <strong>Seamless cart management</strong> for a smooth
                  checkout experience.
                </li>
                <li>
                  <strong>WhatsApp purchase integration</strong> for convenient
                  customer interaction.
                </li>
                <li>
                  <strong>Robust communication tools</strong> for prompt user
                  support, demonstrating a strong understanding of client needs.
                </li>
              </ul>
            </div>
          }
          path='/milysperfumeria'
          skills={[TypeScriptIcon, NextJSIcon, FirebaseIcon]}
        />

        <ProjectCard
          image='https://i.ibb.co/DRcxMjH/battleship-home-screen.webp'
          title='BattleShip Game'
          description={
            <div>
              <p>
                I developed a classic Battleship game with a modern twist: local
                multiplayer. This project offers a nostalgic gaming experience
                with a fresh take on the classic board game. Key features
                include:
              </p>
              <ul className='mt-2 list-inside list-disc'>
                <li>
                  <strong>Smooth Local Multiplayer:</strong>
                  Enjoy head-to-head battles with friends on the same device.
                </li>
                <li>
                  <strong>User-Friendly Interface:</strong>
                  Intuitive design for easy gameplay.
                </li>
                <li>
                  <strong>Turn-Based Gameplay:</strong>
                  Accurate turn management ensures fair and competitive matches.
                </li>
              </ul>
            </div>
          }
          path='/battleship'
          skills={[PythonIcon]}
        />
      </div>
    </section>
  );
}

export default Projects;
