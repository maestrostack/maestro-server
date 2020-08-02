const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { OAuthStrategy, expressOauth } = require('@feathersjs/authentication-oauth');


class AdfsStrategy extends OAuthStrategy {
  async getProfile(oauth, params) {
    // console.log('oauth is', oauth);
    // console.log('params are', params);

    console.log('\n\n\n ---- OAUTH PAYLOAD ----');
    // console.log(oauth)
    return oauth.id_token.payload;
  }

  async getEntityQuery(profile, params) {
    // console.log('profile is', profile);
    // console.log('params are', params);
    
    // const baseData = await super.getEntityData(profile);

    console.log('\n\n\n---- PROFILE ----');
    console.log(profile.upn);

    // console.log('params are', params);
    return {
      email: profile.upn,
    };
  }

  // async getEntityData(profile) {
  //   const baseData = await super.getEntityData(profile);

  //   console.log(profile)

  //   return {
  //     ...baseData,
  //     // You can also set the display name to profile.name
  //     name: profile.login,
  //     // The GitHub profile image
  //     avatar: profile.avatar_url,
  //     // The user email address (if available)
  //     email: profile.email
  //   };
  // }

  async updateEntity(entity, profile, params) {

    console.log('\n\n ---- ENTITY ----')
    console.log(entity)

    console.log('\n\n ---- ENTITY ----')
    console.log(profile)

    console.log('\n\n ---- ENTITY ----')
    console.log(params)

    return entity;
  } // eslint-disable-line

  async createEntity(profile, params) { } // eslint-disable-line
}

module.exports = app => {
  const authentication = new AuthenticationService(app);

  authentication.register('adfs', new AdfsStrategy());
  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());
  

  app.use('/authentication', authentication);
  app.configure(expressOauth());
};
