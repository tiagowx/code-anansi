import { IPassive } from '@/interfaces/IPassive'
import { Box, Image, Text } from '@chakra-ui/react'

type Props = {
    passive: IPassive
}

const Passive = (props: Props) => {
    
    const cdnUrl = "https://ddragon.leagueoflegends.com/cdn/15.5.1/img/passive/";

    return (
        <Box key={props.passive.name} maxW="480px" >
            <Text textStyle="xs" fontWeight="bold">{props.passive.name}</Text>
            <Box display="flex" gap={2}>
                <Image h="32px" border="2px solid #000" src={cdnUrl+ props.passive.image.full} alt={props.passive.name} />
                <Text textStyle="xs" w="100%">{props.passive.description}</Text>
            </Box>
        </Box>
    )
}

export default Passive