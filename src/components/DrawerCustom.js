import React from 'react'
import styled from 'styled-components/native'
import {useNavigation} from "@react-navigation/native"
import {useStateValue} from '../contexts/StateContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import IconTeste from 'react-native-vector-icons/FontAwesome'

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

export default (props) => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue()

    const handleChangeUnity = async () => {
        await AsyncStorage.removeItem('property')
        navigation.reset({
            index: 1,
            routes:[{
                name: 'Home'
            }]
        })
    }
    return(
        <DrawerArea>
            <DrawerLogoArea>
                <Logo style={{marginTop: 50}} width="100%" height="80"/>
            </DrawerLogoArea>

            <DrawerScroller>
                
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
                    <IconTeste name="gear" size={24} color="#fff" />
                </FooterButton>
            </FooterArea>

        </DrawerArea>
    )
}