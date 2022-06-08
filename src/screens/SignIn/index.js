import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import {
    Container,
    Field,
    ButtonArea,
    ButtonText
} from './styles'

import { useStateValue } from '../../contexts/StateContext'
import api from '../../services/api'

import Logo from '../../assets/logo.svg'

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue()

    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = async () => {
        if(cpf && password){
            let result = await api.login(cpf, password);
            if(result.error === ''){
                dispatch({type: 'setToken',payload: {token: result.token}});
                dispatch({type: 'setUser',payload:{user: result.user},})
            
                navigation.reset({
                index: 1,
                routes: [{ name: 'Home' }]
            })
            /* setCpf('')
            setPassword('') */
            }else{
                alert(result.error)
            }
        }else{
            alert('preenche os campos vázios')
        }
    }
    const handleRegister = async () => {
        navigation.navigate('SignUp')
    }

    return (
        <Container>
            <Logo
            style={{marginBottom: 50}}
                width="100%"
                height="160"
            />

            <Field
                placeholder="Digite seu CPF"
                placeholderTextColor="#fff"
                keyboardType="numeric"
                value={cpf}
                onChangeText={(text)=> setCpf(text)}
            />
            <Field
                placeholder="Digite sua senha"
                placeholderTextColor="#fff"
                secureTextEntry={true}
                keyboardType="numeric"
                value={password}
                onChangeText={(text) => setPassword(text)}
            />

            <ButtonArea onPress={handleSignIn}>
                <ButtonText>ENTRAR</ButtonText>
            </ButtonArea>
            <ButtonArea onPress={handleRegister}>
                <ButtonText>CADASTRAR</ButtonText>
            </ButtonArea>
        </Container>
    )
}