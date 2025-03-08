'use client';
import { Box, Heading, Text } from "@chakra-ui/react";
import Team from "./team";

const Match = () => {
    return (
        <Box as="section" >
            <Heading as="h3">Match</Heading>
            <Box display="flex" justifyContent="space-around" gap="4">
                <Team key="a" />
            </Box>
            <Text>* Você pode escolher qual patch deseja selecionar as informações dos personagens da composição.</Text>
        </Box>
    )
}

export default Match;