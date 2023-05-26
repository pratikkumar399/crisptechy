// /**
//  * Creating a sidebar enables you to:
//  - create an ordered group of docs
//  - render a sidebar for each doc of that group
//  - provide next/previous navigation

//  The sidebars can be generated from the filesystem, or explicitly defined here.

//  Create as many sidebars as you want.
//  */

// // @ts-check

// /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
// const sidebars = {
//   // By default, Docusaurus generates a sidebar from the docs folder structure
//   tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

//   // But you can create a sidebar manually
//   /*
//   tutorialSidebar: [
//     'intro',
//     'hello',
//     {
//       type: 'category',
//       label: 'Tutorial',
//       items: ['tutorial-basics/create-a-document'],
//     },
//   ],
//    */


// };

// module.exports = sidebars;


/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],
  docs: [
    {
      type: 'category',
      label: 'DSA GUIDES',
      link: {
        type: 'generated-index',
        title: 'Dsa Guides',
        description: 'Learn about the most important DSA concepts!',
        keywords: ['guides'],
        // image: '/img/docusaurus.png',
      },
      items: [
        {
          type: 'category',
          label: 'Binary Search',
          link: {
            type: 'doc',
            id: 'DSA BLOGS/BinarySearch/binarysearch',
            // image: '/img/docusaurus.png',
          },
          items: [
            'DSA BLOGS/BinarySearch/binarysearch'
          ]
        },
        {
          type: 'category',
          label: 'GitNotes',
          link: {
            type: 'doc',
            id: 'DSA BLOGS/GitNotes/gitnotes',
            // image: '/img/docusaurus.png',
          },
          items: [
            'DSA BLOGS/GitNotes/gitnotes'
          ]
        },
        {
          type: 'category',
          label: 'Graphs',
          link: {
            type: 'doc',
            id: 'DSA BLOGS/Graphs/bfsalgorithms',
            // image: '/img/docusaurus.png',
          },
          items: [
            'DSA BLOGS/Graphs/bfsalgorithms',
            'DSA BLOGS/Graphs/cycle_dfs_bfs_undirected',
            'DSA BLOGS/Graphs/dijkstraalgorithm',
            'DSA BLOGS/Graphs/graphrepresentation',
            'DSA BLOGS/Graphs/KhansAlgorithm',
            'DSA BLOGS/Graphs/topologicalsort',

          ]
        },
        {
          type: 'category',
          label: 'Trees',
          link: {
            type: 'doc',
            id: 'DSA BLOGS/Trees/binarytree',
            // image: '/img/docusaurus.png',
          },
          items: [
            {
              type: 'category',
              label: 'Traversals',
              link: {
                type: 'doc',
                id: 'DSA BLOGS/Trees/Traversals/inordertraversal',
                // image: '/img/docusaurus.png',
              },
              items: [
                'DSA BLOGS/Trees/Traversals/preordertraversal',
                'DSA BLOGS/Trees/Traversals/inordertraversal',
                'DSA BLOGS/Trees/Traversals/postordertraversal',
                'DSA BLOGS/Trees/Traversals/levelordertraversal',
              ]
            },
          ]
        },


      ],
    },
    {
      type: 'category',
      label: 'OOPS',
      link: {
        type: 'generated-index',
        title: 'OOPS IN CPP',
        description: 'Learn OOPS in CPP',
        keywords: ['guides'],
        // image: '/img/docusaurus.png',
      },
      items: [
        {
          type: 'category',
          label: 'OOPS',
          link: {
            type: 'doc',
            id: 'OOPS/OOPS_IN_CPP',
            // image: '/img/docusaurus.png',
          },
          items: [
            'OOPS/OOPS_IN_CPP',
            'OOPS/Cohesion_Coupling'
          ]
        }
      ]
    }
  ],
};
