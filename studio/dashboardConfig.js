export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '614ac2e8159f734f3c1053b4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-demo-studio-anp3rwpr',
                  apiId: 'cf1a2aeb-16a5-41ca-89c7-9d0dbcce8aca'
                },
                {
                  buildHookId: '614ac2e820dd12538e34c870',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-demo-web-ieddecvb',
                  apiId: '1deda75a-32ba-43e4-9ea1-56699a8c8281'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tom-outfit/sanity-nextjs-landing-pages-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-demo-web-ieddecvb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
