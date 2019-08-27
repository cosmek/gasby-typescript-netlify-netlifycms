import { defaultPageProps } from './defaultPageProps';

export const generateCollection = (options) => {
  return {
    name: options.name,
    label: options.label,
    folder: `src/content/${options.name}`,
    create: options.create,
    slug: options.slug,
    fields: [
      { label: "Layout", name: "layout", widget: "hidden", default: options.name },
      ...defaultPageProps,
      ...options.fields
    ],
  }
};