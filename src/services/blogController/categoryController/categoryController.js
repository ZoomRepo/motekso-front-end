import { AxiosPost, AxiosDelete } from "../AxiosWrapper";

export const upsertCategory = (name, description) => {
  return AxiosPost(`/category`, {
    name: name,
    description: description
  });
};

export const getCategories = () => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
return AxiosDelete(`/categories`);
};

export const deleteCategory = () => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
return AxiosDelete(`/category`);
};