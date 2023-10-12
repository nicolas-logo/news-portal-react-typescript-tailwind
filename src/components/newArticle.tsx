import { INewArticle } from './../types/types'

const NewArticle = (newArticle: INewArticle) => {
  return (
    <article className='h-[140px] border-b-2 border-GrayishBlue py-7 last:border-none  '>
      <h2 className='text-[20px] font-bold hover:text-SoftOrange cursor-pointer'>{newArticle.title}</h2>
      <p className='text-[15px]'>{newArticle.body}</p>
    </article>
  )
}

export default NewArticle
