import styled, { css } from 'styled-components'

export const BorderBoxWrapper = styled.div`
  ${(props) => {
    switch (props.active) {
      case true:
        return css`
          border: 1px solid ${props.appTheme.PRIMARY_COLOR};
        `
      default:
        return css`
          border: 1px solid ${props.appTheme.BORDER_COLOR_BASE};
        `
    }   
  }}
`