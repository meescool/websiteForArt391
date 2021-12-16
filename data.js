const evmProjects = [
  {
    'name': '',
    'desc': '',
    'img': [''],
  }
]

const ellProjects = [
  {
    'id': 'one',
    'name': 'poster 1',
    'desc': 'this is a poster',
    'img': ['dwarf.png','elf.png','knight.png'],
  },
  {
    'id': 'two',
    'name': 'poster 2',
    'desc': 'this is a poster',
    'img': ['wizard.png','orc.png'],
  }
]

module.exports.evm = {
  titleName: 'Elkhorn Valley Museum',
  location: 'Norfolk, NE',
  length: '3 months',
  paid: 'Yes',
  desc: 'This is a descrption',
  theme: 'night',
  url: 'elkhornvalleymuseum',
  projects: evmProjects
}

module.exports.ell = {
  titleName: 'Eco Learning Legacies',
  location: 'Remote',
  length: '10 hours',
  paid: 'No',
  desc: 'This is a descrption',
  theme: 'night',
  url: 'ecolearninglegacies',
  projects: ellProjects
}
