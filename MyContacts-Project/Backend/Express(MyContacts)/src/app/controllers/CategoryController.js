const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(req, res) {
    const categories = await CategoriesRepository.findAll();

    res.json(categories);
  }

  async show(req, res) {
    const { id } = req.params;

    const contact = await CategoriesRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'Not Found' });
    }

    res.json(contact);
  }

  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    res.json(category);
  }

  async delete(req, res) {
    const { id } = req.params;

    await CategoriesRepository.delete(id);

    res.sendStatus(204);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const categoryById = await CategoriesRepository.findById(id);

    if (!categoryById) {
      return res.status(404).json({ error: 'Not Found' });
    }

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.update(id, { name });

    res.json(category);
  }
}

module.exports = new CategoryController();
