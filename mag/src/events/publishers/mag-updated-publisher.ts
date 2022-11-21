import { Publisher, MagUpdatedEvent, Subjects } from '@apa_malaghe/utility';

export class MagUpdatedPublisher extends Publisher<MagUpdatedEvent> {
  readonly subject = Subjects.MagUpdated;
}