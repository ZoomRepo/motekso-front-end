import { AxiosPost, AxiosDelete } from "../AxiosWrapper";

export const upsertCategory = (name, description) => {
  return AxiosPost(`http://api.motekso.co.uk/category`, {
    name: name,
    description: description
  });
};

export const getCategories = () => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
return AxiosDelete(`http://api.motekso.co.uk/categories`);
};

export const deleteCategory = () => {
  // Assign Dynamic value to change on enviornment change and for different services if needed
return AxiosDelete(`http://api.motekso.co.uk/category`);
};