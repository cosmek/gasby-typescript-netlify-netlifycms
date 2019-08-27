/**
 * The default export of `netlify-cms-app` is an object with all of the Netlify CMS
 * extension registration methods, such as `registerWidget` and
 * `registerPreviewTemplate`.
 */
import CMS from "netlify-cms-app";
import { generateCollection } from './helper/generateCollection';
import { generatePage } from './helper/generatePage';


/**
 * Let's say you've created widget and preview components for a custom image
 * gallery widget in separate files:
 */
// import ImageGalleryWidget from "./image-gallery-widget.js"
// import ImageGalleryPreview from "./image-gallery-preview.js"

/**
 * Register the imported widget:
 */
// CMS.registerWidget(`image-gallery`, ImageGalleryWidget, ImageGalleryPreview)

CMS.init({
  config: {
    backend: {
      name: 'git-gateway',
      branch: 'master',
    },
    media_folder: `static/images/uploads`,
    public_folder: "/images/uploads",
    collections: [
      generateCollection({
        name: 'blog',
        label: 'Blog',
        slug: '{{year}}-{{slug}}',
        create: true,
        fields: [

        ]
      }),
      {
        label: "Pages",
        name: "pages",
        files: [
          generatePage({
            name: 'team',
            label: 'Team',
            fields: [
              {
                label: 'Team',
                name: 'team',
                widget: 'list',
                fields: [
                  { label: 'Name', name: 'name', widget: 'string' },
                  { label: 'Position', name: 'position', widget: 'string' },
                  { label: 'Photo', name: 'photo', widget: 'image' },
                ]
              },
            ]
          }),
        ]
      }
    ],
  },
});