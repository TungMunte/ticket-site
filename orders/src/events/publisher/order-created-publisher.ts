import { Publisher, OrderCreatedEvent, Subjects } from "@demotungnui/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
