import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@demotungnui/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
