import { useEffect } from 'react'
import { useRouter } from 'next/router'

import BuildClient from '../../api/build-client'
import RemoveUndefinedsToPleaseNext from '../../hooks/removeUndefineds'

function StoreSlug({ data }) {
  const router = useRouter()

  console.log(data)
  return <div>yo</div>
}

export async function getServerSideProps(context) {
  //const accountId = context.params
  var id = context.query.id

  const client = BuildClient(context)
  const { data } = await client.get(`/api/v1/store/${id}`)
  return {
    props: RemoveUndefinedsToPleaseNext({ data }),
  }
}

export default StoreSlug
