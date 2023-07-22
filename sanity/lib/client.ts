import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "sk5U5Cctb25yfxEjUr7dDFxLGXT8myD8YZQzhiLLcQtcNtbkHJWijQjLZmc5bIo7HC9sSWUximo3rImyeh9VmPlVAtc66hBCXBBiuNKb7TvOIpJnQU7natGPyTeLnMHQWFcGGkTvQNvT7vJtFKW7q8wre5fvTdEFwLEADoxRp4D3N9dl4oLo",
})
