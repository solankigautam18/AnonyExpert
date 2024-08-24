import { Message } from "@/model/User";

export interface ApiResponse{
    success: boolean;
    message: string;
    isAcceptingMessages?: boolean; // ? makes it optional
    messages?: Array<Message>
}