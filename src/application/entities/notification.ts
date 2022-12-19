import { Replace } from "src/helpers/replace";
import { Content } from "./content";
import { randomUUID } from "node:crypto"

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props = {} as NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>, 
    id?: string,
    ) {
    this._id = id ?? randomUUID()
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date()
    };
  }

  public get id() {
    return this._id
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set recipientId(content: string) {
    this.props.recipientId = content;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public cancel() {
    this.props.canceledAt = new Date(); 
  }
  
  public set createdAt(createdAt: Date) {
      this.props.createdAt = createdAt
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

 

  
}

