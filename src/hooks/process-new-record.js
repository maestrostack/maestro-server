// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {

    const { data, params } = context;
    const { user } = params;

    const rightNow = new Date();
    // console.log(context.path);
    
    if( context.path != 'users') {
      if( context.path != 'syslog' ) {
        if( context.path != 'authentication') {
          data.created_by = user._id;
          data.updated_by = user._id;
        }
      }
    }

    data.created_at = rightNow;
    data.updated_at = rightNow;


    return context;
  };
};
