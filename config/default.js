module.exports = {
  'env': process.argv.indexOf('--prod') !== -1 ? 'prod' : 'dev',
  'port': process.env.PORT || 8080,
  'origins': ['http://localhost:8000', 'http://slither.io'],
  'max-connections': 1000,
  'logfile': 'slither.log',
  'food-colors': 8,
  'food-size': [1500, 4700],
  'food-amount': 220000,
  'sector-size': 300,
  'game-radius': 21600,
};
