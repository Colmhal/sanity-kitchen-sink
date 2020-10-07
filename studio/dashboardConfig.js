export default {
  widgets: [
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
                  buildHookId: '5f7d63bcf41607a55edbbff0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-grws65fz',
                  apiId: '8687a29a-9b5f-4550-b418-f9b151c1010e'
                },
                {
                  buildHookId: '5f7d63bcb0677dba033309d1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vp1jx84o',
                  apiId: '3362c573-7cd8-4130-9fe5-cfdf61fa53a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Colmhal/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vp1jx84o.netlify.app', category: 'apps'}
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
