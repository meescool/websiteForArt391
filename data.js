const evmProjects = [
   {
    'name': 'Renew School House TextBook',
    'desc': 'Redesigned a student workbook for the museum.',
    'img': [
	['DedermanCover.png', 'Final design for the 1930s Dederman Schoolhouse textbook']],
  },
  {
    'name': 'Dia De Muertos Poster Design',
    'desc': 'My supervisor assigned me with the task to create some poster designs for the Day of the Dead.',
    'img': [['DiaDeMuertos1.png','Design 1'],
	['DiaDeMuertos2.png','Design 2'],
	['DiaDeMuertos3.png','Design 3'],
	['DiaDeMuertos4.png','Design 4'],
	['DiaDeMuertos5.png','Design 5']]
  },
  {
    'name': 'Fall - Winter Schedule Cover',
    'desc': 'Designed the cover for a pamphlete that contained the scheduled activities of the museum during the fall and winter.',
    'img': [['FallWinterSchedule.png', 'Final design for the cover']]
  },
  {
    'name': 'Harvest and History Fest Designs',
    'desc': 'I worked on creating several designs for the Harvest and History Fest. ',
    'img': [['HarvestFestPoster.png', 'Final design for the poster'],
	['harvestDraftsLogo.png','Initial drafts made for the logo.'],
	['harvestFinalLogo.png','Final logo design']]
  },
  {
    'name': 'Haunted Verges Park',
    'desc': 'I worked on creating several designs for Haunted Verges Park. ',
    'img': [
	['HauntedIllustration.jpg', 'Concept art for the poster'],
	['HauntedDraft.jpg','Draft Design'],
	['HauntedPosterExample.jpg','An example poster design'],
	['HauntedFinalPoster.jpg','Final poster design'],
	['HauntedFinalBanner.jpg','Final banner design']]
  },
  {
    'name': 'Johnny Carson Birthday',
    'desc': 'I worked on creating several designs for Haunted Verges Park. ',
    'img': [
	['JCBanner.jpg', 'Concept art for the poster'],
	['JCBannerEx.jpg','Draft Design'],
	['JCPoster.jpg','An example poster design']]
  },
  {
    'name': 'Kids Night In',
    'desc': 'I worked on creating several designs for Haunted Verges Park. ',
    'img': [
	['KidsNightBanner.jpg', 'Concept art for the poster'],
	['KidsNightPoster.jpg','Draft Design']]
  },
  {
    'name': 'News Letter Illustration',
    'desc': 'I worked on creating several designs for Haunted Verges Park. ',
    'img': [
	['NewsLetterIllustration.png', 'Concept art for the poster']]
  },
  {
    'name': 'On the Mic',
    'desc': 'I worked on creating several designs for Haunted Verges Park. ',
    'img': [
	['OnTheMic.png', 'Concept art for the poster'],
	['OnTheMic_1.png','Draft Design'],
	['OnTheMic_2.png','An example poster design'],
	['OnTheMic_3.png','Final poster design'],
	['OnTheMic_4.png','Final banner design']]
  },
  {
    'name': 'Pioneers',
    'desc': 'I worked on creating several designs for Haunted Verges Park. ',
    'img': [
	['PioneerBanner.jpg', 'Concept art for the poster'],
	['PioneerPoster.jpg','Draft Design']]
  },
  {
    'name': 'Saturday',
    'desc': 'I worked on creating several designs for Haunted Verges Park. ',
    'img': [
	['SaturdayBanner.jpg', 'Concept art for the poster'],
	['SaturdaySmall.jpg','Draft Design']]
  },
  {
    'name': 'Story Time',
    'desc': 'I worked on creating several designs for Haunted Verges Park. ',
    'img': [
	['StoryTime.jpg', 'Concept art for the poster'],
	['StoryTimeNervous.jpg','Draft Design'],
	['StoryTimeBanner.jpg','An example poster design'],
	['StoryTimePoster.jpg','Final poster design']]
  },
  {
    'name': 'Time Machine',
    'desc': 'I worked on creating several designs for Haunted Verges Park. ',
    'img': [
	['TimeMachine.png', 'Concept art for the poster']]
  }
  
]

const ellProjects = [
  {
    'id': 'one',
    'name': 'poster 1',
    'desc': 'this is a poster',
    'img': [['dwarf.png','This is a dwark'],['elf.png', 'This is an elf'],['knight.png', 'this is a knight']],
  },
  {
    'id': 'two',
    'name': 'poster 2',
    'desc': 'this is a poster',
    'img': [['wizard.png', 'this is a wizard'],['orc.png', 'this is an orc']],
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
