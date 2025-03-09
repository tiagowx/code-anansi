import { IStats } from '@/interfaces/IStats';
import { Box, DataList } from '@chakra-ui/react';

type Props = {
    stats: IStats,
}

const Stats = (props: Props) => {

    return (
        <Box display="flex" flexDirection="row" gap={2}>
            <DataList.Root orientation="horizontal" size="sm" gap={1}>
                <DataList.Item key={"hp"}>
                    <DataList.ItemLabel>HP</DataList.ItemLabel>
                    <DataList.ItemValue>{props.stats.hp}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item key={"hpregen"}>
                    <DataList.ItemLabel>HP Regen.</DataList.ItemLabel>
                    <DataList.ItemValue>{props.stats.hpregen}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item key={"ad"}>
                    <DataList.ItemLabel>AD</DataList.ItemLabel>
                    <DataList.ItemValue>{props.stats.attackdamage}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item key={"arm"}>
                    <DataList.ItemLabel>Arm</DataList.ItemLabel>
                    <DataList.ItemValue>{props.stats.armor}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item key={"atkspd"}>
                    <DataList.ItemLabel>AtkSpd</DataList.ItemLabel>
                    <DataList.ItemValue>{props.stats.attackspeed}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item key={"crit"}>
                    <DataList.ItemLabel>Crit</DataList.ItemLabel>
                    <DataList.ItemValue>{props.stats.crit + "%"}</DataList.ItemValue>
                </DataList.Item>
            </DataList.Root >
            <DataList.Root orientation="horizontal"  size="sm" gap={1}>
                <DataList.Item key={"mp"}>
                    <DataList.ItemLabel>MP</DataList.ItemLabel>
                    <DataList.ItemValue>{props.stats.mp}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item key={"mpregen"}>
                    <DataList.ItemLabel>MP Regen.</DataList.ItemLabel>
                    <DataList.ItemValue>{props.stats.mpregen}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item key={"ap"}>
                    <DataList.ItemLabel>AP</DataList.ItemLabel>
                    <DataList.ItemValue>{props.stats.abilityPower || 0}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item key={"res"}>
                    <DataList.ItemLabel>Res</DataList.ItemLabel>
                    <DataList.ItemValue>{props.stats.spellblock}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item key={"cdr"}>
                    <DataList.ItemLabel>CDR</DataList.ItemLabel>
                    <DataList.ItemValue>{props.stats.cdr || 0}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item key={"spd"}>
                    <DataList.ItemLabel>Speed</DataList.ItemLabel>
                    <DataList.ItemValue>{props.stats.movespeed}</DataList.ItemValue>
                </DataList.Item>
            </DataList.Root>
        </Box>
    )
}

export default Stats;