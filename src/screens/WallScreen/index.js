import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import {
    Container,
    Scroller,
    LoadingIcon,
} from './styles'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { useStateValue } from '../../contexts/StateContext'
import api from '../../services/api'

export default () => {

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue()

    const [loading, setLoading] = useState(true)

    return (
        <Container>
            <Scroller>
                {loading &&
                    <LoadingIcon color="#00FF75" size="large"/>
                }
            </Scroller>
        </Container>
    )
}