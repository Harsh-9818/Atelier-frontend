import React from "react";
import styled, { keyframes, css } from "styled-components";

function Marque() {
  const row1 = [
    "https://cdn.freelogovectors.net/wp-content/uploads/2023/02/react-logo-freelogovectors.net_.png",
    "https://www.freepnglogos.com/uploads/javascript-png/logo-html5-js-css3-png-transparent-logo-4.png",
    "./src/assets/MarqueImage/Docker.png",
    "./src/assets/MarqueImage/Expres.png",
    "./src/assets/MarqueImage/Aws.png",
    "https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png",
  ];

  return (
    <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <Image key={index} src={el} />
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <Image key={index} src={el} />
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Marque;

const AppContainer = styled.div`
  width: 100%;
  height: 35vh;
  color: rgb(255, 255, 255);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 10s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const Image = styled.img`
  object-fit: contain;
  width: clamp(10rem, 15vmin, 20rem); /* Original size retained */
  height: auto;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px;


  @media (max-width: 768px) {
    width: clamp(8rem, 12vmin, 15rem); /* Scaled for smaller screens */
  }
`;
