import mongoose, { type Document, Schema } from "mongoose";

export interface IChat extends Document {
  chat: mongoose.Types.ObjectId; // Optional chat name for group chats
  sender: mongoose.Types.ObjectId; // Reference to the User who sent the message
  text: string; // Last message text
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema = new Schema<IChat>({
  chat: { type: Schema.Types.ObjectId, ref: "Chat", required: true },
  sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true, trim: true },
}, { timestamps: true });

MessageSchema.index({ chat: 1, createdAt: 1 }); // Index for efficient retrieval of messages by chat and creation time
// 1 -> Ascending order
//  -1 -> Descending order

export const Message = mongoose.model("Message", MessageSchema);