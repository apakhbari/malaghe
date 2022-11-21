import { Publisher, MagAssignedEvent, Subjects } from '@apa_malaghe/utility';

export class MagAssignedPublisher extends Publisher<MagAssignedEvent> {
  readonly subject = Subjects.MagAssigned;
}