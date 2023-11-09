import { useState } from 'react'
import { Result } from '../interfaces/articles'
import SingleArticle from './SingleArticle'
import { Container } from 'react-bootstrap'

const GetAritcles = () => {
  const [articles, setArticles] = useState<Result[]>([])
  fetch('https://api.spaceflightnewsapi.net/v4/articles')
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('errore nel recupero della fetch')
      }
    })
    .then((data) => {
      setArticles(data.results)
    })
    .catch((err) => {
      console.log('Hai avuto un errore', err)
    })

  return (
    <>
      {articles.map((article) => (
        <SingleArticle
          key={article.id}
          img={article.image_url}
          title={article.title}
          summary={article.summary}
          date={article.published_at}
        />
      ))}
    </>
  )
}

export default GetAritcles
