import { Box } from '@chakra-ui/react';
import Champion from './champion';
import { useEffect, useState } from 'react';
import { IChampion } from '@/interfaces/IChampion';
import AddChampion from './add';
import champions from '@/data/championFull.json';


const Team = () => {
  const [team, setTeam] = useState<IChampion[]>([]);


  const handleAddChampion = (name?: string | number) => {
    if (!name) return;
    const newChampion: IChampion[] = Object.values(champions.data).filter(champion => champion.name === name) as IChampion[];

    setTeam([...team, newChampion[0]]);

    console.log(team);
    console.log(team);
  }

  
  return (
    <Box display="flex" justifyContent="center" flexDirection="column"gap={1}>
      {
        team.map((champion) =>
          <Champion key={champion.name} champion={champion} />
        )}
      <AddChampion team={team} add={handleAddChampion} />
    </Box>
  )
}
export default Team;