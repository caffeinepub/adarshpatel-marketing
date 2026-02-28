import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Enquiry {
    name: string;
    message: string;
    productOfInterest: string;
    phoneNumber: string;
}
export interface backendInterface {
    getAllEnquiries(): Promise<Array<Enquiry>>;
    getEnquiry(index: bigint): Promise<Enquiry>;
    submitEnquiry(name: string, phone: string, product: string, message: string): Promise<void>;
}
