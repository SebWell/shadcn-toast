export default {
  editor: {
    label: {
      en: 'Toast',
      fr: 'Notification Toast'
    },
    icon: 'notification',
    customStylePropertiesOrder: [
      'backgroundColor',
      'borderColor',
      'borderRadius',
      'borderWidth'
    ],
    customSettingsPropertiesOrder: [
      'variant',
      'title',
      'description',
      'duration',
      'position',
      'actionText',
      'showIcon',
      'showCloseButton',
      'showProgress',
      'closeOnAction'
    ]
  },
  properties: {
    variant: {
      label: {
        en: 'Variant',
        fr: 'Variante'
      },
      type: 'TextSelect',
      options: {
        options: [
          { value: 'default', label: { en: 'Default', fr: 'Par défaut' } },
          { value: 'destructive', label: { en: 'Destructive', fr: 'Destructif' } },
          { value: 'success', label: { en: 'Success', fr: 'Succès' } },
          { value: 'warning', label: { en: 'Warning', fr: 'Avertissement' } },
          { value: 'info', label: { en: 'Info', fr: 'Information' } }
        ]
      },
      defaultValue: 'default',
      bindable: true,
      section: 'settings'
    },
    title: {
      label: {
        en: 'Title',
        fr: 'Titre'
      },
      type: 'Text',
      defaultValue: 'Notification',
      bindable: true,
      multiLang: true,
      section: 'settings'
    },
    description: {
      label: {
        en: 'Description',
        fr: 'Description'
      },
      type: 'Text',
      defaultValue: 'This is a toast notification.',
      bindable: true,
      multiLang: true,
      section: 'settings'
    },
    duration: {
      label: {
        en: 'Duration (ms)',
        fr: 'Durée (ms)'
      },
      type: 'Number',
      defaultValue: 5000,
      bindable: true,
      section: 'settings',
      options: {
        min: 0,
        step: 100
      }
    },
    position: {
      label: {
        en: 'Position',
        fr: 'Position'
      },
      type: 'TextSelect',
      options: {
        options: [
          { value: 'top-left', label: { en: 'Top Left', fr: 'Haut Gauche' } },
          { value: 'top-center', label: { en: 'Top Center', fr: 'Haut Centre' } },
          { value: 'top-right', label: { en: 'Top Right', fr: 'Haut Droite' } },
          { value: 'bottom-left', label: { en: 'Bottom Left', fr: 'Bas Gauche' } },
          { value: 'bottom-center', label: { en: 'Bottom Center', fr: 'Bas Centre' } },
          { value: 'bottom-right', label: { en: 'Bottom Right', fr: 'Bas Droite' } }
        ]
      },
      defaultValue: 'bottom-right',
      bindable: true,
      section: 'settings'
    },
    actionText: {
      label: {
        en: 'Action text',
        fr: 'Texte de l\'action'
      },
      type: 'Text',
      bindable: true,
      multiLang: true,
      section: 'settings'
    },
    showIcon: {
      label: {
        en: 'Show icon',
        fr: 'Afficher l\'icône'
      },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'settings'
    },
    showCloseButton: {
      label: {
        en: 'Show close button',
        fr: 'Afficher le bouton fermer'
      },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'settings'
    },
    showProgress: {
      label: {
        en: 'Show progress bar',
        fr: 'Afficher la barre de progression'
      },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'settings'
    },
    closeOnAction: {
      label: {
        en: 'Close on action',
        fr: 'Fermer à l\'action'
      },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'settings'
    },
    body: {
      label: {
        en: 'Custom content',
        fr: 'Contenu personnalisé'
      },
      type: 'Element',
      section: 'content'
    },
    customClass: {
      label: {
        en: 'Toast CSS class',
        fr: 'Classe CSS du toast'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    },
    containerClass: {
      label: {
        en: 'Container CSS class',
        fr: 'Classe CSS du conteneur'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    },
    titleClass: {
      label: {
        en: 'Title CSS class',
        fr: 'Classe CSS du titre'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    },
    descriptionClass: {
      label: {
        en: 'Description CSS class',
        fr: 'Classe CSS de la description'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    },
    actionClass: {
      label: {
        en: 'Action CSS class',
        fr: 'Classe CSS de l\'action'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    },
    progressClass: {
      label: {
        en: 'Progress CSS class',
        fr: 'Classe CSS de la progression'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    },
    progressBarClass: {
      label: {
        en: 'Progress bar CSS class',
        fr: 'Classe CSS de la barre de progression'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    }
  },
  actions: [
    {
      label: {
        en: 'Show toast',
        fr: 'Afficher le toast'
      },
      action: 'show'
    },
    {
      label: {
        en: 'Close toast',
        fr: 'Fermer le toast'
      },
      action: 'close'
    }
  ],
  triggerEvents: [
    {
      name: 'close',
      label: {
        en: 'On close',
        fr: 'À la fermeture'
      }
    },
    {
      name: 'action',
      label: {
        en: 'On action click',
        fr: 'Au clic sur l\'action'
      }
    }
  ]
} 