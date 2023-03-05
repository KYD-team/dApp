import React from "react";
import styled from "styled-components";

const StatsPanel = ({chain = {}}) => {
  const {
    repos = {},
    reposTest = {},
  } = chain;

  const {
    users : usersMain = [],
    orgs : orsMain = [],
  } = repos;

  const {
    users : usersTest = [],
    orgs : orsTest = [],
  } = reposTest;

  const devCount = usersMain.length + usersTest.length;
  const teamCount = orsMain.length + orsTest.length;
  const testnetCount = usersTest.length + orsTest.length;
  const mainNetCount = usersMain.length + orsMain.length;


  return (
    <FrameRootRootRoot>
      <Label4>Members</Label4>
      <Group>
        <Label2>Users</Label2>
        <Label>in 2023</Label>
        <Label>Change</Label>
      </Group>
      <Group1>
        <Label3>Developers</Label3>
        <Label5>{devCount}</Label5>
        <Element1>
          <Image8 src={`https://file.rendit.io/n/XqAnyzsMRxgMLr7jNaOz.svg`} />
        </Element1>
        <Text13>+7.45%</Text13>
      </Group1>
      <Group2>
        <Label7>Teams</Label7>
        <Label6>{teamCount}</Label6>
        <Element2>
          <Image8 src={`https://file.rendit.io/n/XqAnyzsMRxgMLr7jNaOz.svg`} />
        </Element2>
        <Text12>+5.34%</Text12>
      </Group2>
      <Label4>Contracts Deployed</Label4>
      <Group>
        <Label10>Net</Label10>
        <Label>in 2023</Label>
        <Label>Change</Label>
      </Group>
      <Group1>
        <Label11>Testnet</Label11>
        <Label13>{testnetCount}</Label13>
        <Element3>
          <Image8 src={`https://file.rendit.io/n/8NVzI0FgJkvRvscO80eO.svg`} />
        </Element3>
        <Text13>+7.45%</Text13>
      </Group1>
      <Group2>
        <Label15>Mainnet</Label15>
        <Label14>{mainNetCount}</Label14>
        <Element4>
          <Image8 src={`https://file.rendit.io/n/8NVzI0FgJkvRvscO80eO.svg`} />
        </Element4>
        <Text12>+5.34%</Text12>
      </Group2>
      <ContractsVerified>Contracts Verified </ContractsVerified>
      <Group6>
        <Text6>2000</Text6>
        <Line />
      </Group6>
      <Group7>
        <Text7>1000</Text7>
        <Group10>
          <Line1 />
          <Image2 src={`https://file.rendit.io/n/h2FtGwVf8wm3iNfO9aXh.svg`} />
          <Image1 src={`https://file.rendit.io/n/y8I3S4aIHIycnDLIY2Hp.svg`} />
        </Group10>
      </Group7>
      <Group8>
        <Text8>0</Text8>
        <Group11>
          <Group12>
            {[
              {
                childText: `Nov`,
              },
              {
                childText: `Dec`,
              },
              {
                childText: `Jan`,
              },
              {
                childText: `Feb`,
              },
            ].map((data) => (
              <Text9>{data.childText}</Text9>
            ))}
          </Group12>
        </Group11>
      </Group8>
      <Group9>
        <Ellipse src={`https://file.rendit.io/n/CLwtGuoMqdfQON02psGv.svg`} />
        <Text5>Mainnet</Text5>
        <Ellipse src={`https://file.rendit.io/n/Dq3l9G9T9je5QUmfWITv.svg`} />
        <Text4>Testnet</Text4>
      </Group9>
    </FrameRootRootRoot>
  );
};

export default StatsPanel;

const Label4 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 6px 0.07px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-family: Inter;
  line-height: 29.42608642578125px;
  letter-spacing: -0.48px;
  box-sizing: border-box;
`;
const Group = styled.div`
  gap: 17px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 17px 0.07px;
  box-sizing: border-box;
`;
const Label = styled.div`
  align-self: flex-start;
  color: #8e9ab9;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 29.42608642578125px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Group1 = styled.div`
  width: 99.95%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 11px 0px;
  box-sizing: border-box;
`;
const Image8 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Text13 = styled.div`
  align-self: flex-start;
  margin: 2px 0px 3px 0px;
  color: #05cd99;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24.521739959716797px;
  text-align: right;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Group2 = styled.div`
  width: 99.95%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 48px 0px;
  box-sizing: border-box;
`;
const Text12 = styled.div`
  align-self: flex-end;
  margin: 3px 0px 2px 0px;
  color: #05cd99;
  font-size: 14px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24.521739959716797px;
  text-align: right;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Text9 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  font-family: Inter;
  line-height: 24.972219467163086px;
  letter-spacing: -0.24px;
  box-sizing: border-box;
`;
const Ellipse = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-end;
  margin: 8px 0px 7px 0px;
  box-sizing: border-box;
