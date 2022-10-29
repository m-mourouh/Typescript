// Union : can be of diff types
let pageNumber: string | number = "1";
pageNumber = 1;
console.log(pageNumber);
// if we want to fetch userData , the user object is null at the beginning so we need to use
//  union in this case
let userData: UserInterface | null = null;

// Type Alias : creates your own custom type
// Type alias & interfaces are written in capital letters

type PopularTag = string;

const popularTags: PopularTag[] = ["tea", "coffee"];

// Combine union and type alias

type MaybePopular = PopularTag | null;

const coffeeMilkTags: MaybePopular = "coffee milk";