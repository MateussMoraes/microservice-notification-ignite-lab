import { Notification } from "@application/entities/notification";
import { Injectable } from "@nestjs/common/decorators";
import { NotificationsRepository } from "../repositories/notification-repository";

interface getRecipientNotificationRequest {
  recipientId: string;
}

interface getRecipientNotificationResponse {
  notifications: Notification[]
}

@Injectable()
export class GetRecipientNotifications {

  constructor(
    private notificationsRepository: NotificationsRepository
  ) {}

  async execute(request: getRecipientNotificationRequest): Promise<getRecipientNotificationResponse> {
    const { recipientId } = request

    const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId);

   return {
    notifications,
   };
  }
}