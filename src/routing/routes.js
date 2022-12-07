import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import { Blog } from "../pages/Blog";
import { ErrorPage } from "../pages/ErrorPage";
import { NavBar } from "../pages/NavBar";

const routes = [
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <div />,
    children: [
      { 
        path: '',
        children: [
          {
            path: "",
            element: (
              <div>
                home
                <Outlet />
              </div>
            ),
          },
          {
            path: "blog",
            element: <Blog />,
            children: [
              {
                path: "about",
                element: <div> blog about</div>,
              },
            ],
          },
        ],
      },
      {
        path: ':businessType',
        children: [
          {
            path: "",
            element: (
              <div>
                home
                <Outlet />
              </div>
            ),
          },
          {
            path: "blog",
            element: <Blog />,
            children: [
              {
                path: "about",
                element: <div> blog about</div>,
              },
            ],
          },
        ],
      }
    ]
  },
  {
    path: ":langID",
    element: <div />,
    children: [
      {
        path: ':businessType',
        children: [
          {
            path: "",
            element: (
              <div>
                home
                <Outlet />
              </div>
            ),
          },
          {
            path: "blog",
            element: <Blog />,
            children: [
              {
                path: "about",
                element: <div> blog about</div>,
              },
            ],
          },
        ]
    },
      
      {
        path: '',
        children: [
          {
            path: "",
            element: (
              <div>
                home
                <Outlet />
              </div>
            ),
          },
          {
            path: "blog",
            element: <Blog />,
            children: [
              {
                path: "about",
                element: <div> blog about</div>,
              },
            ],
          },
        ]
    },
   
 
    ],
  },
];


export const defaultRoutes = [
  {
    path: ':langID',
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            element: <div> 
              <NavBar/>
              <Outlet/>
              home main lang
               </div>,
            children: [
              {
                path: 'blog',
                element: <div>
                                    <Outlet/>
    
                   blog main</div>,
                children: [
                  {
                    path: 'about',
                    element: <div>
                      <Outlet/>
                       about in blog
                       </div>
                  }
                ]
              },
              {
                path: 'about',
                element: <div> about main</div>
              }
            ]
          },
          
        ]
      },
      {
      path: ':businessType',
      children: [
        {
          path: '',
          element: <div> 
            <NavBar/>
            <Outlet/>
            home main lang
             </div>,
          children: [
            {
              path: 'blog',
              element: <div>
                                  <Outlet/>
  
                 blog main</div>,
              children: [
                {
                  path: 'about',
                  element: <div>
                    <Outlet/>
                     about in blog
                     </div>
                }
              ]
            },
            {
              path: 'about',
              element: <div> about main</div>
            }
          ]
        },
        
      ]
      }
    ]
  
  },
  {
    path: '/',
    children: [
      {
        path: ':businessType',
        element: <div> 
          <NavBar/>
          <Outlet/>

          home main </div>,
        children: [
          {
            path: 'blog',
            element: <div>
                                <Outlet/>

               blog main</div>,
            children: [
              {
                path: 'about',
                element: <div>
                  <Outlet/>
                   about in blog
                   </div>
              }
            ]
          },
          {
            path: 'about',
            element: <div> about main</div>
          }
        ]
      },
      {
        path: '',
        element: <div> 
          <NavBar/>
          <Outlet/>

          home main </div>,
        children: [
          {
            path: 'blog',
            element: <div>
                                <Outlet/>

               blog main</div>,
            children: [
              {
                path: 'about',
                element: <div>
                  <Outlet/>
                   about in blog
                   </div>
              }
            ]
          },
          {
            path: 'about',
            element: <div> about main</div>
          }
        ]
      },
    
      
    ]
  }
 
]

export const router = createBrowserRouter(routes);
