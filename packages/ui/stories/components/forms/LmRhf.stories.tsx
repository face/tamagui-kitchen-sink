import {StorybookRhfDecorator} from "./FormDecorator";
import {Text, XStack, YStack} from "tamagui";
import {LmInputRhf} from "../../../src/components/forms/rhf/LmInputRhf";
import {LmSubmitButtonRhf} from "../../../src/components/forms/rhf/LmSubmitButtonRhf";
import {useState} from "react";
import {LmResetButtonRhf} from "../../../src/components/forms/rhf/LmResetButtonRhf";
import {LmCheckboxRhf} from "../../../src/components/forms/rhf/LmCheckboxRhf";

export default {
    title: 'ui/forms/form',
    decorators: [StorybookRhfDecorator]
}

export const Basic = () => {
    const [data, setData] = useState<any>({message: 'not submitted...'})
    return (
        <YStack space>
            <LmInputRhf name={'name'} label={'Name'} placeholder={'Type your name...'} labelInline required/>
            <LmInputRhf name={'description'} label={'Description'} placeholder={'A long description...'} labelInline
                        multiline/>
            <LmCheckboxRhf name={'check_this'} required label={'Do you agree to our T&C?'}/>
            <XStack space>
                <LmResetButtonRhf onPress={() => setData({})}>Reset</LmResetButtonRhf>
                <LmSubmitButtonRhf onSubmit={(data) => {
                    setData(data)
                }}>Submit</LmSubmitButtonRhf>
            </XStack>

            <YStack marginTop={'$3'}>
                <Text>
                    {JSON.stringify(data)}
                </Text>
            </YStack>
        </YStack>
    )
}

