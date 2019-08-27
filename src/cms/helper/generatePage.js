import { defaultPageProps } from './defaultPageProps';

export const generatePage = (options) => {
  return {
    name: options.name,
    label: options.label,
    file: `src/content/pages/${options.name}.md`,
    fields: [
      { label: "Layout", name: "layout", widget: "hidden", default: options.name },
      ...defaultPageProps,
      ...options.fields
    ],
  }
};