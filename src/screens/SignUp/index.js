import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity } from 'react-native'
import {
    Container,
    Field,
    BoxAreaNameUser,
    BoxAreaNameTitle,
    BoxAreaHeader,
    HeaderTitle,
    ButtonArea,
    ButtonText,
    ContainerField
} from './styles'

import { useStateValue } from '../../contexts/StateContext'
import api from '../../services/api'

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue()

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const handleRegister = async () => {
        if (name && email && cpf && password && passwordConfirm) {
            let result = await api.register(name, email, cpf, password, passwordConfirm)
            if (result.error === '') {
                dispatch({ type: 'setToken', payload: { token: result.token } });
                dispatch({ type: 'setUser', payload: { user: result.user }, })

                navigation.reset({
                    index: 1,
                    routes: [{ name: 'SignIn' }]
                })
            } else {
                alert(result.error)
            }
        } else {

            alert('Preencha os campos vázios')
        }
    }
    return (
        <Container>
            <BoxAreaHeader>
                <BoxAreaNameUser>
        
                </BoxAreaNameUser>
                <BoxAreaNameTitle>
                    <HeaderTitle
                        style={{
                            color: '#ccc',
                            fontSize: 20,
                            marginBottom: 15
                        }}>CADASTRO</HeaderTitle>
                </BoxAreaNameTitle>
            </BoxAreaHeader>

            <ContainerField>
                <Field
                    placeholder="Digite seu nome completo"
                    placeholderTextColor="#fff"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Field
                    placeholder="Digite seu CPF"
                    placeholderTextColor="#fff"
                    keyboardType="numeric"
                    value={cpf}
                    onChangeText={(text) => setCpf(text)}
                />
                <Field
                    placeholder="Digite Email"
                    placeholderTextColor="#fff"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Field
                    placeholder="Digite sua senha"
                    placeholderTextColor="#fff"
                    secureTextEntry={true}
                    keyboardType="numeric"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Field
                    placeholder="Digite sua senha"
                    placeholderTextColor="#fff"
                    secureTextEntry={true}
                    keyboardType="numeric"
                    value={passwordConfirm}
                    onChangeText={(text) => setPasswordConfirm(text)}
                />
                <ButtonArea onPress={handleRegister}>
                    <ButtonText>CADASTRAR-SE</ButtonText>
                </ButtonArea>
            </ContainerField>

            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
                onPress={() => navigation.navigate('SignIn')}>
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 15, marginTop: 40 }}>
                    Já possui um login?
                </Text>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15, marginTop: 40 }}>
                    CLIQUE AQUI!
                </Text>
            </TouchableOpacity>
        </Container>
    )
}