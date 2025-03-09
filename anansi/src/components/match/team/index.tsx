import { Box } from '@chakra-ui/react';
import Champion from './champion';

const Team = () => {

  return (
    <Box display="flex" justifyContent="center"flexDirection="column">
      {/* //caixa de seleçao */}
        <Champion key="top"/>
    </Box>
  )
}

export default Team;