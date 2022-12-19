import { Injectable } from "@nestjs/common/decorators";
import { Content } from "@application/entities/content";
import { NotificationsRepository } from "../repositories/notification-repository";
import { Notification } from "@application/entities/notification"


interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}
@Injectable()
export class SendNotification {

  constructor(
    private notificationsRepository: NotificationsRepository
  ) {}

  async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category
    })

    // Persistir essa notificação no banco
    await this.notificationsRepository.create(notification)

    return {
      notification
    }

  }
}