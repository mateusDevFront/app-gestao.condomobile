import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import {
    Container,
    Scroller,
    LoadingIcon,
    HeaderTitle,
    BigArea,
    ExitButtonArea,
    ExitText,
    PropertyList,
    ButtonArea,
    ButtonText
} from './styles'

import AsyncStorage from '@react-native-async-storage/async-storage'

import IconCond from 'react-native-vector-icons/FontAwesome'

import { useStateValue } from '../../contexts/StateContext'
import api from '../../services/api'

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const check = async () => {
            let property = await AsyncStorage.getItem('property');

            if(property){
                property = JSON.parse(property);
                //ESCOLHER SALA DE AULA//
                await chooseProperty(property)
            }
            setLoading(false);
        }
        check()
    }, [])

    async function handleSignOut(){
        await api.logout()
        navigation.reset({
            index: 1,
            routes:[{name: 'SignIn'}]
        })
    }

    const chooseProperty = async (property) => {
        await AsyncStorage.setItem('property', JSON.stringify(property));

        dispatch({
            type: 'setProperty',
            payload:{
                property
            }
        })
        navigation.reset({
            index: 1,
            routes:[{name: 'MainDrawer'}]
        })
    }
    return (
        <Container>
            <Scroller>
                {loading &&
                    <LoadingIcon color="#00FF75" size="large"/>
                }
                {!loading && context.user.user.properties.length > 0 &&
                    <>
                        <HeaderTitle>Olá {context.user.user.name}</HeaderTitle>
                        <HeaderTitle>Escolha uma sala de aula</HeaderTitle>

                        <PropertyList>
                            {context.user.user.properties.map((item, index) => (
                                <ButtonArea key={index} onPress={() => chooseProperty(item)}>
                                    <IconCond name="building" size={24} color="#ccc" />
                                    <ButtonText>{item.name}</ButtonText>
                                </ButtonArea>
                            ) )}
                        </PropertyList>

                    </>
                }
                {!loading &&  context.user.user.properties.length <= 0 &&
                    <BigArea>
                        <HeaderTitle>{ context.user.user.name}, parabéns pelo cadastro</HeaderTitle>
                        <HeaderTitle>Aguarde a liberação do seu cadastro</HeaderTitle>
                    </BigArea>
                }
            </Scroller>
            <ExitButtonArea onPress={handleSignOut}>
                <ExitText>Sair</ExitText>
            </ExitButtonArea>
        </Container>
    )
}