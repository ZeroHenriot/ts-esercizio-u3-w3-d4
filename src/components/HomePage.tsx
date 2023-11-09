import { Container, Row } from 'react-bootstrap'
import GetAritcles from './ArticlesFetch'

const HomePage = () => {
  return (
    <Container>
      <Row>
        <GetAritcles />
      </Row>
    </Container>
  )
}

export default HomePage
