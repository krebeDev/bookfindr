import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import SearchForm from '../components/SearchForm'
import Container from '../components/ui/Container'
import breakpoints from '../commons/breakpoints'
import designImage from '../images/design.png'
import programmingImage from '../images/programming.png'
import cityImage from '../images/cities.png'
import blockchainImage from '../images/blockchain.png'

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

const Title = styled.h2`
  display: flex;
  align-items: center;

  & :nth-child(2) {
    flex: 1;
    height: 0.3rem;
    border-radius: 0 0.5rem 0.5rem 0;
    margin-left: 1rem;
    background: ${({ theme }) => theme.lightGreen};
  }

  @media ${breakpoints.device.tablet} {
    & :nth-child(2) {
      height: 0.7rem;
    }
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

  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(30, 145, 19, 0.3);
    border-radius: 0.5rem;
  }
`
const Figure = styled.figure`
  cursor: pointer;
`

const CategoryImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
`

const Figcaption = styled.figcaption`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  z-index: 2;

  @media ${breakpoints.device.tablet} {
    font-size: 1.3rem;
  }
`

const CategorySection = styled.section`
  padding: 2rem 0;
`

const HomePage = () => {
  const history = useHistory()
  const categories = [
    {
      title: 'design',
      image: designImage,
    },

    {
      title: 'programming',
      image: programmingImage,
    },
    {
      title: 'blockchain',
      image: blockchainImage,
    },

    {
      title: 'smart-cities',
      image: cityImage,
    },
  ]

  const handleClick = (term) => {
    history.push(`/search?query=${term}`)
  }

  const renderCategories = categories.map(({ title, image }) => (
    <BookCategory key={title}>
      <Figure onClick={() => handleClick(title)}>
        <CategoryImage src={image} alt={title} width={800} height={400} />
        <Figcaption>{title}</Figcaption>
      </Figure>
    </BookCategory>
  ))

  return (
    <>
      <section>
        <Container>
          <FormBox>
            <h1>Find &amp; organize your favorite books</h1>
            <SearchForm />
          </FormBox>
        </Container>
      </section>
      <CategorySection>
        <Container>
          <Title>
            <span>Popular Categories</span>
            <span aria-hidden='true' />
          </Title>
          <CategoryList>{renderCategories}</CategoryList>
        </Container>
      </CategorySection>
    </>
  )
}

export default HomePage
