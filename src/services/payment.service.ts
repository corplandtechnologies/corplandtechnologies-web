import { API } from "../api";
import { IInitiatePayment } from "../interfaces/services/payment.interface";

class PaymentService {
  static async initiatePayment(data: IInitiatePayment) {
    const response = await API.post("/payments", data);
    return response.data;
  }

  static async verifyPayment(reference: string) {
    const response = await API.get(`/payments/verify/${reference}`);
    return response.data;
  }
}

export default PaymentService;
