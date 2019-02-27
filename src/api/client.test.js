/* eslint no-undef: "off" */
import { createClient } from 'contentful'

import { CASE_WITH_SLUG_NOT_FOUND } from './errors'
import Client from './client'

let client = {}
const existingSlug = 'atritec'

beforeAll(() => {
  const contentfulClient = createClient({
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN,
    space: process.env.REACT_APP_CONTENTFUL_SPACE
  })
  client = new Client(contentfulClient)
})

test('fetching non-existing case returns error', async () => {
  expect.assertions(1)
  try {
    await client.getCaseBySlug('NON_EXISTING_SLUG')
  } catch (e) {
    expect(e.message).toEqual(CASE_WITH_SLUG_NOT_FOUND)
  }
})

test('fetching existing case returns data', async () => {
  expect.assertions(1)
  const data = await client.getCaseBySlug(existingSlug)
  expect(data.slug).toEqual(existingSlug)
})