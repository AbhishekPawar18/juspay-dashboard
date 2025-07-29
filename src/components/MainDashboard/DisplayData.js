import React from 'react'
import { CardCount, CardSubCount, CardsWrap, CountWrap, Card, DataContainer, DataTitle, SectionOneWrap, ProgressIcon, ProjectionCard, RevenueGraphCard, RevenueLocationCard, WorldMap, WorldIconWrap, CountryPercentage, PercentageLabel, ValueLabel, PercentageBar, Fill, LabelWrap } from './DisplayDataStyled'
import RaiseIcon from './Images/ArrowRise.svg'
import RaiseDown from './Images/ArrowDown.svg'
import RaiseIconDark from './Images/ArrowRise-dark.svg'
import RaiseDownDark from './Images/ArrowDown-dark.svg'
import ProjectionsVsActualsChart from './GraphCharts/ProjectionsVsActualsChart'
import RevenueChart from './GraphCharts/RevenueChart'
import SalesDonutChart from './GraphCharts/SalesDonutChart'
import WorldMapIcon from './Images/WorldMap.svg'
import TopSellingProductsTable from './GraphCharts/SellingProduct'
function DisplayData({ isDarkMode, setIsOrderList }) {
  const countryData = [
    { name: 'New York', percentage: 70 },
    { name: 'San Francisco', percentage: 50 },
    { name: 'Sydney', percentage: 80 },
    { name: 'India', percentage: 40 },
    { name: 'Singapore', percentage: 60 },
  ];

  const handleOrderCardClick = () => {
    setIsOrderList(true);
  };

  return (
    <DataContainer isDarkMode={isDarkMode}>
      <DataTitle isDarkMode={isDarkMode}>eCommerce</DataTitle>
      <SectionOneWrap>
        <CardsWrap>
          <Card type="customer">
            <DataTitle>Customers</DataTitle>
            <CountWrap>
              <CardCount>3,781</CardCount>
              <CardSubCount>+11.01% <ProgressIcon src={RaiseIcon} /></CardSubCount>
            </CountWrap>
          </Card>
          <Card
            type="orders"
            isDarkMode={isDarkMode}
            style={{ color: isDarkMode ? "#FFFFFF" : "" }}
            onClick={handleOrderCardClick}
          >
            <DataTitle isDarkMode={isDarkMode}>Orders</DataTitle>
            <CountWrap>
              <CardCount>1,219</CardCount>
              <CardSubCount>-0.03% <ProgressIcon src={isDarkMode ? RaiseDownDark : RaiseDown} /></CardSubCount>
            </CountWrap>
          </Card>
          <Card type="revenue" isDarkMode={isDarkMode} style={{ color: isDarkMode ? "#FFFFFF" : "" }}>
            <DataTitle isDarkMode={isDarkMode}>Revenue</DataTitle>
            <CountWrap>
              <CardCount>$695</CardCount>
              <CardSubCount>+15.03% <ProgressIcon src={isDarkMode ? RaiseIconDark : RaiseIcon} /></CardSubCount>
            </CountWrap>
          </Card>
          <Card type="growth">
            <DataTitle >Growth</DataTitle>
            <CountWrap>
              <CardCount>30.1%</CardCount>
              <CardSubCount>+6.08% <ProgressIcon src={RaiseIcon} /></CardSubCount>
            </CountWrap>
          </Card>
        </CardsWrap>
        <ProjectionCard isDarkMode={isDarkMode}>
          <DataTitle isDarkMode={isDarkMode} style={{ paddingTop: "16px", paddingLeft: "20px" }}>Projections vs Actuals</DataTitle>
          <ProjectionsVsActualsChart isDarkMode={isDarkMode} />
        </ProjectionCard>
      </SectionOneWrap>
      <SectionOneWrap>
        <RevenueGraphCard isDarkMode={isDarkMode}>
          <RevenueChart isDarkMode={isDarkMode} />
        </RevenueGraphCard>
        <RevenueLocationCard isDarkMode={isDarkMode}>
          <DataTitle isDarkMode={isDarkMode} style={{ textAlign: "center" }}>Revenue by Location</DataTitle>
          <WorldIconWrap>
            <WorldMap src={WorldMapIcon} />
          </WorldIconWrap>
          {countryData.map((country) => (
            <CountryPercentage key={country.name} >
              <LabelWrap>
                <PercentageLabel isDarkMode={isDarkMode}>{country.name}</PercentageLabel>
                <ValueLabel isDarkMode={isDarkMode}>{`${country.percentage}k`}</ValueLabel>
              </LabelWrap>
              <PercentageBar isDarkMode={isDarkMode}>
                <Fill percentage={country.percentage} isDarkMode={isDarkMode} />
              </PercentageBar>
            </CountryPercentage>
          ))}
        </RevenueLocationCard>
      </SectionOneWrap>
      <SectionOneWrap>
        <TopSellingProductsTable isDarkMode={isDarkMode} />
        <SalesDonutChart isDarkMode={isDarkMode} />
      </SectionOneWrap>
    </DataContainer>
  )
}

export default DisplayData