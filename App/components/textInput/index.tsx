import React, { FC } from 'react'
import { View, TextInput, SafeAreaView } from 'react-native'
import { styles } from './styles'

interface Props {
    placeholder: string
}

export const Input: FC<Props> = ({ placeholder }) => {

    const [text, onChangeText] = React.useState("");

    return (
        <SafeAreaView  style={styles.inputView} >
            <TextInput
                style={ placeholder === 'Description'? styles.descriptInput :  styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={placeholder}
            />
        </SafeAreaView>

    )
}