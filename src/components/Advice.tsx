import dice from "../assets/dice.svg";
import dividerMobile from "../assets/pattern-divider-mobile.svg";
import dividerDesktop from "../assets/pattern-divider-desktop.svg";
import { styled } from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

interface AdviceType {
  id: number;
  advice: string;
}

const Advice = () => {
  const [advice, setAdvice] = useState<AdviceType | null>(null);

  const requestAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const data = response.data;
      setAdvice(data.slip);
    } catch (error) {
      console.log("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    requestAdvice();
  }, []);

  return (
    <Main>
      <h2>ADVICE #{advice?.id}</h2>
      <p>{advice?.advice}</p>
      <picture>
        <source media="(min-width: 768px)" srcSet={dividerDesktop} />
        <img src={dividerMobile} alt="divider" />
      </picture>{" "}
      <br />
      <button onClick={requestAdvice} aria-label="Get Advice">
        <img src={dice} alt="dice" />
      </button>
    </Main>
  );
};

export default Advice;

const Main = styled.main`
  max-width: 54rem;
  background-color: #313a48;
  border-radius: 1rem;
  box-shadow: 30px 50px 80px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 4rem 2.4rem 0 2.4rem;
  h2 {
    color: #53ffaa;
    font-size: 1.1rem;
    letter-spacing: 0.4086rem;
  }
  p {
    color: #cee3e9;
    font-size: 2.4rem;
    letter-spacing: -0.03rem;
    margin: 2.4rem 0;
  }
  picture {
    max-width: 44.4rem;
    width: 100%;
    height: auto;
  }
  img {
    max-width: 29.5rem;
    width: 100%;
    height: auto;
  }
  button {
    display: block;
    background-color: #53ffaa;
    border-radius: 50%;
    padding: 1.9rem 2rem 1.6rem;
    margin: 3.2rem auto -2.6rem auto;
    border: 0;
  }
  button img {
    max-width: 2.9rem;
    background-color: #53ffaa;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 1.3rem;
    }
    p {
      font-size: 2.8rem;
    }
    img:not(button img) {
      max-width: 44.4rem;
    }
    button {
      margin-top: 4rem;
    }
    button:hover {
      cursor: pointer;
      box-shadow: 0px 0px 40px 0px #53ffaa;
    }
  }
`;
