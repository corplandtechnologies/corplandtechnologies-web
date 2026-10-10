import { CORPLAND_ID_API } from "../api";
import { IInquiry } from "../interfaces/site.interface";

class InquiryService {
  static async create(payload: IInquiry) {
    const response = await CORPLAND_ID_API.post("/inquiries", payload);
    return response.data;
  }
}

export default InquiryService;
