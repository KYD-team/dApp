import React from "react";
import styled from "styled-components";

const Reviews = ({}) => {
  const Button2Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <FrameRootRoot>
      <Group14>
        <Cash>Reviews</Cash>
        <Star src={`https://file.rendit.io/n/8aK9ncEmYvIxff8kb0UI.svg`} />
        <Cash1>4.9</Cash1>
      </Group14>
      <Cash3>1426 total</Cash3>
      <Group15>
        <Element2 />
        <Cash9>5</Cash9>
        <BlackRectangle4>
          <Element10 />
        </BlackRectangle4>
        <Cash4>95%</Cash4>
      </Group15>
      <Group16>
        <Element2 />
        <Cash9>4</Cash9>
        <BlackRectangle3>
          <Element9 />
        </BlackRectangle3>
        <Cash9>4%</Cash9>
      </Group16>
      <Group17>
        <Element2 />
        <Cash9>3</Cash9>
        <BlackRectangle2>
          <Element8 />
        </BlackRectangle2>
        <Cash6>&#60;1%</Cash6>
      </Group17>
      <Group18>
        <Element2 />
        <Cash9>2</Cash9>
        <BlackRectangle1>
          <Element7 />
        </BlackRectangle1>
        <Cash7>&#60;1%</Cash7>
      </Group18>
      <Group19>
        <Element2 />
        <Cash9>1</Cash9>
        <BlackRectangle>
          <Element6 />
        </BlackRectangle>
        <Cash8>&#60;1%</Cash8>
      </Group19>
      <Select1>
        <Cash23>Write your review</Cash23>
      </Select1>
      <Button2 onClick={(e) => Button2Function(e, "Button2")}>
        <Button1>Submit</Button1>
      </Button2>
      <Group20>
        <Image4 src={`https://file.rendit.io/n/eg6uFuV7Na1GwnRQXOfq.png`} />
        <Group12>
          <Cash14>catperson123</Cash14>
          <Cash21>1 Review</Cash21>
        </Group12>
      </Group20>
      <Group21>
        <CaribbeanGreenSquare4>
          <Star1 src={`https://file.rendit.io/n/BYhRWRjD4is1e01mg7Mx.svg`} />
        </CaribbeanGreenSquare4>
        <CaribbeanGreenSquare3>
          <Star2 src={`https://file.rendit.io/n/BYhRWRjD4is1e01mg7Mx.svg`} />
        </CaribbeanGreenSquare3>
        <CaribbeanGreenSquare2>
          <Star3 src={`https://file.rendit.io/n/BYhRWRjD4is1e01mg7Mx.svg`} />
        </CaribbeanGreenSquare2>
        <CaribbeanGreenSquare1>
          <Star4 src={`https://file.rendit.io/n/BYhRWRjD4is1e01mg7Mx.svg`} />
        </CaribbeanGreenSquare1>
        <CaribbeanGreenSquare>
          <Star5 src={`https://file.rendit.io/n/BYhRWRjD4is1e01mg7Mx.svg`} />
        </CaribbeanGreenSquare>
        <Cash20>3 hrs ago</Cash20>
      </Group21>
      <Cash13>Great Communication</Cash13>
      <Cash16>
        Awesome developer with great under-
        <br />
        standing in time management making sure
        <br />
        the client is kept up-to-date every step of
        <br />
        the way.{" "}
      </Cash16>
      <Cash19>
        Date of experience:<Cash17> </Cash17>
        <Cash18>March 04, 2023</Cash18>
      </Cash19>
      <Group22>
        <Cash24>Share</Cash24>
        <Image3 src={`https://file.rendit.io/n/s6sAsLlGRYkwHPk3vyt8.svg`} />
        <Image2 src={`https://file.rendit.io/n/CQGUVlVfyjL346YpWEYf.svg`} />
        <Telegram src={`https://file.rendit.io/n/vENlRpawaEvPYqZiDFS2.svg`} />
      </Group22>
      <Group23>
        <Image1 src={`https://file.rendit.io/n/E1REq1lKF8jDDV841GOF.png`} />
        <Group13>
          <Cash15>rebecca14.eth</Cash15>
          <Cash22>4 Review</Cash22>
        </Group13>
      </Group23>
    </FrameRootRoot>
  );
};

export default Reviews;

