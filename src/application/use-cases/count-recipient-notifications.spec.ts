import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationsResitory } from "@test/repositories/in-memory-notifications-repository"
import { CountRecipientNotifications } from "./count-recipient-notifications"

describe("Count recipient notifications", () => {
  it("should be able to count recipient notification", async () => {
    const notificationRepository = new InMemoryNotificationsResitory()
    const countRecipientNotifications = new CountRecipientNotifications(notificationRepository)

    await notificationRepository.create(makeNotification({ recipientId: "recipient-1" }))

    await notificationRepository.create(makeNotification({ recipientId: "recipient-1" }))

    await notificationRepository.create(makeNotification({ recipientId: "recipient-1" }))

    const { count } = await countRecipientNotifications.execute({
      recipientId: "recipient-1"
    })
    expect(count).toEqual(2);



  })
})