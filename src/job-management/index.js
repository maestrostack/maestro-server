







module.exports = async function(app) {

  const writeLog = async log => {
    app.service('syslog').create(log);
  };

  // const workActivities = async activities => {
    
  //   activities.forEach( a => {
  //     console.log(a);
  //     // a.children.forEach( c => {
  //     //   workActivities(c)
  //     // })
  //   })
  // };

  const workActivity = async ( item ) => {

    // console.log('====  ITEM ====');
    // // console.log(item._id);
    // console.log(item.name);
    // console.log(item._id);
    
  


    // GET THE RELATED REQUEST ACTIVITY FOR THIS BLOCK
    const requestActivity = await app.service('request-activities').find({
      query: {
        parent_workflow_block: `${item._id}`,
        parent_request: `${item.parent_request_id}`
      }
    });

    // MAKE SURE THERE IS ACTUALLY AN ACTIVITY FOR THIS BLOCK
    if( requestActivity.total > 0 ) {

      // THERE SHOULD BE ONLY ONE, IF THERE IS MORE THAN 
      // ONE WE HAVE AN ISSUE...
      const activity  = requestActivity.data[0];




      await app.service('request-activities').patch(activity._id, { state: 'complete'} );

      // IF THIS ACTIVITY IS COMPLETE MOVE ON TO THE CHILDREN...
      if( activity.state == 'complete' ) {
        item.children.forEach( c => {
          c.parent_request_id = item.parent_request_id;
          workActivity(c);
        });
      }
      else {

        console.log('====  ITEM + ACTIVITY ====');

        console.log(activity.parent_workflow_block);
        console.log(item.name);
        console.log(item._id);
        console.log(activity._id);
        console.log(activity.state);
      }


    }


  

    // console.log(requestActivity.data);

  };

  const workNewRequest = async request => {

    // LOG IT
    writeLog({
      category: 'info',
      topic: 'request/new',
      message: `Found new request ${request._id} - processing parent workflow activities...`,
      has_parent: true,
      parent_service_path: 'requests',
      parent_id: request._id
    });

    //console.log('REQUEST: ' + request._id);

    
    // FOR ALL CHILDREN OF THE START BLOCK
    // WORK THE ACTIVITY
    // workActivity loops throught the children of the child too!

    request._workflow.start_block.children.forEach( c => {
      c.parent_request_id = request._id;
      workActivity(c);
    });

    
  };

  setInterval( async () => {


    const findNewRequests = await app.service('requests').find({
      query: {
        state: 'new',
        working: false
      }
    });

    const requests = findNewRequests.data;


    // GET WORKFLOW AND BLOCKS FOR THIS REQUEST

    requests.forEach( async r => {
      // await app.service('requests').patch(r._id, { state: 'working', working: true });
      r._workflow = await app.service('workflows').get(r.parent_workflow);

      const start_activity = await app.service('workflow-blocks').find({
        query: {
          parent_workflow: `${r.parent_workflow}`,
          start: true
        }
      });

      r._workflow.start_block = start_activity.data[0];

      // console.log(r);

      // START WORKING THIS REQUEST
      workNewRequest(r);
    });


  }, 3000);

};