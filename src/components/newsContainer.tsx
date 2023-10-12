import { NewsArticlesData } from "../data/data"
import NewArticle from "./newArticle"

const NewsContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite p-5">
      <h1 className="text-SoftOrange text-4xl font-bold">New</h1>
       {
        NewsArticlesData.map(newArt => (
          <NewArticle title={newArt.title} body={newArt.body} />
        ))
       }
    </aside>
  )
}

export default NewsContainer
