package by.intexsoft.prokopchik.service.impl;

import by.intexsoft.prokopchik.entity.Ingredient;
import by.intexsoft.prokopchik.repository.IngredientRepository;
import by.intexsoft.prokopchik.service.IIngredientService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientService implements IIngredientService {
    private final IngredientRepository ingredientRepository;

    /**
     * Constructor of class
     *
     * @param ingredientRepository ingredient repository
     */
    public IngredientService(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    @Override
    public List<Ingredient> findAll() {
            return ingredientRepository.findAll();
    }

    @Override
    public Ingredient save(Ingredient ingredient) {
        return ingredientRepository.save(ingredient);
    }

    @Override
    public void delete(int id) {
        ingredientRepository.deleteById(id);
    }
}
