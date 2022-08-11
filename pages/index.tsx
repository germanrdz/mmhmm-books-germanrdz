import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  background-color: red;
`;

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return <Container>Hola Mundo</Container>;
};

export default Home;
