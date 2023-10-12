export interface ILink {
  name: string
  src: string
}

export interface INewArticle {
  title: string
  body: string
}

export interface IMostRead {
  totalVisits: number
  imageSrc: string
  title: string
  desc: string
}