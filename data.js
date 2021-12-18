const evmProjects = [
   {
    'name': 'Renew School House TextBook',
    'desc': 'Redesigned the cover of a student workbook for the museum.',
    'img': [
	['DedermanCover.png', 'Final design for the 1930s Dederman Schoolhouse textbook']],
  },
  {
    'name': 'Dia De Muertos Poster Design',
    'desc': 'My supervisor assigned me with the task to create some poster designs for the Day of the Dead. Since this was an event to happen after the end of my internship, I was tasked with just creating some illustrations to be used in future banners.',
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
    'desc': 'I worked on creating several designs for the Harvest and History Fest. I first designed a poster to promote the event, and then was tasked to create a logo for the event to then be printed on tshirts. ',
    'img': [['HarvestFestPoster.png', 'Final design for the poster'],
	['harvestDraftsLogo.png','Initial drafts made for the logo.'],
	['harvestFinalLogo.png','Final logo design']]
  },
  {
    'name': 'Haunted Verges Park',
    'desc': 'I worked on creating several designs for Haunted Verges Park, a Halloween event at the museum.  ',
    'img': [
	['HauntedIllustration.jpg', 'Concept art for the poster'],
	['HauntedDraft.jpg','Draft Design'],
	['HauntedPosterExample.jpg','An example poster design'],
	['HauntedFinalPoster.jpg','Final poster design'],
	['HauntedFinalBanner.jpg','Final banner design']]
  },
  {
    'name': 'Johnny Carson Birthday',
    'desc': 'The museum has an entire exhibit dedicated to Johnny Carson, because of this the musuem celebrates it\'s every year. I worked on creating several designs for the birthday event.',
    'img': [
	['JCBanner.jpg', 'Finalized version of the banner'],
	['JCBannerEx.jpg','An alternative design for the banner'],
	['JCPoster.jpg','Finalized version of the poster']]
  },
  {
    'name': 'Kids Night In',
    'desc': 'The museum had a special event twice during the summer where they held a movie and crafts night with kids. I was tasked with creating the promotional materials where I my target demographic was children.',
    'img': [
	['KidsNightBanner.jpg', 'Finalized banner design'],
	['KidsNightPoster.jpg','Finalized poster design']]
  },
  {
    'name': 'News Letter Illustration',
    'desc': 'I created a coloring page for the museum\'s newsletter. The illustration was based on the garden behind the museum.',
    'img': [
	['NewsLetterIllustration.png', 'Final illustration']]
  },
  {
    'name': 'On the Mic',
    'desc': 'My supervisor was playing with the idea of holding an open mic event, and asked for me to create some designs for a banner in case they were to actually work on holding the event in the future.',
    'img': [
	['OnTheMic.png', 'First design'],
	['OnTheMic_1.png','Second design'],
	['OnTheMic_2.png','Third design'],
	['OnTheMic_3.png','Fourth design'],
	['OnTheMic_4.png','Fifth design']]
  },
  {
    'name': 'How to Sew like a Pioneer',
    'desc': 'One of my coworkers at the museum was going to showcase their sewing skills at the museum, teach about how pioneers sowed their clothers. I created a poster and banner for their event. ',
    'img': [
	['PioneerBanner.jpg', 'Finalized banner design'],
	['PioneerPoster.jpg','Finalized poster design']]
  },
  {
    'name': 'Saturday Club',
    'desc': 'The museum holds a special event for the family every Saturday and needed a banner to promote the event. I created two, one was a more detailed version and another was a generalized version.',
    'img': [
	['SaturdayBanner.jpg', 'Finalized detailed banner design'],
	['SaturdaySmall.jpg','Finalized general banner design']]
  },
  {
    'name': 'Story Time',
    'desc': 'This was another event held specifically for children, where I created promotional materials with that target audience in mind.',
    'img': [
	['StoryTime.jpg', 'Concept art for the poster'],
	['StoryTimeNervous.jpg','Playing around with the concept art'],
	['StoryTimeBanner.jpg','Finalized banner design'],
	['StoryTimePoster.jpg','Finalized poster design']]
  },
  {
    'name': 'Time Machine',
    'desc': 'One of my coworkers was an educator at the museum and was working on creating a time capsule for her students. They asked if I could create stylized letters that could then be cut out and pasted on their box.  ',
    'img': [
	['TimeMachine.png', 'Design created for my coworker using fun fonts']]
}
]

const ellProjects = [
  {
   'name': 'Salicylates, your child\'s dietary friend or foe?',
   'desc': 'Created an infographic about salicylates.',
   'img': [
 ['Salicylates.jpg', 'Final infographic']],
 },
  {
    'name': 'Are your child\'s brain chemicals misbehaving?',
    'desc': 'Created an infographic about brain chemicals in children.',
    'img': [['ChildBrainChemicalsMisbehaving.jpg', 'Final infographic']],
  }
]

module.exports.evm = {
  titleName: 'Elkhorn Valley Museum',
  location: 'Norfolk, NE',
  length: '3 months',
  paid: 'Yes',
  desc: 'I worked as a graphic design intern for the Elkhorn Valley Museum during the summer of 2018. I was mostly in charge of creating posters and banners for their Facebook for each of their upcoming events. My other tasks included working the front desk, helping run events, manage their database and help with organizing storage.',
  theme: 'night',
  url: 'elkhornvalleymuseum',
  projects: evmProjects
}

module.exports.ell = {
  titleName: 'Eco Learning Legacies',
  location: 'Remote',
  length: '10 hours',
  paid: 'No',
  desc: 'I created two infographics for Eco Learning Legacies over the span of two weeks. Their director sent me the information that needed to be displayed on each infographic, and gave me feedback on my work before handing in the final products.',
  theme: 'night',
  url: 'ecolearninglegacies',
  projects: ellProjects
}