`;
const FrameRootRootRoot = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 18px 15px;
  border-width: 4px;
  border-radius: 13px;
  border-style: solid;
  border-color: #141414;
  box-sizing: border-box;
  background-color: #000000;
  overflow: hidden;
  width: 520px;
  min-width: 300px;
`;
const Label2 = styled.div`
  align-self: flex-start;
  margin: 0px 81px 0px 0px;
  color: #8e9ab9;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 29.42608642578125px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Label3 = styled.div`
  align-self: flex-start;
  margin: 0px 58px 0px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 29.42608642578125px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Label5 = styled.div`
  align-self: flex-start;
  margin: 0px 21px 0px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 29.42608642578125px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Element1 = styled.div`
  width: 7.83%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 3.47px 0px 4.47px 0px;
  padding: 8.28px 6.44px 9.2px 6.44px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("undefined");
`;
const Label7 = styled.div`
  align-self: flex-start;
  margin: 0px 92px 0px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 29.42608642578125px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Label6 = styled.div`
  align-self: flex-start;
  margin: 0px 26px 0px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 29.42608642578125px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Element2 = styled.div`
  width: 7.83%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 4.47px 0px 3.47px 0px;
  padding: 8.28px 6.44px 9.2px 6.44px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("undefined");
`;
const Label10 = styled.div`
  align-self: flex-start;
  margin: 0px 98px 0px 0px;
  color: #8e9ab9;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 29.42608642578125px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Label11 = styled.div`
  align-self: flex-start;
  margin: 0px 85px 0px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 29.42608642578125px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Label13 = styled.div`
  align-self: flex-start;
  margin: 0px 25px 0px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 29.42608642578125px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Element3 = styled.div`
  width: 7.82%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 3.47px 0px 4.47px 0px;
  padding: 8.28px 6.44px 9.2px 6.44px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("undefined");
`;
const Label15 = styled.div`
  align-self: flex-start;
  margin: 0px 81px 0px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 29.42608642578125px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Label14 = styled.div`
  align-self: flex-start;
  margin: 0px 31px 0px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 29.42608642578125px;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Element4 = styled.div`
  width: 7.82%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 4.47px 0px 3.47px 0px;
  padding: 8.28px 6.44px 9.2px 6.44px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("undefined");
`;
const ContractsVerified = styled.div`
  align-self: flex-start;
  margin: 0px 0px 6px 0.07px;
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24.972219467163086px;
  letter-spacing: -0.48px;
  box-sizing: border-box;
`;
const Group6 = styled.div`
  width: 99.95%;
  gap: 9px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 10px 0px;
  box-sizing: border-box;
`;
const Text6 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24.972219467163086px;
  text-align: right;
  letter-spacing: -0.2px;
  box-sizing: border-box;
`;
const Line = styled.div`
  width: 93.18%;
  height: 4px;
  align-self: flex-start;
  margin: 9px 0px 8px 0px;
  border-width: 4px 0px 0px 0px;
  border-style: solid;
  border-color: #141414;
  box-sizing: border-box;
`;
const Group7 = styled.div`
  width: 99.24%;
  gap: 9px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 0.07px 0px 0px;
  box-sizing: border-box;
`;
const Text7 = styled.div`
  align-self: flex-start;
  margin: 25px 0px 31px 0px;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24.972219467163086px;
  text-align: right;
  letter-spacing: -0.2px;
  box-sizing: border-box;
`;
const Group10 = styled.div`
  width: 93.89%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  padding: 41px 1px 0px 1px;
  box-sizing: border-box;
`;
const Line1 = styled.div`
  width: 246px;
  height: 4px;
  left: 0px;
  top: 34px;
  position: absolute;
  border-width: 4px 0px 0px 0px;
  border-style: solid;
  border-color: #141414;
  box-sizing: border-box;
`;
const Image2 = styled.img`
  width: 243px;
  min-width: 0px;
  height: 54px;
  min-height: 0px;
  left: 1px;
  top: 0px;
  position: absolute;
  box-sizing: border-box;
`;
const Image1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group8 = styled.div`
  width: 262px;
  max-width: 262px;
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 0.07px 3px 0px;
  box-sizing: border-box;
`;
const Text8 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 18px 0px;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24.972219467163086px;
  text-align: right;
  letter-spacing: -0.2px;
  box-sizing: border-box;
`;
const Group11 = styled.div`
  width: 100.41%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-end;
  margin: 9px 0px 0px 0px;
  padding: 5px 0px 0px 0px;
  border-width: 4px 0px 0px 0px;
  border-top-color: #141414;
  border-top-style: solid;
  box-sizing: border-box;
`;
const Group12 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group9 = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 77.1px 0px 0px;
  box-sizing: border-box;
`;
const Text5 = styled.div`
  align-self: flex-start;
  margin: 0px 8px 0px 0px;
  color: #ffffff;
  font-size: 10px;
  font-weight: 500;
  font-family: Inter;
  line-height: 24.972219467163086px;
  letter-spacing: -0.2px;
  box-sizing: border-box;
`;
const Text4 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 10px;
  font-weight: 500;
  font-family: Inter;
  line-height: 24.972219467163086px;
  letter-spacing: -0.2px;
  box-sizing: border-box;
`;
