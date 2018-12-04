const fetch = require('node-fetch');

module.exports = class R6 {
  /**
   * @typedef {Object} UserPreferences
   * @memberof R6
   */
  constructor(preferences = {}) {
    /**
     * User preferences
     * @type {object}
     */
    this.preferences = preferences;
    
  }

  stats(username, platform, operators) {
    return new Promise((resolve, reject) => {
      const platforms = ['uplay', 'xone', 'ps4'];
      if (!platforms.includes(platform)) return reject(new TypeError('Platform must be one of [uplay | xone | ps4]'));
      
      if (!username || typeof username !== 'string') return reject(new TypeError('Invalid username. The username must be a string.'));
      
      operator = operators || false;
      
      if (typeof operators !== boolean) return reject(new TypeError('The operators value must be a boolean'));
      if (typeof platform !== 'string' || !platform) return reject(new TypeError('Invalid platform. Platform must be one of [uplay | xone | ps4]'));

      let endpoint = `https://api.r6stats.com/api/v2/players/${username.toString()}/?platform=${platform}`;
      if (operators) {
        endpoint = `https://api.r6stats.com/api/v1/players/${username}/operators/?platform=${platform}`;
      }

      fetch(endpoint, (error, body) => {
        if (!error) {
          return resolve(JSON.parse(body));
        } else {
          return reject(JSON.parse(body));
        }
      });
    });
  }

  profile(username, platform) {
    return new Promise((resolve, reject) => {
      const platforms = ['uplay', 'xone', 'ps4'];
      if (!platforms.includes(platform)) return reject(new TypeError('Platform must be one of [uplay | xone | ps4]'));

      if (!username || typeof username !== 'string') return reject(new TypeError('Invalid username. The username must be a string.'));

      if (typeof platforms !== 'string' || !platform) return reject(new TypeError('Invalid platform. Platform must be one of [uplay | xone | ps4]'));

      const endpoint = `https://api.r6stats.com/api/v1/users/${username}/profile/?platform=${platform}`;

      fetch(endpoint, (error, body) => {
        if (!error) {
          return resolve(JSON.parse(body));
        } else {
          return reject(JSON.parse(body));
        }
      });
    });
  }
};