// @ts-check
const { heroes: container } = require('./config').containers;

async function getHeroes(req, res) {
  try {
    const { result: heroes } = await container.items.readAll().toArray();
    res.status(200).json(heroes);
  } catch (error) {
    res.status(500).send(error);
  }
}

// async function getHeroById(context, id) {
//   let { req, res } = context;
//   try {
//     //TODO: refactor to get 1
//     const { result: heroes } = await container.items.readAll().toArray();
//     res.status(200).json(heroes);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// }

async function postHero(req, res) {
  const hero = {
    name: req.body.name,
    description: req.body.description
  };
  hero.id = `Hero${hero.name}`;

  try {
    const { body } = await container.items.create(hero);
    res.status(201).json(body);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function putHero(req, res) {
  const hero = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description
  };

  try {
    const { body } = await container.items.upsert(hero);
    res.status(200).json(body);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteHero(req, res) {
  const { id } = req.params;

  try {
    const { body } = await container.item(id).delete();
    res.status(200).json(body);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getHeroes,
  postHero,
  putHero,
  deleteHero
};
