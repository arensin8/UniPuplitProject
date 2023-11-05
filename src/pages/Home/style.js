import styled from "styled-components";
import { motion } from "framer-motion";

export const Title = styled(motion.h1)`
  color: white;
  font-size: 13rem;
  z-index: 1;
  margin: 0;
  white-space: nowrap;
  margin-top: auto;
  margin-left: -100px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 6rem;
    white-space: wrap;
  }
`;


