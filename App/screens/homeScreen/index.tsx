import { useNavigation } from '@react-navigation/core';
import React, { FC, useEffect } from 'react'
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Logo } from '../../Assests/logo'
import Button from '../../components/button'
import { RootState } from '../../modules/redux/store';
import { HomeDataSection } from './homeDataSection.tsx';
import { styles } from './styles'

const HomeScreen: FC = () => {
    const navigation = useNavigation();
    const PostData  = useSelector((state: RootState) => state.post.postData)

    const renderItem = ({ item }: any) => (
        <HomeDataSection
        id={item.id}
        title={item.title}
        image={item.image}
        date={item.date}
        status={item.status}
        description={item.description}
        />
        );
        
        return (
            <View style={styles.container}>
            <View style={styles.logo}>
                <Logo />
            </View>
            <View style={styles.flatListView}>
                <FlatList
                    data={PostData}
                    renderItem={renderItem}
                />
            </View>
            <Button
                onPress={() => navigation.navigate('NewPostScreen')}
                text='New Post' />
        </View>
    )
}

export default HomeScreen