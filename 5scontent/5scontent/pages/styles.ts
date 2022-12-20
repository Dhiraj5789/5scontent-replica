import styled from "@emotion/styled";

export interface IEmotionProp {
  bgColor: string;
  color: string;
}

export const backgroundContainer = styled.div`
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props: IEmotionProp) => props.bgColor};
  color: ${(props: IEmotionProp) => props.color};
  z-index: 2;
`;
