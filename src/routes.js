import VueRouter from 'vue-router'

import ListUsers from './components/ListUsers'
import TodoList from './components/TodoList'
import PhotoList from './components/PhotoList'
import CommentList from './components/CommentList'
import PostList from './components/PostList'

const router = new VueRouter({
  routes: [
    {
      path: '/users',
      component: ListUsers
    },
    {
      path: '/todos',
      component: TodoList
    },
    {
      path: '/photos',
      component: PhotoList
    },
    {
      path: '/comments',
      component: CommentList
    },
    {
      path: '/posts',
      component: PostList
    },
    {
      path: '*',
      redirect: '/users'
    }
  ],
  mode: 'history'
})

export default router
