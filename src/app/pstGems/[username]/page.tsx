"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const Page = () => {
  const { data: session } = useSession();
  const [message, setMessage] = useState("");

  const user = session?.user;

  const handleSubmit = async () => {
    const username = window.location.pathname.split("/")[2];
    try {
      const response = await axios.post("/api/send-messages", {
        content: message,
        username,
      });
      if (response.data.success) {
        toast({
          title: "Message sent",
          description: "Message sent successfully.",
        });
        setMessage(""); // Reset message after sending
      } else {
        toast({
          title: "Error",
          description: response.data.message || "Failed to send message.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while sending the message.",
      });
    }
  };

  return (
    <div className="container flex flex-col my-8 mx-4 md:mx-8 lg:mx-auto p-6 bg-white rounded w-full max-w-6xl">
      <div className="flex flex-col mt-8 mb-8">
        <h1 className="text-5xl text-center font-bold mb-2">
          Public Profile Link
        </h1>
        <p className="text-md font-semibold mb-2 mt-5">Send anonymous message to @{user?.username || user?.email}</p>
        <Textarea
          placeholder="Write your anonymous message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button className="mt-4" variant="default" onClick={handleSubmit}>
          Send
        </Button>
      </div>

      <div className="container flex text-center justify-center items-center flex-col">
        <Button className="">Suggest Messages</Button>
        <p className="mt-4 mb-2">Click on any message below to select it.</p>

        <Separator className="mt-5 mb-7" />
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Page;
