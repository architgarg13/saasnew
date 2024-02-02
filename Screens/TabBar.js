import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TabButton from "../Components/TabButton";
import ChatScreen from '../Screens/ChatScreen';
import EditScreen from '../Screens/EditScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const TabBar = () => {
    const navigation = useNavigation();
    const [page, setPage] = useState('Chat')

    let content;
    switch (page) {
        case 'Chat':
            content = <ChatScreen />;
            break;
        case 'Edit':
            content = <EditScreen />;
            break;
        case 'Profile':
            content = <ProfileScreen />;
            break;
        default:
            content = <ChatScreen />;
    }
    return (
        <>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: '#fff',
                paddingBottom: 10,
                borderTopWidth: 1,
                height: '92%',
                marginTop: 0,
                borderTopColor: '#ccc',
            }}>
                {content}
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: '#fff',
                paddingBottom: 10,
                borderTopWidth: 1,
                borderTopColor: '#ccc',
            }}>
                <TabButton onPress={() => setPage('Chat')}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../assets/chat.png')}
                    />
                    <Text>Chats</Text>
                </TabButton>
                <TabButton onPress={() => setPage('Edit')}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../assets/edit.png')}
                    />
                    <Text>Edit</Text>
                </TabButton>
                <TabButton onPress={() => setPage('Profile')}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../assets/user.png')}
                    />
                    <Text>Profile</Text>
                </TabButton>
            </View>
        </>

    );
};
export default TabBar;