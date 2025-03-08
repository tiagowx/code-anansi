import { Box } from '@chakra-ui/react'
import React from 'react'
import Champion from './champion'

const Team = () => {
  return (
    <Box justifyContent="center" display="flex" flexDirection="column">
        <Champion key="top"/>
    </Box>
  )
}

export default Team;