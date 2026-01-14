import styled from 'styled-components'

export const FooterStyle = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 62.5rem) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
  }
`


export const Right = styled.div`
  p {
    color: ${({ theme }) => theme.Text_Colors.text_secondary};
    font-family: 'Heebo';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 171.429%;
  }
`


export const LeftFooter = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  img {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.Text_Colors.text_secondary};
    font-family: 'Heebo';
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%;
  }

  @media (max-width: 62.5rem) {
    // flex-direction: column;
    gap: 1rem;
  }
`
