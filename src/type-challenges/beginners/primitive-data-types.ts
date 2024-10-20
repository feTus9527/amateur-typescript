// https://typehero.dev/challenge/primitive-data-types

/// Input START
const playSong = (artistName: string, year: number) => {
  return `${artistName} was released in the year ${year}`;
};

const artistName: string = "Frank Zappa";

const age: number = 52;

interface Musician {
  artistName: string;

  // add the rest
  age: number;
  deceased: boolean;
}

const musicianInfo = ({ artistName, age, deceased }: Musician) => {
  return `${artistName}, age ${age}${deceased ? " (deceased)" : ""}`;
};

musicianInfo({
  artistName,
  age,
  deceased: true,
});
/// Input End

namespace PrimitiveDataTypesTest {
  playSong("Demiurge", 2012);
  // @ts-expect-error this is incorrect because the first argument should not be a number
  playSong(8675309, 1982);

  // @ts-expect-error this is incorrect because the second argument should not be a string
  playSong("Blood and Thunder", "2006");

  type test_playSong_Parameters = Expect<
    Equal<Parameters<typeof playSong>, [string, number]>
  >;

  type test_playSong_ReturnType = Expect<
    Equal<ReturnType<typeof playSong>, string>
  >;

  type test_age = Expect<Extends<number, typeof age>>;
  type test_artistName = Expect<Extends<string, typeof artistName>>;

  type test_Musician_artistName = Expect<Equal<Musician["artistName"], string>>;

  type test_Musician_age = Expect<Equal<Musician["age"], number>>;

  type test_Musician_deceased = Expect<Equal<Musician["deceased"], boolean>>;

  type test_musicianInfo_Parameters = Expect<
    Equal<Parameters<typeof musicianInfo>[0], Musician>
  >;

  type test_musicianInfo_ReturnType = Expect<
    Equal<ReturnType<typeof musicianInfo>, string>
  >;
}
