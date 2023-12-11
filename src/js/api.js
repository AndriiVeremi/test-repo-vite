import axios from 'axios';

import {
  BASE_URL,
  DEFAULT_EXERCISES_LIMIT,
  DEFAULT_FILTER_LIMIT,
} from './config.js';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    // page: DEFAULT_PAGE,
  },
});

//---------------Filters---------------------------------------------------------------
export const getBodyPartsList = async (page = 1) => {
  const response = await api.get('/filters', {
    params: {
      filter: 'Body parts',
      page,
      limit: DEFAULT_FILTER_LIMIT,
    },
  });
  return response.data;
};

export const getFilteredList = async (filter, page = 1) => {
  const response = await api.get('/filters', {
    params: {
      filter,
      page,
      limit: DEFAULT_FILTER_LIMIT,
    },
  });
  return response.data;
};

export const getExercises = async (
  { bodypart, muscles, equipment, search },
  page = 1
) => {
  const checkedSearch =
    search && !bodypart && !muscles && !equipment ? '' : search;

  const response = await api.get('/exercises', {
    params: {
      bodypart: bodypart || '',
      muscles: muscles || '',
      equipment: equipment || '',
      keyword: checkedSearch || '',
      page,
      limit: DEFAULT_EXERCISES_LIMIT,
    },
  });
  return response.data;
};