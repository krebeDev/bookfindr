import React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from '../../components/SearchForm'
import Container from '../../components/lib/Container'
import designImage from '../../images/design.png'
import programmingImage from '../../images/programming.png'
import cityImage from '../../images/cities.png'
import blockchainImage from '../../images/blockchain.png'
import SectionTitle from '../../components/ResultTitle'
import styledComponents from './styles.js'

const {
  FormBox,
  CategorySection,
  CategoryList,
  BookCategory,
  CategoryImage,
  CategoryTitle,
} = styledComponents

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

const HomePage = () => {
  const renderCategories = categories.map(({ title, image }) => (
    <BookCategory key={title}>
      <Link to={`/search?query=${title}`}>
        <CategoryImage src={image} alt={title} width={800} height={400} />
        <CategoryTitle>{title}</CategoryTitle>
      </Link>
    </BookCategory>
  ))

  return (
    <>
      <section>
        <Container>
          <FormBox>
            <h1>Find &amp; organize your favorite books</h1>
            <SearchForm home />
          </FormBox>
        </Container>
      </section>
      <CategorySection>
        <Container>
          <SectionTitle title='Popular Categories' />
          <CategoryList>{renderCategories}</CategoryList>
        </Container>
      </CategorySection>
    </>
  )
}

export default HomePage
