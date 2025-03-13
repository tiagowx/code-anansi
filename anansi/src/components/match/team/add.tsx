import { SelectContent, SelectItem, SelectLabel, SelectRoot, SelectTrigger, SelectValueText } from '@/components/ui/select'
import { Button, createListCollection, NativeSelect, Popover, Portal, Stack } from '@chakra-ui/react'
import champions from '@/data/championFull.json'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { IChampion } from '@/interfaces/IChampion'
import Champion from './champion'


interface Props {
    team: IChampion[];
    add: (v?: string | number) => void;
}

const AddChampion = (props: Props) => {
    const listChampions = Object.keys(champions.data);
    const [variant, setVariant] = useState<string | number | undefined>("");



    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <Button size="sm" variant="outline" color="white">
                    Adicionar Campeão
                </Button>
            </Popover.Trigger>
            <Portal>
                <Popover.Positioner>
                    <Popover.Content>
                        <Popover.Arrow />
                        <Popover.Body>
                            <Stack gap="5" width="320px">
                                <NativeSelect.Root size="sm" width="240px">
                                    <NativeSelect.Field
                                        placeholder="Select option"
                                        value={variant}
                                        onChange={(e) => setVariant(e.currentTarget.value)}
                                    >
                                        {listChampions.length > 0 && listChampions.map(c => (

                                            <option key={`opt-${c}`} value={c}>{c}</option>
                                        ))}
                                    </NativeSelect.Field>
                                    <NativeSelect.Indicator />
                                </NativeSelect.Root>
                                <Button onClick={() => props.add(variant)}>+</Button>
                            </Stack>
                        </Popover.Body>
                    </Popover.Content>
                </Popover.Positioner>
            </Portal>
        </Popover.Root>
    )
}

export default AddChampion