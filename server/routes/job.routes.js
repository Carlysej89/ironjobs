const jobRouter = require('express').Router();

let allJobs = [
  {
  'id': '478485',
  'company': 'Iron Yard',
  'link': 'http://www.theironyard.com',
  'notes': 'Coding school',
  'createTime': '4/14/17'
  },
  {
  'id': '467365',
  'company': 'General Assembly',
  'link': 'http://www.generalassembly.com',
  'notes': 'Coding school',
  'createTime': '4/15/17'
  },
  {
  'id': '85785',
  'company': 'Coding Dojo',
  'link': 'http://www.codingdojo.com',
  'notes': 'Coding school',
  'createTime': '4/13/17'
  }
];

jobRouter.get('/', function showAllJobs(request, response, next){
  let newJobArray = [];

  allJobs.forEach(function getJobInfo(job){
    console.log(job.id, job.company, job.link);

    newJobArray.push({'id': job.id, 'company':job.company, 'link': job.link});

  });

  response.json(newJobArray);
});

function addAJob(request, response, next){
  console.log('Incoming!!!!', request.body);

  request.body.createTime = Date.now();
  request.body.id = '3904723987' + Math.random();

  allJobs.push(request.body);

  response.json({message: 'Job added!', theJobIAdded: request.body});
}
jobRouter.post('/', addAJob);

module.exports = jobRouter;
