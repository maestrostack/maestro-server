/* eslint-disable require-atomic-updates */
module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    // Get `app`, `method`, `params` and `result` from the hook context
    const { app, method, result } = context;
    // console.log(result);
    // Function that adds the user to a single message object
    const addChildren = async record => {
      // Get the user based on their id, pass the `params` along so
      // that we get a safe version of the user data

      // console.log(record._id);
      const search = await app.service('workflow-blocks')
        .find({
          query: {
            parent_activity: `${record._id}`
          }
        });

      const children = search.data;

      //console.log(children)

      // Merge the message content to include the `user` object
      return {
        ...record,
        children
      };
    };

    // In a find method we need to process the entire page
    if (method === 'find') {
      // Map all data to include the `user` information
      context.result.data = await Promise.all(result.data.map(addChildren));
    } else {
      // Otherwise just update the single result
      context.result = await addChildren(result);
    }

    return context;
  };
};