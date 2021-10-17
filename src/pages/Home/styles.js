import styled from 'styled-components'
import breakpoints from './../../commons/breakpoints'

const FormBox = styled.div`
  padding: 3rem 1rem;
  background: ${({ theme }) => theme.baseGreen};
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  & > h1 {
    color: ${({ theme }) => theme.veryLightGreen};
    margin-bottom: 1.2rem;
    text-align: center;
  }

  &::before {
    content: '';
    width: 6rem;
    height: 6rem;
    background: ${({ theme }) => theme.lightGreen};
    opacity: 0.3;
    position: absolute;
    bottom: -3.5rem;
    left: -3.5rem;
    border-radius: 50%;
  }

  &::after {
    content: '';
    width: 7rem;
    height: 7rem;
    background: ${({ theme }) => theme.lightGreen};
    opacity: 0.3;
    position: absolute;
    top: -3.5rem;
    right: -3.5rem;
    border-radius: 50%;
  }

  @media ${breakpoints.device.tablet} {
    &::before {
      width: 10rem;
      height: 10rem;
    }

    &::after {
      width: 10rem;
      height: 10rem;
    }
  }
`

const CategorySection = styled.section`
  padding: 2rem 0;

  @media ${breakpoints.device.tablet} {
    margin-top: 2rem;
  }
`

const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 0.5rem;
`
const BookCategory = styled.li`
  position: relative;
  flex-basis: 49%;
  margin: 1% 0;
  }
`

const CategoryImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
`

const CategoryTitle = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(30, 145, 19, 0.3);
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  z-index: 2;

  @media ${breakpoints.device.tablet} {
    font-size: 1.3rem;
  }
`

export default {
  FormBox,
  CategorySection,
  CategoryList,
  BookCategory,
  CategoryImage,
  CategoryTitle,
}
