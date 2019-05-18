package by.intexsoft.prokopchik.repository;

import by.intexsoft.prokopchik.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for {@link Ingredient} entity
 */
public interface IngredientRepository extends JpaRepository<Ingredient, Integer> {
}
