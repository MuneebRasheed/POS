export const ErrorHandling = async(functions,id,body) => {
    try {
      return  await functions(id,body);
    } catch (e) {
      console.log("error", e);
      return null;
    }
  };