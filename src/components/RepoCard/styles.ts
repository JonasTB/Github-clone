import styled, { css } from "styled-components";

import { RiBookmarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

export const TopSide = styled.div``;

export const BotSide = styled.div``;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookmarkLine)``;

export const StarIcon = styled(RiStarLine)``;

export const ForkIcon = styled(AiOutlineFork)``;
