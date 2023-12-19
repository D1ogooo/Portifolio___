import styled from 'styled-components'

export const FooterStyle = styled.footer`
 display: flex;
 justify-content: space-between;
 margin-top: 5rem;
 margin-bottom: 2rem;
`

export const Right = styled.div`
 p {
  color: ${({ theme }) => theme.Text_Colors.text_secondary};
  font-family: 'Heebo';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 171.429%;
 }
`

export const LeftFooter = styled.div`
 display: flex;
 gap: 2rem;

 img {
  cursor: pointer;
 }

 a {
  text-decoration: none;
  color: ${({ theme }) => theme.Text_Colors.text_secondary};
  font-family: 'Heebo';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
 }
`