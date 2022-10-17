import hotels from "../data/hotels.json";

const sleep = (duration = 1000) => new Promise((resolve) => setTimeout(() => resolve(null), duration));
class HotelDataService {
  async getAll() {
    await sleep(500);
    return { data: hotels };
  }
  async getOne(id: number) {
    await sleep(500);
    return { data: hotels.find((hotel) => hotel.id === +id) };
  }
}

export default new HotelDataService();
