import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const Items = () => {
    const items = []
  return (
    <Box pl={2}>
        <Text fontWeight="bold">Itens:</Text>
        
        <Button >+</Button>

    </Box>
  )
}

export default Items