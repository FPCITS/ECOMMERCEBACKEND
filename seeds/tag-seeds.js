const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'country music',
  },
  {
    tag_name: 'lofi music',
  },
  {
    tag_name: 'rap music',
  },
  {
    tag_name: 'calypso music',
  },
  {
    tag_name: 'afro-beat music',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'pink',
  },
  {
    tag_name: 'gray',
  },
  {
    tag_name: 'blue',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;