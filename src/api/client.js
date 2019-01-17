import { CASE_WITH_SLUG_NOT_FOUND } from './errors'

class ApiClient {

  /**
   * Constructs an ApiClient
   * @param   {ContentfulClient} client what contentful client to use
   * @returns {ApiClient} a constructed ApiClient
   */
  constructor(client) {
    this.client = window.client || client
  }

  /**
   * Fetches data for a case
   * @param   {String} slug the slug of the case
   * @returns {Object} returns the data for the case or error if something goes wrong
   */
  getCaseBySlug(slug) {
    return new Promise((resolve, reject) => {
      /* eslint camelcase: off */
      this.client.getEntries({
        content_type: 'case',
        'fields.slug': slug,
        limit: 1
      })
      .then(({ items }) => {
        if (items.length < 1) reject(Error(CASE_WITH_SLUG_NOT_FOUND))
        resolve(items[0].fields)
      })
      .catch(err => reject(Error(err)))
    })
  }
}

export default ApiClient