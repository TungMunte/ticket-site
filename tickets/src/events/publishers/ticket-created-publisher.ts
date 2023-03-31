import { Publisher, Subjects, TicketCreatedEvent } from "@demotungnui/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
