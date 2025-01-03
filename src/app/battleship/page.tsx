import PythonIcon from '@/assets/svg/PythonIcon';
import HighlightedResource from '@/components/common/HighlightedResource';
import Hero from '@/components/project/Hero';
import Overview from '@/components/project/Overview';
import Process from '@/components/project/Process';
import Resources from '@/components/project/Resources';

function BattleShipProject() {
  return (
    <main>
      <Hero
        title='BattleShip Game'
        video='https://ik.imagekit.io/alejandrosandi/battleship.mp4?updatedAt=1735934432720'
        description='A two-player Battleship game, allowing players to compete against each other.'
        technologies={[PythonIcon]}
        endDate={new Date(2024, 7, 25)}
        repository='https://github.com/alejandrosandi22/battleship'
      />
      <Overview
        content={[
          'As a final project for my Programming Principles course, I undertook the development of a Battleship game using Python. The primary objective of this project was to design and implement a computer program that accurately replicated the gameplay of the traditional Battleship board game.',
          'Through this endeavor, I aimed to enhance my programming skills in Python, explore game development concepts such as game loops, user interfaces, and artificial intelligence, and create a fun and challenging gaming experience.',
        ]}
        mainObjective='To develop a playable Battleship game in Python that adhered to the traditional rules of the game while incorporating modern programming techniques.'
      />
      <Process
        challenges={[
          'Implementing a robust turn-based system',
          'Creating a user-friendly interface for desktop',
          'Ensuring smooth gameplay and responsiveness',
          'Testing the game thoroughly to identify and fix bugs',
        ]}
        solutions={[
          'Used a state management approach to track player turns and game state',
          'Designed a user-friendly interface using Tkinter',
          'Optimized performance by efficiently updating the game board and UI elements',
          'Performed thorough manual testing with multiple players to identify and fix bugs',
        ]}
      />
      <Resources
        resources={
          <div className='space-y-16'>
            <HighlightedResource
              title='Main menu'
              description='Starting point of the game. Players can initiate new games, and view game rules'
              src='https://i.ibb.co/DRcxMjH/battleship-home-screen.webp'
              width={1366}
              height={768}
            />
            <HighlightedResource
              title='Pre-Game Lobby'
              description='Write the name of the players, and go to play.'
              src='https://i.ibb.co/TM5CK64/battsleship-home-screen-players.webp'
              width={1366}
              height={768}
            />
            <HighlightedResource
              title='Game Rules'
              description="A detailed explanation of the game's objectives, gameplay mechanics, and winning conditions."
              src='https://i.ibb.co/8ryGyDZ/battleship-rules-screen.webp'
              width={1366}
              height={768}
            />
            <HighlightedResource
              title='Game Setup'
              description='Displays the selected players and their respective game boards, confirming the game setup before the match begins.'
              src='https://i.ibb.co/3r0WfZz/battleship-game-setup.webp'
              width={1366}
              height={768}
            />
            <HighlightedResource
              title='In-Game Screenshot'
              description='A visual representation of a typical gameplay scenario, showcasing the game board, player turns, and the overall game flow.'
              src='https://i.ibb.co/CHx078h/battleship-playing-screen.webp'
              width={1366}
              height={768}
            />
            <HighlightedResource
              title='Game Over'
              description='Displayed once a player has sunk the majority of their opponents ships, announcing the winner.'
              src='https://i.ibb.co/wJWLPQK/battleship-win-player.webp'
              width={1366}
              height={768}
            />
          </div>
        }
      />
    </main>
  );
}

export default BattleShipProject;
