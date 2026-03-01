// No changes needed, just redeploy to restart the canister.
import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type Enquiry = {
    name : Text;
    phoneNumber : Text;
    productOfInterest : Text;
    message : Text;
  };

  let enquiries = List.empty<Enquiry>();

  public shared ({ caller }) func submitEnquiry(name : Text, phone : Text, product : Text, message : Text) : async () {
    let enquiry : Enquiry = {
      name;
      phoneNumber = phone;
      productOfInterest = product;
      message;
    };
    enquiries.add(enquiry);
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.toArray();
  };

  public query ({ caller }) func getEnquiry(index : Nat) : async Enquiry {
    if (index >= enquiries.size()) { Runtime.trap("Enquiry not found") };
    let array = enquiries.toArray();
    array[index];
  };
};
