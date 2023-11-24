import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

// left side of container

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Right = styled.div`
  width: 50%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 80%;
`;

const Title = styled.span`
  font-size: 62px;
  @media only screen and (max-width: 480px) {
    font-size: 49px;
  }
`;

const Details = styled.p`
  font-size: 20px;
  color: #815;
  margin-top: 33px;
`;

const Features = () => {
  return (
    <Div>
      <Left>
        <Image src={} />
      </Left>
      <Right>
        <Title>
          <b> Kombucha </b> 8-bit
          <br />
          <b> Dolore </b> la croix
        </Title>
        <Details>
          Woke air plant pug activated charcoal biodiesel af, lomo distillery lorem 	  tempor coloring book stumptown polaroid you probably haven't heard of them.
        </Details>
        <Details>
          JOMO asymmetrical retro narwhal.
        </Details>
      </Right>

    </Div>
  );
};

export default Features;
