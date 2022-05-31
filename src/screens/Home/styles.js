import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    background-color: #1111;
    justify-content: center;
    //023642
`
export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`
export const LoadingIcon = styled.ActivityIndicator``
export const HeaderTitle = styled.Text`
    font-size: 16px;
    color: #023642;
    text-align: center;
    margin-top: 15px;
`
export const BigArea = styled.View`
    margin: 50px 0;
    align-items: center;
`
export const ExitButtonArea = styled.TouchableOpacity`
    background-color: #023642;
    padding: 15px;
    justify-content: center;
    align-items: center;
`
export const ExitText = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #ccc;
`
export const PropertyList = styled.View`
    margin: 20px 0;
`
export const ButtonArea = styled.TouchableOpacity`
    background-color: #023642;
    border-radius: 4px;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    margin-bottom: 10px;
    height: 50px;
    flex-direction: row;
`
export const ButtonText = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #ccc;
`
