export const defaultPageProps = [
  {
    label: 'Metadata',
    name: 'meta',
    widget: 'object',
    fields: [
      {
        label: 'Page-Title',
        name: 'pagetitle',
        widget: 'string',
        hint: 'Meta-Title. So only visible in the Tab. Default: H1 of the Body',
        required: false
      },
      {
        label: 'Description',
        name: 'description',
        widget: 'text',
        hint: 'Meta-Description of the Page.'
      },
      {
        label: 'Publish Date',
        name: 'date',
        widget: 'datetime'
      },
      {
        label: 'Featured Image',
        name: 'thumbnail',
        widget: 'image',
        hint: 'Will be used on Social-Media Embeds'
      },
    ]
  },
  {
    label: "Body",
    name: "body",
    widget: "markdown"
  },
]