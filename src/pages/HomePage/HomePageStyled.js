import styled from 'styled-components'

export const HomePageWrapper = styled.div`
  padding: 16px;
`
export const TestBoxShadow = styled.div`
  padding: 16px;
  margin: 16px;
  width: 500px;

  &:hover {
    box-shadow: ${props => props.appTheme.BOX_SHADOW_BASE};
  }


`
