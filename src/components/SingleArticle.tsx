import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface SingleArticleProps {
  img: string
  title: string
  summary: string
  date: Date
}

const SingleArticle = (props: SingleArticleProps) => {
  return (
    <Col md={4} className="mb-3">
      <Card className="h-100">
        <Card.Img variant="top" src={props.img} style={{ height: '250px' }} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="fw-bold">{props.title}</Card.Title>
          <Card.Text className="text-truncate">{props.summary}</Card.Text>
          <Card.Text className="text-end">
            {new Date(props.date).toLocaleString('it-IT', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </Card.Text>
          <Link to={'/'} className="btn btn-primary">
            See more
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleArticle
