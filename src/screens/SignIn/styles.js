import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    background-color: #023642;
    background-color: rgba(0, 50, 61, 0.9 );
    justify-content: center;
`
export const Field = styled.TextInput`
/*     border-width: 1px;
    border-color: #133138; */
    background-color: #245561;
    border-radius: 4px;
    color: #fff;
    font-size: 15px;
    padding: 10px;
    margin-bottom: 15px;
    height: 50px;
`
export const ButtonArea = styled.TouchableOpacity`
    background-color: #00FF75;
    padding: 12px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin-bottom: 15px;
    height: 50px;
`
export const ButtonText = styled.Text`
    font-size: 20px;
`