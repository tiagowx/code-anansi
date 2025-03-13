import { Tooltip } from '@/components/ui/tooltip'
import { IPassive } from '@/interfaces/IPassive'
import { ISpell } from '@/interfaces/ISpell'
import { Box, Image, Text } from '@chakra-ui/react'

type Props = {
    spells: ISpell[],
    passive: IPassive
}
const Spells = (props: Props) => {

    const cdnUrl = "https://ddragon.leagueoflegends.com/cdn/15.5.1";

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            gap={1} 
            borderRight="1px solid #000000"
            pr={2}
            >
            {props.spells.map(spell =>
                <Box key={spell.id} >
                    <Text textStyle="xs" fontWeight="bold">{spell.name}</Text>
                    <Box display="flex" gap={2}>
                        <Tooltip content={spell.tooltip} >
                            <Image h="32px" border="2px solid #000" src={cdnUrl + "/img/spell/" + spell.image.full} alt={spell.name} />
                        </Tooltip>
                        <Box>
                            <Text textStyle="xs">
                                Tempo de re-uso: {spell.cooldownBurn}
                            </Text>
                            <Text textStyle="xs">
                                Custo: {spell.cost.join("|")}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default Spells