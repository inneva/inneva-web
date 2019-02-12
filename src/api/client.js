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

  /**
   * Fetches the latest cases
   * @param {Int} count the number of cases to fetch
   * @returns {Array} returns an array of cases
   */
  getLatestCases(count = 1) {
    return new Promise((resolve, reject) => {
      /* eslint camelcase: off */
      this.client.getEntries({
        content_type: 'case',
        limit: count,
        order: '-sys.createdAt'
      })
      .then(({ items }) => {
        resolve(items.map(el => el.fields))
      })
      .catch(err => reject(Error(err)))
    })
  }

  /**
   * Fetches all data for the main view
   * @returns {Object} returns the data needed to render the main view
   */
  getMainData() {
    return new Promise((resolve, reject) => {
      const mainDataPromise = this.client.getEntries({
        content_type: 'main',
        limit: 1
      })
      Promise.all([this.getLatestCases(3), mainDataPromise])
        .then(res => {
          const cases = res[0],
           main = res[1].items[0].fields
          resolve({ cases, main })
        })
        .catch(err => reject(err))
    })
  }
}

export default ApiClient