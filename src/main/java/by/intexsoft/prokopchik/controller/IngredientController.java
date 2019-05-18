package by.intexsoft.prokopchik.controller;

import by.intexsoft.prokopchik.entity.Ingredient;
import by.intexsoft.prokopchik.service.IIngredientService;
import by.intexsoft.prokopchik.service.impl.IngredientService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for work with {@link Ingredient}
 */
@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/ingredients")
public class IngredientController {
    private final IIngredientService ingredientService;

    /**
     * Constructor of class
     * @param ingredientService ingredients service
     */
    public IngredientController(IngredientService ingredientService) {
        this.ingredientService = ingredientService;
    }
    /**
     * Get all ingredients
     */
    @GetMapping
    public List<Ingredient> findAll(){
        log.info("Find all ingredients");
        return ingredientService.findAll();
    }
    /**
     * Add new ingredient and returns saved object
     */
    @PostMapping
    public Ingredient create(@RequestBody Ingredient ingredient) {
        log.info("Created new ingredient with name: {}", ingredient.name);
        return ingredientService.save(ingredient);
    }


    /**
     * Delete {@link Ingredient} by id
     */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") int id) {
        log.info("Delete ingredient with id: {}", id);
        ingredientService.delete(id);
    }
}