const FrameRootRoot = styled.div`
  max-width: 346px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 26px 28px 1px 28px;
  border-width: 4px;
  border-radius: 13px;
  border-style: solid;
  border-color: #141414;
  box-sizing: border-box;
  background-color: #000000;
`;
const Group14 = styled.div`
  max-width: 170px;
  gap: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  margin: 0px 0px 0px 2px;
  box-sizing: border-box;
`;
const Cash = styled.div`
  align-self: flex-start;
  margin: 2px 0px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-family: Inter;
  line-height: 20px;
  letter-spacing: -0.48px;
  box-sizing: border-box;
`;
const Star = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Cash1 = styled.div`
  align-self: flex-start;
  margin: 2px 0px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-family: Inter;
  line-height: 20px;
  letter-spacing: -0.48px;
  box-sizing: border-box;
`;
const Cash3 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 23px 2px;
  color: #8f9bba;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 16px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Group15 = styled.div`
  width: 99.29%;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 2px 0px;
  box-sizing: border-box;
`;
const Element5 = styled.div`
  width: 6.67%;
  height: 16px;
  align-self: flex-start;
  margin: 0px 2px 0px 0px;
  border-width: 1px;
  border-radius: 3px;
  border-style: solid;
  border-color: #ffffff;
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: ;
  background-image: ;
`;
const Cash2 = styled.div`
  align-self: flex-start;
  margin: 0px 2px 0px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 16px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const BlackRectangle4 = styled.div`
  width: 62.92%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 4px 0px 2px 0px;
  border-radius: 60px;
  box-sizing: border-box;
  background-color: #282828;
`;
const Element10 = styled.div`
  width: 88.74%;
  height: 10px;
  flex-shrink: 0;
  align-self: flex-start;
  border-radius: 60px;
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: normal;
  background-image: linear-gradient(180deg, #8b7bf6 0%, #7164c9 97%);
`;
const Cash4 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 16px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Group16 = styled.div`
  width: 99.29%;
  gap: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 2px 0px;
  box-sizing: border-box;
`;
const Element4 = styled.div`
  width: 6.9%;
  height: 16px;
  align-self: flex-start;
  border-width: 1px;
  border-radius: 3px;
  border-style: solid;
  border-color: #ffffff;
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: ;
  background-image: ;
`;
const Cash9 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 16px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const BlackRectangle3 = styled.div`
  width: 65.09%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 4px 2px 2px 0px;
  border-radius: 60px;
  box-sizing: border-box;
  background-color: #282828;
`;
const Element9 = styled.div`
  width: 27px;
  height: 10px;
  flex-shrink: 0;
  align-self: flex-start;
  border-radius: 60px;
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: normal;
  background-image: linear-gradient(180deg, #8b7bf6 0%, #7164c9 97%);
`;
const Group17 = styled.div`
  width: 99.29%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  margin: 0px 0px 2px 0px;
  box-sizing: border-box;
`;
const BlackRectangle2 = styled.div`
  width: 53.93%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 4px 0px 2px 0px;
  border-radius: 60px;
  box-sizing: border-box;
  background-color: #282828;
`;
const Element8 = styled.div`
  width: 18px;
  height: 10px;
  flex-shrink: 0;
  align-self: flex-start;
  border-radius: 60px;
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: normal;
  background-image: linear-gradient(180deg, #8b7bf6 0%, #7164c9 97%);
`;
const Cash6 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 16px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Group18 = styled.div`
  width: 99.29%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  margin: 0px 0px 2px 0px;
  box-sizing: border-box;
`;
const Element2 = styled.div`
  width: 5.71%;
  height: 16px;
  align-self: flex-start;
  border-width: 1px;
  border-radius: 3px;
  border-style: solid;
  border-color: #ffffff;
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: ;
  background-image: ;
`;
const BlackRectangle1 = styled.div`
  width: 53.93%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 4px 0px 2px 0px;
  border-radius: 60px;
  box-sizing: border-box;
  background-color: #282828;
`;
const Element7 = styled.div`
  width: 18px;
  height: 10px;
  flex-shrink: 0;
  align-self: flex-start;
  border-radius: 60px;
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: normal;
  background-image: linear-gradient(180deg, #8b7bf6 0%, #7164c9 97%);
`;
const Cash7 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 16px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Group19 = styled.div`
  width: 99.29%;
  gap: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 16px 0px;
  box-sizing: border-box;
`;
const Element1 = styled.div`
  width: 6.9%;
  height: 16px;
  align-self: flex-start;
  border-width: 1px;
  border-radius: 3px;
  border-style: solid;
  border-color: #ffffff;
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: ;
  background-image: ;
`;
const Cash12 = styled.div`
  align-self: flex-start;
  margin: 0px 2px 0px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 16px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const BlackRectangle = styled.div`
  width: 65.09%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 4px 0px 2px 0px;
  border-radius: 60px;
  box-sizing: border-box;
  background-color: #282828;
