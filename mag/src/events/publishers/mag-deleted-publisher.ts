import { Publisher, MagDeletedEvent, Subjects } from '@apa_malaghe/utility';

export class MagDeletedPublisher extends Publisher<MagDeletedEvent> {
  readonly subject = Subjects.MagDeleted;
}