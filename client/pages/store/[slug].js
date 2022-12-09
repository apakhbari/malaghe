import { useEffect } from 'react'
import { useRouter } from 'next/router'
import RemoveUndefinedsToPleaseNext from '../../hooks/removeUndefineds'

function StoreSlug(id) {
  const router = useRouter()

  var passedData

  return <div>{id}</div>
}

export async function getServerSideProps(context) {
  //const accountId = context.params
  var id = context.query.id

  //const client = BuildClient(context)
  //const { data } = await client.get(
  //  '/api/v1/users/service/' + context.query.accountId
  //)
  return {
    props: RemoveUndefinedsToPleaseNext(data),
  }
}

export default StoreSlug
