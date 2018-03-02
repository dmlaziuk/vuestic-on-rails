// import lazyLoading from './lazyLoading'
import FormElements from 'vuestic-admin/components/forms/form-elements/FormElements.vue'
import FormWizard from 'vuestic-admin/components/forms/form-wizard/FormWizard.vue'
import MediumEditor from 'vuestic-admin/components/forms/medium-editor/MediumEditor.vue'

export default {
  name: 'Forms',
  meta: {
    expanded: false,
    title: 'menu.forms',
    iconClass: 'vuestic-icon vuestic-icon-forms'
  },
  children: [
    {
      name: 'FormElements',
      path: '/forms/form-elements',
      component: FormElements,
      // component: lazyLoading('forms/form-elements/FormElements'),
      meta: {
        title: 'menu.formElements'
      }
    },
    {
      name: 'FormWizards',
      path: '/forms/form-wizard',
      component: FormWizard,
      // component: lazyLoading('forms/form-wizard/FormWizard'),
      meta: {
        title: 'menu.formWizards'
      }
    },
    {
      name: 'MediumEditor',
      path: '/forms/medium-editor',
      component: MediumEditor,
      // component: lazyLoading('forms/medium-editor/MediumEditor'),
      meta: {
        title: 'Medium Editor'
      }
    }
  ]
}

