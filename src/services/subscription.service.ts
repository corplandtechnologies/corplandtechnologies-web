import { CORPLAND_BACKEND_API } from "../api";

class SubscriptionService {
  static async verifyPayment(reference: string) {
    const response = await CORPLAND_BACKEND_API.get(`/subcriptions/verify/${reference}`);
    return response.data;
  }
}

export default SubscriptionService;
