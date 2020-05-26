const themeDefaults = {
  frame: '#673AB7',
  system: '#58b434',
  'mech-system': '#58b434',
  'pilot-gear': '#58b434',
  trait: '#673AB7',
  protocol: '#1b6361',
  mod: '#00BFA5',
  'weapon-mod': '#00BFA5',
  structure: '#F50057',
  hp: '#0284FF',
  armor: '#82B1FF',
  'pilot-armor': '#82B1FF',
  heat: '#FF7043',
  stress: '#FF3D00',
  heatcap: '#EF5350',
  dangerzone: '#FF1744',
  repcap: '#8E8E8E',
  overcharge: '#F50057',
  corepower: '#00BFA5',
  background: '#EDEDED',

  'action--move': '#C62828',
  'action--full': '#283593',
  'action--quick': '#3949AB',
  'action--overcharge': '#F50057',
  'action--free': '#00695C',
  'action--protocol': '#007676',
  'action--tech': '#802475',

  'damage--kinetic': '#757575',
  'damage--energy': '#29B6F6',
  'damage--explosive': '#FFA726',
  'damage--burn': '#B71C1C',
  'damage--heat': '#FF7043',
  'damage--variable': '#D500F9',

  'reserve--resources': '#00695C',
  'reserve--tactical': '#827717',
  'reserve--mech': '#BF360C',
  'reserve--project': '#5D4037',
  'reserve--custom': '#D84315',

  'role--striker': '#bd3f39',
  'role--defender': '#d67e08',
  'role--controller': '#398ad6',
  'role--support': '#6aa84f',
  'role--artillery': '#a64d79',
  'role--biological': '#7e52a3',

  'npc--feature': '#991E2A',
  'npc--trait': '#991E2A',
  'npc--system': '#58b434',
  'npc--weapon': '#212121',
  'npc--tech': '#007674',
  'npc--reaction': '#512DA8',

  enemy: '#C62828',
  ally: '#1661b8',
  neutral: '#455A64',
}

const theme: any = {
  icons: {
    iconfont: 'mdi',
    values: {
      move: 'mdi-arrow-right-bold-hexagon-outline',
      quick: 'mdi-hexagon-slice-3',
      full: 'mdi-hexagon-slice-6',
      reaction: 'mdi-redo-variant',
      overcharge: 'mdi-alert-octagram',
      downtime: 'mdi-weather-sunset-down',
      free: 'mdi-axis-arrow',
    },
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        ...themeDefaults,
        primary: '#991E2A',
        active: '#d93f4e',
        accent: '#8c1420',
        secondary: '#283593',
        pilot: '#424242',
        error: '#F44336',
        info: '#1565C0',
        success: '#00C853',
        warning: '#FFAB00',

        weapon: '#212121',
        'mech-weapon': '#212121',
        'pilot-weapon': '#212121',

        text: '#212121',
        subtle: '#9E9E9E',
        stark: '#000',
        anti: '#fff',
        'light-text': '#424242',
        'stark-text': '#000',

        background: '#EDEDED',
        panel: '#ccc',
        'light-panel': '#dbdbdb',
        'panel-border': '#8a949e',
        'stark-panel': '#EDEDED',

        'action--downtime': '#37474F',
        'reserve--organization': '#455A64',
        'action--reaction': '#512DA8',
      },
      dark: {
        ...themeDefaults,
        primary: '#146464',
        active: '#218a8a',
        accent: '#1dc2c2',
        secondary: '#d98f30',
        pilot: '#000',
        error: '#F44336',
        info: '#569BEA',
        success: '#00C853',
        warning: '#FFAB00',

        weapon: '#555555',
        'mech-weapon': '#555555',
        'pilot-weapon': '#555555',

        text: '#dbdbdb',
        subtle: '#b3b9ba',
        stark: '#fff',
        anti: '#000',
        'light-text': '#96a0a0',
        'stark-text': '#fff',

        background: '#263237',
        panel: '#293940',
        'light-panel': '#3c5059',
        'panel-border': '#8a949e',
        'stark-panel': '#131b1f',

        'action--downtime': '#1dc2c2',
        'reserve--organization': '#3ec2c2',
        'action--reaction': '#be51ed',
      },
    },
  },
}

export default theme
