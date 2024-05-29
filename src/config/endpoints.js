export const endpoints = {
  news: "/api/news/",
  newsById: (id) => `api/news/${id}/`,
  libraryCategory: "/api/library-categories/",
  libraryCategoryById: (id) => `api/library-categories/${id}/`,
  categoryApi_list: "/api/category_api-list/",
  categoryApi_listById: (id) => `/api/category_api-detail/${id}/`,
  // resursApi_list: "/api/resource_api-list/",
};
