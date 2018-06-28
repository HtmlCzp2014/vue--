import Vue from 'vue'
import Router from 'vue-router'
import page1 from '../components/page1.vue'
import page2 from '../components/page2.vue'
import page3 from '../components/page3.vue'
import page4 from '../components/page4.vue'
import kindsOne from '../components/router/kindsOne.vue'
import kindsTwo from '../components/router/kindsTwo.vue'
import kindsThree from '../components/router/kindsThree.vue'
import kindsFour from '../components/router/kindsFour.vue'
import kindsFive from '../components/router/kindsFive.vue'
import kindsSix from '../components/router/kindsSix.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {path: '/', redirect: 'page1/kind1'},
    {
      path: '/page1',
      name: 'page1',
      component: page1,
      children: [
      {
        path: '/page1/kind1',
        name: 'kind1',
        component: kindsOne
      },
      {
        path: '/page1/kind2',
        name: 'kind2',
        component: kindsTwo
      },
      {
        path: '/page1/kind3',
        name: 'kind3',
        component: kindsThree
      },
      {
        path: '/page1/kind4',
        name: 'kind4',
        component: kindsFour
      },
      {
        path: '/page1/kind5',
        name: 'kind5',
        component: kindsFive
      },
      {
        path: '/page1/kind6',
        name: 'kind6',
        component: kindsSix
      }
    ]
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    },
    {
      path: '/page3',
      name: 'page3',
      component: page3
    },
    {
      path: '/page4',
      name: 'page4',
      component: page4
    }
  ]
})
