/**
 * Fetches data for a case
 * 
 * @param slug the slug of the case
 * @returns data for the case
 */
export const getCaseBySlug = slug => {
  return new Promise((resolve, reject) => {
    window.client.getEntries({
      content_type: 'case',
      limit: 1,
      'fields.slug': slug
    }).then(({ items }) => {
      if (items.length < 1) reject(`Case with slug "${slug}" could not be found`)
      resolve(items[0].fields)
    }).catch(err => reject(err))
  })
}