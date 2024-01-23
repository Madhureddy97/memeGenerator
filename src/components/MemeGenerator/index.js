import {Component} from 'react'

import {
  BackgroundContainer,
  MemeFormContainer,
  MemeGeneratorHeading,
  InputsContainer,
  InputContainer,
  LabelElement,
  InputElement,
  GenerateButton,
  SelectElement,
  OptionElement,
  TextContent,
  BackgroundImageContainer,
  MemeGeneratorContainer,
  FormAndMemeContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSize: '',
  }

  onChangeImageUrl = event => this.setState({imageUrlInput: event.target.value})

  onChangeTopText = event => this.setState({topTextInput: event.target.value})

  onChangeBottomText = event =>
    this.setState({bottomTextInput: event.target.value})

  onChangeFontSize = event =>
    this.setState({activeFontSizeOptionId: event.target.value})

  onSubmitForm = event => {
    event.preventDefault()
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state
    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSize: activeFontSizeOptionId,
    })
  }

  renderMemeGeneratorForm = () => {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    return (
      <MemeFormContainer onSubmit={this.onSubmitForm}>
        <InputsContainer>
          <InputContainer>
            <LabelElement htmlFor="imageUrl">Image URL</LabelElement>
            <InputElement
              type="text"
              id="imageUrl"
              placeholder="Enter the Image URL"
              value={imageUrlInput}
              onChange={this.onChangeImageUrl}
            />
          </InputContainer>
          <InputContainer>
            <LabelElement htmlFor="topText">Top Text</LabelElement>
            <InputElement
              type="text"
              id="topText"
              placeholder="Enter the Top Text"
              value={topTextInput}
              onChange={this.onChangeTopText}
            />
          </InputContainer>
          <InputContainer>
            <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
            <InputElement
              type="text"
              id="bottomText"
              placeholder="Enter the Bottom Text"
              value={bottomTextInput}
              onChange={this.onChangeBottomText}
            />
          </InputContainer>
          <InputContainer>
            <LabelElement htmlFor="select">Font Size</LabelElement>
            <SelectElement
              id="select"
              value={activeFontSizeOptionId}
              onChange={this.onChangeFontSize}
            >
              {fontSizesOptionsList.map(eachOption => (
                <OptionElement
                  value={eachOption.optionId}
                  key={eachOption.optionId}
                >
                  {eachOption.displayText}
                </OptionElement>
              ))}
            </SelectElement>
          </InputContainer>
          <GenerateButton type="submit">Generate</GenerateButton>
        </InputsContainer>
      </MemeFormContainer>
    )
  }

  renderMeme = () => {
    const {imageUrl, topText, bottomText, activeFontSize} = this.state
    console.log(imageUrl)
    console.log(topText)
    return (
      <BackgroundImageContainer data-testid="meme" backgroundImage={imageUrl}>
        <TextContent activeFontSize={activeFontSize}>{topText}</TextContent>
        <TextContent activeFontSize={activeFontSize}>{bottomText}</TextContent>
      </BackgroundImageContainer>
    )
  }

  render() {
    return (
      <BackgroundContainer>
        <MemeGeneratorContainer>
          <MemeGeneratorHeading>Meme Generator</MemeGeneratorHeading>
          <FormAndMemeContainer>
            {this.renderMemeGeneratorForm()}
            {this.renderMeme()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </BackgroundContainer>
    )
  }
}

export default MemeGenerator
