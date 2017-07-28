
export interface HttpInterface {
  /**
   * @param queryParam
   */
  getApiQuery(queryParam?);

  /**
   * @param queryParam
   * @param {Object} data
   * @returns {boolean}
   */
  postApiQuery(data : Object, queryParam?): boolean;


  /**
   * @param queryParams
   * @returns {boolean}
   */
  deleteApiQuery(queryParams) : boolean;
}
