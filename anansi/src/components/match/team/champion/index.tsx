import { Box, Button, Collapsible, Image, Text } from '@chakra-ui/react';
import Stats from './stats';
import Spells from './spells';
import Passive from './passive';
import Items from './items';

import { useEffect, useState } from 'react';
import { IChampion } from '@/interfaces/IChampion';

type Props = {
    champion: IChampion
}

const Champion = (props: Props) => {

    const cdnUrl = "https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/";


    return (
        <Box>
            <Collapsible.Root bg="white" color="black" rounded="md" p={2}>
                <Collapsible.Trigger bg="white" >
                    <Box display="flex" gap={2}>
                        <Box>
                            <Image src={`${cdnUrl}${props.champion.image.full}`} alt={props.champion.name} />
                            <Text>{props.champion.name}</Text>
                        </Box>
                        <Stats stats={props.champion.stats} />
                    </Box>
                </Collapsible.Trigger>
                <Collapsible.Content textAlign="left" >
                    <Passive passive={props.champion.passive} />
                    <Box display="flex" w="100%">
                        <Spells passive={props.champion.passive} spells={props.champion.spells} />
                        <Items />
                    </Box>
                </Collapsible.Content>

            </Collapsible.Root>
        </Box >
    )
}

export default Champion;

function fetchData(url: string) {
    throw new Error('Function not implemented.');
}
