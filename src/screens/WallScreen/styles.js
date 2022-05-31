import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    background-color: #023642;
    justify-content: center;
`
export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`
export const LoadingIcon = styled.ActivityIndicator``
export const HeaderTitle = styled.Text`
    font-size: 16px;
    color: #fff;
    text-align: center;
    margin-top: 15px;
`
export const BigArea = styled.View`
    margin: 50px 0;
    align-items: center;
`
export const ExitButtonArea = styled.TouchableOpacity`
    background-color: #00FF75;
    padding: 15px;
    justify-content: center;
    align-items: center;
`
export const ExitText = styled.Text`
    font-size: 15px;
`
export const PropertyList = styled.View`
    margin: 20px 0;
`
export const ButtonArea = styled.TouchableOpacity`
    background-color: #00FF75;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    height: 50px;
`
export const ButtonText = styled.Text`
    font-size: 17px;
    font-weight: bold;
`
