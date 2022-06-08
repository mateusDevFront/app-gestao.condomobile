import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from "@react-navigation/native"
import { useStateValue } from '../contexts/StateContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'

import api from '../services/api'

import Logo from '../assets/logo.svg'

export const DrawerArea = styled.View`
    flex: 1;
    background-color: #023642;
`
export const DrawerLogoArea = styled.View`
    padding: 10px 20px;
    border-bottom-width: 1px;
    border-bottom-color: #eee;
`
export const DrawerScroller = styled.ScrollView`
    flex: 1;
    margin: 20px 0;
`
export const ChangeUnityArea = styled.View`
    margin: 10px;
`
export const ChangeButton = styled.TouchableOpacity`
    background-color: #00FF75;
    padding: 12px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`
export const ChangeText = styled.Text`
    font-size: 15px;
    font-weight: bold;
`

export const FooterArea = styled.View`
    padding: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const FooterInfo = styled.View``
export const FooterProfile = styled.Text`
    font-size: 15px;
    color: #fff;
`
export const FooterText = styled.Text`
    font-size: 15px;
    color: #fff;
`
export const FooterButton = styled.TouchableOpacity``

export const MenuButton = styled.TouchableOpacity`
    flex-direction: row;
    margin-bottom: 5px;
    border-radius: 5px;
    align-items: center;
`
export const MenuSquare = styled.View`
    width: 5px;
    height: 35px;
    margin-right: 20px;
    background-color: transparent;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`
export const MenuButtonText = styled.Text`
    font-size: 15px;
    margin-left: 10px;
    color: #fff;
`

export default (props) => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue()

    const menus = [
        { title: 'Mural de avisos', icon: 'inbox', screen: 'WallScreen' },
        { title: 'Documentos', icon: 'file-text', screen: 'DocumentScreen' },
        { title: 'Reservas', icon: 'calendar', screen: 'ReservationScreen' },
        { title: 'Livro de Ocorrências', icon: 'bug', screen: 'WarningScreen' },
        { title: 'Achados e perdidos', icon: 'search', screen: 'FoundAndLostScreen' },
        { title: 'Boletos', icon: 'wpforms', screen: 'DilletScreen' },
        { title: 'Perfil', icon: 'user', screen: 'ProfileScreen' }
    ]

    const handleChangeUnity = async () => {
        await AsyncStorage.removeItem('property')
        navigation.reset({
            index: 1,
            routes: [{
                name: 'Home'
            }]
        })
    }
    const handleLogout = async () => {
        await api.logout()
        navigation.reset({
            index: 1,
            routes:[{name: 'SignIn'}]
        })
    }
    return (
        <DrawerArea>
            <DrawerLogoArea>
                <Logo style={{ marginTop: 50 }} width="100%" height="150" />
            </DrawerLogoArea>

            <DrawerScroller>
                {menus.map((item, index) => (
                    <MenuButton key={index} onPress={() => navigation.navigate(item.screen)}>
                        <MenuSquare></MenuSquare>
                        <Icon name={item.icon} size={20} color={"#00FF75"} />
                        <MenuButtonText>{item?.title}</MenuButtonText>
                    </MenuButton>
                ))}
                <MenuButton onPress={handleLogout}>
                        <MenuSquare></MenuSquare>
                        <Icon name="toggle-left" size={20} color={"#00FF75"} />
                        <MenuButtonText>Sair</MenuButtonText>
                    </MenuButton>
            </DrawerScroller>

            <ChangeUnityArea>
                <ChangeButton onPress={handleChangeUnity}>
                    <ChangeText>Trocar sala de aula</ChangeText>
                </ChangeButton>
            </ChangeUnityArea>

            <FooterArea>
                <FooterInfo>
                    <FooterProfile>Olá Mateus</FooterProfile>
                    <FooterText>Nome da propriedade</FooterText>
                </FooterInfo>
                <FooterButton onPress={() => navigation.navigate('unityScreen')}>
                    <Icon name="gear" size={24} color="#fff" />
                </FooterButton>
            </FooterArea>

        </DrawerArea>
    )
}