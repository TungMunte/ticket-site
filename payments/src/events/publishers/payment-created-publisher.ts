import { Subjects, Publisher, PaymentCreatedEvent } from "@demotungnui/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
