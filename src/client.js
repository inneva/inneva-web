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
    }).then(entries => {
      if (entries.length < 1) reject("Not found")
      if (entries.length > 1) console.warn(`Duplicate entries for case with slug: ${slug} found`)
      
      resolve(entries.items[0].fields)
    }).catch(err => reject(err))
  })
}