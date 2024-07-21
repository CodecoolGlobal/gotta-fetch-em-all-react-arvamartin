import { useState } from 'react';

function Battle({ userPokemon, randomPokemon }) {

  ////statotből a hp-t kiveszi konstansnak
  const [userHp, setUserHp] = useState(userPokemon.stats.find(stat => stat.statName === 'hp').statValue);
  const [opponentHp, setOpponentHp] = useState(randomPokemon.stats.find(stat => stat.statName === 'hp').statValue);

  const calculateDamage = (attacker, defender) => {
    const B = attacker.stats.find(stat => stat.statName === 'attack').statValue;
    const D = defender.stats.find(stat => stat.statName === 'defense').statValue;
    const Z = Math.floor(Math.random() * (255 - 217 + 1)) + 217;
    return Math.round(((((2 / 5 + 2) * B * 60 / D) / 50) + 2) * Z / 255);
  };
    ///you attack
  const handleAttack = () => {
    const damageToOpponent = calculateDamage(userPokemon, randomPokemon);
    setOpponentHp(hp => Math.max(hp - damageToOpponent, 0));

    ////// if you win
    if (opponentHp - damageToOpponent <= 0) {
      alert('You won!');
      return;
    }

    
    const damageToUser = calculateDamage(randomPokemon, userPokemon);
    setUserHp(hp => Math.max(hp - damageToUser, 0));

    ////// enemy attacks
    if (userHp - damageToUser <= 0) {
      alert('LOOOOSER!');
    }
  };

  return (
    <div className="battlefield">
      <h2>Let's Fight</h2>
      <div className="enemy-opponent">
        <h3>Random Pokémon</h3>
        {randomPokemon && (
          <div>
            <img src={randomPokemon.image} alt={randomPokemon.name} />
            <p>{randomPokemon.name}</p>
            <p>HP: {opponentHp}</p>
            {/* Random Pokémon stats */}
          </div>
        )}
      </div>
      <div className="friendcard-container">
        {userPokemon && (
          <div className="friend-opponent">
            <h3>Your Pokémon</h3>
            <img src={userPokemon.image} alt={userPokemon.name} />
            <p>{userPokemon.name}</p>
            <p>HP: {userHp}</p>
            {/* User Pokémon stats */}
          </div>
        )}
      </div>
      <button onClick={handleAttack}>Attack</button>
    </div>
  );
}

export default Battle;
