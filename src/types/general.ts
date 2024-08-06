export type SearchParams = {
  limit?: number
  offset?: number
}

export type PageProps<T, U extends SearchParams> = {
  params: T
  searchParams: U
}
