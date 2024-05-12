import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact, mdiAlphaBBoxOutline, mdiAlphaMBoxOutline,
  mdiSale
} from '@mdi/js'

export default [
  {
    to: '/dashboard',
    icon: mdiMonitor,
    label: 'Thống kê'
  },
  {
    to: '/tables',
    label: 'Sản phẩm',
    icon: mdiTable
  },
  {
    to: '/forms',
    label: 'Ưu đãi',
    icon: mdiSale
  },
  {
    to: '/ui',
    label: 'UI',
    icon: mdiTelevisionGuide
  },
  {
    label: "Dữ liệu chính",
    icon: mdiViewList,
    menu: [
      {
        label: "Thương hiệu",
        to: "/branch",
        icon: mdiAlphaBBoxOutline
      },
      {
        label: "Mùi hương",
        to: "/fragrant",
        icon: mdiAlphaMBoxOutline
      }
    ]
  }
]
