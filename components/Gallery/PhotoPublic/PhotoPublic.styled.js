import styled from "styled-components";

export const PhotoPublicWrapper = styled.div`
  position: relative;
  width: 100%;
  // max-width: 480px;
  // height: 300px;
  margin: 10px;
  background-color: #000;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    height: 500px;
  }

  @media (min-width: 1024px) {
    height: 700px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  &:hover img {
    transform: scale(1.08);
  }

  /* Nakładka z gradientem */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    pointer-events: none;
    z-index: 1;
  }
`;

/* Opis zdjęcia */
export const DescriptionText = styled.p`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  font-style: italic;
  padding: 6px 10px;
  border-radius: 8px;
  max-width: 90%;
  background: rgba(0, 0, 0, 0.4);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
`;
