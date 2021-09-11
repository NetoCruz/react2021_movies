import React from "react";
import {Wrapped,Content,Text} from './HeroImage.styles'

const HeroImage =({image,title, text})=>(
    <Wrapped image={image}>
      <Content>
          <Text>
             <h1>{title}</h1>
             <p>{text}</p> 
          </Text>
      </Content>

    </Wrapped>
)

export default HeroImage