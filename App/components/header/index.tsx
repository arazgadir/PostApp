import { useNavigation } from '@react-navigation/core';
import React, { FC, useCallback } from 'react'
import { View, Pressable, Text, StyleSheet } from 'react-native'
import { BackButton } from '../../Assests/backButton';
import { styles } from './styles'



export const Header: FC = () => {

    const navigation = useNavigation();

    const onPress = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                style={styles.BackPress} >
                <BackButton />
            </Pressable>
            <View >
                <Text style={styles.titleText}> Create new post</Text>
            </View>
        </View>
    )
}

export default Header