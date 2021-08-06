const url = 'https://api.spacexdata.com/v3/capsules';

class CapsulesService {
  static async getAll() {
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      console.log(error);
    }
  };

  static async getWithId(id) {
    try {
      return await (await fetch(`${url}/${id}`)).json();
    } catch (error) {
      console.log(error);
    }
  }
};

export default CapsulesService;
