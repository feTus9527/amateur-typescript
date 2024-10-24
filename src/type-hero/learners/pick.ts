// https://typehero.dev/challenge/pick

/// Input START
type MyPick<T extends Record<PropertyKey, any>, K extends keyof T> = {
  [k in K]: T[k];
};
/// Input END

namespace PickTest {
  interface Pokemon {
    name: string;
    type: string;
    hitPoints: number;
    stage: string;
    evolutionStage: number;
    attacks: string[];
    weakness: string;
    resilience: string;
  }

  const pickYourPokemon = (pokemon: MyPick<Pokemon, "name" | "type">) => {
    type MyParameters<T extends (...args: PropertyKey[]) => any> = any;
    const { type, name } = pokemon;
    return `You picked the ${type}-type Pokemon ${name}!`;
  };

  const pikachu = {
    name: "Pikachu",
    type: "Electric",
  };

  console.log(pickYourPokemon(pikachu));
  // => `You picked the Electric-type Pokemon Pikachu!`

  /** Selecting an invalid property should be an error. */
  const pokemonAttacks = (
    // @ts-expect-error attacks and age are not the interface Pokemon property neither
    pokemon: MyPick<Pokemon, "attacks" | "age">,
  ) => {
    return "Oops! WE ";
  };

  /** It's also totally fine to select a single property */
  const recallPokemon = (pokemon: MyPick<Pokemon, "name">) => {
    return `You recalled ${pokemon.name}!`;
  };
}
