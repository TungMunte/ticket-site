import { Subjects, Publisher, OrderCancelledEvent } from "@demotungnui/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
