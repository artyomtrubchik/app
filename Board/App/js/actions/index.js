import constants from '../constants/constants';

export const addArticle = article => ({ type: constants.ADD_ARTICLE, payload: article });