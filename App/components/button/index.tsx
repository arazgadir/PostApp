import { useNavigation } from '@react-navigation/core';
import React, { FC } from 'react'
import { View, Pressable, Text } from 'react-native'
import { styles } from './styles'

interface Props {
    text: string;
    onPress: Function
}

export const Button: FC<Props> = ({ text, onPress }) => {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}>
                <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}
export default Button