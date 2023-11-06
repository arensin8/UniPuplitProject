import styled from "styled-components";
import { motion } from "framer-motion";

export const StudentTitle = styled(motion.h1)`
  color: white;
  font-size: 12rem;
  text-align: center;
  z-index: 1;
  margin: 0;
  white-space: nowrap;
  margin-top: auto;
  margin-right: -750px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 6rem;
    white-space: wrap;
    margin-right: -450px;
  }
`;
