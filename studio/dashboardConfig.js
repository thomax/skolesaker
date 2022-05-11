export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '627b60480a83dd3909f286e7',
                  title: 'Sanity Studio',
                  name: 'skolesaker-studio',
                  apiId: 'dc10a537-a71d-430c-ae38-b741a0b1a3e8'
                },
                {
                  buildHookId: '627b60482ac5dd384a88db90',
                  title: 'Blog Website',
                  name: 'skolesaker',
                  apiId: '90ffe507-c2e8-4549-a44b-5f021ebd553e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thomax/skolesaker',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://skolesaker.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
