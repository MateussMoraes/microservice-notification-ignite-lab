import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationsResitory } from "@test/repositories/in-memory-notifications-repository"
import { GetRecipientNotifications } from "./get-recipient-notifications"

describe("Get recipients notifications", () => {
  it("should be able to get recipient notifications", async () => {
    const notificationRepository = new InMemoryNotificationsResitory()
    const getRecipientNotifications = new GetRecipientNotifications(notificationRepository)

    await notificationRepository.create(makeNotification({ recipientId: "recipient-1" }))

    await notificationRepository.create(makeNotification({ recipientId: "recipient-1" }))

    await notificationRepository.create(makeNotification({ recipientId: "recipient-1" }))

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: "recipient-1"
    })
    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(expect.arrayContaining([
      expect.objectContaining({ recipientId: "recipient-1 "}),
      expect.objectContaining({ recipientId: "recipient-1 "})
    ]))



  })
})