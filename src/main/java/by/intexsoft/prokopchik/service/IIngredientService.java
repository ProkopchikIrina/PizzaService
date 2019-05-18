package by.intexsoft.prokopchik.service;
import by.intexsoft.prokopchik.entity.Ingredient;

import java.util.List;

/**
 * Service for working with {@link Ingredient}
 */
public interface IIngredientService {

    /**
     * Find all {@link Ingredient}s
     * @return list of ingredients
     */
    List<Ingredient> findAll();


    /**
     * Save {@link Ingredient} and return saved object
     *
     * @param ingredient saved ingredient
     * @return saved ingredient
     */
    Ingredient save(Ingredient ingredient);

    /**
     * Delete {@link Ingredient} by id
     *
     * @param id deleted user id
     */
    void delete(int id);
}
