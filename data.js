const evmProjects = [
  {
    'name': '',
    'desc': '',
    'img': [''],
  }
]

const ellProjects = [
  {
    'name': 'poster 1',
    'desc': 'this is a poster',
    'img': ['first image','second image'],
  },
  {
    'name': 'poster 2',
    'desc': 'this is a poster',
    'img': ['first image','second image'],
  }
]

module.exports.evm = {
  titleName: 'Elkhorn Valley Museum',
  location: 'Norfolk, NE',
  length: '3 months',
  paid: 'Yes',
  projects: evmProjects
}

module.exports.ell = {
  titleName: 'Eco Learning Legacies',
  location: 'Remote',
  length: '10 hours',
  paid: 'No',
  desc: 'This is a descrption',
  projects: ellProjects
}
