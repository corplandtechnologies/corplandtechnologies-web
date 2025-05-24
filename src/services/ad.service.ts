import { CORPLAND_BACKEND_API } from "../api";

class AdService {
  static async verifyPayment(reference: string) {
    const response = await CORPLAND_BACKEND_API.get(
      `/ads/verify-payment/${reference}`
    );
    return response.data;
  }
}

export default AdService;
