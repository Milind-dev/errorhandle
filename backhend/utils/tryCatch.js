exports.tryCatch = (controller) => async (req, res, next) => {
  try {
    await controller(req, res);
  } catch (error) {
    return next(error);
  }
};

/* repeat tasks 
try {
    const user = getUser();
    if (!user) {
      throw new Error("User not found");
    }
  } catch (error) {
    return next(error)  //send is not key ("", error.message) errorcapture come
  }

  */
