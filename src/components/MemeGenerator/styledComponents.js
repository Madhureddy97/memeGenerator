// Style your components here
import styled from 'styled-components'

export const BackgroundContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
`

export const MemeGeneratorContainer = styled.div`
    display:flex;
    flex-direction:column;
`

export const FormAndMemeContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:space-between;
`

export const MemeFormContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const MemeGeneratorHeading = styled.h1`
    font-family:"Roboto";
    font-size:40px;
    color:#35469c;
`
export const InputsContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    margin-bottom:10px;
`
export const LabelElement = styled.label`
    font-size:20px;
    color:#5a7184;
`
export const InputElement = styled.input`
    font-size:20px;
    color:#5a7184;
    border:1px solid #5a7184;
    padding:10px;
`
export const GenerateButton = styled.button`
    background-color:#0b69ff;
    color:#ffffff;
    border-width:0px;
    border-radius:10px;
    padding:10px;
    font-family:"Roboto";
    font-size:20px;
`
export const SelectElement = styled.select`
    font-size:20px;
    
`
export const OptionElement = styled.option`
    font-size:20px;
`
export const BackgroundImageContainer = styled.div`
    height:200px;
    width:200px;
    display:flex;
    flex-direction:column;
    justify-content:space-between,
    align-items:center;
    background-image: url(${props => props.backgroundImage});
`
export const TextContent = styled.p`
    font-family:"Roboto";
    font-size:40px;
    color:#ffffff;
`
