import styled from "styled-components";

export const DashboardWrap = styled.div`
display:flex;
`

export const DataDisplayWrap = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
@media (max-width: 1024px) { 
    position: absolute;
    z-index: ${props => ((props.leftPanelView || props.rightPanelView) ? '-1' : '')};
}
`