`;
const Element6 = styled.div`
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  align-self: flex-start;
  border-radius: 60px;
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: normal;
  background-image: linear-gradient(180deg, #8b7bf6 0%, #7164c9 97%);
`;
const Cash8 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 16px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Select1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 6px 0px;
  padding: 12px 22px 74px 22px;
  border-width: 2px;
  border-radius: 6px;
  border-style: solid;
  border-color: #141414;
  box-sizing: border-box;
  background-color: #282828;
  overflow: hidden;
`;
const Cash23 = styled.div`
  align-self: flex-start;
  color: #5e5e5e;
  font-size: 14px;
  font-family: Inter;
  line-height: 16px;
  letter-spacing: -0.28px;
  box-sizing: border-box;
`;
const Button2 = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 22px 0px;
  padding: 0px;
  padding-top: 4px;
  padding-right: 109px;
  padding-bottom: 4px;
  padding-left: 109px;
  border-width: 0px;
  border-radius: 28px;
  box-sizing: content-box;
  background-color: #05cd99;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Button1 = styled.div`
  align-self: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  line-height: 20px;
  text-align: center;
  box-sizing: border-box;
`;
const Group20 = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 20px 0px;
  box-sizing: border-box;
`;
const Image4 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group12 = styled.div`
  width: 79.31%;
  gap: 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 2px 0px;
  box-sizing: border-box;
`;
const Cash14 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  font-family: Inter;
  line-height: 20px;
  letter-spacing: -0.28px;
  box-sizing: border-box;
`;
const Cash21 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 12px;
  font-family: Inter;
  line-height: 12px;
  letter-spacing: -0.24px;
  box-sizing: border-box;
`;
const Group21 = styled.div`
  width: 100%;
  gap: 2px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 2px 0px;
  box-sizing: border-box;
`;
const CaribbeanGreenSquare4 = styled.div`
  width: 4.44%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 4px 0px;
  padding: 1px;
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  border-color: #05cd99;
  box-sizing: border-box;
  background-color: #05cd99;
`;
const Star1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const CaribbeanGreenSquare3 = styled.div`
  width: 4.44%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 4px 0px;
  padding: 1px;
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  border-color: #05cd99;
  box-sizing: border-box;
  background-color: #05cd99;
`;
const Star2 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const CaribbeanGreenSquare2 = styled.div`
  width: 4.44%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 4px 0px;
  padding: 1px;
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  border-color: #05cd99;
  box-sizing: border-box;
  background-color: #05cd99;
`;
const Star3 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const CaribbeanGreenSquare1 = styled.div`
  width: 4.44%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 4px 0px;
  padding: 1px;
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  border-color: #05cd99;
  box-sizing: border-box;
  background-color: #05cd99;
`;
const Star4 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const CaribbeanGreenSquare = styled.div`
  width: 4.44%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 160px 4px 0px;
  padding: 1px;
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  border-color: #05cd99;
  box-sizing: border-box;
  background-color: #05cd99;
`;
const Star5 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Cash20 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 12px;
  font-family: Inter;
  line-height: 16px;
  letter-spacing: -0.24px;
  box-sizing: border-box;
`;
const Cash13 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 2px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  line-height: 20px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Cash16 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 2px 0px;
  color: #ffffff;
  font-size: 14px;
  font-family: Inter;
  line-height: 20px;
  letter-spacing: -0.28px;
  box-sizing: border-box;
`;
const Cash19 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 29px 0px;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  font-family: Inter;
  line-height: 20px;
  letter-spacing: -0.2px;
  box-sizing: border-box;
`;
const Cash17 = styled.div`
  display: contents;
  color: #ffffff;
  font-size: 10px;
  font-weight: 600;
  font-family: Inter;
  line-height: 20px;
  letter-spacing: -0.2px;
`;
const Cash18 = styled.div`
  display: contents;
  color: #ffffff;
  font-size: 10px;
  font-weight: 400;
  font-family: Inter;
  line-height: 20px;
  letter-spacing: -0.2px;
`;
const Group22 = styled.div`
  gap: 14px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 29px 0px;
  box-sizing: border-box;
`;
const Cash24 = styled.div`
  align-self: flex-start;
  margin: 1px 9px 1px 0px;
  color: #5e5e5e;
  font-size: 10px;
  font-family: Inter;
  line-height: 16px;
  letter-spacing: -0.2px;
  box-sizing: border-box;
`;
const Image3 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Image2 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-end;
  margin: 1.16px 0px 0.84px 0px;
  box-sizing: border-box;
`;
const Telegram = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  margin: 0.22px 0px 0.53px 0px;
  box-sizing: border-box;
`;
const Group23 = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Image1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group13 = styled.div`
  width: 79.83%;
  gap: 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 2px 0px;
  box-sizing: border-box;
`;
const Cash15 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  font-family: Inter;
  line-height: 20px;
  letter-spacing: -0.28px;
  box-sizing: border-box;
`;
const Cash22 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 12px;
  font-family: Inter;
  line-height: 12px;
  letter-spacing: -0.24px;
  box-sizing: border-box;
`;
