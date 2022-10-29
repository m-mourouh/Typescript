// void, any, never, unknown

//! void
// void data type  ,  void mean null and undefined
// use void if we don't return something

const saySomething = (): void => {
    console.log("Hello world!");
  };
  
  //! any
  // any turn off Typescript checks
  // it's recommended to not any
  //* `any is not a solution but start of bigger problems`
  // And try to make your app more safe using any
  
  // ! never
  // never describes a function that will never return
  // e.g 1
  
  const throwError = (message: string): never => {
    // this function will never return
    throw new Error(message);
  };
  
  // e.g 2
  
  const keepProcessing = () => {
    // this function will never ends
    while (true) {
      console.log("I always do something and never ends.");
    }
  };
  
  //! unknown    (best alternative of any)
  
  let vAny: any = 10;
  let vUnknown: unknown = 10;
  
  let s1: string = vAny;
  let s2: string = vUnknown as string; // we got an error so we need to convert unknown -> string using type assertion (as)
  
  //! type assertion or type casting (as)  
  
  let pageNum: string = "1";
  let numericPageNum: number = (pageNum as unknown) as number;
  
  console.log(numericPageNum);